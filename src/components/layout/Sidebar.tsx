import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { modules } from '@/data/modules'
import { features } from '@/data/features'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  currentFeatureId: string
}

export default function Sidebar({ collapsed, onToggle, currentFeatureId }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>(['homework'])
  const location = useLocation()

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const isFeatureActive = (featureId: string) => {
    return currentFeatureId === featureId
  }

  return (
    <aside
      className={`flex flex-col bg-gray-900 text-white transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      <div className="flex items-center h-14 px-4 border-b border-gray-700">
        {!collapsed && <span className="text-lg font-bold">校校</span>}
        {collapsed && <span className="text-xl">📚</span>}
      </div>

      <button
        onClick={onToggle}
        className="absolute top-14 right-0 -translate-x-1/2 transform bg-gray-800 hover:bg-gray-700 rounded-full p-1 transition-colors"
      >
        <span className="text-sm">{collapsed ? '▶' : '◀'}</span>
      </button>

      <nav className="flex-1 overflow-y-auto sidebar-scrollbar py-4">
        {modules.map(module => {
          const moduleFeatures = features.filter(f => f.moduleId === module.id)
          const isExpanded = expandedModules.includes(module.id)
          const hasActiveFeature = moduleFeatures.some(f => isFeatureActive(f.id))

          return (
            <div key={module.id} className="mb-1">
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  hasActiveFeature
                    ? 'bg-gray-800 text-blue-400'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <span className="text-lg">{module.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1">{module.name}</span>
                    <span className="text-gray-500 text-sm">
                      {isExpanded ? '▼' : '▶'}
                    </span>
                  </>
                )}
              </button>

              {(isExpanded || collapsed) && !collapsed && (
                <div className="bg-gray-950">
                  {moduleFeatures.map(feature => (
                    <Link
                      key={feature.id}
                      to={feature.route}
                      className={`block w-full px-4 py-2 pl-12 text-sm transition-colors ${
                        isFeatureActive(feature.id)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        {!collapsed ? (
          <p className="text-xs text-gray-500 text-center">
            校校产品团队 · 2026
          </p>
        ) : (
          <p className="text-xs text-gray-500 text-center">2026</p>
        )}
      </div>
    </aside>
  )
}