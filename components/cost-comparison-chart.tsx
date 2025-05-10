"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CostComparisonChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Data
    const humanCost = 740000
    const chatbotCost = 150000 // updated value
    const totalCost = humanCost + chatbotCost

    // Calculate percentages
    const humanPercentage = (humanCost / totalCost) * 100
    const chatbotPercentage = (chatbotCost / totalCost) * 100

    // Colors
    const humanColor = "#e74c3c"
    const chatbotColor = "#2dd4ac"

    // Center of the pie chart
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Radius of the pie chart (slightly smaller than before)
    const radius = Math.min(centerX, centerY) * 0.7

    // Draw the pie chart
    const drawPieSlice = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fill()
    }

    // Draw human cost slice (convert percentage to radians)
    const humanRadians = (humanPercentage / 100) * Math.PI * 2
    drawPieSlice(ctx, centerX, centerY, radius, 0, humanRadians, humanColor)

    // Draw chatbot cost slice
    drawPieSlice(ctx, centerX, centerY, radius, humanRadians, Math.PI * 2, chatbotColor)

    // Add labels
    const drawLabel = (percentage, cost, color, angle, isHuman) => {
      // Aumentamos la distancia de las etiquetas desde el centro del gráfico
      const labelRadius = radius * 1.5
      const labelX = centerX + Math.cos(angle) * labelRadius
      const labelY = centerY + Math.sin(angle) * labelRadius

      ctx.font = "normal 14px Inter, sans-serif"
      ctx.fillStyle = color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Ajustamos el espaciado vertical entre las líneas de texto
      // Draw percentage
      ctx.fillText(`${Math.round(percentage)}%`, labelX, labelY - 25)

      // Draw cost
      ctx.font = "12px Inter, sans-serif"
      ctx.fillText(`$${cost.toLocaleString("es-AR")}`, labelX, labelY)

      // Draw label
      ctx.fillText(isHuman ? "Empleado" : "Chatbot", labelX, labelY + 25)
    }

    // Calculate angles for labels (middle of each slice)
    const humanLabelAngle = humanRadians / 2
    const chatbotLabelAngle = humanRadians + (Math.PI * 2 - humanRadians) / 2

    // Draw labels
    drawLabel(humanPercentage, humanCost, humanColor, humanLabelAngle, true)
    drawLabel(chatbotPercentage, chatbotCost, chatbotColor, chatbotLabelAngle, false)

    // Draw savings indicator
    const savings = humanCost - chatbotCost
    const savingsPercentage = Math.round((savings / humanCost) * 100)

    ctx.fillStyle = "#10b981"
    ctx.font = "bold 16px Inter, sans-serif"
    ctx.textAlign = "center"
    ctx.fillText(
      `Ahorro: $${savings.toLocaleString("es-AR")} (${savingsPercentage}%)`,
      rect.width / 2,
      rect.height - 20,
    )
  }, [])

  return (
    <Card className="w-full shadow-md border-0 bg-white/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Comparación de costos mensuales</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary font-medium">
            Ahorro significativo
          </Badge>
        </div>
        <CardDescription>Costo mensual de un empleado vs. nuestro chatbot para gestión de turnos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[2/1] mt-4" style={{ maxHeight: "300px" }}>
          <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-lg">Empleado full-time</div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Salario base (30hs/sem)</span>
              <span>$570.000</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Cargas sociales (~30%)</span>
              <span>$171.000</span>
            </div>
            <div className="flex justify-between font-medium pt-1">
              <span>Costo total mensual</span>
              <span>$740.000</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-lg">Chatbot Lufer</div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Suscripción mensual</span>
              <span>$150.000</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Costos adicionales</span>
              <span>Incluidos</span>
            </div>
            <div className="flex justify-between font-medium pt-1 text-primary">
              <span>Costo total mensual</span>
              <span>$150.000</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
