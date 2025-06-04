import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarClock, Clock4, Smartphone, Bell, Mic, BarChart3, Shield, Zap, Repeat } from "lucide-react"

export function FeaturesGrid() {
  const features = [
    {
      icon: CalendarClock,
      title: "Turnos automáticos",
      description: "Gestión automática de agenda, evitando superposiciones y errores humanos.",
    },
    {
      icon: Clock4,
      title: "Ahorro de tiempo",
      description: "Ahorrá más de 10 horas semanales en tareas administrativas.",
    },
    {
      icon: Smartphone,
      title: "Integración WhatsApp",
      description: "100% integrado con las plataformas que tus clientes ya usan a diario.",
    },
    {
      icon: Bell,
      title: "Recordatorios",
      description: "Reduce ausencias con recordatorios personalizados automáticos.",
    },
    {
      icon: Mic,
      title: "Reconocimiento de audio",
      description: "Entiende mensajes de voz para una comunicación natural.",
    },
    {
      icon: BarChart3,
      title: "Estadísticas detalladas",
      description: "Informes completos sobre reservas y comportamiento de clientes.",
    },
    {
      icon: Shield,
      title: "Seguridad garantizada",
      description: "Protección de datos y privacidad de tus clientes en todo momento.",
    },
    {
      icon: Zap,
      title: "Respuestas instantáneas",
      description: "Atención inmediata sin tiempos de espera para tus clientes.",
    },
    {
      icon: Repeat,
      title: "Actualizaciones constantes",
      description: "Mejoras continuas y nuevas funcionalidades sin costo adicional.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="card-minimal">
          <CardHeader className="pb-2">
            <div className="icon-box-primary mb-4">
              <feature.icon className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg font-light text-navy">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-sm font-light">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
