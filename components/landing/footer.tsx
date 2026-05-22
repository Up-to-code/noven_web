'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide">Noven</h3>
            <p className="text-sm text-foreground/60 leading-relaxed pr-4">
              Calm habit tracking for daily routines, progress, and consistency.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Apps</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#apps" className="text-foreground/70 hover:text-foreground transition-colors">
                  Noven
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About the Founder
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Support & Social</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:uptocodejs@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="https://x.com/uptocodejs" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://github.com/Up-to-code" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@e.nsan?lang=en" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@edit_Pro_1" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/noven/noven/privacy" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/noven/noven/terms" className="text-foreground/70 hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="https://apps.apple.com/app/id6772000400" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/50">
            © {currentYear} Noven. Built with care and intention.
          </p>
          <p className="text-xs text-foreground/50">
            Build better habits with clarity.
          </p>
        </div>
      </div>
    </footer>
  )
}
