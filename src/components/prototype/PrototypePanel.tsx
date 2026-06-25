import PrototypeCard from './PrototypeCard'
import StatusBadge from '@/components/common/StatusBadge'
import { Feature } from '@/data/types'

interface PrototypePanelProps {
  feature: Feature
}

export default function PrototypePanel({ feature }: PrototypePanelProps) {
  return (
    <div className="h-full overflow-y-auto scroll-light bg-canvas p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-800">{feature.name}</h2>
            <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
              {feature.code}
            </span>
          </div>
          <StatusBadge status={feature.status} />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-4 h-4 rounded bg-brand/10 flex items-center justify-center text-[8px] text-brand">P</span>
          <span>原型图</span>
          <span className="text-gray-300">·</span>
          <span>共 {feature.prototypePages.length} 个页面</span>
        </div>
      </div>

      {/* Prototype cards - 单列布局 */}
      <div className="flex flex-col gap-6 max-w-full">
        {feature.prototypePages.map((page, index) => (
          <PrototypeCard
            key={page.id}
            page={page}
            featureId={feature.id}
            featureCode={feature.code}
            pageIndex={index + 1}
          />
        ))}
      </div>
    </div>
  )
}
