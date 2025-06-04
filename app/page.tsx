import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Youtube,
  BarChart3,
  Check,
  X,
  Shield,
  ArrowRight,
  ChevronRight,
  Clock,
  DollarSign,
  CheckCircle,
  Calendar,
} from "lucide-react"
import { MobileNav, AnimatedSection, ScrollToTop } from "./client-components"
import { FeaturesGrid } from "../components/features-grid"

// URL para todos los botones CTA
const CALENDAR_URL = "https://calendly.com/lufer-tecnologia/30min"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <BenefitsHighlightSection />
        <ProblemSolutionSection />
        <TargetAudienceSection />
        <FeaturesSection />
        <GuaranteeSection />
        <DashboardSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full navbar-glass border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%207-VEkkzzHjmIagP4YOM97SRcuzyyXdcF.png"
            alt="Logo de Lufer Tecnología"
            width={36}
            height={36}
            className="hover-translate"
          />
          <span className="text-xl font-light text-navy">Lufer Tecnología</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#beneficios"
            className="text-sm font-light text-gray-600 hover:text-navy transition-all duration-300 relative group"
          >
            Beneficios
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#problemas"
            className="text-sm font-light text-gray-600 hover:text-navy transition-all duration-300 relative group"
          >
            Problemas
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#para-quien"
            className="text-sm font-light text-gray-600 hover:text-navy transition-all duration-300 relative group"
          >
            ¿Para quién?
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#dashboard"
            className="text-sm font-light text-gray-600 hover:text-navy transition-all duration-300 relative group"
          >
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-light text-gray-600 hover:text-navy transition-all duration-300 relative group"
          >
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex btn-minimal text-white">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              Quiero el chatbot ahora
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Fondo azul */}
      <div className="absolute inset-0 bg-navy"></div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1fr_700px] lg:gap-0 xl:grid-cols-[1fr_800px] items-end min-h-[80vh]">
          <AnimatedSection animation="slide-left" className="flex flex-col justify-center space-y-8 pb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-light">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Automatización inteligente 24/7</span>
              </div>

              <h1 className="text-4xl font-light tracking-tight sm:text-5xl xl:text-6xl text-white leading-tight">
                Tu asistente virtual que agenda turnos sin errores
              </h1>

              <p className="max-w-[600px] text-white/90 text-xl font-light leading-relaxed">
                Atendé a tus pacientes o clientes automáticamente por WhatsApp.{" "}
                <span className="text-white font-medium">Sin llamadas, sin excusas.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-minimal text-white border-0 text-base px-8 py-3">
                <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
                  Quiero el chatbot ahora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-outline-minimal text-white text-base px-8 py-3"
              >
                <Link href="#beneficios" className="flex items-center gap-2">
                  Ver beneficios
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={300} className="flex items-end justify-end h-full">
            <div className="relative h-full flex items-end">
              <Image
                src="/images/whatsapp-phone-clean.png"
                width={800}
                height={1200}
                alt="Chatbot de Lufer Tecnología en WhatsApp"
                className="w-full max-w-[800px] h-auto object-contain"
                priority
                style={{ marginBottom: "-5px" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function BenefitsHighlightSection() {
  const keyBenefits = [
    {
      icon: Clock,
      title: "Más tiempo libre",
      description: "Automatizá tareas repetitivas y enfocate en lo que realmente importa para tu negocio.",
    },
    {
      icon: DollarSign,
      title: "Menos costos",
      description: "Reducí gastos de personal administrativo y optimizá tus recursos.",
    },
    {
      icon: X,
      title: "Menos errores",
      description: "Eliminá confusiones en la agenda y superposiciones de turnos.",
    },
    {
      icon: CheckCircle,
      title: "Más turnos confirmados",
      description: "Aumentá la tasa de asistencia con recordatorios automáticos.",
    },
  ]

  return (
    <section id="beneficios" className="section-container bg-white">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Beneficios principales</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">
            Optimizá tu negocio con nuestro chatbot inteligente
          </h2>
          <div className="divider mx-auto"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyBenefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 100} className="card-minimal">
              <div className="icon-box-primary mb-6">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-light text-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="mt-16 text-center">
          <Button asChild className="btn-minimal text-white">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              Empezá a optimizar tu negocio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ProblemSolutionSection() {
  return (
    <section id="problemas" className="section-container bg-gray-50">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Problemas y soluciones</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Automatizá tu gestión de turnos</h2>
          <div className="divider mx-auto"></div>
        </AnimatedSection>

        <div className="grid gap-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              {[
                "¿Recibís muchos mensajes y no tenés tiempo para responder?",
                "¿Perdés clientes por no responder los mensajes a tiempo?",
                "¿Te sale caro mantener una persona solo para responder los mensajes?",
              ].map((problem, index) => (
                <AnimatedSection key={index} delay={100 * (index + 1)} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-gray-700 font-light">{problem}</p>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="slide-right" delay={400} className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/stressed-woman.png"
                  alt="Mujer estresada por la gestión manual de turnos"
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-auto"
                  loading="eager"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <AnimatedSection animation="slide-left" delay={500} className="flex justify-center md:order-1">
              <div className="relative">
                <Image
                  src="/images/secretary-phone.png"
                  alt="Secretaria atendiendo llamadas y gestionando turnos"
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-auto"
                  loading="eager"
                />
              </div>
            </AnimatedSection>

            <div className="space-y-6 md:order-2">
              {["¿Tus clientes se olvidan los turnos o no confirman?", "¿Seguís anotando todo en papel o Excel?"].map(
                (problem, index) => (
                  <AnimatedSection key={index} delay={600 + 100 * index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="text-gray-700 font-light">{problem}</p>
                  </AnimatedSection>
                ),
              )}
            </div>
          </div>

          <AnimatedSection delay={800} className="card-minimal bg-gray-50 border border-gray-200">
            <h3 className="text-xl font-light text-navy mb-6">Con nuestro chatbot inteligente:</h3>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Automatizás la reserva de turnos 24/7",
                "Reducís cancelaciones con recordatorios automáticos",
                "Integrás con Google Calendar o tu sistema actual",
                "Todo desde WhatsApp, Facebook, Instagram o tu web",
                "Más tiempo libre para otras tareas en tu negocio",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm font-light">{benefit}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function TargetAudienceSection() {
  return (
    <section id="para-quien" className="section-container bg-white">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">¿Para quién es esto?</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Ideal para negocios que trabajan con turnos</h2>
          <div className="divider mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Si tu negocio trabaja con turnos, este chatbot es para vos.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: "/images/hair-salon-wash.png",
              title: "Peluquerías y salones de belleza",
              icon: "💇",
            },
            {
              image: "/images/beauty-salon.png",
              title: "Manicuría y pedicuría",
              icon: "💅",
            },
            {
              image: "/images/medical-laptop.png",
              title: "Consultorios médicos y odontológicos",
              icon: "🏥",
            },
          ].map((item, index) => (
            <AnimatedSection key={index} delay={100 * (index + 1)} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="text-lg font-light text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="section-container bg-gray-50">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Características</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Funcionalidades que transforman tu negocio</h2>
          <div className="divider mx-auto"></div>
        </AnimatedSection>

        <div className="mx-auto max-w-7xl">
          <AnimatedSection delay={100}>
            <FeaturesGrid />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function GuaranteeSection() {
  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-navy"></div>

      <div className="container-tight relative z-10">
        <AnimatedSection className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl font-light text-white mb-6">
            Sin riesgos. Probalo gratis y enamorate de tu nuevo asistente virtual.
          </h2>

          <p className="text-xl mb-10 text-white/80 font-light">Agendá una demo o pedinos más info ahora mismo.</p>

          <Button asChild size="lg" className="btn-outline-minimal text-white">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              Quiero el chatbot ahora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          {/* Garantías minimalistas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Shield, text: "Garantía de satisfacción" },
              { icon: Clock, text: "Implementación rápida" },
              { icon: Calendar, text: "Soporte continuo" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <item.icon className="h-6 w-6 text-white/80 mx-auto mb-3" />
                <p className="text-white/80 text-sm font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function DashboardSection() {
  return (
    <section id="dashboard" className="section-container bg-white">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Dashboard</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Analíticas completas para optimizar tu negocio</h2>
          <div className="divider mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Monitoreá el rendimiento de tu chatbot y tomá decisiones basadas en datos reales.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          <AnimatedSection animation="scale" className="card-minimal overflow-hidden">
            <div className="bg-navy p-4 flex items-center justify-between text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-light">Chatbot 2025</p>
                  <p className="text-white/80 text-xs">Analíticas en tiempo real</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="status-dot"></div>
                <span className="text-xs font-light">En vivo</span>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-05-09%20a%20la%28s%29%2011.21.17-He3GR9G4vLWEq2YgAh5n4OUZbYSVrT.png"
                alt="Dashboard de analíticas del chatbot mostrando conversaciones y contactos por país"
                width={1200}
                height={600}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={300} className="card-minimal overflow-hidden">
            <div className="bg-navy p-4 flex items-center justify-between text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-light">Chatbot 2025</p>
                  <p className="text-white/80 text-xs">Gestión de contactos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="status-dot"></div>
                <span className="text-xs font-light">Sincronizado</span>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-05-09%20a%20la%28s%29%2011.22.03-gOxva3zocsZHg0qazbuUdWgGyQbfM4.png"
                alt="Dashboard de contactos del chatbot mostrando lista de clientes"
                width={1200}
                height={600}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-light">
            Obtené información valiosa sobre el rendimiento de tu chatbot y el comportamiento de tus clientes
          </p>
          <Button asChild className="btn-minimal text-white">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              Solicitar acceso al dashboard
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contacto" className="section-container bg-gray-50">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-light text-navy uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl font-light text-navy mt-2 mb-4">Hablemos</h2>
          <div className="divider mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos listos para responder tus preguntas y ayudarte a implementar tu chatbot.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={100} animation="slide-left" className="card-minimal">
            <div className="flex items-center gap-4">
              <div className="icon-box-primary">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-light text-navy">Instagram</h3>
                <p className="text-gray-600 text-sm">
                  <a
                    href="https://instagram.com/Lufertecnologia"
                    target="_blank"
                    className="hover:text-navy transition-colors"
                    rel="noreferrer"
                  >
                    @Lufertecnologia
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="slide-right" className="card-minimal">
            <div className="flex items-center gap-4">
              <div className="icon-box-primary">
                <Youtube className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-light text-navy">YouTube</h3>
                <p className="text-gray-600 text-sm">
                  <a
                    href="https://youtube.com/Lufertecnologia"
                    target="_blank"
                    className="hover:text-navy transition-colors"
                    rel="noreferrer"
                  >
                    Lufertecnologia
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300} animation="scale" className="card-minimal text-center">
          <div className="space-y-6">
            <div className="icon-box-primary mx-auto">
              <Calendar className="h-5 w-5" />
            </div>

            <h3 className="text-xl font-light text-navy">¿Preferís una reunión?</h3>

            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Reservá una reunión informativa gratuita para conocer cómo podemos ayudarte.
            </p>

            <Button asChild className="btn-minimal text-white">
              <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
                Reservá tu reunión ahora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t py-8 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%207-VEkkzzHjmIagP4YOM97SRcuzyyXdcF.png"
              alt="Logo de Lufer Tecnología"
              width={32}
              height={32}
              className="hover-translate"
            />
            <span className="text-lg font-light text-navy">Lufer Tecnología</span>
          </div>

          <p className="text-center text-gray-500 text-sm md:text-left font-light">
            © 2023 Lufer Tecnología. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com/Lufertecnologia"
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Instagram className="h-4 w-4 text-navy" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/@LuferTecnologia"
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Youtube className="h-4 w-4 text-navy" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
