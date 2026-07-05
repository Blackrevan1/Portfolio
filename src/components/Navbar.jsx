import { useEffect, useState } from 'react'
import { profile, nav } from '../data'
import Icon from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={close}>
          {profile.name}
          <span className="accent">.</span>
        </a>

        <div className={`nav__links${open ? ' nav__links--open' : ''}`}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav__link" onClick={close}>
              {item.label}
            </a>
          ))}
          <a
            href={profile.company}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost nav__cta"
            onClick={close}
          >
            {profile.companyName}
            <Icon name="external" />
          </a>
        </div>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
