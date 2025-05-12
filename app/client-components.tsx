"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUp } from "lucide-react"
import Link from "next/link"

// URL para todos los botones CTA
const CALENDAR_URL = "https://calendly.com/lufer-tecnologia/30min"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Cerrar el menú cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="transition-transform duration-200 hover:scale-110"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Alternar menú</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-6 animate-in fade-in slide-in-from-top-5 shadow-lg">
          <nav className="flex flex-col gap-6">
            <Link
              href="#problemas"
              className="text-lg font-light hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Problemas
            </Link>
            <Link
              href="#para-quien"
              className="text-lg font-light hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              ¿Para quién?
            </Link>
            <Link
              href="#beneficios"
              className="text-lg font-light hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Beneficios
            </Link>
            <Link
              href="#dashboard"
              className="text-lg font-light hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Dashboard
            </Link>
            <Link
              href="#precios"
              className="text-lg font-light hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className="text-lg font-light hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button asChild onClick={handleLinkClick} className="cta-button font-light">
                <Link href={CALENDAR_URL} target="_blank">
                  Reservá tu reunión ahora
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export function AnimatedSection({ children, className, delay = 0, animation = "fade" }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animation) {
      case "slide-right":
        return "animate-slide-in-right"
      case "slide-left":
        return "animate-slide-in-left"
      case "scale":
        return "animate-scale-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${isVisible ? `opacity-100 ${getAnimationClass()}` : "opacity-0"} ${className || ""}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
