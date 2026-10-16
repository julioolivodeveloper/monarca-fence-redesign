import { useEffect, useMemo, useRef, useState } from 'react'
import { Bot, MessageCircle, RotateCcw, Send, Sparkles, X } from 'lucide-react'
import { contact } from '../data'
import { ContactButton } from './ContactModal'

const faqOrder = ['pricing', 'area', 'materials', 'automation', 'repairs', 'process', 'permits']
const faqMatchOrder = ['pricing', 'repairs', 'automation', 'area', 'materials', 'process', 'permits', 'contact']

const faqContent = {
  pricing: {
    keywords: /price|pricing|cost|estimate|quote|budget|how much|precio|costo|cotiz|presupuesto|cuanto cuesta/,
    en: {
      label: 'Pricing & free estimates',
      answer: 'Estimates are free. Pricing depends on the material, total linear footage, property grade, access and the number or type of gates. Share photos and basic measurements for a faster first conversation.',
    },
    es: {
      label: 'Precios y estimados gratis',
      answer: 'Los estimados son gratuitos. El precio depende del material, los pies lineales, el nivel del terreno, el acceso y la cantidad o tipo de portones. Envía fotos y medidas aproximadas para agilizar la primera conversación.',
    },
  },
  area: {
    keywords: /service area|coverage|area|city|location|naples|bonita|estero|fort myers|cape coral|lehigh|marco island|labelle|zona|cobertura|ciudad|ubicacion/,
    en: {
      label: 'Service area',
      answer: 'Monarca serves Naples, Bonita Springs, Estero, Fort Myers, Cape Coral, Lehigh Acres, Marco Island and LaBelle. For a nearby Southwest Florida location, contact the team to confirm availability.',
    },
    es: {
      label: 'Área de servicio',
      answer: 'Monarca atiende Naples, Bonita Springs, Estero, Fort Myers, Cape Coral, Lehigh Acres, Marco Island y LaBelle. Para otra ubicación cercana del suroeste de Florida, contacta al equipo para confirmar disponibilidad.',
    },
  },
  materials: {
    keywords: /material|vinyl|pvc|aluminum|aluminium|chain link|galvanized|powder coat|fabrication|vinilo|aluminio|malla|ciclonica|galvanizada|fabricacion|revestimiento/,
    en: {
      label: 'Fence materials',
      answer: 'Monarca works with aluminum, vinyl/PVC, galvanized and black chain link, custom metal fabrication and powder-coated finishes. The best option depends on privacy, security, maintenance and the look of the property.',
    },
    es: {
      label: 'Materiales para cercas',
      answer: 'Monarca trabaja con aluminio, vinilo/PVC, malla ciclónica galvanizada o negra, fabricación metálica personalizada y acabados con pintura en polvo. La mejor opción depende de la privacidad, seguridad, mantenimiento y estilo de la propiedad.',
    },
  },
  automation: {
    keywords: /automat|gate opener|keypad|sensor|access control|remote|swing gate|sliding gate|motor|teclado|control de acceso|control remoto|porton corredizo|porton abatible/,
    en: {
      label: 'Gates & automation',
      answer: 'Monarca installs custom swing and sliding gates plus automation, keypads, sensors and access controls. An existing gate should be inspected first so the team can confirm its condition and compatibility with an operator.',
    },
    es: {
      label: 'Portones y automatización',
      answer: 'Monarca instala portones personalizados abatibles y corredizos, además de motores, teclados, sensores y controles de acceso. Un portón existente debe revisarse primero para confirmar su condición y compatibilidad con el sistema automático.',
    },
  },
  repairs: {
    keywords: /repair|service|maintenance|damage|damaged|broken|fix|hinge|repar|servicio|mantenimiento|danad|roto|bisagra|arreglar/,
    en: {
      label: 'Repairs & service',
      answer: 'The team can evaluate damaged fence sections, gates, hinges, latches and access systems. Send clear photos or a short video of the problem, along with the property city, so they can recommend the next step.',
    },
    es: {
      label: 'Reparaciones y servicio',
      answer: 'El equipo puede evaluar secciones dañadas de cercas, portones, bisagras, cerraduras y sistemas de acceso. Envía fotos claras o un video corto del problema junto con la ciudad de la propiedad para recomendar el siguiente paso.',
    },
  },
  process: {
    keywords: /process|timeline|how long|start|schedule|installation|install|appointment|proceso|tiempo|cuanto tarda|comenzar|agenda|instalacion|cita/,
    en: {
      label: 'Process & timing',
      answer: 'Start by sharing the property location, project type, photos and approximate measurements. The team can then review the site, confirm details and prepare a proposal. Scheduling varies by project scope, materials and local requirements.',
    },
    es: {
      label: 'Proceso y tiempo',
      answer: 'Comienza enviando la ubicación, el tipo de proyecto, fotos y medidas aproximadas. Después el equipo puede revisar la propiedad, confirmar detalles y preparar una propuesta. La fecha de instalación varía según el alcance, los materiales y los requisitos locales.',
    },
  },
  permits: {
    keywords: /permit|hoa|association|approval|code|setback|permiso|asociacion|aprobacion|codigo|retiro/,
    en: {
      label: 'Permits & HOA',
      answer: 'Permit, setback and HOA rules vary by municipality and property. Confirm the requirements for your address before installation, and tell Monarca about any community standards or approval documents during the estimate.',
    },
    es: {
      label: 'Permisos y HOA',
      answer: 'Los permisos, retiros y requisitos de la asociación varían según el municipio y la propiedad. Confirma las reglas de tu dirección antes de instalar y comparte con Monarca cualquier norma o documento de aprobación durante el estimado.',
    },
  },
  contact: {
    keywords: /human|person|representative|call|phone|whatsapp|email|contact|humano|persona|representante|llamar|telefono|correo|contacto/,
    en: {
      label: 'Contact the team',
      answer: `You can speak with Monarca directly at ${contact.phone}, send a text message or open WhatsApp. Use the contact button below to choose an option.`,
    },
    es: {
      label: 'Contactar al equipo',
      answer: `Puedes hablar directamente con Monarca al ${contact.phone}, enviar un mensaje de texto o abrir WhatsApp. Usa el botón de abajo para elegir una opción.`,
    },
  },
}

