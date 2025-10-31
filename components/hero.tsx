"use client"

import { useEffect, useRef } from "react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("home")
        }
      },
      { threshold: 0.5 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveSection])

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Heya! I am <span className="text-primary text-muted-foreground leading-relaxed text-glow text-float text-shimmer inline-block">Aakash Hariram</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-float">
              Electronics and Computer Engineering Student
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-shimmer font-semibold">
              Passionate Coder & Problem Solver. Building software that helps people.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => {
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 btn-glow-primary transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 btn-glow-accent transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          <div className="pt-12 text-muted-foreground">
            <p className="text-sm font-medium">Scroll down to explore</p>
            <div className="mt-4">
              <svg
                className="w-6 h-6 mx-auto text-primary animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(26, 188, 156, 0.5))",
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
