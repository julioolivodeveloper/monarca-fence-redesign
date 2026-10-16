import { ArrowUpRight } from 'lucide-react'
import { ContactButton } from '../components/ContactModal'
import { PageHero, ProjectGallery, SectionHeading } from '../components/UI'
import { asset } from '../lib/asset'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title="Work you can inspect, not just imagine."
        body="Browse Monarca's current collection of fence, gate, automation, fabrication and repair imagery."
        image={asset('/images/aluminum.webp')}
      />
      <section className="section gallery-page">
        <div className="shell">
          <SectionHeading eyebrow="Explore by category" title="Details make the difference." body="Filter the collection, then select any project for a larger view." />
          <ProjectGallery />
        </div>
      </section>
      <section className="gallery-cta">
        <div className="shell gallery-cta__inner" data-reveal>
          <div><small>Have a project in mind?</small><h2>Show us the look you want.</h2></div>
          <ContactButton className="button button--gold" context="a project inspired by the Monarca gallery">Start an estimate <ArrowUpRight size={18} /></ContactButton>
        </div>
      </section>
    </>
  )
}
