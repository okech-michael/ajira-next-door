import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

const container = document.getElementById('app')
if (!container) throw new Error('Root element not found')

const root = createRoot(container)
const router = getRouter()

root.render(<RouterProvider router={router} />)
