import { useEffect, useState } from 'react'

// 项目详情弹窗：大窗内播放视频，下方展开分镜头脚本照片墙
// 点击照片可放大查看，ESC / 点击遮罩 / 右上角按钮均可关闭
export default function ProjectModal({ project, onClose }) {
  const [zoom, setZoom] = useState(null)

  // 打开时锁定页面滚动 + ESC 关闭
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="pmodal" role="dialog" aria-modal="true" aria-label={`项目详情：${project.title}`} onClick={onClose}>
      <div className="pmodal__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="pmodal__close" onClick={onClose} aria-label="关闭详情">
          ✕
        </button>

        {/* 头部信息 */}
        <header className="pmodal__head">
          <span className="pmodal__index">{project.index}</span>
          <div>
            <h3 className="pmodal__title">{project.title}</h3>
            <p className="pmodal__sub">
              {project.subtitle} · {project.role} · {project.year}
            </p>
          </div>
        </header>

        {/* 视频作品：带控制条可听声音；否则显示封面大图 */}
        <div className="pmodal__stage">
          {project.video ? (
            <video src={project.video} poster={project.image} controls autoPlay playsInline />
          ) : (
            <img src={project.image} alt={`${project.title} — 作品图`} />
          )}
        </div>

        <p className="pmodal__desc">{project.desc}</p>
        <p className="pmodal__tools">{project.tools.join('  ·  ')}</p>

        {/* 分镜头脚本 / 其他案例墙：图片可放大，视频直接播放 */}
        {project.gallery?.length > 0 && (
          <section className="pmodal__gallery-sec">
            <p className="pmodal__gallery-label">{project.galleryLabel || '过程稿 — PROCESS'}</p>
            <div className="pmodal__gallery">
              {project.gallery.map((src, i) => {
                const isVideo = /\.(mp4|webm|mov)$/i.test(src)
                return (
                  <button
                    type="button"
                    key={src}
                    className="pmodal__shot"
                    onClick={() => !isVideo && setZoom(src)}
                    aria-label={isVideo ? `播放第 ${i + 1} 个案例` : `查看第 ${i + 1} 张照片`}
                  >
                    {isVideo ? (
                      <video src={src} controls playsInline preload="auto" />
                    ) : (
                      <img src={src} alt={`${project.title} 分镜 ${i + 1}`} loading="lazy" />
                    )}
                    <span className="pmodal__shot-no">{String(i + 1).padStart(2, '0')}</span>
                  </button>
                )
              })}
            </div>
          </section>
        )}
      </div>

      {/* 照片放大层 */}
      {zoom && (
        <div className="pmodal__zoom" onClick={() => setZoom(null)}>
          <img src={zoom} alt="放大查看" />
        </div>
      )}
    </div>
  )
}
