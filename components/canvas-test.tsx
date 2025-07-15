"use client"

import { useEffect, useRef } from "react"

export function CanvasTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawTestContent(ctx, canvas)
    }

    const drawTestContent = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "red" // Bright red background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = "48px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("CANVAS TEST", canvas.width / 2, canvas.height / 2)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]" // High z-index to ensure visibility
      style={{ background: "red" }} // Red background for immediate visibility
    />
  )
}
