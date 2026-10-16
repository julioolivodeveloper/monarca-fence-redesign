import { asset } from './lib/asset'
export const contact = {
  phone: '239-595-3927',
  phoneHref: 'tel:+12395953927',
  sms: 'sms:+12395953927',
  whatsapp: 'https://wa.me/12395953927',
  email: 'Monarcafences@gmail.com',
  emailHref: 'mailto:Monarcafences@gmail.com',
  instagram: 'https://www.instagram.com/monarcfencing',
  tiktok: 'https://www.tiktok.com/@monarca2009live.c',
}

export const cities = [
  'Naples',
  'Bonita Springs',
  'Estero',
  'Fort Myers',
  'Cape Coral',
  'Lehigh Acres',
  'Marco Island',
  'LaBelle',
]

export const services = [
  {
    slug: 'aluminum',
    title: 'Aluminum Fences',
    short: 'Clean lines, lasting strength and low-maintenance protection.',
    description: 'Modern aluminum fence systems for pools, yards, residences and commercial properties throughout Southwest Florida.',
    image: asset('/images/aluminum.webp'),
    category: 'Fences',
    icon: 'PanelsTopLeft',
    detail: {
      headline: 'Open sight lines with a clean architectural finish.',
      overview: [
        'Aluminum fencing is a strong fit when a property needs a defined boundary without closing off the view. Its narrow profiles and crisp geometry work especially well around landscaped yards, front elevations, walkways and pool areas.',
        'A successful layout depends on more than panel style. Grade changes, gate placement, post spacing and transitions into existing walls or structures should all be reviewed before the final configuration is selected.',
      ],
      highlights: ['Low routine maintenance', 'Open and elegant appearance', 'Multiple heights and picket layouts', 'Pairs naturally with custom gates'],
      applications: ['Pool and patio enclosures', 'Front and side yards', 'Residential perimeters', 'Commercial properties'],
      planning: [
        { title: 'Choose the sight line', text: 'Select a height, picket spacing and top profile that balance visibility with the level of separation you need.' },
        { title: 'Map gates and transitions', text: 'Plan pedestrian gates, driveway access and connection points before setting the fence line.' },
        { title: 'Review grade and codes', text: 'Slopes, drainage, pool-barrier requirements and applicable local or HOA rules can affect the final layout.' },
      ],
      faqs: [
        { question: 'Is aluminum fencing suitable around a pool?', answer: 'It can be an excellent pool enclosure when the selected height, spacing, gates and latches satisfy the applicable barrier requirements for the property.' },
        { question: 'Can aluminum follow a sloped yard?', answer: 'Many layouts can be racked or stepped to follow grade changes. The best method depends on the slope and the visual result you want.' },
        { question: 'What maintenance does it need?', answer: 'Routine cleaning and occasional inspection of gates, fasteners and finish are generally the main maintenance items.' },
      ],
      related: ['swing-gates', 'automation', 'powder-coating'],
    },
  },
  {
    slug: 'vinyl',
    title: 'Vinyl / PVC Fences',
    short: 'Private, polished and made for Florida weather.',
    description: 'Privacy and decorative vinyl solutions with a crisp finish for residential and commercial spaces.',
    image: asset('/images/vinyl.webp'),
    category: 'Fences',
    icon: 'Fence',
    detail: {
      headline: 'Private outdoor spaces with a bright, consistent finish.',
      overview: [
        'Vinyl and PVC fencing are popular for backyards, side yards and pool surroundings where privacy and a uniform appearance are the priorities. Solid panels reduce direct views while creating a clean backdrop for landscaping and outdoor living areas.',
        'Panel height, post depth, gate width and wind exposure all matter. A site review helps determine how the system should respond to property lines, grade changes and everyday access needs.',
      ],
      highlights: ['Full and semi-private styles', 'No routine painting or staining', 'Consistent color and finish', 'Easy-to-clean surfaces'],
      applications: ['Backyard privacy', 'Pool surroundings', 'Side-yard screening', 'Residential boundaries'],
      planning: [
        { title: 'Set the privacy level', text: 'Choose between solid, semi-private or decorative configurations based on airflow, visibility and appearance.' },
        { title: 'Size the access points', text: 'Pedestrian and equipment gates should be planned around how the yard will actually be used.' },
        { title: 'Account for exposure', text: 'Post setting, panel layout and reinforcement should reflect the site, gate size and local wind conditions.' },
      ],
      faqs: [
        { question: 'How is vinyl fencing cleaned?', answer: 'Most surface dirt can be handled with water, mild soap and a soft brush. Hardware and gates should also be checked periodically.' },
        { question: 'Can vinyl include decorative details?', answer: 'Yes. Depending on the selected system, options may include lattice, picket accents, contrasting caps and semi-private sections.' },
        { question: 'Can a wide equipment gate be added?', answer: 'Wide access can often be incorporated, but the opening, hardware and support should be planned together to maintain reliable alignment.' },
      ],
      related: ['aluminum', 'repairs', 'swing-gates'],
    },
  },
  {
    slug: 'chain-link',
    title: 'Chain Link Fences',
    short: 'Practical security for homes, businesses and open land.',
    description: 'Dependable chain-link installations configured around the access, visibility and security your property needs.',
    image: asset('/images/chain-link.webp'),
    category: 'Fences',
    icon: 'Grid3X3',
    detail: {
      headline: 'Straightforward security with visibility and flexibility.',
      overview: [
        'Chain-link fencing is a practical way to define a perimeter while preserving airflow and visibility. It works across residential yards, commercial spaces, utility areas and larger properties where function and efficient coverage matter.',
        'The right specification depends on fence height, mesh, wire gauge, terminal posts, gates and the level of daily use. Privacy features can also be considered where selective screening is needed.',
      ],
      highlights: ['Visible, breathable perimeter', 'Flexible heights and configurations', 'Pedestrian and vehicle gates', 'Practical coverage for larger areas'],
      applications: ['Residential yards', 'Commercial perimeters', 'Equipment and utility areas', 'Large property boundaries'],
      planning: [
        { title: 'Define the security need', text: 'Height, wire gauge and gate hardware should match the property, traffic and purpose of the enclosure.' },
        { title: 'Plan access early', text: 'Locate walk gates, service gates and driveway openings before the fence line is finalized.' },
        { title: 'Consider screening', text: 'Privacy slats or selected screened sections can reduce views without changing the entire fence system.' },
      ],
      faqs: [
        { question: 'What determines chain-link strength?', answer: 'Wire gauge, mesh size, post spacing, framework and installation all influence how the finished system performs.' },
        { question: 'Can privacy be added?', answer: 'Privacy slats and other screening options may be added where less visibility is preferred. Wind exposure should be considered when adding screening.' },
        { question: 'Can chain link include a driveway gate?', answer: 'Yes. Swinging or sliding access can be planned based on the opening, available space, grade and how frequently the gate will operate.' },
      ],
      related: ['black-chain-link', 'sliding-gates', 'repairs'],
    },
  },
  {
    slug: 'black-chain-link',
    title: 'Black Chain Link',
    short: 'Reliable protection with a refined dark finish.',
    description: 'A subtle alternative to traditional galvanized chain link that blends naturally into landscaped properties.',
    image: asset('/images/black-chain-link.webp'),
    category: 'Fences',
    icon: 'Grid2X2',
    detail: {
      headline: 'The practicality of chain link with a quieter visual profile.',
      overview: [
        'Black chain-link fencing uses a dark coated finish to help the fence recede into landscaping and surrounding views. It provides the openness and efficient coverage of chain link with a more refined appearance.',
        'It can be configured for residential boundaries, pet areas, commercial properties and recreation spaces. Matching framework, fittings and gates create a consistent finished system.',
      ],
      highlights: ['Dark coated appearance', 'Blends into landscaped settings', 'Open visibility and airflow', 'Coordinated gates and framework'],
      applications: ['Landscaped yards', 'Pet enclosures', 'Commercial boundaries', 'Recreation areas'],
      planning: [
        { title: 'Coordinate the finish', text: 'Framework, fittings, ties and gates should be selected as one visual system rather than as isolated parts.' },
        { title: 'Select height and mesh', text: 'The enclosure purpose determines the most appropriate height, mesh and hardware.' },
        { title: 'Protect high-use areas', text: 'Gate openings and corners deserve particular attention because they receive more movement and contact.' },
      ],
      faqs: [
        { question: 'How is black chain link different from galvanized chain link?', answer: 'It uses a dark coated finish over the wire and typically coordinates that look across the framework and fittings.' },
        { question: 'Does the dark finish require care?', answer: 'Periodic cleaning and inspection are helpful, especially around gates or areas where the coating may be scraped by repeated contact.' },
        { question: 'Can it be automated?', answer: 'A compatible sliding or swing gate can be automated when the opening, gate construction, operator and safety devices are planned together.' },
      ],
      related: ['chain-link', 'sliding-gates', 'automation'],
    },
  },
  {
    slug: 'sliding-gates',
    title: 'Sliding Gates',
    short: 'Smooth access for wide driveways and compact sites.',
    description: 'Custom sliding gate solutions designed around your entrance, traffic pattern and available space.',
    image: asset('/images/sliding-gate.webp'),
    category: 'Gates',
    icon: 'PanelRightOpen',
    detail: {
      headline: 'Wide, controlled access without a swinging gate arc.',
      overview: [
        'Sliding gates move parallel to the fence line, making them useful where a driveway needs a broad opening or where a swinging leaf would interfere with vehicle space. They can serve residences, estates and commercial entrances.',
        'The design must account for clear run-back space, grade, gate weight, daily traffic and the desired operating system. Track and cantilever-style configurations have different site requirements and should be evaluated at the property.',
      ],
      highlights: ['No inward or outward swing arc', 'Suitable for broad driveway openings', 'Manual or automated configurations', 'Custom frames and infill styles'],
      applications: ['Residential driveways', 'Estate entrances', 'Commercial access', 'High-use vehicle openings'],
      planning: [
        { title: 'Measure run-back space', text: 'The gate needs enough clear space beside the opening to travel fully without obstruction.' },
        { title: 'Evaluate the surface', text: 'Slope, drainage, pavement and debris conditions help determine the most appropriate gate configuration.' },
        { title: 'Plan automation together', text: 'Gate frame, operator, access controls and safety devices should be designed as one operating system.' },
      ],
      faqs: [
        { question: 'How much side space does a sliding gate need?', answer: 'It generally needs clear run-back space at least comparable to the opening, and some systems require additional room. The exact amount depends on the gate design.' },
        { question: 'Can a sliding gate work on a sloped driveway?', answer: 'Possibly, but grade and the direction of travel must be reviewed carefully because they affect gate geometry and operator load.' },
        { question: 'Can access controls be added?', answer: 'Yes. Keypads, remotes and other controls can be considered along with the operator and required safety devices.' },
      ],
      related: ['automation', 'fabrication', 'black-chain-link'],
    },
  },
  {
    slug: 'swing-gates',
    title: 'Swing Gates',
    short: 'A strong, welcoming entrance shaped for your property.',
    description: 'Single and double swing gates for homes, estates and commercial properties with coordinated hardware and finishes.',
    image: asset('/images/swing-gate.webp'),
    category: 'Gates',
    icon: 'DoorOpen',
    detail: {
      headline: 'A classic entrance configured around space, grade and style.',
      overview: [
        'Swing gates create a strong visual entrance and can be built as a single leaf or a balanced pair. They work well where the driveway provides a clear opening arc and the gate style should become part of the property architecture.',
        'Leaf width, gate weight, hinge placement, wind exposure and driveway slope all influence the design. Those same factors matter when selecting an automatic operator.',
      ],
      highlights: ['Single or double-leaf layouts', 'Decorative and contemporary styles', 'Manual or automated operation', 'Custom metal fabrication options'],
      applications: ['Home driveways', 'Estate entrances', 'Courtyards and walkways', 'Commercial properties'],
      planning: [
        { title: 'Protect the swing path', text: 'Vehicles, landscaping and grade must stay clear through the full opening and closing arc.' },
        { title: 'Balance size and weight', text: 'Leaf dimensions, frame design, infill and hardware should work together to limit sag and support smooth movement.' },
        { title: 'Coordinate access', text: 'Pedestrian access, vehicle controls and automation should be considered before fabrication begins.' },
      ],
      faqs: [
        { question: 'Should a driveway use one leaf or two?', answer: 'That depends on opening width, available swing space, appearance, gate weight and the automation approach.' },
        { question: 'Can a swing gate open on a sloped driveway?', answer: 'Slope can restrict the opening arc. The grade should be measured before choosing gate direction, clearance and hinge geometry.' },
        { question: 'Can an existing swing gate be automated?', answer: 'Sometimes. The gate condition, alignment, hinges, stops, operating force and safety needs must be assessed first.' },
      ],
      related: ['automation', 'fabrication', 'aluminum'],
    },
  },
  {
    slug: 'automation',
    title: 'Gate Automation',
    short: 'Convenient entry control with dependable daily operation.',
    description: 'Motors, keypads, sensors and access controls for new and existing gates.',
    image: asset('/images/automation.webp'),
    category: 'Automation',
    icon: 'ScanFace',
    detail: {
      headline: 'Convenient access built around safe, reliable gate movement.',
      overview: [
        'Gate automation combines the moving gate, operator, controls and safety devices into one system. A good design starts with a gate that moves freely and an operator selected for its size, weight, geometry and expected cycle frequency.',
        'Access can then be shaped around the property with remotes, keypads, sensors and other control options. The exact combination should reflect who enters, how often and how visitors are handled.',
      ],
      highlights: ['Swing and sliding gate operators', 'Keypads and access controls', 'Vehicle and safety sensors', 'New or compatible existing gates'],
      applications: ['Residential driveways', 'Community entrances', 'Commercial access points', 'Controlled service areas'],
      planning: [
        { title: 'Start with gate condition', text: 'A gate should be structurally sound, aligned and easy to move before automation equipment is selected.' },
        { title: 'Match the operator', text: 'Gate type, weight, length, wind load and expected daily cycles influence operator selection.' },
        { title: 'Design the full safety system', text: 'Controls, entrapment protection, detection devices, stops and emergency access must be planned together.' },
      ],
      faqs: [
        { question: 'Can automation be added to an existing gate?', answer: 'It may be possible after reviewing the gate structure, movement, hinges or rollers, available power and space for safety equipment.' },
        { question: 'What access controls are available?', answer: 'Options may include remotes, keypads, vehicle detection and other control devices. The best mix depends on the users and property.' },
        { question: 'What happens if the power is out?', answer: 'The appropriate backup or manual-release approach depends on the selected operator and property requirements and should be reviewed during planning.' },
      ],
      related: ['sliding-gates', 'swing-gates', 'repairs'],
    },
  },
  {
    slug: 'fabrication',
    title: 'Custom Fabrication',
    short: 'Metalwork built around the dimensions of your project.',
    description: 'Custom gates, handrails and metal structures fabricated for residential and commercial applications.',
    image: asset('/images/fabrication.webp'),
    category: 'Specialty',
    icon: 'Wrench',
    detail: {
      headline: 'Metalwork shaped around the property instead of a standard size.',
      overview: [
        'Custom fabrication makes it possible to solve dimensions, transitions and visual requirements that standard components cannot address. Monarca offers fabrication for gates, handrails and other metal structures used in residential and commercial projects.',
        'The process begins with field dimensions and a clear understanding of function. Material, frame design, infill, hardware, finish and connection points are then coordinated before fabrication and installation.',
      ],
      highlights: ['Built around field dimensions', 'Custom gates and metal structures', 'Coordinated hardware and finishes', 'Residential and commercial applications'],
      applications: ['Custom driveway gates', 'Pedestrian gates', 'Handrails', 'Special metal structures'],
      planning: [
        { title: 'Define the function', text: 'Clarify movement, access, load, clearance and connection needs before focusing on appearance.' },
        { title: 'Develop the visual language', text: 'Frame proportions, infill direction, ornament and finish should relate to the surrounding architecture.' },
        { title: 'Verify before fabrication', text: 'Final dimensions, hardware, automation provisions and site connections should be confirmed before production.' },
      ],
      faqs: [
        { question: 'What can be custom fabricated?', answer: 'The current Monarca service offering includes custom gates, handrails and metal structures for residential and commercial applications.' },
        { question: 'Can automation be planned into a custom gate?', answer: 'Yes. Operator geometry, attachment points, gate weight and safety equipment are best considered during the gate design stage.' },
        { question: 'How is the finish selected?', answer: 'Finish selection depends on the material, desired appearance, exposure and maintenance expectations. Powder coating is one available service.' },
      ],
      related: ['powder-coating', 'swing-gates', 'sliding-gates'],
    },
  },
  {
    slug: 'powder-coating',
    title: 'Powder Coating',
    short: 'A durable, uniform finish that completes the build.',
    description: 'Professional coating solutions for a polished appearance and added protection.',
    image: asset('/images/powder-coating.webp'),
    category: 'Specialty',
    icon: 'Paintbrush',
    detail: {
      headline: 'A uniform finish that completes and protects the metalwork.',
      overview: [
        'Powder coating applies a dry finishing material that is cured to create a consistent coating over properly prepared metal. It is commonly used where a clean appearance and durable finish are important.',
        'Results depend heavily on surface condition and preparation. The part, existing coating, corrosion, welds, edges, color and intended exposure should be reviewed before choosing the finishing process.',
      ],
      highlights: ['Uniform finished appearance', 'Range of color possibilities', 'Useful for new custom metalwork', 'Complements gates and fabricated pieces'],
      applications: ['Custom gates', 'Fence components', 'Handrails', 'Fabricated metal pieces'],
      planning: [
        { title: 'Inspect the substrate', text: 'Existing paint, corrosion, contamination and surface damage affect the preparation required before coating.' },
        { title: 'Select color and sheen', text: 'Color, gloss level and texture should be coordinated with the property and adjoining fence or gate components.' },
        { title: 'Plan for handling', text: 'Part size, removable hardware, contact points and installation sequencing should be considered before finishing.' },
      ],
      faqs: [
        { question: 'Is surface preparation important?', answer: 'Yes. Cleaning and preparing the metal is a critical part of achieving a consistent, well-adhered finish.' },
        { question: 'Can an existing gate be powder coated?', answer: 'Possibly. Its construction, current finish, corrosion, removable components and transport or handling requirements should be evaluated first.' },
        { question: 'Can the finish match other fence components?', answer: 'A coordinated color can often be selected, although exact appearance may vary with material, texture, age and the existing adjacent finish.' },
      ],
      related: ['fabrication', 'aluminum', 'repairs'],
    },
  },
  {
    slug: 'repairs',
    title: 'Repairs & Service',
    short: 'Restore safe movement, alignment and dependable closure.',
    description: 'Fence and gate repair services for damaged sections, hardware, access systems and everyday wear.',
    image: asset('/images/repairs.webp'),
    category: 'Service',
    icon: 'Settings',
    detail: {
      headline: 'Restore alignment, movement and dependable everyday use.',
      overview: [
        'Fence and gate problems can begin with impact damage, shifting posts, worn hardware, corrosion or an operator issue. A useful repair starts by identifying the cause instead of addressing only the visible symptom.',
        'Monarca services fence sections, gates, hardware and access systems. The condition of surrounding posts, frames and foundations helps determine whether adjustment, component replacement or a larger rebuild is the sensible path.',
      ],
      highlights: ['Fence and gate assessment', 'Hardware and alignment issues', 'Damaged sections and posts', 'Access and automation troubleshooting'],
      applications: ['Sagging or dragging gates', 'Damaged fence sections', 'Loose or worn hardware', 'Gate operator concerns'],
      planning: [
        { title: 'Document the problem', text: 'Photos, a short video and a description of when the issue occurs can make the first evaluation more useful.' },
        { title: 'Find the underlying cause', text: 'Posts, hinges, rollers, frames, stops, power and controls may all contribute to the same visible problem.' },
        { title: 'Compare repair and replacement', text: 'Condition, compatibility and the remaining life of adjacent components should guide the recommendation.' },
      ],
      faqs: [
        { question: 'What information should I send for a repair?', answer: 'Include the property location, clear photos of the full opening and close-ups of the problem, plus a description of how the fence or gate behaves.' },
        { question: 'Can an automatic gate be serviced?', answer: 'Monarca lists gate automation and repairs among its services. The gate, operator, power and controls should be evaluated as a complete system.' },
        { question: 'When is replacement better than repair?', answer: 'Replacement may make more sense when damage is widespread, structural parts are compromised or compatible components are unavailable. An assessment can clarify the options.' },
      ],
      related: ['automation', 'sliding-gates', 'swing-gates'],
    },
  },
]

