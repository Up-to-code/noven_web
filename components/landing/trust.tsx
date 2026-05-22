'use client'

import { Shield, Lock, Eye, Heart } from 'lucide-react'

export function Trust() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
              Privacy & Security
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight max-w-2xl">
              Noven is designed to respect attention, privacy, and the personal nature of habit data.
            </p>
          </div>

          {/* Trust Items - iOS Settings Style */}
          <div className="bg-secondary/30 rounded-[22px] overflow-hidden border border-border/50 mb-20 max-w-3xl">
            {[
              { icon: Shield, title: 'Clear Data Use', desc: 'Habit and progress data exists to power tracking, analytics, and account features where supported.' },
              { icon: Lock, title: 'No Ad-Driven Design', desc: 'Noven is not built around ads, engagement traps, or selling attention.' },
              { icon: Eye, title: 'User Control', desc: 'You can manage habits, permissions, and account-related requests through the app and support path.' },
              { icon: Heart, title: 'Made with Care', desc: 'Built by an independent developer who treats habit tracking as personal software.' },
            ].map((item, idx, arr) => (
              <div key={idx}>
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 hover:bg-secondary/40 transition-colors">
                  <div className="w-10 h-10 rounded-[10px] bg-background flex items-center justify-center flex-shrink-0 border border-border/50 shadow-sm">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-semibold text-foreground tracking-tight mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-foreground/70 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {idx !== arr.length - 1 && (
                  <div className="h-px bg-border/50 ml-[76px] sm:ml-[92px]" />
                )}
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div className="pt-16 border-t border-border">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-8">
              Publishing Status
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              <div>
                <div className="text-2xl font-medium text-foreground">iOS</div>
                <p className="text-[15px] text-foreground/50 mt-1">Platform</p>
              </div>
              <div>
                <div className="text-2xl font-medium text-foreground">1.0.0</div>
                <p className="text-[15px] text-foreground/50 mt-1">Version</p>
              </div>
              <div>
                <div className="text-2xl font-medium text-foreground">10</div>
                <p className="text-[15px] text-foreground/50 mt-1">Build</p>
              </div>
              <div>
                <div className="text-2xl font-medium text-foreground">6772000400</div>
                <p className="text-[15px] text-foreground/50 mt-1">App ID</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
