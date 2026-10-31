import { useEffect, useState } from 'react'
import { NAV_LINKS, PROFILE } from '../data.js'
import BgmPlayer from './BgmPlayer.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="回到顶部">
          MAI LINJIE<sup>®</sup>
        </a>
        <nav className="nav__links" aria-label="主导航">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__right">
          <BgmPlayer />
          <a className="nav__cta" href={`mailto:${PROFILE.email}`}>
            联系我 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
