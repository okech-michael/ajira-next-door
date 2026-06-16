import { createRoot } from 'react-dom/client'
import { getRouter } from './router'

const container = document.getElementById('app')
if (!container) throw new Error('Root element not found')

const root = createRoot(container)
const router = getRouter()

root.render(router.getRouterElement())
