import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '@/App'
import FeaturePage from '@/pages/FeaturePage'
import { features } from '@/data/features'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: ':moduleId/:featureId',
        element: <FeaturePage />
      },
      {
        index: true,
        element: <FeaturePage />
      }
    ]
  }
]

export const router = createBrowserRouter(routes, {
  basename: '/xiaoxiao-team-prototypes'
})