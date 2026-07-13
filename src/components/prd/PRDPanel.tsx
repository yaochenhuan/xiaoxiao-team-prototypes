import { useEffect, useMemo, useRef, useState } from 'react'
import PRDMetaCard from './PRDMetaCard'
import PRDSection from './PRDSection'
import PRDMarkdownEditor from './PRDMarkdownEditor'
import { prdToMarkdown, markdownToPrdSections } from '@/utils/prdToMarkdown'
import { renderMarkdownToHtml } from '@/utils/markdownRenderer'
import { Feature } from '@/data/types'
import { exportPRDToPDF, exportPRDToWord } from '@/utils/exporters'

interface PRDPanelProps {
  feature: Feature
}

type ExportingKind = null | 'word' | 'pdf'
type ViewMode = 'rich' | 'markdown'

const STORAGE_KEY = (id: string) => `prd-markdown-${id}`

export default function PRDPanel({ feature }: PRDPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const exportRef = useRef<HTMLDivElement>(null)
  const [exporting, setExporting] = useState<ExportingKind>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('markdown')

  const initialMarkdown = useMemo(() => {
    // 优先使用功能定义中的源 Markdown，避免旧本地缓存覆盖新文档
    if (feature.prd.markdown) return feature.prd.markdown
    const saved = localStorage.getItem(STORAGE_KEY(feature.id))
    if (saved) return saved
    return prdToMarkdown(feature.prd)
  }, [feature.id, feature.prd])

  const [markdown, setMarkdown] = useState(initialMarkdown)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY(feature.id), markdown)
  }, [markdown, feature.id])

  const parsedSections = useMemo(() => markdownToPrdSections(markdown), [markdown])

  const displayPrd = useMemo(
    () => ({
      ...feature.prd,
      sections: parsedSections,
    }),
    [feature.prd, parsedSections],
  )

  const displayFeature = useMemo(
    () => ({
      ...feature,
      prd: displayPrd,
    }),
    [feature, displayPrd],
  )

  const handleExportWord = async () => {
    if (exporting) return
    setExporting('word')
    try {
      await exportPRDToWord({ feature: displayFeature })
    } catch (err) {
      console.error('导出 Word 失败：', err)
      alert('导出 Word 失败，请重试')
    } finally {
      setExporting(null)
    }
  }

  const handleExportPDF = async () => {
    const element = exportRef.current || contentRef.current
    if (exporting || !element) return
    setExporting('pdf')
    try {
      const fileName = `${feature.prd.meta.productName}-${feature.prd.meta.featureName}-PRD`
      const title = `${feature.prd.meta.productName} - ${feature.prd.meta.featureName} PRD`
      await exportPRDToPDF({ element, fileName, title })
    } catch (err) {
      console.error('导出 PDF 失败：', err)
      alert('导出 PDF 失败，请重试')
    } finally {
      setExporting(null)
    }
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* 下载工具栏 */}
      <div className="shrink-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 px-6 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-500 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">
            <span className="font-medium text-gray-700">{feature.prd.meta.featureName}</span>
            <span className="mx-1.5 text-gray-300">·</span>
            <span>{feature.prd.meta.version}</span>
            <span className="mx-1.5 text-gray-300">·</span>
            <span>最后更新 {feature.prd.meta.updatedAt}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1 p-0.5 bg-gray-100 rounded-lg mr-2">
            <button
              type="button"
              onClick={() => setViewMode('markdown')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'markdown'
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Markdown
            </button>
            <button
              type="button"
              onClick={() => setViewMode('rich')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'rich'
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              富文本
            </button>
          </div>
          <button
            onClick={handleExportWord}
            disabled={exporting !== null}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:border-brand hover:text-brand disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {exporting === 'word' ? (
              <>
                <span className="w-3 h-3 border-2 border-gray-300 border-t-brand rounded-full animate-spin" />
                正在生成…
              </>
            ) : (
              <>
                <span className="text-[14px] leading-none">📝</span>
                下载 Word
              </>
            )}
          </button>
          <button
            onClick={handleExportPDF}
            disabled={exporting !== null}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-brand border border-brand rounded-md hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {exporting === 'pdf' ? (
              <>
                <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                正在生成…
              </>
            ) : (
              <>
                <span className="text-[14px] leading-none">📄</span>
                下载 PDF
              </>
            )}
          </button>
        </div>
      </div>

      {viewMode === 'markdown' ? (
        <PRDMarkdownEditor value={markdown} onChange={setMarkdown} />
      ) : (
        <div className="h-full overflow-y-auto scroll-light">
          <div className="p-6" ref={contentRef}>
            <PRDMetaCard prd={feature.prd} />
            <div className="mt-6 space-y-4">
              {displayPrd.sections.map((section, index) => (
                <PRDSection key={section.id} section={section} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hidden export container: always renders markdown preview for PDF export */}
      <div
        ref={exportRef}
        className="fixed left-0 top-0 w-[794px] bg-white p-8"
        style={{ position: 'fixed', left: '-9999px', top: 0 }}
      >
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(markdown) }}
        />
      </div>
    </div>
  )
}
