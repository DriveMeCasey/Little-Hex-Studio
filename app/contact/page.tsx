"use client"

import { useActionState } from "react"
import Link from "next/link"
import { Sparkles } from "lucide-react" // Import Sparkles icon

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { StarParticles } from "@/components/star-particles"
import { AstrologicalOverlay } from "@/components/astrological-overlay"
import { submitContactForm } from "@/actions/contact" // Import the new action
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <div
      className="min-h-screen relative bg-bone-white bg-[url('/images/little_hex_textured_parchment_bg.png')] bg-repeat bg-center"
      style={{ backgroundSize: "100px 100px" }}
    >
      <AstrologicalOverlay />
      <StarParticles />
      <Navigation />

      {/* Title Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl heading-magical text-[#A3C5A1] mb-6">Summon Us</h1>
          <p className="text-3xl md:text-4xl font-heading font-bold text-[#1B1D2E] mb-4 tracking-wide">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-lavender-mist animate-pulse animation-delay-200" />
            Call the coven
            <Sparkles className="inline-block w-5 h-5 ml-2 text-lavender-mist animate-pulse animation-delay-200" />
          </p>
          <p className="text-lg font-body text-readable text-[#A3C5A1] max-w-2xl mx-auto font-medium">
            Ready to conjure something together? Reach out to spark your next enchanted collaboration.
          </p>
        </div>
      </section>

      {/* Contact Form / Confirmation Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-bone-white/90 border-dusty-sage/30 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-lavender-mist/20 transition-all duration-300 rounded-2xl">
            <CardContent className="p-8">
              {state?.success ? (
                <div className="text-center py-8">
                  <h2 className="text-5xl md:text-6xl heading-magical text-smoky-navy mb-4 animate-glimmer">
                    {state.message}
                  </h2>
                  <p className="text-lg font-body text-readable text-dusty-sage mb-8 font-medium">
                    {state.supportingText}
                  </p>
                  <div className="flex justify-center gap-2 mb-8">
                    <Sparkles className="w-8 h-8 text-lavender-mist animate-pulse" />
                    <Sparkles className="w-6 h-6 text-pastel-coral animate-pulse animation-delay-200" />
                    <Sparkles className="w-7 h-7 text-dusty-sage animate-pulse animation-delay-400" />
                  </div>
                  <Link href="/spellbook" passHref>
                    <Button
                      size="lg"
                      className="bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
                    >
                      📖 Return to the Spellbook
                    </Button>
                  </Link>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-smoky-navy font-body font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name" // Add name attribute for form data
                      placeholder="Your magical name"
                      className="mt-1 bg-bone-white/80 border-dusty-sage/50 text-smoky-navy rounded-lg focus:border-lavender-mist focus:ring-lavender-mist"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-smoky-navy font-body font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email" // Add name attribute for form data
                      type="email"
                      placeholder="Your enchanted email"
                      className="mt-1 bg-bone-white/80 border-dusty-sage/50 text-smoky-navy rounded-lg focus:border-lavender-mist focus:ring-lavender-mist"
                    />
                  </div>
                  <div>
                    <Label htmlFor="messageType" className="text-smoky-navy font-body font-medium">
                      Message Type
                    </Label>
                    <Select name="messageType">
                      {" "}
                      {/* Add name attribute for form data */}
                      <SelectTrigger
                        id="messageType"
                        className="mt-1 bg-bone-white/80 border-dusty-sage/50 text-smoky-navy rounded-lg focus:border-lavender-mist focus:ring-lavender-mist"
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-bone-white border-dusty-sage/50 text-smoky-navy rounded-lg">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="collaboration">Collaboration Idea</SelectItem>
                        <SelectItem value="support">Support / Bug Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-smoky-navy font-body font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message" // Add name attribute for form data
                      placeholder="Your spell or message"
                      rows={5}
                      className="mt-1 bg-bone-white/80 border-dusty-sage/50 text-smoky-navy rounded-lg focus:border-lavender-mist focus:ring-lavender-mist"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending} // Disable button during submission
                    className="w-full bg-pastel-coral text-smoky-navy font-body text-base px-8 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lavender-mist/70"
                  >
                    {isPending ? "Sending Spell..." : "Send Spell"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer (re-used from main page) */}
      <Footer />
    </div>
  )
}
