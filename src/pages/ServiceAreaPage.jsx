import { ArrowUpRight, Check, MapPin, Navigation } from 'lucide-react'
import { ContactButton } from '../components/ContactModal'
import { cities } from '../data'
import { PageHero, SectionHeading } from '../components/UI'
import { asset } from '../lib/asset'

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Local service"
        title="Built for properties across Southwest Florida."
        body="Monarca provides fence, gate, automation, fabrication and repair solutions throughout Collier and Lee counties."
        image={asset('/images/black-chain-link.webp')}
      >
        <ContactButton className="button button--gold" context="service availability for my property">Check your property <ArrowUpRight size={18} /></ContactButton>
      </PageHero>
      <section className="section service-area-page">
        <div className="shell service-area-page__grid">
          <div>
            <SectionHeading eyebrow="Coverage" title="Your city may already be on our route." body="Select your location when requesting an estimate. For nearby Southwest Florida communities not listed here, contact Monarca to confirm availability." />
            <div className="city-list">
              {cities.map((city, index) => (
                <ContactButton context={`service in ${city}`} key={city} data-reveal style={{ '--reveal-delay': `${index * 50}ms` }}>
                  <span>{String(index + 1).padStart(2, '0')}</span><strong>{city}</strong><Navigation size={18} />
                </ContactButton>
              ))}
            </div>
          </div>
          <aside className="service-area-page__map" data-reveal>
            <img src={asset('/images/florida-map.webp')} alt="Map highlighting Southwest Florida" />
            <div><MapPin /><span><small>Primary region</small>Collier & Lee Counties</span></div>
          </aside>
        </div>
      </section>
      <section className="coverage-band">
        <div className="shell coverage-band__inner">
          <div data-reveal><span className="eyebrow eyebrow--light"><i />Available solutions</span><h2>Residential and commercial service.</h2></div>
          <ul data-reveal><li><Check /> Fence installation</li><li><Check /> Custom gates</li><li><Check /> Gate automation</li><li><Check /> Fabrication & repairs</li></ul>
        </div>
      </section>
    </>
  )
}
