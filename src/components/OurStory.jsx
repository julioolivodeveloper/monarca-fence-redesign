import { Building2, Home, Landmark, MapPin, Users } from 'lucide-react'
import { asset } from '../lib/asset'

// "Our story" section, taken from Monarca's own flyer: established November 7, 2005 in Florida,
// family-driven, 20+ years serving Southwest Florida.
const SERVED = [
  { icon: Home, label: 'Homeowners' },
  { icon: Building2, label: 'Businesses' },
  { icon: Users, label: 'HOAs' },
  { icon: Landmark, label: 'Property managers' },
]

export default function OurStory({ id = 'our-story' }) {
  return (
    <section className="section our-story" id={id} aria-labelledby={`${id}-title`}>
      <div className="shell our-story__grid">
        <div className="our-story__visual" data-reveal>
          <figure className="our-story__portrait">
            <img src={asset('/images/our-story.webp')} alt="Illustration of the family team behind Monarca Fence Services" loading="lazy" />
          </figure>
          <div className="our-story__seal" aria-label="In business since November 7, 2005">
            <small>Est.</small>
            <strong>2005</strong>
            <span>Since Nov 7, 2005</span>
          </div>
          <div className="our-story__tag"><MapPin />Locally owned & operated</div>
        </div>

        <div className="our-story__content" data-reveal style={{ '--reveal-delay': '100ms' }}>
          <span className="eyebrow eyebrow--light"><i />Our story</span>
          <h2 id={`${id}-title`}>Family-driven <em>since 2005.</em></h2>
          <p className="our-story__lead">Monarca Fence Services Inc. was officially established on <strong>November 7, 2005</strong>, in the State of Florida.</p>
          <p>What started as a small, family-driven business has grown through hard work, discipline and a commitment to doing every project the right way.</p>
          <p>For more than 20 years, we have proudly served homeowners, businesses, HOAs and property management companies throughout Southwest Florida, providing high-quality aluminum fences, PVC/vinyl fences, chain-link fences, custom gates, automation and fabrication, always focused on security, beauty and lasting value.</p>

          <div className="our-story__timeline" aria-label="Monarca timeline">
            <div><span>2005</span><p>Officially established in the State of Florida</p></div>
            <div><span>Today</span><p>20+ years serving Southwest Florida</p></div>
          </div>

          <div className="our-story__served" aria-label="Who we serve">
            {SERVED.map(({ icon: Icon, label }) => <span key={label}><Icon />{label}</span>)}
          </div>

          <blockquote className="our-story__motto">Your property. Our commitment. <em>Built like a Monarca.</em></blockquote>
        </div>
      </div>
    </section>
  )
}
