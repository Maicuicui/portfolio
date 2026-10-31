import Reveal from './Reveal.jsx'
import { PORTRAIT, PROFILE, STATS } from '../data.js'

const INFO_ROWS = [
  { label: '邮箱 MAIL', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: '电话 TEL', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { label: '坐标 BASE', value: PROFILE.location },
  { label: '状态 STATUS', value: PROFILE.status },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="sec-head">
          <p className="sec-label">
            <span className="sec-label__index">01</span> 关于 — ABOUT
          </p>
          <h2 className="sec-title">
            从想法，<br />
            <span className="text-accent">到成片</span>
          </h2>
        </Reveal>

        <div className="about">
          <Reveal className="about__left" delay={80}>
            <figure className="about__figure">
              <img src={PORTRAIT} alt="麦林杰个人形象照" loading="lazy" />
              <figcaption>
                <span>{PROFILE.nameEn}</span>
                <span>B.2003 · GUANGXI</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="about__right">
            <Reveal as="p" className="about__intro" delay={120}>
              {PROFILE.intro}
            </Reveal>
            <Reveal as="p" className="about__intro about__intro--sub" delay={180}>
              {PROFILE.intro2}
            </Reveal>

            <Reveal className="about__rows" delay={220}>
              {INFO_ROWS.map((r) => (
                <div className="about__row" key={r.label}>
                  <span className="about__row-label">{r.label}</span>
                  {r.href ? (
                    <a href={r.href} className="about__row-value about__row-value--link">
                      {r.value}
                    </a>
                  ) : (
                    <span className="about__row-value">{r.value}</span>
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal className="stats" delay={260}>
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <p className="stat__num">
                    {s.prefix || ''}
                    {s.num}
                    <span className="stat__unit">{s.unit}</span>
                  </p>
                  <p className="stat__label">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="about__cards" delay={120}>
          <div className="card">
            <p className="card__tag">EDUCATION / 教育经历</p>
            <h3 className="card__title">{PROFILE.education.school}</h3>
            <p className="card__sub">
              {PROFILE.education.major} — {PROFILE.education.period}
            </p>
            <p className="card__desc">{PROFILE.education.note}</p>
          </div>
          <div className="card">
            <p className="card__tag">CERTIFICATE / 专业认证</p>
            <h3 className="card__title">Adobe Certified Professional</h3>
            <p className="card__sub">Premiere Pro 剪辑技能证书</p>
            <p className="card__desc">
              此外获全国大学生广告艺术大赛全国二等奖，作品入选校数字媒体艺术专业优秀作业展。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
