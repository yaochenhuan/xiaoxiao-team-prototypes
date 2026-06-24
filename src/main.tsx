import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import '@/styles/globals.css'

function main() {
  return <RouterProvider router={router} />
}

export default main