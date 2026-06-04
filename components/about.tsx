"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section id="apropos" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop"
                alt="Conteneurs bleus avec logo OIS"
                className="w-full h-72 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Image
                  src="/images/logo-ois.png"
                  alt="OIS - Optimum International Services"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-1">
              À PROPOS DE <span className="text-primary">OIS</span>
            </h2>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Optimum International Services (OIS) est une entreprise spécialisée dans les
              solutions industrielles, l&apos;aménagement de conteneurs et les travaux de second
              œuvre.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Nous accompagnons les entreprises, les industries et les particuliers avec des
              solutions fiables, durables et adaptées à leurs besoins.
            </p>
            <Link
              href="#services"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-5 py-2 text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
