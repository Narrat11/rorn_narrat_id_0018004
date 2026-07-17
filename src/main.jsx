import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// នាំចូលឯកសារ CSS ពី assets ឱ្យត្រូវទៅនឹងរចនាសម្ព័ន្ធ Folder ជាក់ស្តែង
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

// ផ្លូវទៅកាន់ main.css គឺ assets/css/main.css (មិនមែន assets/assets/css ទេ)
import './assets/css/main.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)