export const projectTypes = [
  'Aluminum Fence',
  'Vinyl / PVC Fence',
  'Chain-Link Fence',
  'Sliding Gate',
  'Swing Gate',
  'Gate Automation',
  'Custom Fabrication',
  'Repair or Service',
  'Commercial Project',
  'Other',
]

export const projects = [
  {
    image: asset('/images/hero.webp'),
    title: 'Black Arched Driveway Gate',
    category: 'Gates',
    description: 'A matte-black double swing gate was fitted between stucco columns, with arched scrollwork and matching side panels for one unified entrance.',
    featured: true,
  },
  {
    image: asset('/images/aluminum.webp'),
    title: 'Black Aluminum Privacy Fence',
    category: 'Fences',
    description: 'Solid black privacy panels were aligned along the pool deck and secured to square posts with surface-mounted base plates.',
    featured: true,
  },
  {
    image: asset('/images/vinyl.webp'),
    title: 'White Vinyl Privacy Fence',
    category: 'Fences',
    description: 'Full-height white vinyl panels were installed in a straight run with capped posts to create a clean, private backyard boundary.',
  },
  {
    image: asset('/images/black-chain-link.webp'),
    title: 'Black Chain-Link Fence',
    category: 'Fences',
    description: 'Black vinyl-coated chain-link mesh was installed between matching round posts, with top and bottom rails for a neat, secure line.',
  },
  {
    image: asset('/images/sliding-gate.webp'),
    title: 'Modern Double Swing Gate',
    category: 'Gates',
    description: 'A matte-black double swing gate with horizontal slats was hinged to masonry columns and aligned across the driveway.',
    featured: true,
  },
  {
    image: asset('/images/swing-gate.webp'),
    title: 'Ornamental Double Swing Gate',
    category: 'Gates',
    description: 'A black ornamental gate with an arched top, detailed scrollwork and a center latch was mounted between brick columns.',
  },
  {
    image: asset('/images/automation.webp'),
    title: 'Keypad Access Control',
    category: 'Automation',
    description: 'A stainless-steel keypad with an integrated camera was mounted beside the vehicle barrier for controlled entry.',
  },
  {
    image: asset('/images/fabrication.webp'),
    title: 'Custom Metal Gate Fabrication',
    category: 'Specialty',
    description: 'A tubular metal gate frame with evenly spaced pickets was measured, fitted and welded in the shop before finishing.',
  },
  {
    image: asset('/images/repairs.webp'),
    title: 'Fence Panel Alignment & Repair',
    category: 'Service',
    description: 'A black privacy-fence panel was checked for level and alignment while its hardware and post connections were adjusted.',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const sampleReviews = [
  {
    name: 'Maria R.',
    place: 'Naples',
    service: 'Aluminum Fence',
    quote: 'The fence layout feels clean and intentional, and the new gate brings the whole front of the property together. Communication was straightforward from the first conversation.',
  },
  {
    name: 'James T.',
    place: 'Fort Myers',
    service: 'Gate Automation',
    quote: 'Our driveway entrance is easier to use and looks more polished now. The gate and access controls feel like one complete system.',
  },
  {
    name: 'Elena P.',
    place: 'Bonita Springs',
    service: 'Vinyl / PVC Fence',
    quote: 'We wanted privacy without making the yard feel boxed in. The vinyl option gave us a bright, finished look and a much more comfortable outdoor space.',
  },
  {
    name: 'Carlos M.',
    place: 'Cape Coral',
    service: 'Sliding Gate',
    quote: 'The team helped us think through the opening, traffic flow and finish before the work started. The result fits the property naturally.',
  },
  {
    name: 'David L.',
    place: 'Estero',
    service: 'Repairs & Service',
    quote: 'A dragging gate had become part of our daily routine. After the repair, the entrance moves smoothly and closes the way it should.',
  },
  {
    name: 'Ana S.',
    place: 'Marco Island',
    service: 'Custom Fabrication',
    quote: 'The custom metal details made the entrance feel specific to our home instead of something selected from a catalog.',
  },
]
