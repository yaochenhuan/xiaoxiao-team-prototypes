import { useParams } from 'react-router-dom'
import { getFeatureById } from '@/data/features'
import PrototypePanel from '@/components/prototype/PrototypePanel'
import PRDPanel from '@/components/prd/PRDPanel'
import StatusBadge from '@/components/common/StatusBadge'
import { ViewMode } from '@/components/layout/AppLayout'

interface FeaturePageProps {
  viewMode: ViewMode
}

export default function FeaturePage({ viewMode }: FeaturePageProps) {
  const params = useParams<{ moduleId: string; featureId: string }>()
  const feature = getFeatureById(params?.featureId || '')

  if (!feature) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-center">
          <p className="text-gray-500">功能未找到</p>
        </div>
      </div>
    )
  }

  const showPrototype = viewMode === 'split' || viewMode === 'prototype'
  const showPRD = viewMode === 'split' || viewMode === 'prd'

  return (
    <div className="h-full flex">
      {showPrototype && (
        <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} h-full border-r border-gray-200`}>
          <PrototypePanel feature={feature} />
        </div>
      )}
      {showPRD && (
        <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} h-full bg-gray-50`}>
          <PRDPanel feature={feature} />
        </div>
      )}
    </div>
  )
}