import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, ShieldCheck, Zap, CheckCircle2, Menu, X, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 py-4 rounded-xl backdrop-blur bg-white/10 border border-white/20 mt-4 px-4 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">NovaSaaS</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition">Customers</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/90 transition">
              Get Started
              <Zap className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 hover:text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {(
        <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="mt-2 rounded-xl backdrop-blur bg-white/10 border border-white/20 text-white/80 p-4 space-y-3">
              <a href="#features" className="block">Features</a>
              <a href="#pricing" className="block">Pricing</a>
              <a href="#testimonials" className="block">Customers</a>
              <a href="#faq" className="block">FAQ</a>
              <div className="pt-2 flex gap-3">
                <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
                <a href="#cta" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/90 transition">
                  Get Started
                  <Zap className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const titleRef = useRef(null)
  const paraRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo(paraRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
  }, [])

  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#0A0F2A] to-[#031227]" />
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-32 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs text-white/80 mb-6">
              <Star className="h-3.5 w-3.5" /> Introducing NovaSaaS v1.0
            </div>
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Launch faster with a futuristic, 3D‑powered SaaS experience
            </h1>
            <p ref={paraRef} className="mt-5 text-white/70 text-lg max-w-xl">
              Engage your users with an interactive hero powered by a chrome spiral torus in 3D. Beautiful, performant, and ready to scale.
            </p>
            <div ref={ctaRef} className="mt-8 flex items-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition">
                Start for free
                <Zap className="h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white/90 hover:bg-white/10 transition">
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> SOC2 ready</div>
              <div className="flex items-center gap-2"><Zap className="h-5 w-5" /> Blazing fast</div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[480px] sm:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F2A] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const containerRef = useRef(null)
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-card]') || []
    cards.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        }
      )
    })
  }, [])

  const items = [
    { icon: <Zap className="h-5 w-5" />, title: 'Realtime performance', desc: 'Optimized rendering and micro-interactions keep your users in flow.' },
    { icon: <ShieldCheck className="h-5 w-5" />, title: 'Enterprise security', desc: 'Role-based access, audit logs, and SSO out of the box.' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'Delightful UX', desc: 'Subtle motion, clean visuals, and accessible components.' },
  ]

  return (
    <section id="features" className="relative py-24 bg-[#070B1A] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need to ship faster</h2>
          <p className="mt-4 text-white/70">A modern toolkit designed for product-led growth.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} data-card className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center text-white shadow shadow-blue-500/30">
                {it.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-300">
                <span>Learn more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#060A18] text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Simple, transparent pricing</h2>
          <p className="mt-4 text-white/70">Start free. Scale when you grow.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-2 text-white/70">For personal projects</p>
            <div className="mt-6 text-4xl font-bold">$0<span className="text-base font-normal text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />1 project</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />Community support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-block w-full text-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-white/90">Get started</a>
          </div>
          <div className="rounded-2xl border-2 border-blue-400/60 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-lg shadow-blue-500/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/40 text-xs text-blue-200">Most Popular</div>
            <h3 className="mt-3 text-xl font-semibold">Pro</h3>
            <p className="mt-2 text-white/70">For growing teams</p>
            <div className="mt-6 text-4xl font-bold">$29<span className="text-base font-normal text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />Unlimited projects</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />Advanced analytics</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-block w-full text-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-white/90">Upgrade</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-white/70">Custom solutions</p>
            <div className="mt-6 text-4xl font-bold">Custom</div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />SOC2 & SSO</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" />SLA & white-glove</li>
            </ul>
            <a href="#cta" className="mt-8 inline-block w-full text-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-white/90">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#070B1A] text-white">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Loved by product teams</h2>
          <p className="mt-4 text-white/70">What our customers say</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {["“The 3D hero increased our activation by 22%."","“Beautiful, fast, and easy to integrate.”","“We shipped a stunning MVP in days.”"].map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90">{t}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />
                <div>
                  <div className="font-medium">Alex Carter</div>
                  <div className="text-xs text-white/60">Head of Product</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[#060A18] text-white">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-cyan-500/20 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-semibold">Ready to build your modern SaaS?</h3>
              <p className="mt-3 text-white/80">Sign up in minutes and start creating immersive product experiences.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-white/90">
                Create account
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white/90 px-6 py-3 rounded-xl hover:bg-white/10">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 bg-[#050A17] text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 grid place-items-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-white">NovaSaaS</span>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} NovaSaaS. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1020]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
