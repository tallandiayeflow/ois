"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="bg-background">
      <Navbar />
      
      <PageHeader 
        title="CONTACTEZ-NOUS"
        subtitle="Nous sommes à votre écoute"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-secondary mb-6">Nos Coordonnées</h2>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Address */}
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 166, 35, 0.2)" }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-secondary">Adresse</h3>
                    <p className="text-muted-foreground text-sm">
                      HLM Grand Médine, Lot N°97, 1er Étage<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 166, 35, 0.2)" }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-secondary">Téléphone</h3>
                    <a href="tel:+221776576044" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                      +221 77 657 60 44
                    </a>
                    <a href="tel:+221766942230" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                      +221 76 694 22 30
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 166, 35, 0.2)" }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-secondary">Email</h3>
                    <a href="mailto:contact@ois.sn" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                      contact@ois.sn
                    </a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div className="flex items-start gap-4" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 166, 35, 0.2)" }}
                  >
                    <Clock className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-secondary">Horaires</h3>
                    <p className="text-muted-foreground text-sm">
                      Lundi - Vendredi: 8h00 - 18h00<br />
                      Samedi: 9h00 - 13h00
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/221776576044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-lg mt-8 font-semibold hover:bg-[#128C7E] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsappIcon className="w-5 h-5" />
                Contacter via WhatsApp
              </motion.a>

              {/* Map */}
              <motion.div 
                className="mt-8 rounded-lg overflow-hidden h-64 bg-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.5447893024507!2d-17.4677!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzAwLjEiTiAxN8KwMjgnMDMuNyJX!5e0!3m2!1sfr!2ssn!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OIS Location"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-muted p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-secondary mb-2">Envoyez-nous un Message</h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                      >
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Message Envoyé !</h3>
                      <p className="text-muted-foreground mb-6">
                        Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({ name: "", email: "", phone: "", subject: "", service: "", message: "" })
                        }}
                        className="text-primary font-semibold hover:underline"
                      >
                        Envoyer un autre message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-shadow"
                            placeholder="Votre nom"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-shadow"
                            placeholder="votre@email.com"
                          />
                        </motion.div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                            Téléphone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-shadow"
                            placeholder="+221 XX XXX XX XX"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          <label htmlFor="service" className="block text-sm font-medium text-secondary mb-2">
                            Service concerné
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-shadow"
                          >
                            <option value="">Sélectionnez un service</option>
                            <option value="second-oeuvre">Second Œuvre</option>
                            <option value="conteneurs">Aménagement de Conteneurs</option>
                            <option value="ba13">Travaux BA13</option>
                            <option value="filtres">Filtres Industriels</option>
                            <option value="autre">Autre</option>
                          </select>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                          Sujet *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background transition-shadow"
                          placeholder="L'objet de votre message"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none transition-shadow"
                          placeholder="Décrivez votre projet ou votre demande..."
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Envoyer le Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl font-bold text-secondary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions Fréquentes
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: "Quels sont vos délais d'intervention ?",
                a: "Nous intervenons généralement sous 24-48h pour les urgences. Pour les projets planifiés, nous définissons ensemble un calendrier adapté à vos besoins."
              },
              {
                q: "Proposez-vous des devis gratuits ?",
                a: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous pour une étude personnalisée de votre projet."
              },
              {
                q: "Livrez-vous en dehors de Dakar ?",
                a: "Oui, nous livrons et intervenons sur tout le territoire sénégalais. Des frais de déplacement peuvent s'appliquer selon la distance."
              },
              {
                q: "Quels modes de paiement acceptez-vous ?",
                a: "Nous acceptons les virements bancaires, Orange Money, Wave, et le paiement en espèces pour les particuliers."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-background p-6 rounded-lg"
                variants={faqVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
              >
                <h3 className="font-bold text-secondary mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
