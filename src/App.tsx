import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppLayout, { ViewMode } from '@/components/layout/AppLayout'

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('split')
  const location = useLocation()

  // Get current feature ID from URL path
  const getCurrentFeatureId = () => {
    const path = location.pathname
    const featureId = path.split('/').filter(Boolean).join('-')
    return featureId || 'homework-correction'
  }

  return (
    <AppLayout
      currentFeatureId={getCurrentFeatureId()}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
    >
      <Outlet context={{ viewMode }} />
    </AppLayout>
  )
}