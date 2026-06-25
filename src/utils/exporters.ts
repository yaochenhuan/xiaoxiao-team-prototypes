import { saveAs } from 'file-saver'
import html2pdf from 'html2pdf.js'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  ShadingType,
  BorderStyle,
  convertInchesToTwip,
} from 'docx'
import type { Feature, PRDBlock, PRDSection, PRD } from '@/data/types'

/** 文件名（去除特殊字符） */
function sanitizeFileName(name: string): string {
  return name.replace(/[\\/:*?"<>|\s]+/g, '_')
}

/** 触发浏览器下载 blob */
function downloadBlob(blob: Blob, fileName: string) {
  saveAs(blob, fileName)
}

/* ================== PDF 导出 ================== */

interface ExportPdfOptions {
  /** 导出元素（DOM 节点） */
  element: HTMLElement
  /** 文档名（产品-功能） */
  fileName: string
  /** 文档标题（用于 PDF 封面/页眉） */
  title: string
}

/** 把 PRD 区域导出为 PDF */
export async function exportPRDToPDF({ element, fileName, title }: ExportPdfOptions) {
  const opt = {
    margin: [10, 10, 10, 10] as [number, number, number, number],
    filename: `${sanitizeFileName(fileName)}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
    },
    jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  }

  // html2pdf 类型定义较松，直接用 any 调用
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const worker = (html2pdf as any)()
  await worker
    .set(opt)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: { setProperties: (p: { title: string; creator: string }) => void }) => {
      pdf.setProperties({ title, creator: '校校产品团队' })
    })
    .save()
}

/* ================== Word 导出 ================== */

const TABLE_HEADER_FILL = 'F1F5F9'

/** 把 PRD block 转换为 docx 段落数组 */
function blockToDocxChildren(block: PRDBlock): (Paragraph | Table)[] {
  switch (block.type) {
    case 'heading': {
      const isH2 = block.level === 2
      return [
        new Paragraph({
          children: [new TextRun({ text: block.text, bold: true, size: isH2 ? 26 : 22 })],
          heading: isH2 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3,
          spacing: { before: 240, after: 120 },
        }),
      ]
    }
    case 'paragraph':
      return [
        new Paragraph({
          children: [new TextRun({ text: stripHtml(block.text), size: 21 })],
          spacing: { after: 120 },
        }),
      ]
    case 'list':
      return block.items.map(item =>
        new Paragraph({
          children: [new TextRun({ text: stripHtml(item), size: 21 })],
          bullet: { level: 0 },
          spacing: { after: 60 },
        }),
      )
    case 'divider':
      return [
        new Paragraph({
          children: [new TextRun({ text: '────────────────', color: 'D0D5DD' })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 120, after: 120 },
        }),
      ]
    case 'code':
      return [
        new Paragraph({
          children: [new TextRun({ text: block.text, font: 'Consolas', size: 20 })],
          shading: { type: ShadingType.SOLID, color: '0F172A', fill: '0F172A' },
          spacing: { before: 120, after: 120 },
        }),
      ]
    case 'callout': {
      const colorMap: Record<string, string> = {
        info: '1E40AF',
        warn: 'B45309',
        success: '047857',
        danger: 'B91C1C',
      }
      const fillMap: Record<string, string> = {
        info: 'DBEAFE',
        warn: 'FEF3C7',
        success: 'D1FAE5',
        danger: 'FEE2E2',
      }
      const tone = block.tone || 'info'
      const titleText = block.title ? `${block.title}：` : ''
      return [
        new Paragraph({
          children: [
            new TextRun({
              text: `${titleText}${stripHtml(block.text)}`,
              size: 20,
              color: colorMap[tone],
            }),
          ],
          shading: { type: ShadingType.SOLID, color: fillMap[tone], fill: fillMap[tone] },
          spacing: { before: 120, after: 120 },
        }),
      ]
    }
    case 'table':
      return [buildDocxTable(block.headers, block.rows)]
    default:
      return []
  }
}

function buildDocxTable(headers: string[], rows: string[][]): Table {
  const headerRow = new TableRow({
    children: headers.map(
      h =>
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: stripHtml(h), bold: true, size: 20 })] })],
          shading: { type: ShadingType.SOLID, color: TABLE_HEADER_FILL, fill: TABLE_HEADER_FILL },
        }),
    ),
  })
  const dataRows = rows.map(
    row =>
      new TableRow({
        children: row.map(
          cell =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: stripHtml(cell), size: 20 })] })],
            }),
        ),
      }),
  )
  return new Table({
    rows: [headerRow, ...dataRows],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
      left: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
      right: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: 'F1F5F9' },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: 'F1F5F9' },
    },
  })
}

/** 简易 HTML 反序列化：去除所有标签，合并空白 */
function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function sectionToDocxChildren(section: PRDSection, index: number): (Paragraph | Table)[] {
  const result: (Paragraph | Table)[] = []
  // 章节标题
  result.push(
    new Paragraph({
      children: [new TextRun({ text: `${String(index).padStart(2, '0')}. ${section.title}`, bold: true, size: 28 })],
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 360, after: 180 },
    }),
  )
  if (section.content) {
    result.push(
      new Paragraph({
        children: [new TextRun({ text: section.content, size: 21 })],
        spacing: { after: 120 },
      }),
    )
  }
  if (section.blocks) {
    for (const block of section.blocks) {
      result.push(...blockToDocxChildren(block))
    }
  }
  if (section.children && section.children.length > 0) {
    section.children.forEach((child, ci) => {
      result.push(
        new Paragraph({
          children: [new TextRun({ text: `${ci + 1}. ${child.title}`, bold: true, size: 24 })],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 240, after: 120 },
        }),
      )
      if (child.blocks) {
        for (const block of child.blocks) {
          result.push(...blockToDocxChildren(block))
        }
      } else if (child.content) {
        result.push(
          new Paragraph({
            children: [new TextRun({ text: child.content, size: 21 })],
            spacing: { after: 120 },
          }),
        )
      }
    })
  }
  return result
}

interface ExportWordOptions {
  feature: Feature
}

/** 把 PRD 导出为 Word 文档 */
export async function exportPRDToWord({ feature }: ExportWordOptions) {
  const { meta } = feature.prd
  const children: (Paragraph | Table)[] = []

  // 封面信息
  children.push(
    new Paragraph({
      children: [new TextRun({ text: meta.productName, bold: true, size: 36, color: '4F46E5' })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: `${meta.featureName}  PRD`, bold: true, size: 44 })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 240 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `${meta.module} · ${meta.pageCode} · ${meta.version}`, size: 22, color: '64748B' }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 480 },
    }),
  )

  // 元信息表
  const metaPairs: [string, string][] = [
    ['产品', meta.productName],
    ['功能', meta.featureName],
    ['模块', meta.module],
    ['页面编号', meta.pageCode],
    ['版本', meta.version],
    ['状态', meta.status],
    ['更新日期', meta.updatedAt],
    ['作者', meta.author || '-'],
    ['涉及角色', (meta.roles || []).join('、') || '-'],
  ]
  children.push(
    buildDocxTable(['字段', '内容'], metaPairs.map(([k, v]) => [k, v])),
    new Paragraph({ children: [new TextRun({ text: '' })], spacing: { after: 240 } }),
  )

  // 章节
  feature.prd.sections.forEach((section, idx) => {
    children.push(...sectionToDocxChildren(section, idx + 1))
  })

  // 修订历史
  if (meta.revisionHistory && meta.revisionHistory.length > 0) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: '修订历史', bold: true, size: 28 })],
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 480, after: 180 },
      }),
      buildDocxTable(
        ['版本', '日期', '作者', '变更说明'],
        meta.revisionHistory.map(r => [r.version, r.date, r.author, r.note]),
      ),
    )
  }

  const doc = new Document({
    creator: '校校产品团队',
    title: `${meta.productName} - ${meta.featureName} PRD`,
    description: `${meta.featureName} 产品需求文档`,
    styles: {
      default: {
        document: { run: { font: 'Microsoft YaHei', size: 21 } },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.8),
              right: convertInchesToTwip(0.8),
              bottom: convertInchesToTwip(0.8),
              left: convertInchesToTwip(0.8),
            },
          },
        },
        children,
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  const fileName = `${sanitizeFileName(meta.productName)}-${sanitizeFileName(meta.featureName)}-PRD.docx`
  downloadBlob(blob, fileName)
}

/* ================== 共用类型导出 ================== */
export type { PRD }
