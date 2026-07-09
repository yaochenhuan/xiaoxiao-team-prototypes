import type { PRD, PRDSection, PRDBlock } from '@/data/types'

function blockToMarkdown(block: PRDBlock): string {
  switch (block.type) {
    case 'paragraph':
      return block.text
    case 'heading':
      return `${'#'.repeat(block.level)} ${block.text}`
    case 'list':
      return block.items
        .map((item, i) => `${block.ordered ? `${i + 1}.` : '-'} ${item}`)
        .join('\n')
    case 'table':
      return [
        `| ${block.headers.join(' | ')} |`,
        `| ${block.headers.map(() => '---').join(' | ')} |`,
        ...block.rows.map(row => `| ${row.join(' | ')} |`),
      ].join('\n')
    case 'code':
      return `\`\`\`${block.language || ''}\n${block.text}\n\`\`\``
    case 'callout': {
      const title = block.title ? `**${block.title}：**` : ''
      return `> ${title}${block.text}`
    }
    case 'divider':
      return '---'
    default:
      return ''
  }
}

function sectionToMarkdown(section: PRDSection, index: number, prefix = ''): string {
  const parts: string[] = []
  parts.push(`${prefix}## ${index}. ${section.title}`)
  if (section.content) {
    parts.push(section.content)
  }
  if (section.blocks) {
    parts.push(...section.blocks.map(blockToMarkdown))
  }
  if (section.children && section.children.length > 0) {
    section.children.forEach((child, ci) => {
      parts.push(`${prefix}### ${index}.${ci + 1} ${child.title}`)
      if (child.content) {
        parts.push(child.content)
      }
      if (child.blocks) {
        parts.push(...child.blocks.map(blockToMarkdown))
      }
    })
  }
  return parts.join('\n\n')
}

export function prdToMarkdown(prd: PRD): string {
  const lines: string[] = []
  lines.push(`# ${prd.meta.productName} - ${prd.meta.featureName} PRD`)
  lines.push('')
  lines.push('| 字段 | 内容 |')
  lines.push('| --- | --- |')
  lines.push(`| 产品名称 | ${prd.meta.productName} |`)
  lines.push(`| 功能名称 | ${prd.meta.featureName} |`)
  lines.push(`| 所属模块 | ${prd.meta.module} |`)
  lines.push(`| 页面编号 | ${prd.meta.pageCode} |`)
  lines.push(`| 当前版本 | ${prd.meta.version} |`)
  lines.push(`| 文档状态 | ${prd.meta.status} |`)
  lines.push(`| 更新日期 | ${prd.meta.updatedAt} |`)
  lines.push(`| 文档作者 | ${prd.meta.author || '-'} |`)
  lines.push(`| 涉及角色 | ${(prd.meta.roles || []).join('、') || '-'} |`)
  lines.push('')

  prd.sections.forEach((section, idx) => {
    lines.push(sectionToMarkdown(section, idx + 1))
    lines.push('')
  })

  if (prd.meta.revisionHistory && prd.meta.revisionHistory.length > 0) {
    lines.push('## 修订历史')
    lines.push('')
    lines.push('| 版本 | 日期 | 作者 | 变更说明 |')
    lines.push('| --- | --- | --- | --- |')
    prd.meta.revisionHistory.forEach(r => {
      lines.push(`| ${r.version} | ${r.date} | ${r.author} | ${r.note} |`)
    })
    lines.push('')
  }

  return lines.join('\n')
}

function parseBlocks(text: string): PRDBlock[] {
  const blocks: PRDBlock[] = []
  const lines = text.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') {
      i++
      continue
    }

    // divider
    if (/^\s*---\s*$/.test(line)) {
      blocks.push({ type: 'divider' })
      i++
      continue
    }

    // heading
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/)
    if (headingMatch) {
      blocks.push({ type: 'heading', level: headingMatch[1].length as 2 | 3, text: headingMatch[2].trim() })
      i++
      continue
    }

    // code block
    const codeStartMatch = line.match(/^```(\w*)\s*$/)
    if (codeStartMatch) {
      const lang = codeStartMatch[1] || undefined
      const start = i + 1
      let end = start
      while (end < lines.length && !/^```\s*$/.test(lines[end])) {
        end++
      }
      blocks.push({ type: 'code', language: lang, text: lines.slice(start, end).join('\n') })
      i = end + 1
      continue
    }

    // callout
    const calloutMatch = line.match(/^>\s*(.*)$/)
    if (calloutMatch) {
      blocks.push({ type: 'callout', tone: 'info', text: calloutMatch[1].trim() })
      i++
      continue
    }

    // table
    if (line.includes('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i])
        i++
      }
      if (tableLines.length >= 2) {
        const cells = tableLines.map(l =>
          l
            .split('|')
            .map(c => c.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1),
        )
        const headers = cells[0]
        const rows = cells.slice(2)
        if (headers.length > 0) {
          blocks.push({ type: 'table', headers, rows })
          continue
        }
      }
    }

    // list
    const listMatch = line.match(/^(\s*)(?:-\*|\d+\.)\s+(.+)$/)
    if (listMatch) {
      const ordered = /^\s*\d+\./.test(line)
      const items: string[] = []
      while (i < lines.length && /^\s*(?:-\*|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*(?:-\*|\d+\.)\s+/, ''))
        i++
      }
      blocks.push({ type: 'list', ordered, items })
      continue
    }

    // paragraph (collect consecutive lines)
    const paraLines: string[] = []
    while (i < lines.length && lines[i].trim() !== '' && !/^[#>|\-]\s/.test(lines[i]) && !lines[i].includes('|')) {
      paraLines.push(lines[i])
      i++
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paraLines.join(' ') })
    }
  }

  return blocks
}

export function markdownToPrdSections(markdown: string): PRDSection[] {
  const lines = markdown.split('\n')
  const sections: PRDSection[] = []
  let currentSection: PRDSection | null = null
  let sectionBuffer: string[] = []

  const flushSection = () => {
    if (!currentSection) return
    const text = sectionBuffer.join('\n').trim()
    if (text) {
      currentSection.blocks = parseBlocks(text)
    }
    sections.push(currentSection)
    currentSection = null
    sectionBuffer = []
  }

  for (const line of lines) {
    const sectionMatch = line.match(/^##\s+(\d+)\.\s+(.+)$/)
    if (sectionMatch) {
      flushSection()
      currentSection = { id: `section-${sectionMatch[1]}`, title: sectionMatch[2].trim() }
      continue
    }
    if (currentSection) {
      sectionBuffer.push(line)
    }
  }
  flushSection()

  return sections
}
