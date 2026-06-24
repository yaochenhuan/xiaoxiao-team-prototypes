import PrototypeCard from './PrototypeCard'
import { Feature } from '@/data/types'

interface PrototypePanelProps {
  feature: Feature
}

export default function PrototypePanel({ feature }: PrototypePanelProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-100">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{feature.name}</h2>
            <p className="text-sm text-gray-500">{feature.code}</p>
          </div>
          <span className="text-xs text-gray-400">共 {feature.prototypePages.length} 个页面</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feature.prototypePages.map(page => (
          <PrototypeCard
            key={page.id}
            page={page}
            featureName={feature.name}
            featureCode={feature.code}
          />
        ))}
      </div>
    </div>
  )
}