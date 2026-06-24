import { ViewMode } from '@/components/layout/AppLayout'

interface ViewToggleProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export default function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  const modes: { id: ViewMode; label: string }[] = [
    { id: 'split', label: '左右对照' },
    { id: 'prototype', label: '原型' },
    { id: 'prd', label: 'PRD' }
  ]

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      {modes.map(mode => (
        <button
          key={mode.id}
          onClick={() => onViewModeChange(mode.id)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            viewMode === mode.id
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  )
}