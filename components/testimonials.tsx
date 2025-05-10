"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Dueña de Peluquería",
      content:
        "Desde que implementamos el chatbot de Lufer, redujimos las cancelaciones en un 70% y aumentamos nuestra eficiencia. Mis clientes están encantados con la facilidad para reservar turnos.",
      avatar: "/placeholder.svg?height=40&width=40",
      stars: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Clínica Dental",
      content:
        "Increíble cómo ha cambiado nuestra gestión de turnos. Ahorramos el sueldo de una recepcionista y el servicio es mucho más eficiente. Totalmente recomendado.",
      avatar: "/placeholder.svg?height=40&width=40",
      stars: 5,
    },
    {
      name: "Laura Martínez",
      role: "Gerente de Spa",
      content:
        "El chatbot de Lufer nos permitió enfocarnos en lo importante: nuestros clientes. La automatización de turnos funciona perfectamente y el soporte es excelente.",
      avatar: "/placeholder.svg?height=40&width=40",
      stars: 5,
    },
    {
      name: "Javier Sánchez",
      role: "Médico Traumatólogo",
      content:
        "Excelente servicio. Mis pacientes pueden agendar consultas a cualquier hora y reciben recordatorios automáticos. Ha reducido significativamente las inasistencias.",
      avatar: "/placeholder.svg?height=40&width=40",
      stars: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative">
      <div className="flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="min-w-full border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="pt-6 px-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pb-6 px-6">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={prevTestimonial}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={nextTestimonial}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            aria-label={`Ver testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
