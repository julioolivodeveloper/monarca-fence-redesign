import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  Fence,
  Grid2X2,
  Grid3X3,
  Image as ImageIcon,
  Paintbrush,
  PanelRightOpen,
  PanelsTopLeft,
  Quote,
  ScanFace,
  Settings,
  Star,
  Wrench,
  X,
} from 'lucide-react'
import { projects } from '../data'
import { asset } from '../lib/asset'

const iconMap = {
  PanelsTopLeft,
  Fence,
  Grid3X3,
  Grid2X2,
  PanelRightOpen,
  DoorOpen,
  ScanFace,
  Wrench,
  Paintbrush,
  Settings,
}

export function SectionHeading({ eyebrow, title, body, align = 'left', light = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`} data-reveal>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}

export function TextLink({ to, children, light = false }) {
  return (
    <Link className={`text-link ${light ? 'text-link--light' : ''}`} to={to}>
      <span>{children}</span><ArrowRight size={18} />
    </Link>
  )
}

export function PageHero({ eyebrow, title, body, image = asset('/images/hero.webp'), children }) {
  return (
    <section className="page-hero">
      <img className="page-hero__image" src={image} alt="" />
      <div className="page-hero__overlay" />
      <div className="shell page-hero__content">
        <div data-reveal>
          <span className="eyebrow eyebrow--light"><i />{eyebrow}</span>
          <h1>{title}</h1>
          <p>{body}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Fence
  const highlights = service.detail?.highlights?.slice(0, 2) || []

  return (
    <article className="service-card" data-reveal style={{ '--reveal-delay': `${Math.min(index, 3) * 70}ms` }}>
      <div className="service-card__media">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className="service-card__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="service-card__category">{service.category}</span>
      </div>
      <div className="service-card__body">
        <div className="service-card__heading">
          <span className="service-card__icon"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
          <div>
            <small>Monarca service</small>
            <h3>{service.title}</h3>
          </div>
        </div>
        <p>{service.description}</p>
        <ul className="service-card__features" aria-label={`${service.title} highlights`}>
          {highlights.map((highlight) => (
            <li key={highlight}><Check size={15} strokeWidth={2.4} aria-hidden="true" /><span>{highlight}</span></li>
          ))}
        </ul>
        <Link className="service-card__cta" to={`/services/${service.slug}`} aria-label={`View details about ${service.title}`}>
          <span>View service details</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

export function ProjectGallery({ limit, items = projects, featured = false }) {
  const categories = ['All', ...new Set(items.map((project) => project.category))]
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(() => {
    const list = filter === 'All' ? items : items.filter((project) => project.category === filter)
    return typeof limit === 'number' ? list.slice(0, limit) : list
  }, [filter, items, limit])

  const activeProject = activeIndex === null ? null : filtered[activeIndex]
  const moveLightbox = (direction) => {
    setActiveIndex((current) => (current + direction + filtered.length) % filtered.length)
  }

  return (
    <>
      {!limit && !featured && (
        <div className="gallery-filters" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={filter === category ? 'is-active' : ''}
              onClick={() => {
                setFilter(category)
                setActiveIndex(null)
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className={`project-grid ${limit || featured ? 'project-grid--featured' : ''}`}>
        {filtered.map((project, index) => (
          <button
            key={`${project.title}-${index}`}
            className="project-tile"
            type="button"
            onClick={() => setActiveIndex(index)}
            data-reveal
            style={{ '--reveal-delay': `${Math.min(index, 5) * 55}ms` }}
          >
            <img src={project.image} alt={project.description} loading={index > 1 ? 'lazy' : 'eager'} />
            <span className="project-tile__shade" />
            <span className="project-tile__content">
              <small>{project.category}</small>
              <strong>{project.title}</strong>
              <span className="project-tile__description">{project.description}</span>
            </span>
            <span className="project-tile__open"><ImageIcon size={19} /></span>
          </button>
        ))}
      </div>

      {activeProject && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="lightbox__close icon-button" onClick={() => setActiveIndex(null)} aria-label="Close image"><X /></button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={() => moveLightbox(-1)} aria-label="Previous image"><ChevronLeft /></button>
          <figure>
            <img src={activeProject.image} alt={activeProject.description} />
            <figcaption><small>{activeProject.category}</small><strong>{activeProject.title}</strong><span>{activeProject.description}</span></figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" onClick={() => moveLightbox(1)} aria-label="Next image"><ChevronRight /></button>
        </div>
      )}
    </>
  )
}

export function ReviewCarousel({ items }) {
  const viewportRef = useRef(null)

  const move = (direction) => {
    const viewport = viewportRef.current
    const card = viewport?.querySelector('.review-card')
    const track = viewport?.querySelector('.review-carousel__track')

    if (!viewport || !card || !track) return

    const styles = window.getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0
    const step = card.getBoundingClientRect().width + gap
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth)
    const atStart = viewport.scrollLeft <= 3
    const atEnd = viewport.scrollLeft >= maxScroll - 3
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

    if (direction < 0 && atStart) {
      viewport.scrollTo({ left: maxScroll, behavior })
      return
    }

    if (direction > 0 && atEnd) {
      viewport.scrollTo({ left: 0, behavior })
      return
    }

    viewport.scrollBy({ left: direction * step, behavior })
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    move(event.key === 'ArrowRight' ? 1 : -1)
  }

  if (!items?.length) return null

  return (
    <div className="review-carousel" data-reveal>
      <div className="review-carousel__toolbar">
        <span>{String(items.length).padStart(2, '0')} sample stories</span>
        <div className="review-carousel__controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous reviews" title="Previous reviews">
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next reviews" title="Next reviews">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        className="review-carousel__viewport"
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Sample customer reviews"
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <div className="review-carousel__track">
          {items.map((review, index) => {
            const initials = review.name
              .split(/\s+/)
              .map((part) => part[0])
              .slice(0, 2)
              .join('')

            return (
              <article
                className="review-card"
                key={`${review.name}-${review.service}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Sample review ${index + 1} of ${items.length}`}
              >
                <div className="review-card__top">
                  <span>Sample review</span>
                  <Quote aria-hidden="true" />
                </div>
                <div className="review-card__stars" aria-label="Sample five star rating">
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} fill="currentColor" aria-hidden="true" />)}
                </div>
                <blockquote><p>{review.quote}</p></blockquote>
                <footer>
                  <span className="review-card__avatar" aria-hidden="true">{initials}</span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.service} / {review.place}</small>
                  </span>
                </footer>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => <li key={item}><Check size={17} />{item}</li>)}
    </ul>
  )
}
