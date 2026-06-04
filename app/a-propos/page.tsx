"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { CheckCircle, Users, Award, Clock, Target, Shield } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet que nous réalisons."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins."
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Nos solutions sont fiables, durables et adaptées à vos besoins spécifiques."
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Nous nous engageons à respecter les délais convenus avec nos clients."
  },
]

const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "500+", label: "Projets réalisés" },
  { value: "200+", label: "Clients satisfaits" },
  { value: "50+", label: "Employés qualifiés" },
]

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function AProposPage() {
  return (
    <main className="bg-background">
      <Navbar />
      
      <PageHeader 
        title="À PROPOS DE OIS"
        subtitle="Votre partenaire industriel de confiance"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80"
                  alt="Équipe OIS"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Années d&apos;expérience</div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                QUI SOMMES-NOUS ?
              </h2>
              <motion.div 
                className="w-16 h-1 bg-primary mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ originX: 0 }}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-secondary">Optimum International Services (OIS)</strong> est une entreprise 
                spécialisée dans les solutions industrielles, l&apos;aménagement de conteneurs et les travaux de 
                second œuvre au Sénégal.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous accompagnons les entreprises, les industries et les particuliers avec des solutions 
                fiables, durables et adaptées à leurs besoins. Notre expertise couvre un large éventail 
                de services allant des filtres industriels aux aménagements professionnels.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Forts de notre expérience et de notre engagement envers la qualité, nous sommes devenus 
                un partenaire de confiance pour de nombreuses entreprises au Sénégal et dans la sous-région.
              </p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Expertise reconnue",
                  "Service personnalisé", 
                  "Prix compétitifs"
                ].map((item) => (
                  <motion.div 
                    key={item}
                    variants={itemVariants}
                    className="flex items-center gap-2 text-secondary"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-background/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-muted p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-secondary mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fournir des solutions industrielles de haute qualité qui répondent aux besoins 
                spécifiques de nos clients, tout en maintenant les plus hauts standards de 
                professionnalisme et d&apos;intégrité.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-muted p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-secondary mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le leader incontournable des solutions industrielles en Afrique de l&apos;Ouest, 
                reconnu pour notre excellence opérationnelle, notre innovation et notre engagement 
                envers la satisfaction client.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">NOS VALEURS</h2>
            <motion.div 
              className="w-16 h-1 bg-primary mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-background p-6 rounded-lg text-center shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 166, 35, 0.2)" }}
                >
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
            Prêt à démarrer votre projet ?
          </motion.h2>
          <motion.p 
            className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis gratuit.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-secondary text-background px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous Contacter
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
