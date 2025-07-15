"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

export function StarParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameId = useRef<number | null>(null)

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 0.8 + 0.2 // Slightly faster particles
    const maxLife = Math.random() * 80 + 80 // Longer life
    return {
      x,
      y,
      size: Math.random() * 2 + 1, // Larger stars
      opacity: 1,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: maxLife,
      maxLife,
    }
  }, [])

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(209, 178, 247, ${particle.opacity * 0.15})` // Lavender Mist, significantly reduced opacity
    ctx.shadowColor = `rgba(209, 178, 247, ${particle.opacity * 0.1})` // Significantly reduced shadow opacity
    ctx.shadowBlur = particle.size * 3 // Increased blur
    ctx.fill()
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Add new particles near the mouse - emission rate remains the same
    if (Math.random() < 0.45) {
      particlesRef.current.push(createParticle(mouseRef.current.x, mouseRef.current.y))
    }

    particlesRef.current = particlesRef.current.filter((p) => p.life > 0)

    particlesRef.current.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.life -= 1
      p.opacity = p.life / p.maxLife // Fade out

      drawParticle(ctx, p)
    })

    animationFrameId.current = requestAnimationFrame(animate)
  }, [createParticle, drawParticle])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [animate])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ background: "transparent" }} />
  )
}
