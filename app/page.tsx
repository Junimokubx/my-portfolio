"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import {
  Code2,
  DollarSign,
  Gamepad2,
  Layers3,
  MessageCircle,
  Cpu,
  X,
  Maximize2,
  Puzzle,
  RotateCcw,
  Play,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

/* =========================
   COLORS
========================= */
const white = "#FFFFFF"
const gray = "#E5E7EB"

/* =========================
   PROFILE & IMAGES
========================= */
const profileImage = "/images/profile/Kookkee.png"

const girl01Image = "/images/animation/girl_01.png"
const girl02Image = "/images/animation/girl_02.png"
const girl03Image = "/images/animation/girl_03.png"
const girl04Image = "/images/animation/girl_04.png"

const catbot01Image = "/images/animation/catbot_01.png"
const catbot02Image = "/images/animation/catbot_02.png"
const catbot03Image = "/images/animation/catbot_03.png"
const catbot04Image = "/images/animation/catbot_04.jpg"

/* =========================
   PROJECTS
========================= */
const projects = [
  {
    number: "01",
    title: "MoneyMate",
    category: "Web Development",
    description:
      "เว็บแอปพลิเคชันสำหรับจัดการรายรับ รายจ่าย และวางแผนการเงินส่วนบุคคล",
    technologies: "Web App • Finance • UI/UX",
    icon: DollarSign,
    images: [
      "/images/project/moneymate/moneymate_01.jpg",
      "/images/project/moneymate/moneymate_02.jpg",
      "/images/project/moneymate/moneymate_04.jpg",
    ],
    videos: ["/images/project/moneymate/moneymate_03.mov"],
    details:
      "MoneyMate เป็นเว็บแอปพลิเคชันที่พัฒนาขึ้นเพื่อช่วยให้ผู้ใช้จัดการรายรับและรายจ่ายได้ง่ายขึ้น พร้อมแสดงยอดเงินคงเหลือ กราฟการใช้จ่าย เครื่องคำนวณ และฟังก์ชันเกี่ยวกับภาษี",
  },
  {
    number: "02",
    title: "Roblox Wizarding Town",
    category: "Game Development",
    description:
      "การสร้างเมืองแฟนตาซีใน Roblox ที่มีร้านค้าและพื้นที่ที่สามารถโต้ตอบได้",
    technologies: "Roblox Studio • Lua • 3D",
    icon: Gamepad2,
    images: [
      "/images/project/roblox/wizard_01.jpg",
      "/images/project/roblox/wizard_02.png",
      "/images/project/roblox/wizard_03.jpg",
    ],
    videos: ["/images/project/roblox/wizard_04.mp4"],
    details:
      "โปรเจกต์สร้างเมืองสไตล์โลกเวทมนตร์ใน Roblox โดยเน้นให้ผู้เล่นสามารถเดินเข้าไปสำรวจร้านค้า มีร้านปรุงยา ร้านหนังสือ และวัตถุภายในเมืองที่สามารถโต้ตอบได้",
  },
  {
    number: "03",
    title: "ESP32 LED Project",
    category: "Embedded System",
    description:
      "โปรเจกต์ควบคุม LED ด้วย ESP32 และวงจรอิเล็กทรอนิกส์พื้นฐาน",
    technologies: "ESP32 • Arduino IDE • C++",
    icon: Cpu,
    images: [
      "/images/project/esp32/esp_01.jpg",
      "/images/project/esp32/esp_02.jpg",
    ],
    videos: [
      "/images/project/esp32/esp_04.mp4",
      "/images/project/esp32/esp_03.mp4",
    ],
    details:
      "โปรเจกต์ทดลองเขียนโปรแกรมบน ESP32 เพื่อควบคุม LED ให้กระพริบตามเวลาที่กำหนด รวมถึงการต่อ LED ภายนอกเข้ากับตัวต้านทาน เพื่อเรียนรู้พื้นฐานของ GPIO และวงจรอิเล็กทรอนิกส์",
  },
]

