'use client'

import { NEXFIY_FEATURES } from '@/lib/apps-data'
import { Sparkles, Shield, MonitorSmartphone, WifiOff, Gem, Users } from 'lucide-react'

// Map features to specific icons and bento-box spans
const featureConfig = [
  { icon: Sparkles, span: 'md:col-span-2' }, // Crafted with Care
  { icon: Shield, span: 'md:col-span-1' }, // Privacy First
  { icon: MonitorSmartphone, span: 'md:col-span-1' }, // Cross-Platform
  { icon: WifiOff, span: 'md:col-span-1' }, // Offline Ready
  { icon: Gem, span: 'md:col-span-1' }, // Quality Over Growth
  { icon: Users, span: 'md:col-span-3' }, // Community First
]

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
            Built Different
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight max-w-2xl">
            Quality, privacy, and care at the core of everything.
          </p>
        </div>

        {/* Features - Apple Bento Box Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl">
          {NEXFIY_FEATURES.map((feature, idx) => {
            const config = featureConfig[idx] || { icon: Sparkles, span: 'md:col-span-1' }
            const Icon = config.icon

            return (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-[32px] bg-secondary/30 hover:bg-secondary/50 border border-border/50 p-8 sm:p-10 flex flex-col min-h-[280px] transition-colors ${config.span}`}
              >
                <div className="mb-auto">
                  <div className="w-14 h-14 rounded-[16px] bg-background flex items-center justify-center border border-border/50 shadow-sm group-hover:scale-105 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-[22px] font-bold text-foreground tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-foreground/60 leading-relaxed max-w-lg font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
