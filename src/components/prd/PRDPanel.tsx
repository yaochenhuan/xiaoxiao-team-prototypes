import PRDMetaCard from './PRDMetaCard'
import PRDSection from './PRDSection'
import { Feature } from '@/data/types'

interface PRDPanelProps {
  feature: Feature
}

export default function PRDPanel({ feature }: PRDPanelProps) {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-3xl mx-auto">
        <PRDMetaCard prd={feature.prd} />
        
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
          {feature.prd.sections.map(section => (
            <PRDSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  )
}