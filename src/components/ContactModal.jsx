import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, MessageCircle, MessageSquareText, Phone, X } from 'lucide-react'
import { contact } from '../data'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [modal, setModal] = useState({ open: false, context: '', message: '' })
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)
  const titleId = useId()

  const openContact = useCallback(({ context = '', message = '' } = {}) => {
    previousFocusRef.current = document.activeElement
    setModal({ open: true, context, message })
  }, [])

  const closeContact = useCallback(() => {
    setModal((current) => ({ ...current, open: false }))
    window.setTimeout(() => previousFocusRef.current?.focus?.(), 0)
  }, [])

  useEffect(() => {
    if (!modal.open) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeContact()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    window.setTimeout(() => closeButtonRef.current?.focus(), 0)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeContact, modal.open])

  const message = useMemo(() => {
    if (modal.message) return modal.message
    const subject = modal.context || 'a fence or gate project'
    return `Hello Monarca Fence Services, I would like help with ${subject}.`
  }, [modal.context, modal.message])

  const links = useMemo(() => ({
    sms: `${contact.sms}?body=${encodeURIComponent(message)}`,
    whatsapp: `${contact.whatsapp}?text=${encodeURIComponent(message)}`,
  }), [message])

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact }}>
      {children}
      {modal.open && (
        <div className="contact-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeContact()}>
          <section className="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <button ref={closeButtonRef} className="contact-modal__close" type="button" onClick={closeContact} aria-label="Close contact options">
              <X />
            </button>

            <div className="contact-modal__mark"><MessageCircle /></div>
            <span className="contact-modal__eyebrow">Contact Monarca</span>
            <h2 id={titleId}>Choose how you want to connect.</h2>
            <p>There is no form to complete. Call, send a text message or start a WhatsApp conversation directly with the Monarca team.</p>
            {modal.context && <div className="contact-modal__context"><span>Regarding</span>{modal.context}</div>}

            <div className="contact-modal__actions">
              <a href={contact.phoneHref} onClick={closeContact}>
                <span className="contact-modal__action-icon"><Phone /></span>
                <span><small>Call / Llamar</small><strong>{contact.phone}</strong></span>
                <ArrowUpRight />
              </a>
              <a href={links.sms} onClick={closeContact}>
                <span className="contact-modal__action-icon"><MessageSquareText /></span>
                <span><small>Text / Mensaje</small><strong>Send a text message</strong></span>
                <ArrowUpRight />
              </a>
              <a className="contact-modal__action--whatsapp" href={links.whatsapp} target="_blank" rel="noreferrer" onClick={closeContact}>
                <span className="contact-modal__action-icon"><MessageCircle /></span>
                <span><small>Chat directly</small><strong>Open WhatsApp</strong></span>
                <ArrowUpRight />
              </a>
            </div>

            <span className="contact-modal__note">Serving Collier and Lee counties in Southwest Florida.</span>
          </section>
        </div>
      )}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const value = useContext(ContactModalContext)
  if (!value) throw new Error('useContactModal must be used inside ContactModalProvider')
  return value
}

export function ContactButton({ children, className = '', context = '', message = '', onClick, ...props }) {
  const { openContact } = useContactModal()

  const handleClick = (event) => {
    onClick?.(event)
    if (!event.defaultPrevented) openContact({ context, message })
  }

  return (
    <button
      {...props}
      className={`contact-trigger ${className}`.trim()}
      type="button"
      aria-haspopup="dialog"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
