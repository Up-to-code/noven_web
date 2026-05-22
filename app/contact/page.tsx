import { Metadata } from 'next'
import { Mail, MessageSquare, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Noven',
  description: 'Get in touch for Noven support and feedback.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Contact
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed font-medium tracking-tight">
            Need help with Noven or want to share feedback? I would love to hear from you.
          </p>
        </header>

        {/* Contact Methods - Apple Grouped List */}
        <div className="bg-secondary/30 rounded-[22px] overflow-hidden border border-border/50 mb-16">
          <a href="mailto:uptocodejs@gmail.com" className="block group">
            <div className="flex items-center gap-4 p-5 sm:p-6 hover:bg-secondary/40 transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-background flex items-center justify-center flex-shrink-0 border border-border/50 shadow-sm">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-foreground tracking-tight mb-0.5">
                  Email Support
                </h3>
                <p className="text-[15px] text-foreground/50">
                  uptocodejs@gmail.com
                </p>
              </div>
            </div>
          </a>
          
          <div className="h-px bg-border/50 ml-[76px] sm:ml-[88px]" />

          <a href="https://x.com/uptocodejs" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="flex items-center gap-4 p-5 sm:p-6 hover:bg-secondary/40 transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-background flex items-center justify-center flex-shrink-0 border border-border/50 shadow-sm">
                <Twitter className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-foreground tracking-tight mb-0.5">
                  X (Twitter)
                </h3>
                <p className="text-[15px] text-foreground/50">
                  @uptocodejs
                </p>
              </div>
            </div>
          </a>
          
          <div className="h-px bg-border/50 ml-[76px] sm:ml-[88px]" />

          <div className="block group cursor-pointer">
            <div className="flex items-center gap-4 p-5 sm:p-6 hover:bg-secondary/40 transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-background flex items-center justify-center flex-shrink-0 border border-border/50 shadow-sm">
                <MessageSquare className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-foreground tracking-tight mb-0.5">
                  Feedback
                </h3>
                <p className="text-[15px] text-foreground/50">
                  Share your thoughts to help improve Noven
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[13px] font-semibold text-foreground/70 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full h-12 px-4 rounded-[14px] bg-secondary/30 border border-border/50 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 outline-none transition-all text-[15px]" 
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[13px] font-semibold text-foreground/70 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-12 px-4 rounded-[14px] bg-secondary/30 border border-border/50 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 outline-none transition-all text-[15px]" 
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[13px] font-semibold text-foreground/70 ml-1">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-4 rounded-[14px] bg-secondary/30 border border-border/50 focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 outline-none transition-all text-[15px] resize-none" 
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="button"
              className="h-12 px-8 rounded-full bg-foreground text-background text-[15px] font-bold hover:opacity-90 transition-opacity mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}
