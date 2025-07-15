import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-[#A3C5A1]/30 bg-[#F9F7F3]/75 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Image src="/logo.png" alt="Little Hex Studio" width={128} height={128} className="w-32 h-32" />
          <span className="text-[#1B1D2E] font-heading font-bold text-2xl tracking-wide">Little Hex Studio</span>
        </div>
        <p className="text-[#A3C5A1] mb-4 font-body text-readable font-medium">
          Crafting magical experiences, one enchantment at a time.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="https://assetstore.unity.com/publishers/119713" className="link-magical font-body font-medium">
            Unity Asset Store
          </Link>
          <Link href="https://little-hex-studio.itch.io/" className="link-magical font-body font-medium">
            Itch.io
          </Link>
          <Link href="https://ko-fi.com/littlehexstudio" className="link-magical font-body font-medium">
            Ko-fi
          </Link>
        </div>
      </div>
    </footer>
  )
}
