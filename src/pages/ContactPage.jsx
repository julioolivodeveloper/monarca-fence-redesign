import { ArrowUpRight, MapPin, MessageCircle, MessageSquareText, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { ContactButton } from '../components/ContactModal'
import { PageHero, SectionHeading } from '../components/UI'
import { cities, contact } from '../data'
import { asset } from '../lib/asset'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const selectedCity = searchParams.get('city')
  const selectedType = searchParams.get('type')
  const projectContext = [selectedType, selectedCity && `in ${selectedCity}`].filter(Boolean).join(' ') || 'a fence, gate or automation project'

  return (
    <>
      <PageHero
        eyebrow="Direct contact"
        title="Choose the conversation that works for you."
        body="No forms or account required. Call, text or message Monarca on WhatsApp to begin your Southwest Florida project."
        image={asset('/images/vinyl.webp')}
      >
        <ContactButton className="button button--gold" context={projectContext}>Open contact options <ArrowUpRight size={18} /></ContactButton>
      </PageHero>

      <section className="section contact-page">
        <div className="shell contact-page__grid">
          <div className="contact-page__intro">
            <SectionHeading
              eyebrow="Start a conversation"
              title="Three direct ways to reach Monarca."
              body="Choose call, text message or WhatsApp in the contact popup. Photos and the property location are especially useful for repairs, replacement projects and custom entrances."
            />

            <div className="contact-page__details" data-reveal>
              <div><Phone /><span><small>Phone</small>{contact.phone}</span></div>
              <div><MessageSquareText /><span><small>Text message</small>Send project details</span></div>
              <div><MessageCircle /><span><small>WhatsApp</small>Share photos and questions</span></div>
            </div>

            <div className="contact-page__coverage" data-reveal>
              <h3><MapPin /> Service area</h3>
              <p>{cities.join(' • ')}</p>
            </div>
          </div>

          <div className="contact-choice-panel contact-choice-panel--large" data-reveal>
            <span className="eyebrow"><i />Contact options</span>
            <h3>One tap. No form.</h3>
            <p>Open the contact menu and choose the fastest option for you. Text and WhatsApp include a ready-to-send introduction that you can edit before sending.</p>
            <div className="contact-choice-panel__channels" aria-label="Available contact methods">
              <span><Phone />Call</span>
              <span><MessageSquareText />Text</span>
              <span><MessageCircle />WhatsApp</span>
            </div>
            <ContactButton className="button button--gold" context={projectContext}>Contact Monarca <ArrowUpRight size={18} /></ContactButton>
            <small>Serving Collier and Lee counties.</small>
          </div>
        </div>
      </section>
    </>
  )
}
