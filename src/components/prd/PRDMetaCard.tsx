import StatusBadge from '@/components/common/StatusBadge'
import { PRD } from '@/data/types'

interface PRDMetaCardProps {
  prd: PRD
}

export default function PRDMetaCard({ prd }: PRDMetaCardProps) {
  const { meta } = prd

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm opacity-80">{meta.productName}</span>
        <StatusBadge status={meta.status} />
      </div>
      
      <h1 className="text-2xl font-bold mb-2">{meta.featureName}</h1>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-xs opacity-70 mb-1">所属模块</p>
          <p className="text-sm font-medium">{meta.module}</p>
        </div>
        <div>
          <p className="text-xs opacity-70 mb-1">页面编号</p>
          <p className="text-sm font-medium">{meta.pageCode}</p>
        </div>
        <div>
          <p className="text-xs opacity-70 mb-1">当前版本</p>
          <p className="text-sm font-medium">{meta.version}</p>
        </div>
        <div>
          <p className="text-xs opacity-70 mb-1">更新时间</p>
          <p className="text-sm font-medium">{meta.updatedAt}</p>
        </div>
      </div>
    </div>
  )
}