const copy = {
  en: {
    intent: 'How can I help today?',
    faqPrompt: 'Choose a common question below, or type your own question.',
    contactPrompt: 'Choose the easiest way to reach Monarca: call, text message or WhatsApp.',
    project: 'What can we help you with?',
    city: 'Great. Where is the property located?',
    timing: 'When would you like to get started?',
    name: 'One last detail: what name should we include with your request?',
    complete: 'Your project summary is ready. Open the contact options to call, text or send it through WhatsApp.',
    placeholder: 'Ask a question or enter your answer…',
    send: 'Open contact options',
    intents: [
      { label: 'Plan a project', value: 'project' },
      { label: 'Frequently asked questions', value: 'faq' },
      { label: 'Contact Monarca', value: 'contact' },
    ],
    projects: ['Fence installation', 'Custom gate', 'Gate automation', 'Repair / service', 'Not sure yet'],
    cities: ['Naples', 'Bonita Springs', 'Fort Myers', 'Cape Coral', 'Another SWFL city'],
    timingOptions: ['As soon as possible', 'Within 1–3 months', 'Just researching'],
    contactTitle: 'Need personal help?',
    contactText: 'Choose a direct contact option or request a free estimate.',
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
    estimate: 'Free estimate',
    contactOptions: 'Open contact options',
  },
  es: {
    intent: '¿Cómo puedo ayudarte hoy?',
    faqPrompt: 'Elige una pregunta frecuente o escribe tu propia pregunta.',
    contactPrompt: 'Elige la forma más fácil de comunicarte con Monarca: llamada, mensaje de texto o WhatsApp.',
    project: '¿En qué podemos ayudarte?',
    city: 'Perfecto. ¿Dónde está ubicada la propiedad?',
    timing: '¿Cuándo te gustaría comenzar?',
    name: 'Un último detalle: ¿qué nombre incluimos en la solicitud?',
    complete: 'Tu resumen está listo. Abre las opciones para llamar, enviar un mensaje o usar WhatsApp.',
    placeholder: 'Pregunta algo o escribe tu respuesta…',
    send: 'Abrir opciones de contacto',
    intents: [
      { label: 'Planear un proyecto', value: 'project' },
      { label: 'Preguntas frecuentes', value: 'faq' },
      { label: 'Contactar a Monarca', value: 'contact' },
    ],
    projects: ['Instalación de cerca', 'Portón personalizado', 'Automatización', 'Reparación / servicio', 'Todavía no sé'],
    cities: ['Naples', 'Bonita Springs', 'Fort Myers', 'Cape Coral', 'Otra ciudad de SWFL'],
    timingOptions: ['Lo antes posible', 'Dentro de 1–3 meses', 'Solo estoy investigando'],
    contactTitle: '¿Necesitas ayuda personal?',
    contactText: 'Elige un contacto directo o solicita un estimado gratuito.',
    whatsapp: 'WhatsApp',
    call: 'Llamar',
    email: 'Correo',
    estimate: 'Estimado gratis',
    contactOptions: 'Abrir opciones de contacto',
  },
}

