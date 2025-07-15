"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react" // Reverted imports

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-50 px-6 py-4 bg-[#F9F7F3]/90 backdrop-blur-sm border-b border-[#A3C5A1]/30 shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Little Hex Studio" width={128} height={128} className="w-32 h-32" />
          <span className="text-[#1B1D2E] font-heading font-bold text-3xl tracking-wide">Little Hex Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="link-magical font-body font-medium">
            Home
          </Link>
          <Link href="/spellbook" className="link-magical font-body font-medium">
            The Spellbook
          </Link>
          <Link href="/behind-the-hex" className="link-magical font-body font-medium">
            Behind the Hex
          </Link>

          {/* Game Realms Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 link-magical font-body font-medium">
              <span>🎮 Game Realms</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F9F7F3] border-[#A3C5A1]/30 shadow-lg">
              <DropdownMenuItem className="text-[#1B1D2E] hover:text-[#A3C5A1] hover:bg-[#A3C5A1]/10 font-body">
                <Link href="/lethal-cup-of-tea">Lethal Cup of Tea</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#1B1D2E] hover:text-[#A3C5A1] hover:bg-[#A3C5A1]/10 font-body">
                <Link href="/bar-bee">Bar-Bee</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#A3C5A1] italic font-body">+ More Realms Coming Soon</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact" className="link-magical font-body font-medium">
            Summon Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="lg:hidden text-[#1B1D2E]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#F9F7F3]/95 backdrop-blur-sm border-b border-[#A3C5A1]/30 p-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="link-magical font-body font-medium">
              Home
            </Link>
            <Link href="/spellbook" className="link-magical font-body font-medium">
              The Spellbook
            </Link>
            <Link href="/behind-the-hex" className="link-magical font-body font-medium">
              Behind the Hex
            </Link>
            <div className="border-l-2 border-[#A3C5A1]/30 pl-4">
              <p className="text-[#1B1D2E] font-heading font-bold text-lg mb-2">🎮 Game Realms</p>
              <Link href="/lethal-cup-of-tea" className="link-magical block mb-1 font-body font-medium">
                Lethal Cup of Tea
              </Link>
              <Link href="/bar-bee" className="link-magical block mb-1 font-body font-medium">
                Bar-Bee
              </Link>
              <span className="text-[#A3C5A1] italic text-sm font-body">+ More Realms Coming Soon</span>
            </div>
            <Link href="/contact" className="link-magical font-body font-medium">
              Summon Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
