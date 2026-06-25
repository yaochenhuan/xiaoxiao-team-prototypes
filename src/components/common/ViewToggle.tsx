import { ViewMode } from '@/components/layout/AppLayout'

interface ViewToggleProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export default function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  const modes: { id: ViewMode; label: string; icon: string }[] = [
    { id: 'split', label: '左右对照', icon: '⬌' },
    { id: 'prototype', label: '原型', icon: '▢' },
    { id: 'prd', label: 'PRD', icon: '☰' }
  ]

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-0.5">
      {modes.map(mode => (
        <button
          key={mode.id}
          onClick={() => onViewModeChange(mode.id)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            viewMode === mode.id
              ? 'bg-white text-brand shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  )
}
