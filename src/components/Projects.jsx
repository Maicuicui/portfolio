import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import ProjectModal from './ProjectModal.jsx'
import { AWARD, PROJECTS } from '../data.js'

// 单个作品卡：有 video 字段时悬停自动播放视频，否则显示静态图
// 点击卡片打开项目详情弹窗（视频 + 分镜头脚本照片墙）
function Work({ p, onOpen }) {
  const videoRef = useRef(null)

  const play = () => {
    videoRef.current?.play().catch(() => {})
  }
  const stop = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  return (
    <article className="work">
      <div
        className="work__media"
        role="button"
        tabIndex={0}
        aria-label={`打开项目详情：${p.title}`}
        onClick={() => onOpen(p)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(p)
          }
        }}
        onMouseEnter={p.video ? play : undefined}
        onMouseLeave={p.video ? stop : undefined}
      >
        {p.video ? (
          <video
            ref={videoRef}
            className="work__video"
            src={p.video}
            poster={p.image}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={p.image} alt={`${p.title} — 作品图`} loading="lazy" />
        )}
        {p.video && <span className="work__badge">VIDEO</span>}
        <span className="work__arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="work__meta">
        <div className="work__head">
          <span className="work__index">{p.index}</span>
          <h3 className="work__title">{p.title}</h3>
          <span className="work__year">{p.year}</span>
        </div>
        <p className="work__desc">{p.desc}</p>
        <div className="work__tags">
          {p.tools.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <section className="section" id="works">
      <div className="container">
        {/* 参考版式：居中标题 + 标语 + 三列卡片 */}
        <Reveal className="sec-head sec-head--center">
          <p className="sec-label">
            <span className="sec-label__index">02</span> 精选项目 — SELECTED WORKS
          </p>
          <h2 className="sec-title">
            作品，<span className="text-accent">即语言</span>
          </h2>
          <p className="sec-sub">四件作品，四种语言 —— 从脚本到成片，每一帧都亲手打磨</p>
        </Reveal>

        <Reveal className="award" delay={100}>
          <span className="award__tag">{AWARD.label}</span>
          <p className="award__text">{AWARD.text}</p>
        </Reveal>

        <div className="works">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 100}>
              <Work p={p} onOpen={setOpen} />
            </Reveal>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
