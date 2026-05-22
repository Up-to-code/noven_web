'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import type { NexfiyApp } from '@/lib/apps-data.tsx'

interface AppModalProps {
  app: NexfiyApp | null
  isOpen: boolean
  onClose: () => void
}

export function AppModal({ app, isOpen, onClose }: AppModalProps) {
  if (!app) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {app.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-3xl mb-1">{app.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{app.tagline}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-6">
          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">About</h3>
            <p className="text-foreground/70 leading-relaxed">{app.fullDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {app.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-foreground font-bold mt-0.5">✓</span>
                  <span className="text-foreground/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Available On</h3>
            <div className="flex flex-wrap gap-2">
              {app.platforms.map((platform) => (
                <span 
                  key={platform} 
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-11"
            >
              Explore {app.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
