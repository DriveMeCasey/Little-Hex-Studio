"use client"

import Image from "next/image"
import Link from "next/link"
import { CoffeeIcon as Cocktail, Bug, Sparkles, HexagonIcon as Honeycomb, Gamepad2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay"
import { Footer } from "@/components/footer"

export default function BarBeePage() {
  const visuals = [
    "/placeholder.svg?height=400&width=600&text=Character+Art",
    "/placeholder.svg?height=400&width=600&text=UI+Mockup",
    "/placeholder.svg?height=400&width=600&text=Environment+Shot",
    "/placeholder.svg?height=400&width=600&text=Gameplay+Moment",
  ]

  const features = [
    {
      icon: <Cocktail className="w-6 h-6 text-smoky-navy" />,
      title: "Mix Magical Brews",
      description: "Experiment with unique ingredients to craft enchanting drinks for your insect patrons.",
    },
    {
      icon: <Bug className="w-6 h-6 text-smoky-navy" />,
      title: "Charming Insect NPCs",
      description: "Meet a diverse cast of quirky bugs, each with their own stories and favorite concoctions.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-smoky-navy" />,
      title: "Cozy-Chaotic Gameplay",
      description: "Balance the demands of a bustling bar with unexpected magical mishaps and delightful discoveries.",
    },
    {
      icon: <Honeycomb className="w-6 h-6 text-smoky-navy" />,
      title: "Expand Your Hive",
      description: "Upgrade your bar, unlock new recipes, and attract even more fantastical clientele.",
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

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center overflow-hidden">
        {/* Placeholder Banner/Background Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-pastel-coral/70 to-transparent z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Bar-Bee+Banner"
            alt="Bar-Bee Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-bone-white">
          <h1 className="text-7xl md:text-9xl heading-magical text-dusty-sage mb-6">Bar-Bee</h1>
          <p className="text-3xl md:text-4xl font-heading font-bold text-smoky-navy mb-4 tracking-wide">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />A
            Whimsical Bar-Running Adventure for Bugs
            <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
          </p>
          <p className="text-lg font-body text-readable text-dusty-sage max-w-2xl mx-auto font-medium">
            Step into the tiny shoes of a magical bar-keep and serve up delightful drinks to the insect world!
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
            >
              Follow Development
            </Button>
          </div>
        </div>
      </section>

      {/* Story / Lore Section */}
      <section className="relative z-10 px-6 py-16 bg-bone-white/75 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy mb-8">The Buzz About Bar-Bee</h2>
          <p className="text-lg font-body text-readable text-dusty-sage leading-relaxed space-y-6 font-medium">
            Deep within the whispering woods, nestled amongst the roots of ancient trees, lies "The Nectar Nook" – a
            magical bar catering exclusively to the insect community. As the newest bar-keep, it's your job to mix
            enchanting elixirs, serve up sparkling dew drops, and keep the tiny patrons happy. But running a magical bug
            bar isn't always easy; prepare for unexpected challenges, delightful conversations, and perhaps a few sticky
            situations!
          </p>
        </div>
      </section>

      {/* Visuals Gallery */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy text-center mb-12">
            A Peek into the Nook
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visuals.map((src, index) => (
              <Card
                key={index}
                className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Visual ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-16 bg-bone-white/75 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy text-center mb-12">What's on the Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg p-6 flex items-start space-x-4 hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-pastel-coral/20 rounded-full">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-smoky-navy mb-2">{feature.title}</h3>
                  <p className="font-body text-readable text-dusty-sage font-medium">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* On Tap Soon / Dev Updates */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy mb-8">On Tap Soon...</h2>
          <Card className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg p-8">
            <CardContent className="p-0">
              <p className="text-lg font-body text-readable text-dusty-sage mb-4 font-medium">
                The Nectar Nook is always buzzing with activity! Here's what we're working on:
              </p>
              <ul className="list-disc list-inside text-left text-dusty-sage font-body text-readable space-y-2 mb-6 font-medium">
                <li>
                  <Sparkles className="inline-block w-4 h-4 mr-1 text-lavender-mist" /> New insect characters with
                  unique personalities.
                </li>
                <li>
                  <Sparkles className="inline-block w-4 h-4 mr-1 text-pastel-coral" /> Expanding the recipe book with
                  exotic new ingredients.
                </li>
                <li>
                  <Sparkles className="inline-block w-4 h-4 mr-1 text-dusty-sage" /> Adding more bar upgrades and
                  decorations.
                </li>
              </ul>
              <p className="text-lg font-body text-readable text-smoky-navy font-semibold">
                Join our hive for the latest updates!
              </p>
            </CardContent>
          </Card>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" passHref>
              <Button
                size="lg"
                className="bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
              >
                <Gamepad2 className="w-5 h-5 mr-2" /> Follow on Itch.io
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer (re-used from main page) */}
      <Footer />
    </div>
  )
}
