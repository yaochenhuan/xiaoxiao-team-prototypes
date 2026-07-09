import { useCallback, useEffect, useRef, useState } from 'react'
import { renderMarkdownToHtml } from '@/utils/markdownRenderer'

interface PRDMarkdownEditorProps {
  value: string
  onChange: (value: string) => void
}

type Tab = 'edit' | 'preview'

export default function PRDMarkdownEditor({ value, onChange }: PRDMarkdownEditorProps) {
  const [tab, setTab] = useState<Tab>('preview')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const next = e.target.value
      setLocalValue(next)
      onChange(next)
    },
    [onChange],
  )

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50/80">
        <div className="flex items-center gap-1 p-0.5 bg-gray-100 rounded-lg">
          <button
            type="button"
            onClick={() => setTab('preview')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              tab === 'preview'
                ? 'bg-white text-brand shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            预览
          </button>
          <button
            type="button"
            onClick={() => setTab('edit')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              tab === 'edit'
                ? 'bg-white text-brand shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            编辑
          </button>
        </div>
        <span className="text-[11px] text-gray-400">支持 Markdown 语法</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto relative">
        {tab === 'edit' ? (
          <textarea
            ref={textareaRef}
            value={localValue}
            onChange={handleChange}
            spellCheck={false}
            className="w-full h-full min-h-[500px] p-5 resize-none outline-none text-[13px] leading-relaxed font-mono text-gray-800 bg-white"
            placeholder="在此编辑 PRD 文档（Markdown 格式）..."
          />
        ) : (
          <div
            className="p-6 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(localValue) }}
          />
        )}
      </div>
    </div>
  )
}
