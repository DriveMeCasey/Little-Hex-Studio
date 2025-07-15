"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay" // Re-import AstrologicalOverlay
import { Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"

const gameRealms = [
  {
    id: 1,
    title: "Lethal Cup of Tea",
    genre: "Cozy Horror",
    description: "Ghosts | British chaos",
    tags: ["Cozy Horror", "Narrative", "Supernatural"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Bar-Bee",
    genre: "Puzzle Adventure",
    description: "Bee-themed puzzle game with charm",
    tags: ["Puzzle", "Adventure", "Cute"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function GameRealms() {
  return (
    <div
      className="min-h-screen relative bg-bone-white bg-[url('/images/little_hex_textured_parchment_bg.png')] bg-repeat bg-center"
      style={{ backgroundSize: "100px 100px" }}
    >
      <AstrologicalOverlay /> {/* Use AstrologicalOverlay again */}
      <StarParticles />
      <Navigation />
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl heading-magical text-[#A3C5A1] mb-6">🎮 Game Realms</h1>
          <p className="text-xl font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto font-medium">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />
            Original games by Little Hex Studio — where cozy meets chaos and pixels meet magic.
            <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
          </p>
        </div>
      </section>
      {/* Game Realms Grid */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameRealms.map((realm) => (
              <Card
                key={realm.id}
                className="group relative bg-[#F9F7F3]/90 border-[#A3C5A1]/30 hover:border-lavender-mist/50 transition-all duration-300 overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-lavender-mist/20 rounded-lg"
              >
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <Image
                        src={realm.image || "/placeholder.svg"}
                        alt={realm.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>

                    <h3 className="text-3xl font-heading font-bold text-[#1B1D2E] mb-2 tracking-wide">{realm.title}</h3>

                    <p className="text-[#A3C5A1] font-body font-semibold mb-2 text-lg">{realm.genre}</p>
                    <p className="text-[#1B1D2E] mb-4 flex-grow font-body text-readable font-medium">
                      {realm.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {realm.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-[#A3C5A1]/50 text-[#A3C5A1] bg-[#F9F7F3]/60 font-body rounded-md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-pastel-coral text-smoky-navy font-body font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70">
                      Enter the Realm
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-12 text-center">
            <Card className="bg-[#F9F7F3]/90 border-[#A3C5A1]/30 backdrop-blur-sm shadow-lg rounded-lg hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-3xl font-heading font-bold text-[#A3C5A1] mb-4 tracking-wide">
                  More Realms Coming Soon
                </h3>
                <p className="text-[#1B1D2E] font-body text-readable font-medium">
                  We're brewing up more magical experiences in our cauldron of creativity. Stay tuned for new
                  adventures!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
