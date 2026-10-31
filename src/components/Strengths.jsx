import Reveal from './Reveal.jsx'
import { PROFILE, STRENGTHS, TOOLS } from '../data.js'

export default function Strengths() {
  return (
    <section className="section" id="edge">
      <div className="container">
        <Reveal className="sec-head">
          <p className="sec-label">
            <span className="sec-label__index">03</span> 个人优势 — STRENGTHS
          </p>
          <h2 className="sec-title">
            我能带来的，<br />
            <span className="text-accent">不止成片</span>
          </h2>
        </Reveal>

        <div className="str-grid">
          {STRENGTHS.map((s, i) => (
            <Reveal className="str-card" key={s.index} delay={i * 80}>
              <span className="str-card__index">{s.index}</span>
              <h3 className="str-card__title">{s.title}</h3>
              <p className="str-card__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="toolkit" delay={100}>
          <p className="toolkit__label">TOOLKIT / 工具箱</p>
          <ul className="toolkit__list">
            {TOOLS.map((t) => (
              <li className="tool" key={t.name}>
                <span className="tool__abbr">{t.abbr}</span>
                <span className="tool__name">{t.name}</span>
                <span className="tool__field">{t.field}</span>
              </li>
            ))}
          </ul>
          <p className="toolkit__cert">
            CERTIFIED — {PROFILE.certificate}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
