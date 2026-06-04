"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Users, Clock, HeadphonesIcon, Lightbulb, Wallet } from "lucide-react"

const reasons = [
  {
    icon: BadgeCheck,
    title: "PRODUITS CERTIFIÉS",
  },
  {
    icon: Users,
    title: "ÉQUIPE QUALIFIÉE",
  },
  {
    icon: Clock,
    title: "RESPECT DES DÉLAIS",
  },
  {
    icon: HeadphonesIcon,
    title: "SERVICE APRÈS-VENTE",
  },
  {
    icon: Lightbulb,
    title: "SOLUTIONS SUR MESURE",
  },
  {
    icon: Wallet,
    title: "PRIX COMPÉTITIFS",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
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

export default function WhyChooseUs() {
  return (
    <section className="py-10 md:py-12 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-secondary">
            POURQUOI CHOISIR <span className="text-secondary">OIS</span> ?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <motion.div 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-background/30 flex items-center justify-center mb-2 bg-primary"
                whileHover={{ 
                  borderColor: "rgba(255,255,255,0.8)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)"
                }}
              >
                <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-background" />
              </motion.div>
              <h3 className="text-[9px] md:text-[10px] font-semibold text-secondary uppercase leading-tight">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
