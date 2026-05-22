'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#features', label: 'Features' },
    { href: '/#screenshots', label: 'Screenshots' },
    { href: '/noven/noven/privacy', label: 'Privacy' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
            Noven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link 
              href="/noven/noven"
              className="hidden md:inline-flex items-center justify-center h-8 px-5 rounded-full bg-foreground text-background text-[13px] font-bold hover:opacity-90 transition-opacity"
            >
              View App
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary/50 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[15px] font-semibold text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-[14px] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link 
                href="/noven/noven"
                className="flex items-center justify-center h-12 w-full rounded-[14px] bg-foreground text-background text-[15px] font-bold hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                View App
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
