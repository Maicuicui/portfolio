import { useEffect, useRef, useState } from 'react'
import { BGM } from '../data.js'

// 背景音乐悬浮控件：参考 rainzt.cn 的音乐挂件，常驻右下角
export default function BgmPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onError = () => setError(true)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('error', onError)
    return () => {
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('error', onError)
    }
  }, [])

  const toggle = () => {
    const a = audioRef.current
    if (!a || error) return
    if (playing) a.pause()
    else a.play().catch(() => setError(true))
  }

  return (
    <button
      type="button"
      className={`bgm${playing ? ' is-playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? '暂停背景音乐' : '播放背景音乐'}
      title={error ? 'BGM 加载失败：请检查 public/audio/ 下的音频文件' : playing ? '点击暂停' : '点击播放'}
    >
      <span className="bgm__bars" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
      <span className="bgm__label">
        {error ? 'BGM —' : playing ? BGM.title : 'BGM · 暂未播放'}
      </span>
      <audio ref={audioRef} src={BGM.src} loop preload="none" />
    </button>
  )
}
