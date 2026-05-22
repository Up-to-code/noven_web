'use client'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
              About the Developer
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight max-w-2xl">
              I love building things on the internet. Turning ideas into real products.
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-secondary/30 rounded-[32px] p-8 sm:p-12 border border-border/50 mb-16 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <img 
              src="/me.jpg" 
              alt="Ahmed Mansour" 
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-md border-2 border-background flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
                Ahmed Mansour
              </h3>
              <p className="text-[17px] text-foreground/70 leading-relaxed font-medium mb-6 max-w-lg">
                Independent developer and creator of Noven. I build applications with a relentless focus on quality, privacy, and the human experience.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://x.com/uptocodejs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-background border border-border/50 text-[14px] font-bold text-foreground hover:bg-secondary transition-colors">
                  X (Twitter)
                </a>
                <a href="https://github.com/Up-to-code" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-background border border-border/50 text-[14px] font-bold text-foreground hover:bg-secondary transition-colors">
                  GitHub
                </a>
                <a href="https://www.tiktok.com/@e.nsan?lang=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-background border border-border/50 text-[14px] font-bold text-foreground hover:bg-secondary transition-colors">
                  TikTok
                </a>
                <a href="https://www.youtube.com/@edit_Pro_1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-background border border-border/50 text-[14px] font-bold text-foreground hover:bg-secondary transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-border/50">
            <div>
              <h3 className="text-[17px] font-bold text-foreground mb-2">Craftsmanship</h3>
              <p className="text-[15px] text-foreground/60 leading-relaxed">
                Every detail matters. Every feature is thoughtfully designed and tested personally.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-foreground mb-2">Privacy</h3>
              <p className="text-[15px] text-foreground/60 leading-relaxed">
                Your data is yours alone. No ads, no tracking, no data sales.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-foreground mb-2">Care</h3>
              <p className="text-[15px] text-foreground/60 leading-relaxed">
                I genuinely care about your experience and read every piece of feedback.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
