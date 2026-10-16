import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  ArrowUpRight,
  Facebook,
  Fence,
  Home,
  Images,
  Info,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react'
import { contact } from '../data'
import ChatBot from './ChatBot'
import { ContactButton, ContactModalProvider } from './ContactModal'
import { asset } from '../lib/asset'

const navigation = [
  ['Home', '/', Home],
  ['Services', '/services', Fence],
  ['Projects', '/gallery', Images],
  ['Service Area', '/service-area', MapPin],
  ['About', '/about', Info],
  ['Contact', '/contact', MessageCircle],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    if (menuOpen) document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}>
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <span className="utility-bar__location">
            <MapPin size={14} aria-hidden="true" /> Serving Collier & Lee Counties
          </span>
          <div className="utility-bar__links">
            <a href={contact.emailHref}><Mail size={14} /> {contact.email}</a>
            <a href={contact.phoneHref}><Phone size={14} /> {contact.phone}</a>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="shell nav-inner">
          <Link to="/" className="brand" aria-label="Monarca Fence Services home">
            <img src={asset('/images/logo.webp')} alt="Monarca Fence Services" />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </nav>

          <ContactButton className="button button--gold nav-quote" context="a free fence or gate estimate">
            Free estimate <ArrowUpRight size={17} />
          </ContactButton>

          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label, to, Icon], index) => (
            <NavLink key={to} to={to} end={to === '/'} style={{ '--item-index': index }}>
              <span className="mobile-menu__icon"><Icon size={20} aria-hidden="true" /></span>
              <span className="mobile-menu__label"><small>0{index + 1}</small><strong>{label}</strong></span>
              <ArrowUpRight className="mobile-menu__arrow" size={19} aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__contact">
          <p>Ready to discuss your property?</p>
          <ContactButton context="a fence, gate or automation project" onClick={() => setMenuOpen(false)}>
            <MessageCircle size={18} /> Contact Monarca <ArrowUpRight size={18} />
          </ContactButton>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div className="footer__brand">
          <img src={asset('/images/logo.webp')} alt="Monarca Fence Services" />
          <p>Strength like steel. Built like a Monarca. Protection that lasts.</p>
          <div className="footer__socials">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.facebook.com/search/top?q=Monarca%20Fence%20Services" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href={contact.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><span>TT</span></a>
          </div>
        </div>

        <div className="footer__column">
          <h2>Explore</h2>
          {navigation.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
        </div>

        <div className="footer__column">
          <h2>Solutions</h2>
          <Link to="/services">Fence installation</Link>
          <Link to="/services">Custom gates</Link>
          <Link to="/services">Gate automation</Link>
          <Link to="/services">Metal fabrication</Link>
          <Link to="/services">Repairs & service</Link>
        </div>

        <div className="footer__column footer__contact">
          <h2>Start a project</h2>
          <a href={contact.phoneHref}><Phone size={16} /> {contact.phone}</a>
          <a href={contact.emailHref}><Mail size={16} /> {contact.email}</a>
          <ContactButton className="footer__cta" context="a free fence or gate estimate">Request an estimate <ArrowUpRight size={16} /></ContactButton>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© {new Date().getFullYear()} Monarca Fence Services Inc.</span>
        <span>Serving Southwest Florida</span>
      </div>
    </footer>
  )
}

function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <ContactButton context="a fence, gate or automation project"><MessageCircle size={18} /> Contact Monarca <ArrowUpRight size={18} /></ContactButton>
    </div>
  )
}

export default function SiteShell({ children }) {
  return (
    <ContactModalProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileActionBar />
      <ChatBot />
    </ContactModalProvider>
  )
}