const initialMessage = {
  from: 'bot',
  text: "Hi, I'm Monarca's project assistant. I can answer common questions or organize your request. Choose a language. / Hola, puedo responder preguntas frecuentes o preparar tu solicitud. Elige un idioma.",
}

function normalizeText(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function faqReply(text, language) {
  const normalized = normalizeText(text)
  const topic = faqMatchOrder.find((key) => faqContent[key].keywords.test(normalized))

  if (topic) return { topic, ...faqContent[topic][language] }

  return language === 'es'
    ? {
        topic: 'general',
        label: 'Pregunta general',
        answer: 'Puedo ayudarte con precios, materiales, áreas de servicio, portones automáticos, reparaciones, permisos y el proceso de instalación. Elige un tema o contacta al equipo para revisar los detalles de tu propiedad.',
      }
    : {
        topic: 'general',
        label: 'General question',
        answer: 'I can help with pricing, materials, service areas, automated gates, repairs, permits and the installation process. Choose a topic or contact the team to review your property details.',
      }
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [stage, setStage] = useState('language')
  const [messages, setMessages] = useState([initialMessage])
  const [input, setInput] = useState('')
  const [lead, setLead] = useState({ project: '', city: '', timing: '', name: '' })
  const [contactContext, setContactContext] = useState('')
  const [showContactActions, setShowContactActions] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (open) scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open, stage, showContactActions])

  const options = useMemo(() => {
    if (stage === 'language') return [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }]
    if (stage === 'intent') return copy[language].intents
    if (stage === 'faq') {
      return faqOrder.map((value) => ({ label: faqContent[value][language].label, value }))
    }
    if (stage === 'project') return copy[language].projects.map((value) => ({ label: value, value }))
    if (stage === 'city') return copy[language].cities.map((value) => ({ label: value, value }))
    if (stage === 'timing') return copy[language].timingOptions.map((value) => ({ label: value, value }))
    return []
  }, [stage, language])

  const addExchange = (userText, botText) => {
    setMessages((current) => [...current, { from: 'user', text: userText }, { from: 'bot', text: botText }])
  }

  const choose = (value) => {
    if (stage === 'language') {
      setLanguage(value)
      addExchange(value === 'es' ? 'Español' : 'English', copy[value].intent)
      setStage('intent')
      return
    }
    if (stage === 'intent') {
      const selection = copy[language].intents.find((item) => item.value === value)
      if (value === 'project') {
        addExchange(selection.label, copy[language].project)
        setStage('project')
        return
      }
      if (value === 'faq') {
        addExchange(selection.label, copy[language].faqPrompt)
        setStage('faq')
        setShowContactActions(false)
        return
      }
      addExchange(selection.label, copy[language].contactPrompt)
      setContactContext(faqContent.contact[language].label)
      setShowContactActions(true)
      setStage('contact')
      return
    }
    if (stage === 'faq') {
      const faq = faqContent[value][language]
      addExchange(faq.label, faq.answer)
      setContactContext(faq.label)
      setShowContactActions(true)
      return
    }
    if (stage === 'project') {
      setLead((current) => ({ ...current, project: value }))
      addExchange(value, copy[language].city)
      setStage('city')
      return
    }
    if (stage === 'city') {
      setLead((current) => ({ ...current, city: value }))
      addExchange(value, copy[language].timing)
      setStage('timing')
      return
    }
    if (stage === 'timing') {
      setLead((current) => ({ ...current, timing: value }))
      addExchange(value, copy[language].name)
      setStage('name')
    }
  }

  const sendText = (event) => {
    event.preventDefault()
    const text = input.trim()
    if (!text) return
    setInput('')

    if (stage === 'name') {
      setLead((current) => ({ ...current, name: text }))
      addExchange(text, copy[language].complete)
      setStage('complete')
      return
    }

    const faq = faqReply(text, language)
    addExchange(text, faq.answer)
    setContactContext(text)
    setShowContactActions(true)
    if (stage === 'language' || stage === 'intent') setStage('faq')
  }

  const projectMessage = useMemo(() => {
    const intro = language === 'es'
      ? 'Hola Monarca Fence Services, preparé esta solicitud desde su sitio web:'
      : 'Hello Monarca Fence Services, I prepared this request from your website:'
    const body = [
      intro,
      `Name / Nombre: ${lead.name}`,
      `Project / Proyecto: ${lead.project}`,
      `City / Ciudad: ${lead.city}`,
      `Timeline / Fecha: ${lead.timing}`,
    ].join('\n')
    return body
  }, [language, lead])

  const reset = () => {
    setLanguage('en')
    setStage('language')
    setMessages([initialMessage])
    setLead({ project: '', city: '', timing: '', name: '' })
    setContactContext('')
    setShowContactActions(false)
    setInput('')
  }

  return (
    <div className={`chatbot ${open ? 'chatbot--open' : ''}`}>
      <button className="chatbot-launcher" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close project assistant' : 'Open project assistant'}>
        {open ? <X /> : <MessageCircle />}
        {!open && <span>Project assistant</span>}
      </button>

      {open && (
        <section className="chatbot-panel" aria-label="Monarca project assistant">
          <header className="chatbot-header">
            <div className="chatbot-header__mark"><Bot /></div>
            <div><strong>Monarca Assistant</strong><span><Sparkles size={12} /> Guided project planner</span></div>
            <button type="button" onClick={reset} aria-label="Restart chat"><RotateCcw /></button>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X /></button>
          </header>

          <div className="chatbot-messages">
            <div className="chatbot-privacy">No account needed. Nothing is sent until you choose a contact option.</div>
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`chat-message chat-message--${message.from}`}>
                {message.from === 'bot' && <span className="chat-message__avatar">M</span>}
                <p>{message.text}</p>
              </div>
            ))}

            {options.length > 0 && (
              <div className="chat-options">
                {options.map((option) => <button key={option.value} type="button" onClick={() => choose(option.value)}>{option.label}</button>)}
              </div>
            )}

            {showContactActions && stage !== 'complete' && (
              <div className="chat-contact" aria-label={copy[language].contactTitle}>
                <strong>{copy[language].contactTitle}</strong>
                <p>{copy[language].contactText}</p>
                <div className="chat-contact__grid">
                  <ContactButton className="chat-contact__open" context={contactContext} onClick={() => setOpen(false)}><MessageCircle /> {copy[language].contactOptions}</ContactButton>
                </div>
              </div>
            )}

            {stage === 'complete' && (
              <div className="chat-summary">
                <span>{lead.project}</span><span>{lead.city}</span><span>{lead.timing}</span>
                <ContactButton className="chat-summary__contact" message={projectMessage} onClick={() => setOpen(false)}><MessageCircle size={17} /> {copy[language].send}</ContactButton>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {stage !== 'complete' && (
            <form className="chatbot-input" onSubmit={sendText}>
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={copy[language].placeholder} aria-label="Message" />
              <button type="submit" aria-label="Send message"><Send /></button>
            </form>
          )}
        </section>
      )}
    </div>
  )
}
