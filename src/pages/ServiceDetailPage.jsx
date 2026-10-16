import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Hammer,
  MessageCircle,
  Phone,
  Ruler,
} from 'lucide-react'
import { ContactButton } from '../components/ContactModal'
import { services } from '../data'
import { PageHero, SectionHeading, ServiceCard } from '../components/UI'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const detail = service.detail
  const relatedServices = detail.related
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter(Boolean)

  return (
    <>
      <PageHero
        eyebrow={`${service.category} service`}
        title={`${service.title} in Southwest Florida.`}
        body={`${detail.headline} ${service.description}`}
        image={service.image}
      >
        <ContactButton className="button button--gold" context={service.title}>
          Request an estimate <ArrowUpRight size={18} />
        </ContactButton>
        <ContactButton className="button button--glass" context={service.title}><Phone size={17} /> Contact Monarca</ContactButton>
      </PageHero>

      <nav className="service-breadcrumb" aria-label="Breadcrumb">
        <div className="shell">
          <Link to="/services"><ArrowLeft size={15} /> All services</Link>
          <span>/</span>
          <strong>{service.title}</strong>
        </div>
      </nav>

      <section className="section service-overview">
        <div className="shell service-overview__grid">
          <div className="service-overview__copy">
            <SectionHeading eyebrow={service.title} title={detail.headline} />
            {detail.overview.map((paragraph) => <p key={paragraph} data-reveal>{paragraph}</p>)}
            <ContactButton className="text-link" context={service.title}>
              Discuss this service <ArrowRight size={18} />
            </ContactButton>
          </div>

          <aside className="service-highlights" data-reveal>
            <span>Service overview</span>
            <h2>Why property owners consider it</h2>
            <ul>
              {detail.highlights.map((item) => <li key={item}><Check size={18} />{item}</li>)}
            </ul>
            <div className="service-highlights__image">
              <img src={service.image} alt={`${service.title} project detail`} loading="lazy" />
            </div>
          </aside>
        </div>
      </section>

      <section className="service-applications">
        <div className="shell service-applications__inner">
          <div data-reveal>
            <span className="eyebrow eyebrow--light"><i />Common applications</span>
            <h2>Where this solution fits.</h2>
          </div>
          <div className="application-list">
            {detail.applications.map((application, index) => (
              <div key={application} data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{application}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-planning">
        <div className="shell">
          <SectionHeading
            eyebrow="Plan it well"
            title={`Three decisions that shape a better ${service.title.toLowerCase()} project.`}
            body="A useful estimate starts with the property conditions and the way the finished system needs to function."
            align="center"
          />
          <div className="planning-grid">
            {detail.planning.map((item, index) => (
              <article key={item.title} data-reveal style={{ '--reveal-delay': `${index * 90}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="shell service-process__inner">
          <div className="service-process__intro" data-reveal>
            <span className="eyebrow eyebrow--light"><i />What to expect</span>
            <h2>A direct path from idea to installation.</h2>
            <p>Project details vary by property, but the conversation begins with the same three essentials.</p>
          </div>
          <div className="service-process__steps">
            <article data-reveal><ClipboardCheck /><span>01</span><h3>Share the goal</h3><p>Send the location, service type, photos and the result you want.</p></article>
            <article data-reveal style={{ '--reveal-delay': '80ms' }}><Ruler /><span>02</span><h3>Review the site</h3><p>Confirm dimensions, grade, access, materials and operating needs.</p></article>
            <article data-reveal style={{ '--reveal-delay': '160ms' }}><Hammer /><span>03</span><h3>Build the solution</h3><p>Coordinate preparation, fabrication or materials, installation and final review.</p></article>
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="shell service-faq__grid">
          <SectionHeading
            eyebrow="Useful answers"
            title={`${service.title} questions.`}
            body="These are general planning answers. A property review is the best way to confirm the right configuration for a specific project."
          />
          <div className="faq-list">
            {detail.faqs.map((faq, index) => (
              <details key={faq.question} data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}>
                <summary><span>{faq.question}</span><ChevronDown size={20} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section related-services">
        <div className="shell">
          <div className="section-intro-row">
            <SectionHeading eyebrow="Complete the project" title="Related Monarca services." />
            <Link className="text-link" to="/services">View every service <ArrowRight size={18} /></Link>
          </div>
          <div className="service-grid">
            {relatedServices.map((relatedService, index) => (
              <ServiceCard key={relatedService.slug} service={relatedService} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="shell service-detail-cta__inner" data-reveal>
          <div>
            <span>Ready to discuss {service.title.toLowerCase()}?</span>
            <h2>Start with a photo and your property location.</h2>
          </div>
          <div>
            <ContactButton className="button button--gold" context={service.title}>Free estimate <ArrowUpRight size={18} /></ContactButton>
            <ContactButton className="button button--glass" context={service.title}><MessageCircle size={17} /> Contact options</ContactButton>
          </div>
        </div>
      </section>
    </>
  )
}
