'use client'

export function Intro() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
            What is Noven?
          </h2>
          
          <div className="space-y-8 text-2xl md:text-3xl text-foreground font-light leading-snug tracking-tight">
            <p>
              Noven is a focused habit tracker built by one independent developer with an unwavering commitment to clarity.
            </p>
            
            <p className="text-foreground/60">
              Instead of turning self-improvement into noise, Noven gives your daily habits a clean place to live.
            </p>

            <p className="text-foreground/40 text-lg md:text-xl">
              Built for App Store launch, designed with care, and maintained by someone who respects your attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
