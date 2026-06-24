import { ViewMode } from './AppLayout'
import ViewToggle from '@/components/common/ViewToggle'

interface TopBarProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export default function TopBar({ viewMode, onViewModeChange }: TopBarProps) {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-2 text-gray-600">
        <span className="font-medium text-gray-800">校校</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">作业</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">作业订正</span>
      </div>

      <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
    </header>
  )
}