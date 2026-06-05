"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import hero from "../public/images/hero.png"

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-start overflow-hidden pt-20 mt-24 mx-12 sm:mx-16 lg:mx-32 rounded-xl border border-background/20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero.src})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-background">SOLUTIONS</span>
            <br />
            <span className="text-background">INDUSTRIELLES &</span>
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                WebkitTextStroke: '2px #F5A623',
                textShadow: 'none'
              }}
            >
              AMÉNAGEMENT
            </span>
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                WebkitTextStroke: '2px #F5A623',
                textShadow: 'none'
              }}
            >
              PROFESSIONNEL
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-sm md:text-base text-background/80 max-w-lg leading-relaxed"
          >
            Votre partenaire de confiance pour les filtres industriels, les pièces
            d&apos;origine, l&apos;aménagement de conteneurs et les travaux de second œuvre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-start"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors group"
            >
              DEMANDER UN DEVIS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-background text-background px-6 py-3 text-sm font-semibold hover:bg-background hover:text-secondary transition-colors group"
            >
              NOUS CONTACTER
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
