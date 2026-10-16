import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import GalleryPage from './pages/GalleryPage'
import ServiceAreaPage from './pages/ServiceAreaPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { services } from './data'

const titles = {
  '/': 'Monarca Fence Services | Southwest Florida',
  '/services': 'Fence & Gate Services | Monarca Fence Services',
  '/gallery': 'Project Gallery | Monarca Fence Services',
  '/service-area': 'Southwest Florida Service Area | Monarca Fence Services',
  '/about': 'About Monarca Fence Services',
  '/contact': 'Contact Monarca Fence Services | Southwest Florida',
}

function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const serviceSlug = location.pathname.startsWith('/services/') ? location.pathname.split('/')[2] : null
    const service = serviceSlug ? services.find((item) => item.slug === serviceSlug) : null
    document.title = service ? `${service.title} | Monarca Fence Services` : (titles[location.pathname] || titles['/'])

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const timer = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    }, 40)

    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <SiteShell>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/service-area" element={<ServiceAreaPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteShell>
  )
}
