import { useLocation } from 'react-router-dom'
import { ViewMode } from './AppLayout'
import ViewToggle from '@/components/common/ViewToggle'
import StatusBadge from '@/components/common/StatusBadge'
import { getFeatureById } from '@/data/features'
import { modules } from '@/data/modules'

interface TopBarProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export default function TopBar({ viewMode, onViewModeChange }: TopBarProps) {
  const location = useLocation()
  const path = location.pathname.replace(/^\//, '')

  const pathToFeatureId: Record<string, string> = {
    'homework/homework-correction': 'homework-correction',
    'homework/homework-assignment': 'homework-assignment',
    'homework/wrong-questions': 'wrong-questions',
    'question-bank/question-list': 'question-list',
    'question-bank/question-detail': 'question-detail',
    'question-bank/question-generate': 'question-generate',
    'course/course-list': 'course-list',
    'course/course-detail': 'course-detail',
    'course/lesson-management': 'lesson-management'
  }

  const featureId = pathToFeatureId[path] || 'homework-correction'
  const feature = getFeatureById(featureId)
  const moduleName = feature ? modules.find(m => m.id === feature.moduleId)?.name || '' : ''
  const featureName = feature?.name || '作业订正'

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm min-w-0">
        <span className="font-semibold text-gray-800">校校</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-500">{moduleName}</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-800 font-medium">{featureName}</span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 shrink-0">
        {feature && (
          <>
            <StatusBadge status={feature.status} />
            <div className="hidden md:flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="text-gray-400">版本</span>
                <span className="font-medium text-gray-700">{feature.version}</span>
              </span>
              <span className="w-px h-3 bg-gray-200" />
              <span className="flex items-center gap-1">
                <span className="text-gray-400">更新</span>
                <span className="font-medium text-gray-700">{feature.updatedAt}</span>
              </span>
            </div>
            <span className="w-px h-6 bg-gray-200" />
          </>
        )}
        <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
      </div>
    </header>
  )
}
