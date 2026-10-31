import { useRef, useState } from 'react'
import { CHARACTERS, HERO_VIDEO, PORTRAIT, PROFILE } from '../data.js'

// 首屏快捷链接（参考居中式排版）
const HERO_LINKS = [
  { label: '精选项目', href: '#works' },
  { label: '关于我', href: '#about' },
  { label: '个人优势', href: '#edge' },
  { label: '联系方式', href: '#contact' },
]

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
)

const QQIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.4-4.4-1.2L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
    <path d="M8.5 11.5h.01M12.5 11.5h.01M16.5 11.5h.01" strokeWidth="2.4" />
  </svg>
)

const WxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 7a7 7 0 0 0-6 6.3c0 1.5.5 2.9 1.4 4L3.5 21l3.9-1.2c1 .4 2.1.6 3.2.6a7 7 0 0 0 2.4-.4" />
    <path d="M12.5 4.4A7 7 0 0 1 21 11c0 1.4-.4 2.7-1.2 3.8l.9 4.4-3.5-1.1a7 7 0 0 1-8.7-2.4" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
)

export default function Hero() {
  const videoRef = useRef(null)
  const [wxCopied, setWxCopied] = useState(false)

  // 微信号同手机号，点击复制
  const copyWx = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phone)
    } catch {
      /* 忽略复制失败 */
    }
    setWxCopied(true)
    setTimeout(() => setWxCopied(false), 1600)
  }

  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_VIDEO.poster || undefined}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO.src} type="video/mp4" />
      </video>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      {/* 底部水面：三层波浪起伏流动（呼应深空蓝 × 电光青） */}
      <div className="hero__waves" aria-hidden="true">
        <div className="wave-wrap wave-wrap--1">
          <svg className="wave" viewBox="0 0 2880 160" preserveAspectRatio="none">
            <path
              d="M0 96 C240 50 480 50 720 96 C960 142 1200 142 1440 96 C1680 50 1920 50 2160 96 C2400 142 2640 142 2880 96 L2880 160 L0 160 Z"
              fill="rgba(69, 224, 200, 0.07)"
              stroke="rgba(69, 224, 200, 0.28)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="wave-wrap wave-wrap--2">
          <svg className="wave" viewBox="0 0 2880 160" preserveAspectRatio="none">
            <path
              d="M0 80 C240 126 480 126 720 80 C960 34 1200 34 1440 80 C1680 126 1920 126 2160 80 C2400 34 2640 34 2880 80 L2880 160 L0 160 Z"
              fill="rgba(13, 19, 38, 0.88)"
            />
          </svg>
        </div>
        <div className="wave-wrap wave-wrap--3">
          <svg className="wave" viewBox="0 0 2880 160" preserveAspectRatio="none">
            <path
              d="M0 100 C240 130 480 130 720 100 C960 70 1200 70 1440 100 C1680 130 1920 130 2160 100 C2400 70 2640 70 2880 100 L2880 160 L0 160 Z"
              fill="#0b0e1a"
            />
          </svg>
        </div>
      </div>

      <aside className="hero__hud" aria-hidden="true">
        <span>GUANGXI · CHINA</span>
        <span>23.75°N / 109.22°E</span>
        <span>GMT+8 — 2026</span>
        <span>CLASS OF 2027</span>
      </aside>

      <div className="container hero__inner">
        <div className="hero__card">
          <div className="hero__avatar anim anim-1">
            <img src={PORTRAIT} alt="麦林杰正式头像" />
            <span className="hero__dot" aria-hidden="true" />
          </div>

          <h1 className="hero__name anim anim-2">麦林杰</h1>
          <p className="hero__name-sub anim anim-3">MAI LINJIE — PORTFOLIO © 2026</p>

          <p className="hero__roles anim anim-4">
            {PROFILE.roles.map((r, i) => (
              <span key={r}>
                {r}
                {i < PROFILE.roles.length - 1 && <em aria-hidden="true"> / </em>}
              </span>
            ))}
          </p>

          <div className="hero__tiles anim anim-5">
            <a
              className="tile"
              style={{ '--tile': '#5cb8ff' }}
              href={`mailto:${PROFILE.email}`}
              aria-label="邮箱联系"
              title={`邮箱联系 ${PROFILE.email}`}
            >
              <MailIcon />
            </a>
            <a
              className="tile"
              style={{ '--tile': '#45e0c8' }}
              href={`tel:${PROFILE.phone}`}
              aria-label="电话联系"
              title={`电话联系 ${PROFILE.phone}`}
            >
              <PhoneIcon />
            </a>
            <a
              className="tile"
              style={{ '--tile': '#8fa8ff' }}
              href="https://wpa.qq.com/msgrd?v=3&uin=3062238020&site=qq&menu=yes"
              target="_blank"
              rel="noreferrer"
              aria-label="QQ 联系"
              title="QQ 联系 3062238020"
            >
              <QQIcon />
            </a>
            <button
              type="button"
              className="tile"
              style={{ '--tile': '#c6f24e' }}
              onClick={copyWx}
              aria-label="复制微信号"
              title="微信号同手机号，点击复制"
            >
              {wxCopied ? <CheckIcon /> : <WxIcon />}
            </button>
          </div>

          {/* 人物贴纸框：悬停弹性放大，并浮出对应的人物衍生表情包照片 */}
          <div className="hero__stage anim anim-6" aria-hidden="true">
            {CHARACTERS.map((c, i) => (
              <div className="char-wrap" key={c.src}>
                <img className="char" src={c.src} alt="" draggable="false" />
                {c.sticker && (
                  <img className="char-sticker" src={c.sticker} alt="" draggable="false" loading="lazy" />
                )}
              </div>
            ))}
          </div>
          <p className="hero__stage-cap anim anim-6">人物衍生表情包设计</p>
        </div>

        {/* 快捷入口：小方框垫在人物框下方 */}
        <nav className="hero__chips anim anim-7" aria-label="内容导航">
          {HERO_LINKS.map((l) => (
            <a key={l.href} className="hero__chip" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <a className="hero__chevron" href="#about" aria-label="向下滚动查看更多">
        <span>SCROLL</span>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 9l8 8 8-8" />
        </svg>
      </a>
    </section>
  )
}
