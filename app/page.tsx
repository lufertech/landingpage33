import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, CheckCircle, BarChart3, Check, X, Shield, ArrowRight, ChevronRight } from "lucide-react"
import { MobileNav, AnimatedSection, ScrollToTop } from "./client-components"
import { CostComparisonChart } from "../components/cost-comparison-chart"
import { StatsSection } from "../components/stats-section"
import { FeaturesGrid } from "../components/features-grid"

// URL para todos los botones CTA
const CALENDAR_URL = "https://calendly.com/lufer-tecnologia/30min"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <StatsCounterSection />
        <ProblemSolutionSection />
        <TargetAudienceSection />
        <BenefitsSection />
        <CostComparisonSection />
        {/* Sección de testimonios eliminada */}
        <GuaranteeSection />
        <DashboardSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%207-VEkkzzHjmIagP4YOM97SRcuzyyXdcF.png"
            alt="Logo de Lufer Tecnología"
            width={40}
            height={40}
            className="hover-scale"
          />
          <span className="text-xl font-normal">Lufer Tecnología</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#problemas" className="text-sm font-normal hover:text-primary transition-colors relative group">
            Problemas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#para-quien" className="text-sm font-normal hover:text-primary transition-colors relative group">
            ¿Para quién?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#beneficios" className="text-sm font-normal hover:text-primary transition-colors relative group">
            Beneficios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#dashboard" className="text-sm font-normal hover:text-primary transition-colors relative group">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#precios" className="text-sm font-normal hover:text-primary transition-colors relative group">
            Precios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contacto" className="text-sm font-normal hover:text-primary transition-colors relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden md:flex cta-button font-normal">
            <Link href={CALENDAR_URL} target="_blank">
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
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>

      {/* Decorative elements - simplified for minimalism */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_400px]">
          <AnimatedSection animation="slide-left" className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Tu nuevo asistente virtual que agenda turnos 24/7 sin errores ni demoras
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl font-light">
                💬 Atendé a tus pacientes o clientes automáticamente por WhatsApp, sin llamadas, sin excusas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary" className="font-normal cta-button animate-pulse-slow group">
                <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
                  Quiero el chatbot ahora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Removed the bubbles and text about 500 businesses */}
          </AnimatedSection>
          <AnimatedSection animation="slide-right" delay={300} className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-[280px] relative">
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse-slow"></div>
              <Image
                src="/images/whatsapp-mockup.png"
                width={400}
                height={800}
                alt="Chatbot de Lufer Tecnología en WhatsApp"
                className="w-full h-auto rounded-xl shadow-xl hover-scale relative z-10"
                priority
              />
              <div className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-light">Activo 24/7</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function StatsCounterSection() {
  return (
    <section className="w-full py-12 bg-white relative z-10 -mt-8">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl -mt-16 relative z-20">
          <AnimatedSection delay={100}>
            <StatsSection />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function ProblemSolutionSection() {
  return (
    <section id="problemas" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light"></div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
              Automatizá tu gestión de turnos y olvidate de los problemas
            </h2>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <AnimatedSection
                delay={100}
                className="flex items-start gap-4 rounded-lg border p-6 shadow-sm hover-lift bg-white/80 backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-xl font-normal text-left">
                  ¿Recibís muchos mensajes y no tenés tiempo para responder?
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={200}
                className="flex items-start gap-4 rounded-lg border p-6 shadow-sm hover-lift bg-white/80 backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-xl font-normal text-left">
                  ¿Perdés clientes por no responder los mensajes a tiempo?
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={300}
                className="flex items-start gap-4 rounded-lg border p-6 shadow-sm hover-lift bg-white/80 backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-xl font-normal text-left">
                  ¿Te sale caro mantener una persona solo para responder los mensajes?
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="slide-right" delay={400} className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/stressed-woman.png"
                  alt="Mujer estresada por la gestión manual de turnos"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg hover-scale image-shadow relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <AnimatedSection animation="slide-left" delay={500} className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/secretary-phone.png"
                  alt="Secretaria atendiendo llamadas y gestionando turnos"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg hover-scale image-shadow relative z-10"
                />
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection
                delay={600}
                className="flex items-start gap-4 rounded-lg border p-6 shadow-sm hover-lift bg-white/80 backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-xl font-normal text-left">¿Tus clientes se olvidan los turnos o no confirman?</p>
              </AnimatedSection>

              <AnimatedSection
                delay={700}
                className="flex items-start gap-4 rounded-lg border p-6 shadow-sm hover-lift bg-white/80 backdrop-blur-sm"
              >
                <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-xl font-normal text-left">¿Seguís anotando todo en papel o Excel?</p>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection
            delay={800}
            className="mt-12 rounded-xl bg-primary/5 p-8 border border-primary/20 hover-lift"
          >
            <h3 className="text-2xl font-normal mb-6">✅ Con nuestro chatbot inteligente:</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-lg font-light">Automatizás la reserva de turnos 24/7</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-lg font-light">Reducís cancelaciones con recordatorios automáticos</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-lg font-light">Integrás con Google Calendar o tu sistema actual</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-lg font-light">Todo desde WhatsApp, Facebook, Instagram o tu web</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-lg font-light">Más tiempo libre para otras tareas en tu negocio</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function TargetAudienceSection() {
  return (
    <section id="para-quien" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light">
              ¿Para quién es esto?
            </div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
              Ideal para negocios que trabajan con turnos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl font-light">
              Si tu negocio trabaja con turnos, este chatbot es para vos.
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-5xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="flex flex-col gap-4 group">
              <div className="h-64 overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/images/hair-salon-wash.png"
                  alt="Peluquería y salón de belleza"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-xl font-normal text-white">💇 Peluquerías y centros de estética</h3>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="flex flex-col gap-4 group">
              <div className="h-64 overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/images/beauty-salon.png"
                  alt="Salón de belleza"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-xl font-normal text-white">💆 Centros de estética y spa</h3>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="flex flex-col gap-4 group">
              <div className="h-64 overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/images/medical-laptop.png"
                  alt="Consultorio médico"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-xl font-normal text-white">🏥 Consultorios médicos y odontológicos</h3>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light">
              Beneficios concretos
            </div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">Ventajas que transformarán tu negocio</h2>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-6xl py-12">
          <AnimatedSection delay={100}>
            <FeaturesGrid />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function CostComparisonSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light">
              Ahorro significativo
            </div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">Reducí costos y aumentá la eficiencia</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl font-light">
              Comparativa de costos entre contratar personal y utilizar nuestro chatbot
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-4xl">
          <AnimatedSection delay={200}>
            <CostComparisonChart />
          </AnimatedSection>

          <AnimatedSection delay={300} className="mt-12 text-center">
            <Button asChild size="lg" className="cta-button font-normal">
              <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
                Empezá a ahorrar ahora
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Sección de testimonios eliminada

function GuaranteeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-normal tracking-tighter md:text-4xl mb-4">
            🔒 Sin riesgos. Probalo gratis y enamorate de tu nuevo asistente virtual.
          </h2>
          <p className="text-xl mb-8 font-light">👉 Agendá una demo o pedinos más info ahora mismo.</p>
          <Button asChild size="lg" className="w-full max-w-md text-lg py-6 cta-button font-normal animate-pulse-slow">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2 justify-center">
              Quiero el chatbot ahora
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

function DashboardSection() {
  return (
    <section id="dashboard" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light">Dashboard</div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
              Analíticas completas para optimizar tu negocio
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl font-light">
              Monitoreá el rendimiento de tu chatbot y tomá decisiones basadas en datos reales.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto max-w-5xl py-12">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-6 mb-8">
            <p className="text-xl text-center max-w-3xl font-light">
              Con nuestro chatbot, vas a tener acceso a un dashboard con las principales metricas y informaciones de tus
              clientes.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="scale"
            className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover-lift mb-12 group"
          >
            <div className="bg-[#2dd4ac] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-normal">Chatbot 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-light">Analíticas</div>
              </div>
            </div>
            <div className="bg-white relative overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-05-09%20a%20la%28s%29%2011.21.17-He3GR9G4vLWEq2YgAh5n4OUZbYSVrT.png"
                alt="Dashboard de analíticas del chatbot mostrando conversaciones y contactos por país"
                width={1200}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="scale"
            delay={300}
            className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover-lift group"
          >
            <div className="bg-[#2dd4ac] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-normal">Chatbot 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-light">Contactos</div>
              </div>
            </div>
            <div className="bg-white relative overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-05-09%20a%20la%28s%29%2011.22.03-gOxva3zocsZHg0qazbuUdWgGyQbfM4.png"
                alt="Dashboard de contactos del chatbot mostrando lista de clientes"
                width={1200}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700} className="mt-12 text-center">
            <p className="text-lg font-light mb-4">
              Obtené información valiosa sobre el rendimiento de tu chatbot y el comportamiento de tus clientes
            </p>
            <Button asChild size="lg" className="cta-button font-normal">
              <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
                Solicitar acceso al dashboard
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="precios" className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light">Precios</div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">Inversión transparente</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl font-light">
              Precios claros sin costos ocultos. Invertí en la automatización de tu negocio.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-3xl gap-8 py-12 md:grid-cols-2">
          <AnimatedSection
            animation="slide-left"
            delay={100}
            className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-lg hover-lift group"
          >
            <div className="absolute top-0 right-0 h-20 w-20">
              <div className="absolute transform rotate-45 bg-primary text-center text-white font-normal py-1 right-[-40px] top-[32px] w-[170px]">
                Pago único
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-normal">Implementación</h3>
                <p className="text-muted-foreground font-light">Configuración inicial personalizada</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-normal">$250.000</span>
                <span className="text-muted-foreground">ARS</span>
              </div>
              <ul className="space-y-2 text-sm font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configuración personalizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Integración con tus plataformas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Capacitación inicial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configuración de respuestas automáticas</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection
            animation="slide-right"
            delay={200}
            className="relative overflow-hidden rounded-xl border bg-background p-8 shadow-lg hover-lift group"
          >
            <div className="absolute top-0 right-0 h-20 w-20">
              <div className="absolute transform rotate-45 bg-primary text-center text-white font-normal py-1 right-[-40px] top-[32px] w-[170px]">
                Mensual
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-normal">Mantenimiento</h3>
                <p className="text-muted-foreground font-light">Soporte continuo y actualizaciones</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-normal">$150.000</span>
                <span className="text-muted-foreground">ARS/mes</span>
              </div>
              <ul className="space-y-2 text-sm font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Soporte técnico prioritario</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Actualizaciones de funcionalidades</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Informes mensuales de rendimiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Optimización continua del chatbot</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={300} className="flex justify-center">
          <Button asChild size="lg" className="mt-4 cta-button font-normal">
            <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2">
              Reservá una reunión informativa
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
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-light">Contacto</div>
            <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">Hablemos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl font-light">
              Estamos listos para responder tus preguntas y ayudarte a implementar tu chatbot.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto max-w-5xl gap-8 py-12">
          <div className="space-y-8 max-w-2xl mx-auto">
            <AnimatedSection
              delay={100}
              animation="slide-left"
              className="flex items-center gap-4 hover-lift p-4 rounded-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-normal">Instagram</h3>
                <p className="text-muted-foreground font-light">
                  <a
                    href="https://instagram.com/Lufertecnologia"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                    rel="noreferrer"
                  >
                    @Lufertecnologia
                  </a>
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection
              delay={200}
              animation="slide-left"
              className="flex items-center gap-4 hover-lift p-4 rounded-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Youtube className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-normal">YouTube</h3>
                <p className="text-muted-foreground font-light">
                  <a
                    href="https://youtube.com/Lufertecnologia"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                    rel="noreferrer"
                  >
                    Lufertecnologia
                  </a>
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection
              delay={300}
              animation="scale"
              className="rounded-xl border bg-background p-6 shadow-lg hover-lift"
            >
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-normal">¿Preferís una reunión?</h3>
                <p className="text-muted-foreground font-light">
                  Reservá una reunión informativa gratuita para conocer cómo podemos ayudarte.
                </p>
                <Button asChild size="lg" className="w-full cta-button font-normal">
                  <Link href={CALENDAR_URL} target="_blank" className="flex items-center gap-2 justify-center">
                    Reservá tu reunión ahora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-gray-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%207-VEkkzzHjmIagP4YOM97SRcuzyyXdcF.png"
            alt="Logo de Lufer Tecnología"
            width={32}
            height={32}
            className="hover-scale"
          />
          <span className="text-lg font-normal">Lufer Tecnología</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-light">
          © 2023 Lufer Tecnología. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com/Lufertecnologia"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://www.youtube.com/@LuferTecnologia"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