/* =========================
   CONTACT ICONS
========================= */
function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.54 5.33A16.9 16.9 0 0 0 15.5 4l-.5 1.03a15.2 15.2 0 0 0-6 0L8.5 4a16.9 16.9 0 0 0-4.04 1.33C1.9 9.36 1.2 13.3 1.55 17.18A16.9 16.9 0 0 0 6.5 19.7l1.2-1.64c-.65-.24-1.27-.55-1.84-.91l.45-.35c3.55 1.64 7.38 1.64 10.89 0l.46.35c-.58.37-1.2.67-1.85.92l1.2 1.63a16.9 16.9 0 0 0 4.96-2.51c.42-4.5-.72-8.4-2.43-11.86ZM8.48 15.1c-1.06 0-1.94-.97-1.94-2.16s.86-2.16 1.94-2.16c1.09 0 1.96.97 1.94 2.16 0 1.19-.86 2.16-1.94 2.16Zm7.04 0c-1.06 0-1.94-.97-1.94-2.16s.86-2.16 1.94-2.16 1.96.97 1.94 2.16c0 1.19-.85 2.16-1.94 2.16Z" />
    </svg>
  )
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
    </svg>
  )
}

const contacts = [
  { name: "Discord", value: "@cookie_junior.", icon: DiscordIcon },
  { name: "Instagram", value: "napata_kook", icon: InstagramIcon },
  { name: "Line", value: "Kookkee", icon: MessageCircle },
]

/* =========================
   TEXT SLIDES
========================= */
const textSlides = [
  {
    type: "glow_heading",
    title: "About Me",
  },
  {
    type: "subheading",
    title: "'จากการลองเรียนรู้ สู่การสร้างสิ่งที่อยากเห็น'",
    color: white,
  },
  {
    type: "paragraph",
    text: "ฉันเป็นนักเรียนคนนึงที่ไม่ได้เก่งหรือสนใจด้านไอทีตั้งแต่แรก",
    color: gray,
  },
  {
    type: "paragraph",
    text: "จุดเปลี่ยนสำคัญอยู่ที่การได้เข้าค่าย Hamster Hub",
    color: gray,
  },
  {
    type: "paragraph",
    text: "ทำให้สนใจที่จะเรียนรู้และพัฒนาทักษะด้านไอทีต่อไป",
    color: gray,
  },
  {
    type: "glow_heading",
    title: "Interest",
  },
  {
    type: "subheading",
    title: "Curious about\nwhat comes next.",
    color: white,
  },
  {
    type: "paragraph",
    text: "ฉันสนใจในการเรียนรู้สิ่งใหม่ๆ",
    color: gray,
    image: girl01Image,
  },
  {
    type: "paragraph",
    text: "โดยเฉพาะด้านการพัฒนาไอที",
    color: gray,
    image: girl02Image,
  },
  {
    type: "paragraph",
    text: "ที่อาจเป็นจุดเปลี่ยนสำคัญของเทคโนโลยี",
    color: gray,
    image: girl03Image,
  },
  {
    type: "paragraph",
    text: "ที่มีอิทธิพลต่อโลกในอนาคตอันใกล้",
    color: gray,
    image: girl04Image,
  },
]

/* =========================
   GLOW TITLE
========================= */
function GlowingBlueTitle({ text }: { text: string }) {
  return (
    <h2 className="text-6xl font-black uppercase tracking-wider text-blue-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] sm:text-8xl md:text-9xl">
      {text}
    </h2>
  )
}

