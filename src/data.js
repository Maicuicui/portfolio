// 全站内容与素材配置（基于简历整理）
// 图片为本地生成素材，位于 public/images/

export const PORTRAIT = '/images/portrait.webp'

// 头部背景视频：把你的视频作品放到 public/videos/ 下，改下面 src 即可（poster 为加载前封面，可留空）
export const HERO_VIDEO = {
  src: '/videos/showreel.mp4',
  poster: '',
}

// 头部背景音乐：把你的 BGM 放到 public/audio/ 下，改 src 与 title 即可
export const BGM = {
  src: '/audio/bgm.mp3',
  title: 'KNOW MY NAME · TRUE DAMAGE',
}

// 首屏人物贴纸（已抠图透明 PNG）：sticker 为鼠标悬停在该人物上时浮出的对应照片
// 11 个人物依次对应 10 张照片；没有照片的人物把 sticker 留空即可
export const CHARACTERS = [
  { src: '/images/characters/pose-1.webp', sticker: '/images/characters/sticker-1.webp' },
  { src: '/images/characters/pose-2.webp', sticker: '/images/characters/sticker-3.webp' },
  { src: '/images/characters/pose-3.webp', sticker: '/images/characters/sticker-2.webp' },
  { src: '/images/characters/pose-4.webp', sticker: '/images/characters/sticker-4.webp' },
  { src: '/images/characters/pose-5.webp', sticker: '/images/characters/sticker-5.webp' },
  { src: '/images/characters/pose-6.webp', sticker: '/images/characters/sticker-6.webp' },
  { src: '/images/characters/pose-7.webp', sticker: '/images/characters/sticker-7.webp' },
  { src: '/images/characters/pose-8.webp', sticker: '/images/characters/sticker-8.webp' },
  { src: '/images/characters/pose-9.webp', sticker: '/images/characters/sticker-9.webp' },
  { src: '/images/characters/pose-10.webp', sticker: '/images/characters/sticker-10.webp' },
  { src: '/images/characters/pose-11.webp', sticker: '' },
]

export const NAV_LINKS = [
  { label: '关于我', en: 'ABOUT', href: '#about' },
  { label: '精选项目', en: 'WORKS', href: '#works' },
  { label: '个人优势', en: 'EDGE', href: '#edge' },
  { label: '联系方式', en: 'CONTACT', href: '#contact' },
]

export const PROFILE = {
  name: '麦林杰',
  nameEn: 'MAI LINJIE',
  roles: ['视觉设计师', 'AI 设计师', '视频剪辑后期'],
  intro:
    '我是麦林杰，桂林电子科技大学数字媒体艺术专业 2027 届本科生，专业排名前 30%。从内容策划、脚本分镜，到拍摄剪辑、特效合成与三维视觉，我习惯把一条片子从 0 做到 1；同时拥抱 AI 生成工具，用即梦 AI 与 C4D 探索更高效的创作管线。',
  intro2:
    '在校期间完成自然纪录片、产品广告、非遗 IP 形象与文旅特效等多个实战项目，作品入选专业优秀作业展，并获全国大学生广告艺术大赛全国二等奖。',
  email: '3062238020@qq.com',
  phone: '15678074405',
  location: '广西来宾',
  status: '2027 届 · 可实习',
  education: {
    school: '桂林电子科技大学',
    major: '数字媒体艺术 · 本科',
    period: '2022.09 — 2027.06',
    note: '专业排名前 30%，系统学习数字媒体全链路创作，具备从内容策划到落地交付的完整能力。',
  },
  certificate: 'Adobe Certified Professional — Premiere Pro 剪辑技能证书',
}

export const STATS = [
  { num: '04', unit: '+', label: '项目实战经历' },
  { num: '06', unit: '', label: '熟练专业工具' },
  { num: '30', unit: '%', label: '专业综合排名', prefix: 'TOP ' },
  { num: '01', unit: '', label: '全国级奖项' },
]

