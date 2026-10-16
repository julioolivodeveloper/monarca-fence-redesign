import { ArrowUpRight, Check, Eye, Hammer, HeartHandshake, ShieldCheck } from 'lucide-react'
import { ContactButton } from '../components/ContactModal'
import { CheckList, PageHero, SectionHeading } from '../components/UI'
import { asset } from '../lib/asset'
import OurStory from '../components/OurStory'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Monarca"
        title="Protection should look like it belongs there."
        body="Monarca Fence Services brings installation, fabrication, gates and access solutions together for Southwest Florida properties."
        image={asset('/images/swing-gate.webp')}
      />
      <OurStory id="about-story" />
      <section className="section about-intro">
        <div className="shell about-intro__grid">
          <div className="about-intro__copy">
            <SectionHeading eyebrow="The Monarca approach" title="Strength, detail and a solution shaped around the site." />
            <p data-reveal>Monarca works across residential and commercial projects, from straightforward fence installations to custom entrances that combine metal fabrication and automated access.</p>
            <p data-reveal>The focus is practical: understand the property, select the right system and finish the work with attention to alignment, movement and appearance.</p>
            <CheckList items={['Quality materials', 'Professional installation', 'Custom solutions', 'Reliable service']} />
            <ContactButton className="button button--dark" context="a fence, gate or automation project">Build your project <ArrowUpRight size={18} /></ContactButton>
          </div>
          <div className="about-intro__media" data-reveal>
            <img src={asset('/images/aluminum.webp')} alt="Modern black aluminum fence installation" />
            <div><strong>Monarca</strong><span>Fence • Gate • Automation</span></div>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="shell">
          <SectionHeading eyebrow="What guides the work" title="A clear standard at every stage." align="center" />
          <div className="values-grid">
            <article data-reveal><ShieldCheck /><h3>Protection</h3><p>Solutions selected around the property's privacy, access and security needs.</p></article>
            <article data-reveal style={{ '--reveal-delay': '70ms' }}><Eye /><h3>Attention to detail</h3><p>Thoughtful alignment, finish and coordination across the visible parts of the project.</p></article>
            <article data-reveal style={{ '--reveal-delay': '140ms' }}><Hammer /><h3>Custom capability</h3><p>Fence, gate, automation and fabrication brought together by one team.</p></article>
            <article data-reveal style={{ '--reveal-delay': '210ms' }}><HeartHandshake /><h3>Direct service</h3><p>A straightforward path from the first project conversation to follow-up.</p></article>
          </div>
        </div>
      </section>
      <section className="about-cta">
        <div className="shell about-cta__inner" data-reveal><span>No construimos cercas.<br /><em>Construimos confianza.</em></span><ContactButton className="button button--gold" context="a free fence or gate estimate">Request a free estimate <ArrowUpRight size={18} /></ContactButton></div>
      </section>
    </>
  )
}
