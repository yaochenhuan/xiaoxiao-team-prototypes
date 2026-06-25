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
      className={`flex flex-col bg-sidebar-bg text-sidebar-text transition-all duration-300 shrink-0 relative ${
        collapsed ? 'w-[72px]' : 'w-[260px]'
      }`}
    >
      {/* Logo / Title */}
      <div className="flex items-center h-[60px] px-5 border-b border-sidebar-border/40 shrink-0">
        <div className="w-9 h-9 rounded-m3-sm bg-brand flex items-center justify-center text-white font-bold text-[15px] shrink-0 shadow-sm">
          校
        </div>
        {!collapsed && (
          <div className="ml-3 flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-wide text-sidebar-text">校校</span>
            <span className="text-[11px] text-sidebar-muted/70">原型管理 · v2026</span>
          </div>
        )}
      </div>

      {/* Collapse button */}
      <button
        onClick={onToggle}
        className={`absolute top-[76px] -right-3 w-6 h-6 bg-sidebar-toggleBg hover:bg-brand rounded-full flex items-center justify-center text-[10px] text-brand hover:text-white transition-all shadow-md z-50 border border-sidebar-border`}
        aria-label="toggle sidebar"
      >
        {collapsed ? '▶' : '◀'}
      </button>

      {/* Section label */}
      {!collapsed && (
        <div className="px-5 pt-4 pb-2 text-[11px] font-semibold text-sidebar-muted/70 tracking-wider uppercase">
          功能模块
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 pb-3">
        {modules.map(module => {
          const moduleFeatures = features.filter(f => f.moduleId === module.id)
          const isExpanded = expandedModules.includes(module.id)
          const hasActiveFeature = moduleFeatures.some(f => isFeatureActive(f.id))

          return (
            <div key={module.id} className="mb-1">
              {/* Module header */}
              <button
                onClick={() => toggleModule(module.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-m3-sm text-left transition-all ${
                  collapsed ? 'justify-center' : ''
                } ${
                  hasActiveFeature
                    ? 'text-sidebar-text'
                    : 'text-sidebar-text/85 hover:bg-sidebar-hover/40 hover:text-sidebar-text'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-m3-sm flex items-center justify-center text-[15px] shrink-0 transition-colors ${
                    hasActiveFeature
                      ? 'bg-brand text-white'
                      : 'bg-white/60 text-brand'
                  }`}
                >
                  {module.icon}
                </span>
                {!collapsed && (
                  <>
                    <span className="flex-1 text-[13.5px] font-semibold tracking-wide">
                      {module.name}
                    </span>
                    <span
                      className={`text-[9px] text-sidebar-muted/70 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    >
                      ▶
                    </span>
                  </>
                )}
              </button>

              {/* Feature items */}
              {isExpanded && !collapsed && (
                <div className="mt-1 ml-2 pl-3 border-l border-sidebar-border/50 space-y-0.5">
                  {moduleFeatures.map(feature => (
                    <Link
                      key={feature.id}
                      to={feature.route}
                      className={`relative flex items-center w-full px-3 py-2 rounded-m3-sm text-[13px] transition-all ${
                        isFeatureActive(feature.id)
                          ? 'bg-sidebar-activeBg text-sidebar-activeText font-semibold shadow-sm'
                          : 'text-sidebar-text/80 hover:bg-sidebar-hover/40 hover:text-sidebar-text'
                      }`}
                    >
                      {isFeatureActive(feature.id) && (
                        <span className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-brand rounded-full" />
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
      <div className="px-5 py-3 border-t border-sidebar-border/40 shrink-0">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <p className="text-[11px] text-sidebar-muted/80">
              校校产品团队 · 2026
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-2 h-2 rounded-full bg-brand" />
          </div>
        )}
      </div>
    </aside>
  )
}
