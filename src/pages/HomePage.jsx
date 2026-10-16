import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Pause,
  Phone,
  Play,
  Ruler,
  ShieldCheck,
} from 'lucide-react'
import { cities, contact, featuredProjects, sampleReviews, services } from '../data'
import { ContactButton } from '../components/ContactModal'
import {
  ProjectGallery,
  ReviewCarousel,
  SectionHeading,
  ServiceCard,
  TextLink,
} from '../components/UI'
import { asset } from '../lib/asset'

const HERO_SLIDES = [
  { src: '/images/hero.webp', alt: 'Custom black entrance gate at a Southwest Florida residence', label: 'Estate entrance' },
  { src: '/images/sliding-gate.webp', alt: 'Contemporary black sliding gate at a Florida home', label: 'Sliding gate' },
  { src: '/images/swing-gate.webp', alt: 'Decorative wrought iron swing gate between brick columns', label: 'Swing gate' },
  { src: '/images/aluminum.webp', alt: 'Black aluminum fence along a pool deck', label: 'Aluminum fence' },
]
const SLIDE_MS = 6500

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia?.(query).matches)
  useEffect(() => {
    const media = window.matchMedia?.(query)
    if (!media) return undefined
    const update = () => setReduced(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return reduced
}

// Background photos of finished projects that cross-fade behind the hero copy.
function HeroSlides({ index }) {
  return (
    <div className="home-hero__slides">
      {HERO_SLIDES.map((item, i) => (
        <img
          key={item.src}
          className={`home-hero__image home-hero__slide${i === index ? ' is-active' : ''}`}
          src={asset(item.src)}
          alt={i === index ? item.alt : ''}
          aria-hidden={i === index ? undefined : true}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
    </div>
  )
}

function HeroSlidesNav({ index, onSelect, playing, cycle, onToggle, canPlay }) {
  return (
    <div className="hero-slides-nav" role="group" aria-label="Featured projects">
      {HERO_SLIDES.map((item, i) => (
        <button
          key={item.src}
          type="button"
          className={`hero-slides-nav__dot${i === index ? ' is-active' : ''}`}
          aria-label={`Show ${item.label}`}
          aria-current={i === index ? 'true' : undefined}
          onClick={() => onSelect(i)}
        >
          <i>{i === index && canPlay ? <span key={cycle} style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: playing ? 'running' : 'paused' }} /> : null}</i>
        </button>
      ))}
      {canPlay ? (
        <button type="button" className="hero-slides-nav__toggle" onClick={onToggle} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>
          {playing ? <Pause size={13} /> : <Play size={13} />}
        </button>
      ) : null}
    </div>
  )
}

export default function HomePage() {
  const reducedMotion = usePrefersReducedMotion()
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0)
  const playing = !paused && !reducedMotion

  useEffect(() => {
    if (!playing) return undefined
    const timer = setTimeout(() => setSlide((current) => (current + 1) % HERO_SLIDES.length), SLIDE_MS)
    return () => clearTimeout(timer)
  }, [slide, playing, cycle])

  const toggleSlides = () => {
    if (paused) setCycle((n) => n + 1)
    setPaused((value) => !value)
  }

  return (
    <>
      <section className="home-hero">
        <HeroSlides index={slide} />
        <div className="home-hero__overlay" />
        <div className="shell home-hero__inner">
          <div className="home-hero__content">
            <span className="eyebrow eyebrow--light hero-reveal"><i />Fence • Gate • Automation</span>
            <h1 className="hero-reveal hero-reveal--2">Fence & gate systems built for <em>Southwest Florida.</em></h1>
            <p className="hero-reveal hero-reveal--3">Professional installation, custom fabrication and dependable access solutions for homes and businesses across Collier and Lee counties.</p>
            <div className="home-hero__actions hero-reveal hero-reveal--4">
              <ContactButton className="button button--gold" context="a free fence or gate estimate">Get a free estimate <ArrowUpRight size={18} /></ContactButton>
              <ContactButton className="button button--glass" context="a fence, gate or automation project"><Phone size={17} /> Contact Monarca</ContactButton>
            </div>
          </div>

          <div className="hero-proof hero-reveal hero-reveal--4">
            <div><Home /><span><small>Residential</small>Privacy & protection</span></div>
            <div><Building2 /><span><small>Commercial</small>Access & security</span></div>
          </div>

          <a className="hero-scroll" href="#services"><span>Explore our work</span><ArrowDown /></a>
        </div>

        <div className="home-hero__nav-wrap">
          <div className="shell">
            <HeroSlidesNav index={slide} onSelect={setSlide} playing={playing} cycle={cycle} onToggle={toggleSlides} canPlay={!reducedMotion} />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service highlights">
        <div className="shell trust-strip__inner">
          <div><ShieldCheck /><span><strong>Quality materials</strong><small>Selected for every project</small></span></div>
          <div><Hammer /><span><strong>Professional installation</strong><small>Detailed from start to finish</small></span></div>
          <div><MapPin /><span><strong>Southwest Florida</strong><small>Collier & Lee counties</small></span></div>
          <div><MessageCircle /><span><strong>Free estimates</strong><small>Call or message Monarca</small></span></div>
        </div>
      </section>

      <section className="section services-preview" id="services">
        <div className="shell">
          <div className="section-intro-row">
            <SectionHeading
              eyebrow="Built around your property"
              title="One team for the entire entrance."
              body="From clean residential privacy lines to custom automated gates, Monarca coordinates the pieces that make your property feel complete."
            />
            <TextLink to="/services">Explore all services</TextLink>
          </div>
          <div className="service-grid service-grid--preview">
            {services.slice(0, 6).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section home-about-showcase">
        <div className="shell home-about-showcase__grid">
          <div className="home-about-showcase__visual" data-reveal>
            <figure className="home-about-showcase__photo home-about-showcase__photo--primary">
              <img src={asset('/images/fabrication.webp')} alt="Monarca crafts a custom metal gate in the workshop" loading="lazy" />
            </figure>
            <figure className="home-about-showcase__photo home-about-showcase__photo--secondary">
              <img src={asset('/images/aluminum.webp')} alt="Finished black fence installation beside a Southwest Florida home" loading="lazy" />
            </figure>
            <div className="home-about-showcase__badge">
              <img src={asset('/images/logo.webp')} alt="Monarca Fence Services" loading="lazy" />
              <span>Fence • Gate • Automation</span>
            </div>
          </div>

          <div className="home-about-showcase__content" data-reveal style={{ '--reveal-delay': '100ms' }}>
            <span className="home-about-showcase__eyebrow">About Monarca</span>
            <h2>Built for security. <em>Made with precision.</em></h2>
            <p>Monarca Fence Services brings fence installation, custom gates, automation and fabrication together for residential and commercial properties across Southwest Florida.</p>
            <p>From a clean aluminum perimeter or private vinyl fence to a custom entrance and dependable access system, every project starts with the property, the way it moves and the protection it needs.</p>

            <div className="home-about-showcase__benefits" aria-label="Why property owners choose Monarca">
              <div><ShieldCheck /><span>Quality materials</span></div>
              <div><MessageCircle /><span>Free project estimates</span></div>
              <div><Hammer /><span>Professional installation</span></div>
              <div><Ruler /><span>Solutions shaped to the site</span></div>
            </div>

            <div className="home-about-showcase__locations" aria-label="Primary service areas">
              <span><MapPin />Collier County</span>
              <span><MapPin />Lee County</span>
              <span><MapPin />Southwest Florida</span>
            </div>

            <Link className="home-about-showcase__link" to="/about">Meet Monarca <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="shell">
          <div className="section-intro-row section-intro-row--light">
            <SectionHeading
              eyebrow="Featured portfolio"
              title="Three projects. Three ways to transform an entrance."
              body="A focused look at gate, aluminum fence and sliding entrance solutions from Monarca's current portfolio."
              light
            />
            <TextLink to="/gallery" light>View full gallery</TextLink>
          </div>
          <ProjectGallery items={featuredProjects} featured />
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="shell">
          <div className="section-intro-row reviews-section__intro">
            <SectionHeading
              eyebrow="Client experience"
              title="Built well. Communicated clearly."
              body="Sample testimonials are shown for layout preview while verified Monarca customer feedback is collected."
            />
            <span className="reviews-section__notice">Placeholder content</span>
          </div>
          <ReviewCarousel items={sampleReviews} />
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionHeading
            eyebrow="A clear way forward"
            title="From first message to finished entrance."
            body="Start with the details you already know. Monarca can help shape the right solution from there."
            align="center"
          />
          <div className="process-grid">
            <article data-reveal><span>01</span><MessageCircle /><h3>Tell us about it</h3><p>Share your location, project type, goals and any photos you have.</p></article>
            <article data-reveal style={{ '--reveal-delay': '90ms' }}><span>02</span><Ruler /><h3>Review the property</h3><p>Confirm measurements, access, materials and the best configuration.</p></article>
            <article data-reveal style={{ '--reveal-delay': '180ms' }}><span>03</span><Hammer /><h3>Build with detail</h3><p>Move from preparation and fabrication through installation and final review.</p></article>
          </div>
        </div>
      </section>

      <section className="area-band">
        <div className="shell area-band__inner">
          <div className="area-band__copy" data-reveal>
            <span className="eyebrow eyebrow--light"><i />Local coverage</span>
            <h2>Serving properties across Southwest Florida.</h2>
            <p>Fence, gate, automation, fabrication and repair service throughout key communities in Collier and Lee counties.</p>
            <div className="city-cloud">
              {cities.map((city) => <span key={city}><Check size={13} />{city}</span>)}
            </div>
            <Link className="button button--gold" to="/service-area">Explore service area <ArrowUpRight size={18} /></Link>
          </div>
          <div className="area-band__map" data-reveal>
            <img src={asset('/images/florida-map.webp')} alt="Southwest Florida service area map" loading="lazy" />
            <span><MapPin /> Southwest Florida</span>
          </div>
        </div>
      </section>

      <section className="home-quote">
        <div className="home-quote__grid">
          <div className="home-quote__visual">
            <img src={asset('/images/swing-gate.webp')} alt="Custom decorative gate at a Southwest Florida home" loading="lazy" />
            <div className="home-quote__visual-tag"><ShieldCheck /><span><small>Built around your property</small>Fence • Gate • Automation</span></div>
            <div className="home-quote__visual-caption"><MapPin /><span><small>Local service</small>Collier & Lee Counties</span></div>
          </div>

          <div className="home-quote__copy">
            <span className="eyebrow eyebrow--light"><i />Your project starts here</span>
            <h2>Let’s build the right solution <em>for your property.</em></h2>
            <p>Tell us what you want to protect, improve or automate. Monarca will help you choose a practical next step for the space.</p>

            <div className="home-quote__benefits" aria-label="Estimate benefits">
              <span><Check />Free, no-obligation estimate</span>
              <span><Check />Residential & commercial</span>
            </div>

            <div className="home-quote__channels" aria-label="Available contact methods">
              <span><Phone /><span><small>Call</small><strong>{contact.phone}</strong></span></span>
              <span><MessageSquareText /><span><small>Text</small><strong>Send details</strong></span></span>
              <span><MessageCircle /><span><small>WhatsApp</small><strong>Start a chat</strong></span></span>
            </div>

            <div className="home-quote__action">
              <ContactButton className="button button--gold" context="a free fence or gate estimate"><MessageCircle size={18} />Choose contact method <ArrowUpRight size={18} /></ContactButton>
              <span>No form or account required.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
