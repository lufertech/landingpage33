import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Calendar, TrendingUp } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Clock,
      value: "24/7",
      label: "Disponibilidad completa",
    },
    {
      icon: Users,
      value: "+500",
      label: "Clientes atendidos por mes",
    },
    {
      icon: Calendar,
      value: "-80%",
      label: "Reducción en cancelaciones",
    },
    {
      icon: TrendingUp,
      value: "+30%",
      label: "Aumento en eficiencia",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="card-minimal">
          <CardContent className="p-6 text-center">
            <div className="icon-box-primary mx-auto mb-4">
              <stat.icon className="h-5 w-5" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-light text-navy">{stat.value}</h3>
              <p className="text-gray-600 text-sm font-light">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
