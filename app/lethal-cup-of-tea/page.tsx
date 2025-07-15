"use client"

import Image from "next/image"
import { FlaskConical, Ghost, Map, BookOpen, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay"
import { Footer } from "@/components/footer"

export default function LethalCupOfTeaPage() {
  const screenshots = [
    "/placeholder.svg?height=400&width=600&text=Screenshot+1",
    "/placeholder.svg?height=400&width=600&text=Screenshot+2",
    "/placeholder.svg?height=400&width=600&text=Screenshot+3",
    "/placeholder.svg?height=400&width=600&text=Screenshot+4",
    "/placeholder.svg?height=400&width=600&text=Screenshot+5",
  ]

  const features = [
    {
      icon: <FlaskConical className="w-6 h-6 text-pastel-coral" />,
      title: "Brew & Serve",
      description: "Master the art of tea-making, but beware of spectral interference.",
    },
    {
      icon: <Ghost className="w-6 h-6 text-lavender-mist" />,
      title: "Haunted British Locales",
      description: "Explore charming yet eerie settings, from manor kitchens to forgotten gardens.",
    },
    {
      icon: <Map className="w-6 h-6 text-dusty-sage" />,
      title: "Narrative Twists",
      description: "Unravel a cozy horror story with unexpected guests and ghostly secrets.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-smoky-navy" />,
      title: "Charming Characters",
      description: "Meet a cast of quirky villagers and restless spirits, each with their own tea preferences.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-smoky-navy/70 to-transparent z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Lethal+Cup+of+Tea+Banner"
            alt="Lethal Cup of Tea Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-bone-white">
          <h1 className="text-7xl md:text-9xl heading-magical text-dusty-sage mb-6">Lethal Cup of Tea</h1>
          <p className="text-3xl md:text-4xl font-heading font-bold text-smoky-navy mb-4 tracking-wide">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />A
            Cozy Horror Tea-Serving Game
            <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
          </p>
          <p className="text-lg font-body text-readable text-dusty-sage max-w-2xl mx-auto font-medium">
            Serve the perfect brew to your spectral guests, but be careful not to spill any secrets... or blood.
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

      {/* Lore / Game Description */}
      <section className="relative z-10 px-6 py-16 bg-bone-white/75 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy mb-8">The Brew's Tale</h2>
          <p className="text-lg font-body text-readable text-dusty-sage leading-relaxed space-y-6 font-medium">
            Welcome to Blackwood Manor, a charming old estate with a peculiar problem: it's haunted by a delightful, yet
            demanding, array of spectral guests. As the manor's newest tea server, your task is simple: brew and serve
            the perfect cup for each apparition. But every ghost has a story, and some secrets are best left unbrewed.
            Navigate spectral demands, uncover hidden lore, and try not to become a permanent resident.
          </p>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy text-center mb-12">
            Glimpses of the Manor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              key={0}
              className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <Image
                  src={screenshots[0] || "/placeholder.svg"}
                  alt={`Screenshot ${0 + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
            <Card
              key={1}
              className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <Image
                  src={screenshots[1] || "/placeholder.svg"}
                  alt={`Screenshot ${1 + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
            <Card
              key={2}
              className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <Image
                  src={screenshots[2] || "/placeholder.svg"}
                  alt={`Screenshot ${2 + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
            <Card
              key={3}
              className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <Image
                  src={screenshots[3] || "/placeholder.svg"}
                  alt={`Screenshot ${3 + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
            <Card
              key={4}
              className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <Image
                  src={screenshots[4] || "/placeholder.svg"}
                  alt={`Screenshot ${4 + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-16 bg-bone-white/75 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy text-center mb-12">
            What's Brewing Inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg p-6 flex items-start space-x-4 hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-lavender-mist/20 rounded-full">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-smoky-navy mb-2">{feature.title}</h3>
                  <p className="font-body text-readable text-dusty-sage font-medium">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Brewing / Dev Updates */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy mb-8">Currently Brewing...</h2>
          <Card className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg rounded-lg p-8">
            <CardContent className="p-0">
              <p className="text-lg font-body text-readable text-dusty-sage mb-4 font-medium">
                We're diligently polishing the spectral tea sets and fine-tuning the ghostly whispers. Latest updates
                include:
              </p>
              <ul className="list-disc list-inside text-left text-dusty-sage font-body text-readable space-y-2 mb-6 font-medium">
                <li>
                  <Sparkles className="inline-block w-4 h-4 mr-1 text-pastel-coral" /> New character animations for the
                  Headless Butler.
                </li>
                <li>
                  <Sparkles className="inline-block w-4 h-4 mr-1 text-lavender-mist" /> Expanded dialogue options for
                  the Grumpy Ghost.
                </li>
                <li>
                  <Sparkles className="inline-block w-4 h-4 mr-1 text-dusty-sage" /> Performance optimizations for
                  smoother tea pouring.
                </li>
              </ul>
              <p className="text-lg font-body text-readable text-smoky-navy font-semibold">
                Stay tuned for more enchanting progress!
              </p>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
            >
              Join Our Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer (re-used from main page) */}
      <Footer />
    </div>
  )
}
