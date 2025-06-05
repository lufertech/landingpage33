"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X, ArrowUp, MessageCircle, AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// URL para todos los botones CTA
const CALENDAR_URL = "https://calendly.com/lufer-tecnologia/30min"
const WHATSAPP_NUMBER = "+5491122747092"

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-sm relative">
      <div className="flex items-center justify-center gap-2">
        <AlertCircle className="h-4 w-4" />
        <span className="font-medium">⏰ Últimos 5 lugares para instalación gratis</span>
        <span className="hidden sm:inline">🎁 Bonificación por contratar en las próximas 48 hs</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-red-700 rounded p-1"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  )
}

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
        className="transition-transform duration-200"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Alternar menú</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white shadow-lg" style={{ backgroundColor: "white" }}>
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%207-VEkkzzHjmIagP4YOM97SRcuzyyXdcF.png"
                alt="Logo de Lufer Tecnología"
                width={32}
                height={32}
              />
              <span className="text-lg font-light">Lufer Tecnología</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="transition-transform duration-200"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-6 p-6">
            <Link
              href="#beneficios"
              className="text-lg font-light text-gray-600 hover:text-navy transition-colors"
              onClick={handleLinkClick}
            >
              Beneficios
            </Link>
            <Link
              href="#video"
              className="text-lg font-light text-gray-600 hover:text-navy transition-colors"
              onClick={handleLinkClick}
            >
              Demo
            </Link>
            <Link
              href="#problemas"
              className="text-lg font-light text-gray-600 hover:text-navy transition-colors"
              onClick={handleLinkClick}
            >
              Problemas
            </Link>
            <Link
              href="#faq"
              className="text-lg font-light text-gray-600 hover:text-navy transition-colors"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
            <Link
              href="#contacto"
              className="text-lg font-light text-gray-600 hover:text-navy transition-colors"
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button asChild onClick={handleLinkClick} className="btn-minimal text-white">
                <Link href={CALENDAR_URL} target="_blank">
                  🎯 Quiero una DEMO ahora
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export function VideoSection() {
  return (
    <section id="video" className="section-container bg-white">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Demo interactiva</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Mirá cómo funciona nuestro chatbot en acción</h2>
          <div className="divider mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Video explicativo de 90 segundos que te muestra exactamente cómo el chatbot automatiza tu negocio.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/b3d0VEvAq5I"
              title="Demo del Chatbot de Lufer Tecnología"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400} className="mt-12 text-center">
          <Button asChild className="btn-minimal text-white">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              🎯 Quiero una DEMO ahora
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Funciona en WhatsApp Business?",
      answer: "Sí. Funciona en WhatsApp Business, Instagram, Facebook y sitio web.",
    },
    {
      question: "¿Necesito una cuenta de Facebook?",
      answer: "Sí. Para la configuración de WhatsApp Business. Pero no te preocupes porque te vamos a ayudar con eso.",
    },
    {
      question: "¿Se integra con Google Calendar?",
      answer: "Sí. Vas a poder ver todos los turnos agendados desde tu Google Calendar.",
    },
    {
      question: "¿Tiene costo mensual?",
      answer: "Sí. Pero esto depende de la cantidad de mensajes que recibís.",
    },
    {
      question: "¿Y si no me gusta?",
      answer: "Podés cancelar y desconectar todo sin costo.",
    },
  ]

  return (
    <section id="faq" className="section-container bg-gray-50">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Preguntas frecuentes</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Resolvé tus dudas</h2>
          <div className="divider mx-auto"></div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="card-minimal">
                <CardHeader className="cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <CardTitle className="flex items-center justify-between text-lg font-light text-navy">
                    {faq.question}
                    {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </CardTitle>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 font-light">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-12 text-center">
          <Button asChild className="btn-minimal text-white">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              🎯 Quiero una DEMO ahora
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    business: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola! Me interesa el chatbot para mi negocio.
    
Nombre: ${formData.name}
WhatsApp: ${formData.whatsapp}
Rubro: ${formData.business}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="card-minimal">
      <CardHeader>
        <CardTitle className="text-xl font-light text-navy text-center">Quiero recibir info</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-gray-200 focus:border-navy"
            />
          </div>
          <div>
            <Input
              placeholder="Tu WhatsApp"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              required
              className="border-gray-200 focus:border-navy"
            />
          </div>
          <div>
            <Select onValueChange={(value) => setFormData({ ...formData, business: value })}>
              <SelectTrigger className="border-gray-200 focus:border-navy">
                <SelectValue placeholder="Rubro del negocio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="peluqueria">Peluquería</SelectItem>
                <SelectItem value="belleza">Centro de belleza</SelectItem>
                <SelectItem value="medico">Consultorio médico</SelectItem>
                <SelectItem value="odontologia">Odontología</SelectItem>
                <SelectItem value="spa">Spa</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full btn-minimal text-white">
            Quiero recibir info
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me interesa el chatbot para mi negocio.`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
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
        return "animate-slide-right"
      case "slide-left":
        return "animate-slide-left"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${isVisible ? `opacity-100 ${getAnimationClass()}` : "opacity-0"} ${className || ""}`}
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
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-navy text-white shadow-sm transition-all duration-300 hover:shadow-md"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </>
  )
}
