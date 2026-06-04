"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Brands() {
  return (
    <section id="produits" className="py-10 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-secondary">
            MARQUES DISPONIBLES
          </h2>
          <div className="mt-2 w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {/* CAT */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#FFCD00] px-3 py-1 flex items-center shadow-md hover:shadow-lg transition-shadow">
              <span className="text-black font-black text-2xl md:text-3xl tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>CAT</span>
            </div>
          </motion.div>

          {/* Perkins */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0055A4]" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-[#0055A4] font-bold text-xl md:text-2xl">Perkins</span>
          </motion.div>

          {/* Fleetguard */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[#E85D04] font-black text-xl md:text-2xl italic" style={{ fontFamily: 'Arial Black, sans-serif' }}>Fleetguard</span>
          </motion.div>

          {/* Donaldson */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#0077B6" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#0077B6"/>
            </svg>
            <span className="text-[#0077B6] font-bold text-xl md:text-2xl">Donaldson</span>
            <span className="text-[#0077B6] text-[8px] align-top">.</span>
          </motion.div>

          {/* Cummins */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#CE1126">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5z"/>
            </svg>
            <span className="text-[#CE1126] font-bold text-xl md:text-2xl">Cummins</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
