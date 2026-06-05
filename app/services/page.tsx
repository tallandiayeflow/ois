"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ArrowRight, Check, Building2, Container, Layers, Filter } from "lucide-react"
import contenur from "@/public/images/conteneur.png"
import produits from "@/public/images/produits.png"
import realisation from "@/public/images/realisation1.png"
const services = [
  {
    id: "second-oeuvre",
    icon: Building2,
    title: "Second Œuvre",
    description: "Travaux de finition et d'aménagement intérieur pour tous types de bâtiments.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    features: [
      "Confection aluminium",
      "Construction métallique",
      "Menuiserie bois",
      "Escaliers métalliques",
      "Garde-corps",
      "Portails et portes métalliques"
    ]
  },
  {
    id: "amenagement-conteneurs",
    icon: Container,
    title: "Aménagement de Conteneurs",
    description: "Transformation de conteneurs en espaces fonctionnels et modernes.",
    image: contenur.src,
    features: [
      "Bureaux conteneurisés",
      "Bases vie",
      "Logements modulaires",
      "Boutiques et magasins",
      "Espaces de travail sur mesure"
    ]
  },
  {
    id: "travaux-ba13",
    icon: Layers,
    title: "Travaux BA13",
    description: "Installation de cloisons et faux plafonds en plaques de plâtre.",
    image: realisation.src,
    features: [
      "Cloisons BA13",
      "Faux plafonds",
      "Isolation thermique",
      "Isolation acoustique",
      "Finitions intérieures"
    ]
  },
  {
    id: "filtres-industriels",
    icon: Filter,
    title: "Filtres Industriels & Pièces d'Origine",
    description: "Fourniture de filtres et pièces de rechange pour équipements industriels.",
    image: produits.src,
    features: [
      "Filtres à air",
      "Filtres à huile",
      "Filtres à carburant",
      "Filtres hydrauliques",
      "Pièces de maintenance"
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      
      <PageHeader 
        title="NOS SERVICES"
        subtitle="Solutions industrielles complètes et professionnelles"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground max-w-2xl mx-auto">
              OIS vous propose une gamme complète de services pour répondre à tous vos besoins 
              en matière de solutions industrielles et d&apos;aménagement professionnel.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                className="bg-background border border-border rounded-lg overflow-hidden shadow-sm group"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                  >
                    EN SAVOIR PLUS
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Besoin d&apos;un service sur mesure ?
          </motion.h2>
          <motion.p 
            className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contactez-nous pour discuter de votre projet. Nous vous proposerons une solution 
            adaptée à vos besoins spécifiques.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-secondary text-background px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
              >
                Demander un Devis
              </Link>
            </motion.div>
            <motion.a
              href="tel:+221776576044"
              className="inline-block bg-background text-secondary px-8 py-3 rounded-md font-semibold hover:bg-background/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Appeler: 77 657 60 44
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
