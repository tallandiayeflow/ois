"use client"

import { motion } from "framer-motion"
import conteneur from "../public/images/conteneur.png"
import realisation from "../public/images/realisation2.png"
import produits from "../public/images/produits.png"
const projects = [
  {
    title: "AMÉNAGEMENT DE CONTENEURS",
    image: conteneur.src,
  },
  {
    title: "STRUCTURES MÉTALLIQUES",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "TRAVAUX BA13",
    image: realisation.src,
  },
  {
    title: "INSTALLATIONS INDUSTRIELLES",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "FILTRES & ÉQUIPEMENTS LOURDS",
    image: produits.src,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Realisations() {
  return (
    <section id="realisations" className="py-10 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-secondary">NOS RÉALISATIONS</h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm shadow-md">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
