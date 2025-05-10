import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Calendar, TrendingUp } from "lucide-react"

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border-0 shadow-sm bg-white/90 backdrop-blur-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-normal">24/7</h3>
            <p className="text-muted-foreground text-sm font-light">Disponibilidad completa</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm bg-white/90 backdrop-blur-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-normal">+500</h3>
            <p className="text-muted-foreground text-sm font-light">Clientes atendidos por mes</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm bg-white/90 backdrop-blur-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-normal">-80%</h3>
            <p className="text-muted-foreground text-sm font-light">Reducción en cancelaciones</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm bg-white/90 backdrop-blur-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-normal">+30%</h3>
            <p className="text-muted-foreground text-sm font-light">Aumento en eficiencia</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
