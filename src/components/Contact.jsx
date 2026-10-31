import Reveal from './Reveal.jsx'
import { PROFILE } from '../data.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <Reveal className="contact__main">
          <p className="contact__kicker">
            <span className="dot" aria-hidden="true" />
            期待与你继续合作
          </p>
          <h2 className="contact__title">
            用镜头留住美好，
            <br />
            <span className="stroke">用作品传递温度</span>
            <span className="text-accent">。</span>
          </h2>
          <a className="contact__mail" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <div className="contact__meta">
            <span>TEL {PROFILE.phone}</span>
            <span>BASE {PROFILE.location}</span>
            <span>{PROFILE.status}</span>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© 2026 {PROFILE.nameEn}</span>
          <span className="footer__mid">视觉设计 × AI 生成 × 影像后期</span>
          <a href="#top" className="footer__top">
            BACK TO TOP <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </section>
  )
}
