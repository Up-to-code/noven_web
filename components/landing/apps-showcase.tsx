'use client'

import { NEXFIY_APPS, type NexfiyApp } from '@/lib/apps-data'

interface AppsShowcaseProps {
  onAppClick: (app: NexfiyApp) => void
}

export function AppsShowcase({ onAppClick }: AppsShowcaseProps) {
  const marqueeApps = [...NEXFIY_APPS, ...NEXFIY_APPS, ...NEXFIY_APPS, ...NEXFIY_APPS]

  return (
    <section id="apps" className="py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
            The App
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight max-w-2xl">
            Noven gives habit tracking a quieter shape: daily progress, clean analytics, and routines that are easy to keep.
          </p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
        <div className="flex w-max animate-marquee gap-6 sm:gap-8 px-4 sm:px-8">
          {marqueeApps.map((app, idx) => (
            <div 
              key={`${app.id}-${idx}`}
              className="w-[280px] sm:w-[340px] group cursor-pointer flex flex-col p-6 rounded-[28px] bg-secondary/30 hover:bg-secondary/60 border border-border/50 shadow-sm transition-colors flex-shrink-0"
              onClick={() => window.location.href = `/${app.id}/${app.id}`}
            >
              <div className="flex items-center gap-5 mb-5">
                {/* Icon with Apple-like squircle appearance and shadow */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center rounded-[16px] sm:rounded-[18px] bg-background border border-border/50 shadow-sm group-hover:shadow-md transition-all overflow-hidden p-1.5 sm:p-2">
                  {app.icon}
                </div>

                {/* Content Stack */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-foreground tracking-tight leading-tight mb-0.5">
                    {app.name}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-foreground/50 tracking-wide line-clamp-1">
                    {app.tagline}
                  </p>
                </div>
              </div>

              <p className="text-[14px] sm:text-[15px] text-foreground/70 leading-relaxed mb-6 line-clamp-2">
                {app.description}
              </p>
              
              {/* Action Button */}
              <div className="mt-auto">
                <div className="inline-flex h-8 sm:h-9 px-6 rounded-full bg-background border border-border/50 text-[13px] sm:text-[14px] font-bold text-foreground items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-transparent transition-colors">
                  GET
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
