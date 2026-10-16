import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { ContactButton } from '../components/ContactModal'
import { services } from '../data'
import { PageHero, SectionHeading, ServiceCard } from '../components/UI'
import { asset } from '../lib/asset'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete solutions"
        title="Fence, gate and access services under one roof."
        body="Explore Monarca's residential and commercial solutions for properties across Southwest Florida."
        image={asset('/images/sliding-gate.webp')}
      >
        <ContactButton className="button button--gold" context="a free fence, gate or automation estimate">Request an estimate <ArrowUpRight size={18} /></ContactButton>
      </PageHero>

      <section className="section service-catalog">
        <div className="shell">
          <SectionHeading
            eyebrow="Find your solution"
            title="Built for privacy, access, security and style."
            body="Choose a starting point below. Monarca can combine fence, gate, fabrication and automation services into one coordinated project."
          />
          <div className="service-grid service-grid--catalog">
            {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="shell detail-band__inner">
          <div data-reveal>
            <span className="eyebrow eyebrow--light"><i />More than installation</span>
            <h2>One coordinated entrance, down to the working details.</h2>
          </div>
          <ul data-reveal>
            <li><Check /> Gate motors and operators</li>
            <li><Check /> Keypads, sensors and controls</li>
            <li><Check /> Concrete bases and footings</li>
            <li><Check /> Handrails and metal structures</li>
            <li><Check /> Fence and gate repairs</li>
            <li><Check /> Powder-coated finishes</li>
          </ul>
        </div>
      </section>

      <section className="section simple-cta">
        <div className="shell simple-cta__inner" data-reveal>
          <div><span className="eyebrow"><i />Not sure what fits?</span><h2>Start with your property, not a product.</h2><p>Share a photo and describe what you want to protect, open or improve. Monarca can help narrow the options.</p></div>
          <ContactButton className="button button--dark" context="help choosing the right fence or gate solution"><MessageCircle size={18} /> Discuss your project</ContactButton>
        </div>
      </section>
    </>
  )
}
