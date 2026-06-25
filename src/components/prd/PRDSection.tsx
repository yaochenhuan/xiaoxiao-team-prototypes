import { PRDBlock, PRDSection as PRDSectionType } from '@/data/types'

interface PRDSectionProps {
  section: PRDSectionType
  index: number
}

function BlockRenderer({ block }: { block: PRDBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className="text-sm text-gray-700 leading-relaxed mb-3 whitespace-pre-line [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-gray-100 [&_code]:text-[12.5px] [&_code]:text-rose-600 [&_code]:font-mono [&_strong]:font-semibold [&_strong]:text-gray-900"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )
    case 'heading':
      return block.level === 2 ? (
        <h4 className="text-sm font-bold text-gray-900 mt-4 mb-2 pb-1.5 border-b border-gray-100">
          {block.text}
        </h4>
      ) : (
        <h5 className="text-[13px] font-semibold text-gray-800 mt-3 mb-1.5">{block.text}</h5>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag
          className={`text-sm text-gray-700 leading-relaxed mb-3 pl-5 space-y-1 ${
            block.ordered ? 'list-decimal' : 'list-disc'
          } marker:text-gray-400 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-gray-100 [&_code]:text-[12.5px] [&_code]:text-rose-600 [&_code]:font-mono [&_strong]:font-semibold [&_strong]:text-gray-900`}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="pl-1"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </Tag>
      )
    }
    case 'table':
      return (
        <div className="my-3 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-3 py-2 text-left text-xs font-semibold text-gray-600 whitespace-nowrap border-b border-gray-200"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-3 py-2 text-[13px] text-gray-700 align-top [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-gray-100 [&_code]:text-[12px] [&_code]:text-rose-600 [&_code]:font-mono [&_strong]:font-semibold [&_strong]:text-gray-900"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'code':
      return (
        <div className="my-3 rounded-lg overflow-hidden bg-slate-900 text-slate-200">
          {block.language && (
            <div className="px-3 py-1.5 text-[11px] text-slate-400 bg-slate-950/60 border-b border-slate-800 font-mono">
              {block.language}
            </div>
          )}
          <pre className="px-4 py-3 text-[12px] leading-relaxed font-mono overflow-x-auto whitespace-pre">
            <code>{block.text}</code>
          </pre>
        </div>
      )
    case 'callout': {
      const toneStyles: Record<string, string> = {
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warn: 'bg-amber-50 border-amber-200 text-amber-900',
        success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
        danger: 'bg-rose-50 border-rose-200 text-rose-900',
      }
      const toneIcons: Record<string, string> = {
        info: 'ℹ',
        warn: '⚠',
        success: '✓',
        danger: '✕',
      }
      const tone = block.tone || 'info'
      return (
        <div className={`my-3 rounded-lg border px-3.5 py-2.5 ${toneStyles[tone]}`}>
          {block.title && (
            <div className="text-[13px] font-semibold mb-1 flex items-center gap-1.5">
              <span>{toneIcons[tone]}</span>
              {block.title}
            </div>
          )}
          <div
            className="text-[13px] leading-relaxed whitespace-pre-line [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-white/60 [&_code]:text-[12px] [&_code]:font-mono [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        </div>
      )
    }
    case 'divider':
      return <hr className="my-4 border-gray-200" />
    default:
      return null
  }
}

export default function PRDSection({ section, index }: PRDSectionProps) {
  const hasBlocks = section.blocks && section.blocks.length > 0

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
      {/* Section header */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-7 h-7 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center shrink-0">
          {String(index).padStart(2, '0')}
        </span>
        <h3 className="text-sm font-semibold text-gray-800">{section.title}</h3>
      </div>

      {/* Section content */}
      <div className="pl-10 space-y-1">
        {hasBlocks ? (
          section.blocks!.map((block, i) => <BlockRenderer key={i} block={block} />)
        ) : (
          <div className="flex items-start gap-2 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-2.5">
            <span className="text-amber-400 shrink-0 mt-0.5">⚠</span>
            <span className="whitespace-pre-line">{section.content}</span>
          </div>
        )}

        {/* Child sections (recursive) */}
        {section.children && section.children.length > 0 && (
          <div className="mt-3 space-y-3 pl-3 border-l-2 border-brand/15">
            {section.children.map((child, ci) => (
              <div key={child.id}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded bg-brand/10 text-brand text-[10px] font-bold flex items-center justify-center">
                    {ci + 1}
                  </span>
                  <h4 className="text-[13px] font-semibold text-gray-800">{child.title}</h4>
                </div>
                {child.blocks && child.blocks.length > 0 ? (
                  <div className="space-y-1">
                    {child.blocks.map((block, bi) => (
                      <BlockRenderer key={bi} block={block} />
                    ))}
                  </div>
                ) : child.content ? (
                  <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-line">
                    {child.content}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
