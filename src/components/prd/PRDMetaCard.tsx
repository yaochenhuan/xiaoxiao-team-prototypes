import StatusBadge from '@/components/common/StatusBadge'
import { PRD } from '@/data/types'

interface PRDMetaCardProps {
  prd: PRD
}

export default function PRDMetaCard({ prd }: PRDMetaCardProps) {
  const { meta } = prd
  const hasAuthor = !!meta.author
  const hasRoles = !!meta.roles && meta.roles.length > 0
  const hasReferences = !!meta.references && meta.references.length > 0
  const hasRevision = !!meta.revisionHistory && meta.revisionHistory.length > 0

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-dark shadow-lg">
      {/* Decorative circles */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full" />
      <div className="absolute -bottom-16 -left-8 w-32 h-32 bg-white/5 rounded-full" />

      <div className="relative p-6 text-white">
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-white/70 font-medium tracking-wide">{meta.productName}</span>
          <StatusBadge status={meta.status} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-1">{meta.featureName} PRD</h1>
        <p className="text-sm text-white/60">
          {meta.module} / {meta.pageCode}
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6 pt-4 border-t border-white/10">
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">产品名称</p>
            <p className="text-sm font-medium">{meta.productName}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">功能名称</p>
            <p className="text-sm font-medium">{meta.featureName}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">所属模块</p>
            <p className="text-sm font-medium">{meta.module}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">页面编号</p>
            <p className="text-sm font-medium font-mono">{meta.pageCode}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">当前版本</p>
            <p className="text-sm font-medium">{meta.version}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">更新时间</p>
            <p className="text-sm font-medium">{meta.updatedAt}</p>
          </div>
          {hasAuthor && (
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">文档作者</p>
              <p className="text-sm font-medium">{meta.author}</p>
            </div>
          )}
          {hasRoles && (
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-wide mb-0.5">涉及角色</p>
              <p className="text-sm font-medium">{meta.roles!.join('、')}</p>
            </div>
          )}
        </div>

        {/* References */}
        {hasReferences && (
          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">关联文档 / 原型</p>
            <div className="flex flex-wrap gap-2">
              {meta.references!.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[12px] text-white/90 bg-white/10 hover:bg-white/20 transition-colors rounded-md px-2.5 py-1"
                >
                  <span>🔗</span>
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Revision history */}
        {hasRevision && (
          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">修订历史</p>
            <div className="space-y-1.5">
              {meta.revisionHistory!.map((r) => (
                <div
                  key={r.version}
                  className="flex items-start gap-2 text-[12px] text-white/85"
                >
                  <span className="font-mono text-white/95 shrink-0">{r.version}</span>
                  <span className="text-white/50 shrink-0">{r.date}</span>
                  <span className="text-white/95 shrink-0">{r.author}</span>
                  <span className="text-white/70">{r.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
