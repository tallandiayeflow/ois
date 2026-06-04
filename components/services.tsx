"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ContainerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <line x1="6" y1="12" x2="6" y2="16" />
      <line x1="10" y1="12" x2="10" y2="16" />
      <line x1="14" y1="12" x2="14" y2="16" />
      <line x1="18" y1="12" x2="18" y2="16" />
    </svg>
  )
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  )
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  )
}

const services = [
  {
    icon: HouseIcon,
    title: "SECOND ŒUVRE",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Confection aluminium",
      "Construction métallique",
      "Menuiserie bois",
      "Escaliers métalliques",
      "Garde-corps",
      "Portails et portes métalliques",
    ],
  },
  {
    icon: ContainerIcon,
    title: "AMÉNAGEMENT DE CONTENEURS",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Bureaux conteneurisés",
      "Base vie",
      "Logements modulaires",
      "Boutiques et magasins",
      "Espaces de travail sur mesure",
    ],
  },
  {
    icon: LayersIcon,
    title: "TRAVAUX BA13",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Cloisons BA13",
      "Faux plafonds",
      "Isolation thermique",
      "Isolation acoustique",
      "Finitions intérieures",
    ],
  },
  {
    icon: FilterIcon,
    title: "FILTRES INDUSTRIELS & PIÈCES D'ORIGINE",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Filtres à air",
      "Filtres à huile",
      "Filtres à carburant",
      "Filtres hydrauliques",
      "Pièces de maintenance",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">NOS SERVICES</h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-border overflow-hidden"
            >
              {/* Header with icon and title */}
              <div className="p-3 border-b border-border flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-secondary text-xs leading-tight uppercase">
                  {service.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Items list */}
              <div className="p-3">
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center justify-center w-full border border-primary text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  EN SAVOIR PLUS
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
