import { PRD } from '@/data/types'

interface PRDMetaCardProps {
  prd: PRD
}

const STATUS_TONE: Record<string, string> = {
  规划中: 'bg-amber-50 text-amber-700 border-amber-200',
  设计中: 'bg-blue-50 text-blue-700 border-blue-200',
  开发中: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  测试中: 'bg-violet-50 text-violet-700 border-violet-200',
  已上线: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export default function PRDMetaCard({ prd }: PRDMetaCardProps) {
  const { meta } = prd
  const statusClass = STATUS_TONE[meta.status] ?? 'bg-gray-50 text-gray-600 border-gray-200'

  return (
    <div className="rounded-m3-md border border-gray-200 bg-gradient-to-br from-white via-white to-[#F0F4F9] overflow-hidden">
      {/* 顶部色条 */}
      <div className="h-1 bg-gradient-to-r from-brand to-[#A8C7FA]" />

      <div className="p-6">
        {/* 标题行 */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
              <span className="px-1.5 py-0.5 rounded bg-[#D3E3FD] text-[#041E49] font-medium">
                {meta.productName}
              </span>
              <span className="text-gray-300">/</span>
              <span>{meta.module}</span>
              <span className="text-gray-300">·</span>
              <span className="font-mono">{meta.pageCode}</span>
            </div>
            <h1 className="text-[22px] font-bold text-gray-900 leading-tight">
              {meta.featureName}
            </h1>
            <p className="mt-1 text-sm text-gray-500">产品需求文档 · Product Requirements Document</p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${statusClass}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {meta.status}
            </span>
            <span className="text-[11px] text-gray-400 font-mono">{meta.version}</span>
          </div>
        </div>

        {/* 信息网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-5 border-t border-gray-100">
          <Field label="文档作者" value={meta.author || '—'} />
          <Field label="更新时间" value={meta.updatedAt} />
          <Field label="涉及角色" value={(meta.roles || []).join(' · ') || '—'} />
          <Field
            label="关联文档"
            value={
              meta.references && meta.references.length > 0 ? (
                <a
                  href={meta.references[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline truncate inline-block max-w-full"
                  title={meta.references[0].label}
                >
                  {meta.references[0].label}
                </a>
              ) : (
                '—'
              )
            }
          />
        </div>

        {/* 修订历史 */}
        {meta.revisionHistory && meta.revisionHistory.length > 0 && (
          <div className="mt-5 pt-5 border-t border-gray-100">
            <div className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2">
              修订历史
            </div>
            <ul className="space-y-1.5">
              {meta.revisionHistory.map((rev, i) => (
                <li
                  key={i}
                  className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed"
                >
                  <span className="font-mono text-[11px] text-gray-400 shrink-0 mt-0.5">
                    {rev.version}
                  </span>
                  <span className="text-gray-300 shrink-0">·</span>
                  <span className="text-gray-400 font-mono text-[11px] shrink-0 mt-0.5">
                    {rev.date}
                  </span>
                  <span className="text-gray-300 shrink-0">·</span>
                  <span className="text-gray-400 shrink-0 mt-0.5">{rev.author}</span>
                  <span className="text-gray-700 flex-1">{rev.note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <div className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-1">
        {label}
      </div>
      <div className="text-[13px] text-gray-800 break-words">{value || '—'}</div>
    </div>
  )
}
