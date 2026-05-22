'use client'

import { ArrowRight } from 'lucide-react'
import { NEXFIY_APPS } from '@/lib/apps-data'

export function Hero() {
  const handleGetStarted = () => {
    const appsSection = document.querySelector('#apps')
    appsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[95vh] flex items-center bg-background px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Ultra-subtle Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 flex items-center justify-center">
        <div className="w-[1000px] h-[1000px] bg-foreground/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center">
          
          {/* Main Centered Content */}
          <div className="w-full text-center z-10 flex flex-col items-center">
            <div 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-secondary/40 border border-border/30 mb-10 backdrop-blur-xl hover:bg-secondary/60 transition-colors cursor-pointer shadow-sm group" 
            >
              <img 
                src="/me.jpg" 
                alt="Ahmed Mansour" 
                className="w-6 h-6 rounded-full object-cover border border-border/30"
              />
              <span className="text-[13px] font-medium text-foreground/70 pr-3 group-hover:text-foreground transition-colors">
                Independently built by <span className="font-bold">Ahmed Mansour</span>
              </span>
            </div>

            <div className="text-[13px] font-bold uppercase tracking-[0.3em] text-foreground/30 mb-6">
              Noven for iOS
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] font-bold text-foreground tracking-tighter leading-[0.95] mb-8 max-w-4xl mx-auto">
              Build better<br className="hidden sm:block" /> habits.
            </h1>
            
            <p className="text-xl sm:text-[22px] text-foreground/50 leading-relaxed font-light tracking-tight max-w-2xl mx-auto mb-12">
              A calm habit tracker for daily routines, clean progress analytics, and focused consistency without extra noise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
              <button 
                onClick={handleGetStarted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 h-[56px] px-10 rounded-full bg-foreground text-background text-[15px] font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
              >
                Explore Noven
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            </div>
            
            {/* Ultra-Premium Metrics */}
            <div className="flex flex-wrap justify-center gap-12 sm:gap-24 pt-16 mt-16 border-t border-border/30 w-full max-w-3xl">
              <div>
                <div className="text-[40px] font-bold text-foreground tracking-tighter leading-none mb-3">0.0<span className="text-foreground/30">★</span></div>
                <div className="text-[12px] font-semibold uppercase text-foreground/40 tracking-[0.2em]">Rating</div>
              </div>
              <div>
                <div className="text-[40px] font-bold text-foreground tracking-tighter leading-none mb-3">10</div>
                <div className="text-[12px] font-semibold uppercase text-foreground/40 tracking-[0.2em]">Launch Build</div>
              </div>
              <div>
                <div className="text-[40px] font-bold text-foreground tracking-tighter leading-none mb-3">{NEXFIY_APPS.length}</div>
                <div className="text-[12px] font-semibold uppercase text-foreground/40 tracking-[0.2em]">iOS App</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
