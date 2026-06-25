import { useRef, useState } from 'react'
import PRDMetaCard from './PRDMetaCard'
import PRDSection from './PRDSection'
import { Feature } from '@/data/types'
import { exportPRDToPDF, exportPRDToWord } from '@/utils/exporters'

interface PRDPanelProps {
  feature: Feature
}

type ExportingKind = null | 'word' | 'pdf'

export default function PRDPanel({ feature }: PRDPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [exporting, setExporting] = useState<ExportingKind>(null)

  const handleExportWord = async () => {
    if (exporting) return
    setExporting('word')
    try {
      await exportPRDToWord({ feature })
    } catch (err) {
      console.error('导出 Word 失败：', err)
      alert('导出 Word 失败，请重试')
    } finally {
      setExporting(null)
    }
  }

  const handleExportPDF = async () => {
    if (exporting || !contentRef.current) return
    setExporting('pdf')
    try {
      const fileName = `${feature.prd.meta.productName}-${feature.prd.meta.featureName}-PRD`
      const title = `${feature.prd.meta.productName} - ${feature.prd.meta.featureName} PRD`
      await exportPRDToPDF({ element: contentRef.current, fileName, title })
    } catch (err) {
      console.error('导出 PDF 失败：', err)
      alert('导出 PDF 失败，请重试')
    } finally {
      setExporting(null)
    }
  }

  return (
    <div className="h-full overflow-y-auto scroll-light bg-white">
      {/* 下载工具栏 */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200 px-6 py-2.5 flex items-center justify-between gap-3">
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

      <div className="p-6" ref={contentRef}>
        {/* Meta card */}
        <PRDMetaCard prd={feature.prd} />

        {/* Sections */}
        <div className="mt-6 space-y-4">
          {feature.prd.sections.map((section, index) => (
            <PRDSection key={section.id} section={section} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}
