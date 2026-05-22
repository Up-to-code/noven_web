import { Metadata } from 'next'
import { NEXFIY_APPS } from '@/lib/apps-data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Download, ExternalLink } from 'lucide-react'

type Props = {
  params: Promise<{ appId: string; subId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { appId } = await params
  const app = NEXFIY_APPS.find((a) => a.id === appId)
  if (!app) return { title: 'App Not Found' }

  return {
    title: `${app.name} - Habit Tracker`,
    description: app.description,
  }
}

export default async function AppPage({ params }: Props) {
  const { appId } = await params
  const app = NEXFIY_APPS.find((a) => a.id === appId)

  if (!app) {
    notFound()
  }

  const hasMetrics = app.rating > 0 || (app.downloads && app.downloads !== '') || app.reviews > 0

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background pb-24">
      <article className="container mx-auto px-6 md:px-12 max-w-3xl pt-24 md:pt-32">
        
        {/* Header Section - App Store Style */}
        <header className="mb-16">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start mb-10">
            {/* Squircle Icon */}
            <div className="w-28 h-28 sm:w-[132px] sm:h-[132px] flex-shrink-0 flex items-center justify-center rounded-[28px] sm:rounded-[32px] bg-background border border-border/50 shadow-md overflow-hidden">
              <div className="w-full h-full p-2 sm:p-3">
                {app.icon}
              </div>
            </div>
            
            {/* Title & Actions */}
            <div className="flex-1 flex flex-col justify-center py-1">
              <h1 className="text-3xl sm:text-[34px] font-bold tracking-tight text-foreground leading-tight mb-1">
                {app.name}
              </h1>
              <p className="text-lg sm:text-[22px] text-foreground/50 tracking-tight mb-5">
                {app.tagline}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                 {app.platforms.includes('iOS') && (
                    <a href="https://apps.apple.com/app/id6772000400" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-8 sm:h-9 px-6 rounded-full bg-foreground text-background text-[15px] font-bold hover:opacity-90 transition-opacity">
                      GET
                    </a>
                 )}
                 {app.platforms.includes('Web') && (
                    <a href="https://noven.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 px-5 rounded-full bg-secondary text-foreground text-[15px] font-bold hover:bg-secondary/70 transition-colors">
                      WEB <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                 )}
              </div>
            </div>
          </div>
          
          {hasMetrics && (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-4 border-y border-border/50 text-[13px] text-foreground/50 font-medium uppercase tracking-wide">
              {app.rating > 0 && (
                <>
                  <span className="flex flex-col items-start gap-1">
                    <span className="text-foreground text-[17px] tracking-tight">{app.rating} ★</span>
                    {app.reviews.toLocaleString()} Ratings
                  </span>
                  <div className="w-px h-8 bg-border/50" />
                </>
              )}
              {app.downloads && app.downloads !== '' && (
                <>
                  <span className="flex flex-col items-start gap-1">
                    <span className="text-foreground text-[17px] tracking-tight">{app.downloads}</span>
                    Downloads
                  </span>
                  <div className="w-px h-8 bg-border/50" />
                </>
              )}
              <span className="flex flex-col items-start gap-1">
                <span className="text-foreground text-[17px] tracking-tight">v{app.version}</span>
                Version
              </span>
            </div>
          )}
        </header>

        {/* Description */}
        <section className="mb-16">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Overview</h2>
          <p className="text-[17px] leading-relaxed text-foreground/80">
            {app.longDescription}
          </p>
        </section>

        {/* Screenshots Gallery */}
        <section className="mb-16">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {app.screenshots.map((src, idx) => (
              <div key={idx} className="w-[240px] sm:w-[280px] aspect-[9/19.5] flex-shrink-0 rounded-[22px] overflow-hidden border border-border/50 bg-secondary/30 shadow-sm">
                <img src={src} alt={`${app.name} Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Features Section - Apple Grouped List */}
        <section className="mb-16">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Features</h2>
          <div className="bg-secondary/30 rounded-[22px] overflow-hidden border border-border/50">
            {app.detailedFeatures.map((feature, idx) => (
              <div key={idx}>
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="font-semibold text-foreground text-[17px] sm:w-[200px] shrink-0">{feature.name}</span>
                  <span className="text-[15px] text-foreground/70 leading-relaxed">{feature.description}</span>
                </div>
                {idx !== app.detailedFeatures.length - 1 && (
                  <div className="h-px bg-border/50 ml-5 sm:ml-[236px]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* About the Builder - Grouped List */}
        <section className="mb-16">
           <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Developer</h2>
           <div className="bg-secondary/30 rounded-[22px] overflow-hidden border border-border/50 p-6">
             <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
               {app.name} is designed and built by Ahmed Mansour, an independent developer focused on creating calm, intentional, and meaningful digital experiences. Technology should support you, not distract you.
             </p>
             <a href="mailto:uptocodejs@gmail.com" className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-background border border-border/50 text-[15px] font-semibold text-foreground hover:bg-secondary/50 transition-colors">
               Contact Support
             </a>
           </div>
        </section>

        {/* Footer Links */}
        <footer className="pt-8 border-t border-border/50">
          <div className="flex flex-wrap gap-x-6 gap-y-4 text-[13px] text-foreground/50 font-medium">
            <Link href={`/${app.id}/${app.id}/privacy`} className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href={`/${app.id}/${app.id}/terms`} className="hover:text-foreground transition-colors">Terms of Service</Link>
            <a href="https://apps.apple.com/app/id6772000400" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">App Store</a>
          </div>
        </footer>

      </article>
    </main>
  )
}
