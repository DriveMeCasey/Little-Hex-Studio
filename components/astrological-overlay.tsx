"use client"

import { useEffect, useRef, useCallback } from "react"
import type { CanvasRenderingContext2D } from "canvas" // Declare Canvas2D type

const colors = ["#A3C5A1", "#F7938C", "#D1B2F7"] // Dusty Sage, Pastel Coral, Lavender Mist

interface AstrologicalShape {
  x: number
  y: number
  size: number
  type: "star" | "moon"
  rotation: number
  baseOpacity: number // New: Base opacity for the shape
  currentOpacity: number // Actual opacity used for drawing (base * twinkle)
  life: number // Current life of the particle (counts down from maxLife)
  maxLife: number // Total life of the particle
  vx: number // Velocity X
  vy: number // Velocity Y
  twinkleOffset: number // A unique offset for each shape's twinkle phase
  color: string // The assigned color for this shape
  twinkleSpeed: number // Speed of the twinkle effect for this shape
}

export function AstrologicalOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const shapesRef = useRef<AstrologicalShape[]>([])

  const createShape = useCallback((canvas: HTMLCanvasElement, type: "star" | "moon"): AstrologicalShape => {
    let size: number
    const sizeRand = Math.random()
    if (sizeRand < 0.25) {
      // 25% for larger shapes, increased size
      size = Math.random() * (25 - 20) + 20 // Range from 20px to 25px
    } else {
      // 75% for normal shapes, increased size
      size = Math.random() * 15 + 5 // Range from 5px to 20px
    }

    const maxLife = 1800 // Even longer life duration
    const speed = Math.random() * 0.08 + 0.02 // Slightly more noticeable movement speed
    const angle = Math.random() * Math.PI * 2 // Random direction
    const randomColor = colors[Math.floor(Math.random() * colors.length)] // Assign a random color from the palette

    let twinkleSpeed: number
    const rand = Math.random()
    if (rand < 0.25) {
      twinkleSpeed = 0.00077 // Reduced by 15%
    } else if (rand < 0.5) {
      twinkleSpeed = 0.00268 // Reduced by 15%
    } else {
      twinkleSpeed = 0.00344 // Reduced by 15%
    }

    const baseOpacity = Math.random() * 0.1 + 0.05 // Significantly reduced base opacity (from 0.1-0.3 to 0.05-0.15)

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size,
      type,
      rotation: Math.random() * Math.PI * 2,
      baseOpacity, // Store the base opacity
      currentOpacity: baseOpacity, // Initialize current opacity
      life: maxLife,
      maxLife,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      twinkleOffset: Math.random() * Math.PI * 2, // Random phase for twinkling
      color: randomColor, // Store the assigned color
      twinkleSpeed, // Store the assigned twinkle speed
    }
  }, [])

  const drawStar = useCallback((ctx: CanvasRenderingContext2D, shape: AstrologicalShape) => {
    const { x, y, size, rotation, currentOpacity, color } = shape // Use currentOpacity
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotation)
    ctx.beginPath()
    const outerRadius = size
    const innerRadius = size / 2.5
    const numPoints = 5
    for (let i = 0; i < numPoints * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius
      const angle = (Math.PI / numPoints) * i
      ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle))
    }
    ctx.closePath()
    const r = Number.parseInt(color.slice(1, 3), 16)
    const g = Number.parseInt(color.slice(3, 5), 16)
    const b = Number.parseInt(color.slice(5, 7), 16)
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})` // Use dynamic opacity and shape's color
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.7})` // Stronger shadow
    ctx.shadowBlur = size * 2 // Increased blur
    ctx.fill()
    ctx.restore()
  }, [])

  const drawMoon = useCallback((ctx: CanvasRenderingContext2D, shape: AstrologicalShape) => {
    const { x, y, size, rotation, currentOpacity, color } = shape // Use currentOpacity
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotation)
    ctx.beginPath()
    // Outer arc of the crescent
    ctx.arc(0, 0, size, Math.PI / 2, -Math.PI / 2, false)
    // Inner arc of the crescent (offset to create the curve)
    ctx.arc(size * 0.5, 0, size * 0.8, -Math.PI / 2, Math.PI / 2, true)
    ctx.closePath()

    const r = Number.parseInt(color.slice(1, 3), 16)
    const g = Number.parseInt(color.slice(3, 5), 16)
    const b = Number.parseInt(color.slice(5, 7), 16)
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})` // Use dynamic opacity and shape's color
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.7})` // Stronger shadow
    ctx.shadowBlur = size * 2 // Increased blur
    ctx.fill()
    ctx.restore()
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Reduced emission rate by 25%
    if (Math.random() < 0.23) {
      // 0.3 * 0.75 = 0.225, rounded to 0.23
      shapesRef.current.push(createShape(canvas, Math.random() > 0.5 ? "star" : "moon"))
    }

    shapesRef.current = shapesRef.current.filter((shape) => {
      shape.x += shape.vx
      shape.y += shape.vy
      shape.life -= 1

      // Twinkling effect: multiply baseOpacity by the twinkling factor
      const twinkleFactor = 0.6 + 0.4 * Math.sin(Date.now() * shape.twinkleSpeed + shape.twinkleOffset)
      shape.currentOpacity = shape.baseOpacity * twinkleFactor

      if (shape.life > 0) {
        if (shape.type === "star") {
          drawStar(ctx, shape)
        } else {
          drawMoon(ctx, shape)
        }
        return true
      }
      return false
    })

    animationFrameId.current = requestAnimationFrame(animate)
  }, [createShape, drawStar, drawMoon])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      shapesRef.current = []
      const initialShapes = 84 // Reduced by 25% (112 * 0.75 = 84)
      for (let i = 0; i < initialShapes; i++) {
        shapesRef.current.push(createShape(canvas, Math.random() > 0.5 ? "star" : "moon"))
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [animate, createShape])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[5]" style={{ mixBlendMode: "normal" }} />
  )
}
