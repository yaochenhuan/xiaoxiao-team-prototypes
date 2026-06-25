import { useState } from 'react'
import { Link } from 'react-router-dom'
import { modules } from '@/data/modules'
import { features } from '@/data/features'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  currentFeatureId: string
}

export default function Sidebar({ collapsed, onToggle, currentFeatureId }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>(['homework'])

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
      className={`flex flex-col bg-sidebar-bg text-gray-900 transition-all duration-300 shrink-0 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      {/* Logo / Title */}
      <div className="flex items-center h-14 px-4 border-b border-sidebar-border shrink-0">
        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-sm shrink-0">
          校
        </div>
        {!collapsed && (
          <span className="ml-3 text-base font-bold tracking-wide text-gray-900">校校</span>
        )}
      </div>

      {/* Collapse button */}
      <button
        onClick={onToggle}
        className="absolute ml-[228px] mt-9 w-6 h-6 bg-white hover:bg-brand rounded-full flex items-center justify-center text-xs text-sidebar-muted hover:text-white transition-all shadow-md z-50 border border-sidebar-border"
      >
        {collapsed ? '▶' : '◀'}
      </button>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scroll-dark py-3">
        {modules.map(module => {
          const moduleFeatures = features.filter(f => f.moduleId === module.id)
          const isExpanded = expandedModules.includes(module.id)
          const hasActiveFeature = moduleFeatures.some(f => isFeatureActive(f.id))

          return (
            <div key={module.id} className="mb-1">
              {/* Module header */}
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  hasActiveFeature
                    ? 'text-gray-900'
                    : 'text-sidebar-text hover:text-gray-900 hover:bg-sidebar-hover'
                }`}
              >
                <span className="text-base shrink-0">{module.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1 text-sm font-medium">{module.name}</span>
                    <span className={`text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                      ▶
                    </span>
                  </>
                )}
              </button>

              {/* Feature items */}
              {isExpanded && !collapsed && (
                <div className="pb-1">
                  {moduleFeatures.map(feature => (
                    <Link
                      key={feature.id}
                      to={feature.route}
                      className={`flex items-center w-full px-4 py-2 pl-11 text-sm transition-all relative ${
                        isFeatureActive(feature.id)
                          ? 'bg-brand text-white font-medium'
                          : 'text-sidebar-text hover:text-gray-900 hover:bg-sidebar-hover'
                      }`}
                    >
                      {isFeatureActive(feature.id) && (
                        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-dark" />
                      )}
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-sidebar-border shrink-0">
        {!collapsed ? (
          <p className="text-xs text-sidebar-muted text-center">
            校校产品团队 · 2026
          </p>
        ) : (
          <p className="text-[10px] text-sidebar-muted text-center">2026</p>
        )}
      </div>
    </aside>
  )
}
