import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export type ViewMode = 'split' | 'prototype' | 'prd'

interface AppLayoutProps {
  children: React.ReactNode
  currentFeatureId: string
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
}

export default function AppLayout({
  children,
  currentFeatureId,
  viewMode,
  onViewModeChange
}: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        currentFeatureId={currentFeatureId}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
        />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}