/* =========================
   HOME
========================= */
export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(-1)
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false)

  const [triggerCardAnimation, setTriggerCardAnimation] = useState(false)

  /* ใช้สำหรับการกดพลิกการ์ดเท่านั้น */
  const [isFlipped, setIsFlipped] = useState(false)

  const [currentCatbotImage, setCurrentCatbotImage] =
    useState<string>(catbot01Image)

  const [fullscreenMedia, setFullscreenMedia] = useState<{
    type: "image" | "video"
    src: string
  } | null>(null)

  const profileSectionRef = useRef<HTMLDivElement | null>(null)

  /* =========================
     CATBOT
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCatbotImage((prev) =>
        prev === catbot01Image ? catbot04Image : catbot01Image
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  /* =========================
     INTRO
  ========================= */
  const finishIntroAnimation = () => {
    setCurrentSlideIndex(-1)
    document.body.style.overflow = ""
    setIsFlipped(false)

    setTriggerCardAnimation(true)
  }

  const skipIntroAnimation = () => {
    finishIntroAnimation()
  }

  const replayIntroAnimation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setHasPlayedAnimation(true)
    setTriggerCardAnimation(false)
    setIsFlipped(false)
    setCurrentSlideIndex(0)

    document.body.style.overflow = "hidden"
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 10) {
        setHasPlayedAnimation(false)
        setTriggerCardAnimation(false)
        setIsFlipped(false)
      }

      if (
        currentScrollY > 50 &&
        !hasPlayedAnimation &&
        currentSlideIndex === -1
      ) {
        setHasPlayedAnimation(true)
        setCurrentSlideIndex(0)
        document.body.style.overflow = "hidden"
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasPlayedAnimation, currentSlideIndex])

  useEffect(() => {
    if (currentSlideIndex < 0) return

    if (currentSlideIndex < textSlides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlideIndex((prev) => prev + 1)
      }, 3200)

      return () => clearTimeout(timer)
    }

    const finalTimer = setTimeout(() => {
      finishIntroAnimation()
    }, 3200)

    return () => clearTimeout(finalTimer)
  }, [currentSlideIndex])

  return (
    <main className="min-h-screen bg-black" style={{ color: gray }}>
      <style jsx global>{`
        /* =========================================
           INTRO
        ========================================= */

        @keyframes fadeInOut3s {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            filter: blur(8px);
          }

          15% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }

          85% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }

          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
            filter: blur(8px);
          }
        }

        .fade-slide-center {
          animation: fadeInOut3s 3.2s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* =========================================
           KOOKKEE TEXT
        ========================================= */

        .kookkee-red-orange {
          font-weight: 900;

          background: linear-gradient(
            135deg,
            #ff3300 0%,
            #ff6600 50%,
            #ff8800 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          filter:
            drop-shadow(0 0 25px rgba(255, 68, 0, 0.85))
            drop-shadow(0 0 50px rgba(255, 102, 0, 0.5));
        }

        .text-blue-glow {
          color: #3b82f6;

          text-shadow:
            0 0 20px rgba(59, 130, 246, 0.8),
            0 0 40px rgba(37, 99, 235, 0.5);
        }

        /* =========================================
           3D CARD
        ========================================= */

        .card-perspective {
          perspective: 1400px;
        }

        .card-3d {
          transform-style: preserve-3d;
        }

        /*
          ชั้นสำหรับการกดพลิกการ์ด

          0°   = Kookkee
          180° = แมวส้ม
        */

        .card-flip {
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotateY(0deg);
          transform-style: preserve-3d;
          transition: transform 0.2s linear;
        }

        .card-flip.is-flipped {
          transform: rotateY(180deg);
        }

        /*
          ด้านที่หันออกจากผู้ชมจะถูกซ่อน
        */

        .card-face {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          transform-style: preserve-3d;
        }

        /*
          =========================================
          INTRO CARD SPIN
          =========================================

          Kookkee
             ↓
          แมวส้ม
             ↓
          Kookkee
             ↓
          แมวส้ม
             ↓
          Kookkee

          เวลา = 0.7 วินาที
          ทิศทางเดียว

          0°    Kookkee
          180°  แมว
          360°  Kookkee
          540°  แมว
          720°  Kookkee

          ตอนท้าย Kookkee ขยาย 20%
        */

        @keyframes kookkeeCardSpin {
          0% {
            transform: rotateY(0deg) scale(1);
          }

          25% {
            transform: rotateY(180deg) scale(1);
          }

          50% {
            transform: rotateY(360deg) scale(1);
          }

          75% {
            transform: rotateY(540deg) scale(1);
          }

          94% {
            transform: rotateY(676.8deg) scale(1);
          }

          100% {
            transform: rotateY(720deg) scale(1.20);
          }
        }

        .kookkee-card-spin {
          animation: kookkeeCardSpin 0.7s linear 1 forwards;

          transform-style: preserve-3d;

          will-change: transform;
        }

        /* =========================================
           CARD DROP
        ========================================= */

        @keyframes cardDrop {
          0% {
            transform: translateY(-150px) scale(1.20);
            opacity: 0;
          }

          70% {
            transform: translateY(10px) scale(1.03);
            opacity: 1;
          }

          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .card-drop {
          animation: cardDrop 0.55s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        /* =========================================
           FLOAT
        ========================================= */

        @keyframes floatBounce {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: floatBounce 3s ease-in-out infinite;
        }

        /* =========================================
           POP UP
        ========================================= */

        @keyframes popUp {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }

          50% {
            transform: scale(1.05);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-pop-up {
          animation: popUp 0.6s
            cubic-bezier(0.17, 0.88, 0.32, 1.1)
            forwards;
        }
      `}</style>

      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <button
            onClick={replayIntroAnimation}
            className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400 transition hover:bg-blue-500/20"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Replay Intro</span>
          </button>

          <div className="flex gap-8 text-sm">
            {["projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* =========================================
          INTRO
      ========================================= */}

      {currentSlideIndex !== -1 && (
        <section className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center overflow-hidden bg-black px-6">
          <div className="relative flex h-full w-full max-w-6xl items-center justify-center text-center">
            {textSlides.map((slide, index) => {
              if (index !== currentSlideIndex) return null

              return (
                <div
                  key={`${index}-${slide.title || slide.text}`}
                  className="fade-slide-center absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  {slide.type === "glow_heading" && (
                    <GlowingBlueTitle text={slide.title!} />
                  )}

                  {"title" in slide &&
                    slide.type !== "glow_heading" && (
                      <h2 className="max-w-5xl whitespace-pre-line text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
                        {slide.title}
                      </h2>
                    )}

                  {"text" in slide && (
                    <p className="max-w-5xl text-3xl font-bold leading-relaxed text-zinc-100 drop-shadow-md sm:text-5xl md:text-6xl">
                      {slide.text}
                    </p>
                  )}

                  {slide.image && (
                    <div className="mt-8 overflow-hidden rounded-3xl border-2 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.5)] animate-pop-up">
                      <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                        <Image
                          src={slide.image}
                          alt="Animation Scene"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <button
            onClick={skipIntroAnimation}
            title="Skip Intro"
            className="absolute bottom-8 right-8 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:border-blue-500 hover:bg-blue-500/20 hover:text-blue-400 active:scale-95"
          >
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </button>
        </section>
      )}

      {/* =========================================
          HERO
      ========================================= */}

      <section
        id="home"
        ref={profileSectionRef}
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background: "rgba(255, 102, 0, 0.15)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* =====================================
              KOOKKEE CARD
          ===================================== */}

          <div className="flex justify-center md:justify-end md:pr-6">
            <div className="card-perspective relative h-[440px] w-[340px]">

              <div
                className={`card-3d relative h-full w-full ${
                  triggerCardAnimation
                    ? "kookkee-card-spin"
                    : ""
                }`}
                onAnimationEnd={() => {
                  setTriggerCardAnimation(false)
                }}
              >

                <div
                  className={`card-flip cursor-pointer ${
                    isFlipped ? "is-flipped" : ""
                  }`}
                  onClick={() => {
                    if (!triggerCardAnimation) {
                      setIsFlipped((prev) => !prev)
                    }
                  }}
                >

                  {/* FRONT */}

                  <div className="card-face overflow-hidden rounded-[2rem] border border-orange-500/30 bg-zinc-900 shadow-2xl">
                    <Image
                      src={profileImage}
                      alt="Kookkee"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* BACK */}

                  <div
                    className="card-face flex flex-col items-center justify-center rounded-[2rem] border-2 border-orange-500/50 bg-gradient-to-br from-orange-600 via-amber-600 to-red-600 p-6 shadow-2xl"
                    style={{
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)]" />

                    <div className="relative text-8xl drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]">
                      🐱
                    </div>

                    <h3 className="relative mt-4 text-5xl font-black tracking-widest text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                      ei ei
                    </h3>
                  </div>

                </div>
              </div>

              <p className="absolute -bottom-8 left-0 w-full text-center text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                click to flip card
              </p>

            </div>
          </div>

          {/* =====================================
              HERO TEXT
          ===================================== */}

          <div className="relative flex min-h-[380px] flex-col justify-between text-center md:text-left">
            <div>
              <h1 className="mb-6 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
                <span className="kookkee-red-orange">
                  Kookkee
                </span>

                <span className="text-orange-500">.</span>
              </h1>

              <p className="text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                นักสร้างเทคโนโลยีฝึกหัด{" "}
                <span className="text-orange-500">
                  ฝันร้ายคนเขียนโค้ด
                </span>
              </p>

              <p className="mt-4 text-lg font-normal leading-relaxed text-zinc-300 sm:text-xl">
                จากคนที่ไม่ได้สนใจ IT สู่คนที่อยากสร้างมัน
              </p>
            </div>

            {/* CATBOT */}

            <div className="mt-8 flex justify-center md:justify-end">
              <div className="animate-float relative overflow-hidden rounded-2xl border-2 border-cyan-400/40 shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36">
                  <Image
                    src={currentCatbotImage}
                    alt="Catbot"
                    fill
                    className="object-cover transition-opacity duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          PROJECTS
      ========================================= */}

      <section
        id="projects"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-black px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-center gap-6 animate-pop-up">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(56,189,248,0.5)] sm:h-28 sm:w-28">
              <Image
                src={catbot02Image}
                alt="Catbot 02"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-glow">
                My Projects
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">
                Things I&apos;ve built.
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => {
              const ProjectIcon = project.icon

              return (
                <Dialog
                  key={project.number}
                  open={activeProject === project.number}
                  onOpenChange={(open) =>
                    setActiveProject(
                      open ? project.number : null
                    )
                  }
                >
                  <DialogTrigger>
                    <button className="group relative w-full cursor-pointer overflow-hidden rounded-[2rem] border-2 border-yellow-400/30 bg-gradient-to-br from-red-950 via-red-900 to-yellow-950 p-8 text-left transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(250,204,21,0.2)]">

                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/10 blur-2xl" />

                      <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-red-500/10 blur-2xl" />

                      <span className="absolute right-7 top-6 text-sm font-bold tracking-widest text-yellow-300/70">
                        {project.number}
                      </span>

                      <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-300/40 bg-yellow-400/10 text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.12)]">
                        <ProjectIcon className="h-8 w-8" />
                      </div>

                      <div className="mb-5 text-center">
                        <span className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-yellow-300">
                          Click to Open
                        </span>
                      </div>

                      <div className="relative text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-yellow-200">
                          {project.category}
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mx-auto mt-4 max-w-lg leading-7 text-red-100/70">
                          {project.description}
                        </p>
                      </div>
                    </button>
                  </DialogTrigger>

                  {/* MODAL */}

                  <DialogContent className="max-h-[95vh] w-full max-w-[95vw] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 p-0 text-zinc-100 shadow-2xl">
                    <div className="p-6 sm:p-12">

                      <DialogHeader>
                        <div className="mb-5 flex items-center gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-glow">
                              {project.category}
                            </p>

                            <DialogTitle className="mt-1 text-3xl font-bold text-white sm:text-5xl">
                              {project.title}
                            </DialogTitle>
                          </div>
                        </div>

                        <DialogDescription className="max-w-5xl text-lg leading-8 text-zinc-300">
                          {project.details}
                        </DialogDescription>
                      </DialogHeader>

                      {/* GALLERY */}

                      <div className="mt-10">
                        <div className="mb-6 flex items-center gap-2">
                          <Layers3 className="h-5 w-5 text-sky-400" />

                          <h4 className="text-xl font-semibold text-white">
                            Project Gallery
                          </h4>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                          {project.images.map((image, index) => (
                            <div
                              key={image}
                              onClick={() =>
                                setFullscreenMedia({
                                  type: "image",
                                  src: image,
                                })
                              }
                              className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg"
                            >
                              <Image
                                src={image}
                                alt={`${project.title} ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />

                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                <Maximize2 className="h-10 w-10 text-white drop-shadow-md" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* VIDEOS */}

                      {project.videos.length > 0 && (
                        <div className="mt-12">
                          <div className="mb-6 flex items-center gap-2">
                            <Code2 className="h-5 w-5 text-sky-400" />

                            <h4 className="text-xl font-semibold text-white">
                              Project Videos
                            </h4>
                          </div>

                          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                            {project.videos.map((video) => (
                              <div
                                key={video}
                                onClick={() =>
                                  setFullscreenMedia({
                                    type: "video",
                                    src: video,
                                  })
                                }
                                className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg"
                              >
                                <video
                                  preload="metadata"
                                  className="pointer-events-none h-full w-full object-cover"
                                >
                                  <source
                                    src={video}
                                    type="video/mp4"
                                  />
                                </video>

                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                  <Maximize2 className="h-10 w-10 text-white" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-10 border-t border-white/10 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-glow">
                          Technologies
                        </p>

                        <p className="mt-2 text-lg font-medium text-zinc-200">
                          {project.technologies}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          FULLSCREEN MEDIA
      ========================================= */}

      {fullscreenMedia && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">

          <button
            onClick={() => setFullscreenMedia(null)}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-zinc-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl">

            {fullscreenMedia.type === "image" ? (
              <div className="relative h-[80vh] w-[80vw]">
                <Image
                  src={fullscreenMedia.src}
                  alt="Fullscreen View"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={fullscreenMedia.src}
                controls
                autoPlay
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            )}

          </div>
        </div>
      )}

      {/* =========================================
          SKILLS
      ========================================= */}

      <section
        id="skills"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-2 flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.3em] text-blue-glow">
  Skills
  <Puzzle className="inline-block h-4 w-4 text-white" />
</p>

<h2 className="mb-8 text-3xl font-semibold text-white sm:text-5xl">
  Things I've got.
</h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              [
                "Developing",
                Code2,
                "พัฒนาสิ่งที่คิดให้ออกมาเป็นผลงานจริง",
              ],
              [
                "Learning",
                Cpu,
                "เรียนรู้เทคโนโลยีและสิ่งใหม่อยู่เสมอ",
              ],
              [
                "Adapting",
                Layers3,
                "ปรับตัวและแก้ปัญหาจากสิ่งที่ได้เรียนรู้",
              ],
            ].map(([title, Icon, text]) => {
              const SkillIcon = Icon as typeof Code2

              return (
                <div
                  key={title as string}
                  className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition-all hover:-translate-y-2"
                >
                  <SkillIcon className="mb-6 h-7 w-7 text-blue-400" />

                  <h3 className="text-xl font-semibold text-white">
                    {title as string}
                  </h3>

                  <p className="mt-3 leading-7">
                    {text as string}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 flex items-center gap-6">
  {/* CATBOT 03 */}
  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(56,189,248,0.45)] sm:h-28 sm:w-28">
    <Image
      src={catbot03Image}
      alt="Catbot 03"
      fill
      className="object-cover"
    />
  </div>

  {/* CONTACT TITLE */}
  <div>
    <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-glow">
      Get in Touch
    </p>

    <h2 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">
      Contact Me.
    </h2>
  </div>
</div>

          <div className="grid gap-6 md:grid-cols-3">
            {contacts.map((contact) => {
              const ContactIcon = contact.icon

              return (
                <div
                  key={contact.name}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-black/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    <ContactIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400">
                      {contact.name}
                    </p>

                    <p className="mt-1 text-base font-semibold text-white">
                      {contact.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}