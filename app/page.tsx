"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ExternalLink, Filter, SpaceIcon as Unity, Coffee, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay"
import { Sparkles } from "lucide-react"
import { MagicDivider } from "@/components/magic-divider"
import { Footer } from "@/components/footer"

const enchantments = [
  {
    id: 1,
    name: "Cozy Dialogue System",
    useCase: "Dialogue UI for Cozy RPGs",
    image: "/placeholder.svg?height=200&width=300&text=Dialogue+UI", // Updated placeholder
    tags: ["UI Kit", "Dialogue", "RPG"],
    platforms: ["Unity", "Itch", "Ko-fi"],
    featured: true,
  },
  {
    id: 2,
    name: "Mystical Inventory HUD",
    useCase: "Magical Item Management",
    image: "/placeholder.svg?height=200&width=300&text=Inventory+HUD", // Updated placeholder
    tags: ["UI Kit", "Inventory", "HUD"],
    platforms: ["Unity", "Ko-fi"],
    featured: true,
  },
  {
    id: 3,
    name: "Floating Menu System",
    useCase: "Ethereal Game Menus",
    image: "/placeholder.svg?height=200&width=300&text=Menu+System", // Updated placeholder
    tags: ["UI Kit", "Menu System"],
    platforms: ["Unity", "Itch", "Ko-fi"],
    featured: false,
  },
  {
    id: 4,
    name: "Enchanted Health Bars",
    useCase: "Magical Status Indicators",
    image: "/placeholder.svg?height=200&width=300&text=Health+Bars", // Updated placeholder
    tags: ["UI Kit", "HUD"],
    platforms: ["Unity", "Ko-fi"],
    featured: true,
  },
  {
    id: 5,
    name: "Spellbook Interface",
    useCase: "Magic System UI",
    image: "/placeholder.svg?height=200&width=300&text=Spellbook+UI", // Updated placeholder
    tags: ["UI Kit", "Magic System", "RPG"],
    platforms: ["Unity", "Itch"],
    featured: false,
  },
  {
    id: 6,
    name: "Potion Brewing UI",
    useCase: "Crafting System Interface",
    image: "/placeholder.svg?height=200&width=300&text=Potion+UI", // Updated placeholder
    tags: ["UI Kit", "Crafting", "System"],
    platforms: ["Unity", "Ko-fi"],
    featured: true,
  },
]

const allTags = ["All", "UI Kit", "Menu System", "HUD", "Dialogue", "Inventory", "RPG", "Magic System", "Crafting"]

export default function LittleHexStudio() {
  const [selectedTag, setSelectedTag] = useState("All")

  const filteredEnchantments =
    selectedTag === "All" ? enchantments : enchantments.filter((item) => item.tags.includes(selectedTag))

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Unity":
        return <Unity className="w-4 h-4" />
      case "Ko-fi":
        return <Coffee className="w-4 h-4" />
      case "Itch":
        return <Gamepad2 className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <div
      className="min-h-screen relative bg-bone-white bg-[url('/images/little_hex_textured_parchment_bg.png')] bg-repeat bg-center"
      style={{ backgroundSize: "100px 100px" }}
    >
      <AstrologicalOverlay />
      <StarParticles />
      <Navigation />
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl heading-magical text-[#A3C5A1] mb-6">Little Hex Studio</h1>
            <p className="text-3xl md:text-4xl font-heading font-bold text-[#1B1D2E] mb-4 tracking-wide">
              <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />
              Where Magic Meets Design
              <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
            </p>
            <p className="text-lg font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto font-medium">
              Enchanted UI kits and magical design assets for game developers, solo creators, and interactive
              storytellers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/spellbook" passHref>
              <Button
                size="lg"
                className="bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
              >
                Browse Enchantments
              </Button>
            </Link>
            <Link href="/game-realms" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A3C5A1] text-[#A3C5A1] hover:bg-[#D1B2F7]/10 px-8 py-3 bg-transparent shadow-lg font-body font-medium text-base rounded-lg"
              >
                View Our Games
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <MagicDivider /> {/* Divider after Hero Section */}
      {/* Featured Enchantments Gallery */}
      <section id="enchantments" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl heading-magical text-[#1B1D2E] mb-6">Featured Enchantments</h2>
            <p className="text-xl font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto font-medium">
              UI Kits & Assets crafted specifically for Unity — magical menus, haunting HUDs, or cozy interfaces.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={
                  selectedTag === tag
                    ? "bg-[#1B1D2E] hover:bg-[#1B1D2E]/90 text-[#F9F7F3] shadow-md font-body font-medium rounded-lg"
                    : "border-[#A3C5A1] text-[#A3C5A1] hover:bg-[#A3C5A1]/10 bg-[#F9F7F3]/60 backdrop-blur-sm font-body rounded-lg"
                }
              >
                <Filter className="w-3 h-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>

          {/* Enchantments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEnchantments.map((enchantment) => (
              <Card
                key={enchantment.id}
                className="group relative bg-[#F9F7F3]/90 border-[#A3C5A1]/30 hover:border-[#1B1D2E]/50 transition-all duration-300 hover:shadow-xl hover:shadow-lavender-mist/20 overflow-hidden backdrop-blur-sm rounded-lg"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-lavender-mist/5 to-lavender-mist/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-0 relative z-10">
                  <div className="relative overflow-hidden">
                    <Image
                      src={enchantment.image || "/placeholder.svg"}
                      alt={enchantment.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {enchantment.featured && (
                      <Badge className="absolute top-3 left-3 bg-[#1B1D2E] text-[#F9F7F3] shadow-md font-body font-medium rounded-md">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-[#1B1D2E] mb-2 tracking-wide">
                      {enchantment.name}
                    </h3>
                    <p className="font-body text-readable text-[#A3C5A1] mb-4 font-medium">{enchantment.useCase}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {enchantment.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-[#A3C5A1]/50 text-[#A3C5A1] bg-[#F9F7F3]/60 font-body rounded-md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Platform Icons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-body text-[#A3C5A1] font-medium">Available on:</span>
                        <div className="flex space-x-1">
                          {enchantment.platforms.map((platform) => (
                            <div
                              key={platform}
                              className="p-1 bg-[#F9F7F3]/90 border border-[#A3C5A1]/30 rounded text-[#1B1D2E]"
                              title={platform}
                            >
                              {getPlatformIcon(platform)}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        size="sm"
                        className="bg-pastel-coral text-smoky-navy font-body font-medium rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
                      >
                        Summon Asset
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <MagicDivider /> {/* Divider after Featured Enchantments */}
      {/* The Spellbook - About Section */}
      <section id="spellbook" className="relative z-10 px-6 py-20 bg-[#F9F7F3]/75 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl heading-magical text-[#1B1D2E] mb-8">The Spellbook</h2>
          <div className="text-lg font-body text-readable text-[#A3C5A1] leading-relaxed space-y-6 font-medium">
            <p>
              Little Hex Studio conjures enchanted design systems and spooky-charming games for indie devs, solo
              creators, and narrative-driven projects.
            </p>
            <p>
              Our UI kits and asset packs are crafted specifically for Unity, ideal for developers building magical
              menus, haunting HUDs, or cozy in-game interfaces. You'll find our work scattered across the Unity Asset
              Store, Itch.io, and Ko-fi, like spells waiting to be summoned.
            </p>
            <p className="text-[#1B1D2E] font-semibold">
              We're also the mystical minds behind games like <em>Lethal Cup of Tea</em> and <em>Bar-Bee</em>, brewing
              up cozy horror and narrative mischief one pixel at a time.
            </p>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
            >
              Discover Our Magic
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
