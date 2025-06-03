/**
 * @copyright 2025 WellingtonVumu
 * @license Apache-2.0
 * @author WellingtonVumu <
 */

/**
 * @node_modules/
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * @components/
 */
import App from './App.jsx'

/**
 * @CSS links
 */
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