export const PROJECTS = [
  {
    index: '01',
    title: '《上班》',
    subtitle: 'POST-PRODUCTION ANIMATION',
    role: '后期建模 · AI 动画',
    year: '2024',
    desc: '《上班》是一部关于职场生活的建模 AI 动画短片，我负责后期建模与动画制作。',
    tools: ['Cinema 4D', '剪映', '即梦 AI'],
    image: '/images/proj-shangban.webp',
    // 视频作品：放在 public/videos/ 下，悬停卡片自动播放（image 作为封面）
    video: '/videos/shangban.mp4',
    // 分镜头脚本照片：放在 public/images/ 下，点开项目详情后展示
    gallery: ['/images/doc-board-1.webp', '/images/doc-board-2.webp', '/images/doc-board-3.webp'],
    galleryLabel: '分镜头脚本 — STORYBOARD',
  },
  {
    index: '02',
    title: 'PR剪映剪辑产品切片宣传片',
    subtitle: 'PRODUCT COMMERCIAL',
    role: '拍摄剪辑专员',
    year: '2025',
    desc: '负责产品实拍素材采集，结合产品特性设计多场景镜头，累计产出有效素材 200+ 条；剪辑、配乐与字幕全流程制作，突出产品环保、便捷的核心卖点。',
    tools: ['Premiere Pro', '剪映'],
    image: '/images/proj-product.webp',
    // 视频作品：放在 public/videos/ 下，悬停卡片自动播放（image 作为封面）
    video: '/videos/slice-main.mp4',
    // 其他案例视频：放在 public/videos/ 下，点开项目详情后直接播放
    gallery: ['/videos/slice-case-1.mp4', '/videos/slice-case-2.mp4', '/videos/slice-case-3.mp4'],
    galleryLabel: '其他案例 — MORE WORKS',
  },
  {
    index: '03',
    title: '螺章囡囡人物IP设计AI动画',
    subtitle: 'GUANGXI HERITAGE IP DESIGN',
    role: '项目组长',
    year: '2026',
    desc: '统筹 3 人小组完成项目全流程，主导广西非遗螺蛳文化调研，明确 IP「年轻化、地域化」定位；完成三维建模、视觉渲染与衍生品设计，输出完整 IP 设计规范手册。',
    tools: ['Cinema 4D', 'Photoshop', '即梦 AI'],
    image: '/images/proj-ip.webp',
    // 视频作品：放在 public/videos/ 下，悬停卡片自动播放（image 作为封面）
    video: '/videos/luozhang.mp4',
    // 分镜头脚本照片：放在 public/images/ 下，点开项目详情后展示
    gallery: ['/images/ip-board-1.webp', '/images/ip-board-2.webp', '/images/ip-board-3.webp'],
    galleryLabel: '过程稿 · 衍生设计 — PROCESS',
  },
  {
    index: '04',
    title: '北海文旅特效宣传片',
    subtitle: 'TOURISM VFX FILM',
    role: '后期特效师',
    year: '2026',
    desc: '独立完成前期筹备与脚本特效可行性评估，制定镜头转场与场景合成技术方案；运用 AE 完成特效合成与色彩校正，实现海洋场景与历史场景的自然融合。',
    tools: ['After Effects', 'Premiere Pro', '剪映'],
    image: '/images/proj-vfx.webp',
    // 视频作品：放在 public/videos/ 下，悬停卡片自动播放（image 作为封面）
    video: '/videos/beihai.mp4',
    // 分镜头脚本照片：放在 public/images/ 下，点开项目详情后展示
    gallery: ['/images/vfx-board-1.webp', '/images/vfx-board-2.webp', '/images/vfx-board-3.webp'],
    galleryLabel: '分镜头脚本 — STORYBOARD',
  },
]

export const AWARD = {
  label: 'AWARD',
  text: '全国大学生广告艺术大赛（大广赛）— 纳爱斯牙膏广告创意 · 全国二等奖（2025）',
}

export const STRENGTHS = [
  {
    index: '01',
    title: '学习能力',
    desc: '自主掌握 PR、AE、C4D 等制作软件，可快速上手新技法，适配项目的不同技术需求。',
  },
  {
    index: '02',
    title: '执行能力',
    desc: '参与大广赛及商业影视项目，熟悉策划到成片全流程，细心负责，按节点推进交付。',
  },
  {
    index: '03',
    title: '协调能力',
    desc: '具备团队协作与小组统筹经验，配合各环节分工对接，协同平衡进度与作品质量。',
  },
  {
    index: '04',
    title: '表达能力',
    desc: '能清晰表达创作思路与制作方案，准确理解需求，高效沟通项目想法。',
  },
  {
    index: '05',
    title: '解决能力',
    desc: '独立排查制作技术问题，面对工期与创作卡点灵活调整方案，保障项目落地。',
  },
]

export const TOOLS = [
  { abbr: 'PR', name: 'Premiere Pro', field: '视频剪辑' },
  { abbr: 'AE', name: 'After Effects', field: '特效合成' },
  { abbr: 'C4D', name: 'Cinema 4D', field: '三维建模' },
  { abbr: 'PS', name: 'Photoshop', field: '视觉设计' },
  { abbr: '剪映', name: 'CapCut', field: '快速成片' },
  { abbr: '即梦 AI', name: 'Jimeng AI', field: 'AI 生成创作' },
]
