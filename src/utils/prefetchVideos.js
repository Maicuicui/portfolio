import { PROJECTS } from '../data.js'

// 视频秒开：页面空闲时后台预取每个项目视频的开头片段，
// 点开项目详情时开头已在浏览器缓存里，边播边缓冲后续内容。
// 手机省流模式/慢速网络下自动跳过。
export function prefetchVideos() {
  if (typeof window === 'undefined') return
  const conn = navigator.connection
  if (conn && (conn.saveData || /2g|3g/i.test(conn.effectiveType || ''))) return

  const urls = new Set()
  PROJECTS.forEach((p) => {
    if (p.video) urls.add(p.video)
    ;(p.gallery || []).forEach((g) => {
      if (g.endsWith('.mp4')) urls.add(g)
    })
  })

  const start = () => {
    // 每个视频错开 1.5s 依次预取，避免挤占首屏带宽
    Array.from(urls).forEach((u, i) => {
      setTimeout(() => {
        fetch(u, { headers: { Range: 'bytes=0-2097151' } }).catch(() => {})
      }, i * 1500)
    })
  }

  if (window.requestIdleCallback) window.requestIdleCallback(start, { timeout: 8000 })
  else setTimeout(start, 4000)
}
