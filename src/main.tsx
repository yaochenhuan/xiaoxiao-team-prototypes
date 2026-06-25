import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { router } from '@/routes'
import '@/styles/globals.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root element not found')
}

createRoot(container).render(<RouterProvider router={router} />)
