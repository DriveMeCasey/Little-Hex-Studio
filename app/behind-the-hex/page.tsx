"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay"
import { Card, CardContent } from "@/components/ui/card" // Import Card components
import { Footer } from "@/components/footer"

export default function BehindTheHexPage() {
  const creativeProcessImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Sketching+UI+Concept",
      caption: "Sketching a new UI kit concept",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Workspace+Chaos",
      caption: "Workspace chaos — in the best way",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Exploring+Color+Palettes",
      caption: "Exploring color palettes and glyphs",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Layering+Details",
      caption: "Layering details in Photoshop",
    },
  ]

  return (
    <div
      className="min-h-screen relative bg-bone-white bg-[url('/images/little_hex_textured_parchment_bg.png')] bg-repeat bg-center"
      style={{ backgroundSize: "100px 100px" }}
    >
      <AstrologicalOverlay />
      <StarParticles />
      <Navigation />

      {/* Hero Section for Behind the Hex */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl heading-magical text-dusty-sage mb-6">Behind the Hex</h1>
          <p className="text-3xl md:text-4xl font-heading font-bold text-smoky-navy mb-2 tracking-wide">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />
            Secrets of the studio
            <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
          </p>
          <p className="text-lg font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto font-medium">
            A peek behind the curtain at the magic, mischief, and makers powering Hex Studio.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative z-10 px-6 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-lg font-body text-readable text-smoky-navy leading-relaxed space-y-6 font-medium">
                <p>Welcome to Behind the Hex, where the veil lifts and the real magic begins.</p>
                <p>
                  Hex Studio isn’t just a collection of pixels and palettes — it’s a cozy cauldron of creativity,
                  bubbling with imagination, whimsy, and a touch of chaos (the fun kind). Every asset, every UI kit,
                  every spellcrafted detail is made by humans with messy desks, strong coffee, and a deep love for
                  storytelling.
                </p>
                <p>
                  We're the makers behind the magic — the artists, designers, and dreamers who live for cozy color
                  palettes, enchanted interfaces, and immersive worlds.
                </p>
                <p>Here, you’ll find our heartbeat. The why. The what. The spark that started it all.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Creative Cauldron Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy mb-6">The Creative Cauldron</h2>
          <p className="text-xl font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto mb-8 font-medium">
            A peek into the process, workspace, and in-progress magic at Hex Studio.
          </p>
          <p className="text-lg font-body text-readable text-smoky-navy max-w-3xl mx-auto mb-12 font-medium">
            Magic doesn’t happen in a vacuum, it happens in cluttered workspaces, half-filled notebooks, and quiet
            moments of inspiration. Here’s a glimpse into the real, messy, creative process behind every enchanted asset
            we make.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeProcessImages.map((item, index) => (
              <Card
                key={index}
                className="group relative bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.caption}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-body text-readable text-smoky-navy font-medium">{item.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (re-used from main page) */}
      <Footer />
    </div>
  )
}
