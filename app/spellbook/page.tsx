"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay"
import { Footer } from "@/components/footer"

const spellbookProducts = [
  {
    id: 1,
    title: "Enchanted Dialogue UI",
    description: "A whimsical dialogue system for your magical RPG.",
    image: "/placeholder.svg?height=200&width=300&text=Dialogue+UI",
    tags: ["UI Kit", "Unity Asset"],
    link: "/spellbook/enchanted-dialogue",
  },
  {
    id: 2,
    title: "Mystic Inventory Icons",
    description: "Hand-drawn icons for all your arcane inventory needs.",
    image: "/placeholder.svg?height=200&width=300&text=Inventory+Icons",
    tags: ["UI Kit", "Figma"],
    link: "/spellbook/mystic-inventory",
  },
  {
    id: 3,
    title: "Potion Brewing Kit",
    description: "Crafting UI elements for alchemical adventures.",
    image: "/placeholder.svg?height=200&width=300&text=Potion+Kit",
    tags: ["Unity Asset"],
    link: "/spellbook/potion-kit",
  },
  {
    id: 4,
    title: "Arcane Spellbook Template",
    description: "A customizable UI template for in-game spellbooks.",
    image: "/placeholder.svg?height=200&width=300&text=Spellbook+Template",
    tags: ["UI Kit", "Unity Asset"],
    link: "/spellbook/spellbook-template",
  },
  {
    id: 5,
    title: "Forest Spirit HUD Elements",
    description: "Organic and ethereal HUD components for nature-themed games.",
    image: "/placeholder.svg?height=200&width=300&text=Forest+HUD",
    tags: ["UI Kit"],
    link: "/spellbook/forest-hud",
  },
  {
    id: 6,
    title: "Freebie: Crystal Cursor Pack",
    description: "A sparkling collection of magical cursors.",
    image: "/placeholder.svg?height=200&width=300&text=Crystal+Cursor",
    tags: ["Freebie", "Figma"],
    link: "/spellbook/crystal-cursor",
  },
  {
    id: 7,
    title: "Ancient Runes Font Pack",
    description: "A collection of mystical fonts for game titles and UI.",
    image: "/placeholder.svg?height=200&width=300&text=Runes+Font",
    tags: ["Freebie", "Figma"],
    link: "/spellbook/runes-font",
  },
  {
    id: 8,
    title: "Dragon's Hoard UI Kit",
    description: "Rich, opulent UI elements for fantasy RPGs.",
    image: "/placeholder.svg?height=200&width=300&text=Dragon+Hoard",
    tags: ["UI Kit", "Unity Asset"],
    link: "/spellbook/dragon-hoard",
  },
]

const productCategories = ["All", "UI Kit", "Unity Asset", "Figma", "Freebie"]

export default function SpellbookPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All"
      ? spellbookProducts
      : spellbookProducts.filter((product) => product.tags.includes(selectedCategory))

  return (
    <div
      className="min-h-screen relative bg-bone-white bg-[url('/images/little_hex_textured_parchment_bg.png')] bg-repeat bg-center"
      style={{ backgroundSize: "100px 100px" }}
    >
      <AstrologicalOverlay />
      <StarParticles />
      <Navigation />

      {/* Hero Section for Spellbook */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl heading-magical text-[#A3C5A1] mb-6">The Spellbook</h1>
          <p className="text-3xl md:text-4xl font-heading font-bold text-[#1B1D2E] mb-4 tracking-wide">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />
            Unlock the arcane
            <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
          </p>
          <p className="text-lg font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto font-medium">
            Dive into design rituals, lore entries, and whimsical resources straight from the Hex Studio vault.
          </p>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section id="product-gallery" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Filter System */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {productCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-pastel-coral hover:bg-pastel-coral/90 text-smoky-navy shadow-md font-body font-medium rounded-lg"
                    : "border-dusty-sage text-dusty-sage hover:bg-dusty-sage/10 bg-bone-white/60 backdrop-blur-sm font-body rounded-lg"
                }
              >
                <Filter className="w-3 h-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group relative bg-bone-white/90 border-dusty-sage/30 hover:border-smoky-navy/50 transition-all duration-300 hover:shadow-xl hover:shadow-lavender-mist/20 overflow-hidden backdrop-blur-sm rounded-2xl transform hover:-translate-y-1"
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-lavender-mist/5 to-pastel-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-smoky-navy mb-2 tracking-wide">
                      {product.title}
                    </h3>
                    <p className="font-body text-readable text-dusty-sage mb-4 font-medium">{product.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-dusty-sage/50 text-dusty-sage bg-bone-white/60 font-body rounded-md"
                        >
                          <Sparkles className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={product.link} passHref>
                      <Button
                        size="sm"
                        className="w-full bg-pastel-coral text-smoky-navy font-body font-medium rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
                      >
                        Learn More
                      </Button>
                    </Link>
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
