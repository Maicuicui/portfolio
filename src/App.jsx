import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'
import { prefetchVideos } from './utils/prefetchVideos.js'

export default function App() {
  // 首屏加载完成后，后台预取项目视频开头片段，实现点开秒播
  prefetchVideos()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
