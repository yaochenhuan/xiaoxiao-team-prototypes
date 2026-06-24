import { useState, useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import AppLayout, { ViewMode } from '@/components/layout/AppLayout'
import { features } from '@/data/features'

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('split')
  const params = useParams<{ featureId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!params?.featureId) {
      const firstFeature = features[0]
      if (firstFeature) {
        navigate(firstFeature.route)
      }
    }
  }, [params, navigate])

  return (
    <AppLayout
      currentFeatureId={params?.featureId || ''}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
    >
      <Outlet context={{ viewMode }} />
    </AppLayout>
  )
}