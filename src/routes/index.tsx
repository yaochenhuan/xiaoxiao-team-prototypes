import { createHashRouter, RouteObject, Navigate } from 'react-router-dom'
import App from '@/App'
import FeaturePage from '@/pages/FeaturePage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'homework/homework-correction',
        element: <FeaturePage />
      },
      {
        path: 'homework/homework-assignment',
        element: <FeaturePage />
      },
      {
        path: 'homework/wrong-questions',
        element: <FeaturePage />
      },
      {
        path: 'question-bank/question-list',
        element: <FeaturePage />
      },
      {
        path: 'question-bank/question-detail',
        element: <FeaturePage />
      },
      {
        path: 'question-bank/question-generate',
        element: <FeaturePage />
      },
      {
        path: 'course/course-list',
        element: <FeaturePage />
      },
      {
        path: 'course/course-detail',
        element: <FeaturePage />
      },
      {
        path: 'course/lesson-management',
        element: <FeaturePage />
      },
      {
        index: true,
        element: <Navigate to="homework/homework-correction" />
      }
    ]
  }
]

export const router = createHashRouter(routes)