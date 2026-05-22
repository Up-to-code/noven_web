import Link from 'next/link'
import { ArrowRight, BarChart3, Bell, CheckCircle2, Download, ShieldCheck } from 'lucide-react'

const screenshots = [
  {
    src: '/Noven/screenshots/app-store-tabs-fixed-chart/en-US/01-home.png',
    alt: 'Noven home screen',
  },
  {
    src: '/Noven/screenshots/app-store-tabs-fixed-chart/en-US/03-analytics.png',
    alt: 'Noven analytics screen',
  },
  {
    src: '/Noven/screenshots/export-prompt-active/iphone-6-5/en-US/01-export-prompt-active.png',
    alt: 'Noven export prompt screen',
  },
]

const features = [
  {
    icon: CheckCircle2,
    title: 'Track the habits that matter',
    description: 'Create daily routines, mark progress, and keep the next action obvious.',
  },
  {
    icon: BarChart3,
    title: 'See patterns clearly',
    description: 'Clean analytics make consistency easier to understand without turning progress into clutter.',
  },
  {
    icon: Bell,
    title: 'Return without friction',
    description: 'A lightweight interface helps you check in quickly and move on with the day.',
  },
  {
    icon: Download,
    title: 'Export-ready flows',
    description: 'Premium export prompts are presented clearly for users who need more from their habit data.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbf8] text-[#121212]">
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-3 py-2 shadow-sm">
              <img src="/Noven/icon.png" alt="Noven" className="h-8 w-8 rounded-lg" />
              <span className="text-sm font-semibold text-black/65">Noven for iPhone</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.96] tracking-tight sm:text-6xl md:text-7xl">
              Habit tracking with room to breathe.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/60 md:text-xl">
              Noven keeps daily routines, progress, and habit analytics in one focused place so consistency feels clear instead of noisy.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://apps.apple.com/app/id6772000400"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-7 text-sm font-bold text-white transition hover:bg-black/85"
              >
                View on App Store
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/noven/noven"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white px-7 text-sm font-bold text-black transition hover:bg-black/[0.04]"
              >
                Open product page
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-3 border-t border-black/10 pt-6">
              <div>
                <p className="text-2xl font-bold tracking-tight">1.0.0</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-black/45">Version</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">10</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-black/45">Build</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">iOS</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-black/45">Platform</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] md:min-h-[640px]">
            <div className="absolute left-1/2 top-6 h-[520px] w-[270px] -translate-x-1/2 rotate-[-7deg] overflow-hidden rounded-[38px] border border-black/10 bg-white p-2 shadow-2xl shadow-black/15 md:left-[38%] md:h-[610px] md:w-[282px]">
              <img src={screenshots[0].src} alt={screenshots[0].alt} className="h-full w-full rounded-[30px] object-cover" />
            </div>
            <div className="absolute right-0 top-28 hidden h-[500px] w-[230px] rotate-[8deg] overflow-hidden rounded-[34px] border border-black/10 bg-white p-2 shadow-xl shadow-black/10 md:block">
              <img src={screenshots[1].src} alt={screenshots[1].alt} className="h-full w-full rounded-[26px] object-cover" />
            </div>
            <div className="absolute bottom-0 left-2 hidden h-[430px] w-[204px] rotate-[5deg] overflow-hidden rounded-[30px] border border-black/10 bg-white p-2 shadow-xl shadow-black/10 lg:block">
              <img src={screenshots[2].src} alt={screenshots[2].alt} className="h-full w-full rounded-[22px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-black/10 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/40">Built around the app</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">Every section points back to the habit flow.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-black/10 bg-[#fbfbf8] p-6">
                <feature.icon className="h-6 w-6 text-black" />
                <h3 className="mt-8 text-lg font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-8 md:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/40">Screenshots</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">The app is the visual story.</h2>
            </div>
            <p className="text-base leading-7 text-black/60">
              The homepage now uses real Noven screenshots instead of broad brand messaging, so visitors understand the product before they click anywhere else.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {screenshots.map((shot, index) => (
              <div key={shot.src} className="overflow-hidden rounded-lg border border-black/10 bg-white p-3 shadow-sm">
                <img src={shot.src} alt={shot.alt} className="aspect-[1320/2868] w-full rounded-md object-cover object-top" />
                <p className="mt-4 px-1 pb-1 text-sm font-semibold text-black/55">0{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white/75">
              <ShieldCheck className="h-4 w-4" />
              App Store ready
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">Prepared for publishing, privacy, and review.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              Build 10 is the launch binary, and the site now gives App Review and users clear paths to product details, privacy, terms, and support.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            <Link href="/noven/noven/privacy" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] px-5 py-4 font-semibold text-white transition hover:bg-white/[0.1]">
              Privacy Policy <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/noven/noven/terms" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] px-5 py-4 font-semibold text-white transition hover:bg-white/[0.1]">
              Terms of Service <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] px-5 py-4 font-semibold text-white transition hover:bg-white/[0.1]">
              Contact Support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
