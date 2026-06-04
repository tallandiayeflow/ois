import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Check, Phone, Mail, Building2, Container, Layers, Filter } from "lucide-react"

const services = {
  "second-oeuvre": {
    icon: Building2,
    title: "Second Œuvre",
    subtitle: "Travaux de finition et d'aménagement intérieur",
    description: "OIS vous accompagne dans tous vos travaux de second œuvre. Notre équipe de professionnels qualifiés réalise des travaux de finition de haute qualité pour tous types de bâtiments, qu'il s'agisse de constructions neuves ou de rénovations.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    mainImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    features: [
      { title: "Confection aluminium", description: "Fabrication et installation de menuiseries aluminium sur mesure." },
      { title: "Construction métallique", description: "Structures métalliques, charpentes et ossatures." },
      { title: "Menuiserie bois", description: "Portes, fenêtres, placards et aménagements en bois." },
      { title: "Escaliers métalliques", description: "Conception et installation d'escaliers sur mesure." },
      { title: "Garde-corps", description: "Garde-corps en aluminium, inox ou fer forgé." },
      { title: "Portails et portes métalliques", description: "Portails coulissants, battants et portes sécurisées." }
    ],
    benefits: [
      "Équipe qualifiée et expérimentée",
      "Matériaux de qualité supérieure",
      "Respect des délais",
      "Garantie sur tous nos travaux",
      "Devis gratuit et détaillé"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80"
    ]
  },
  "amenagement-conteneurs": {
    icon: Container,
    title: "Aménagement de Conteneurs",
    subtitle: "Transformation de conteneurs en espaces fonctionnels",
    description: "OIS est spécialisé dans la transformation de conteneurs maritimes en espaces de vie et de travail modernes et fonctionnels. Nous proposons des solutions clé en main adaptées à vos besoins.",
    heroImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80",
    mainImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    features: [
      { title: "Bureaux conteneurisés", description: "Espaces de travail professionnels et confortables." },
      { title: "Bases vie", description: "Solutions d'hébergement pour chantiers et sites isolés." },
      { title: "Logements modulaires", description: "Habitations temporaires ou permanentes." },
      { title: "Boutiques et magasins", description: "Points de vente modernes et attractifs." },
      { title: "Espaces de travail sur mesure", description: "Ateliers, entrepôts et locaux techniques." }
    ],
    benefits: [
      "Solution rapide et économique",
      "Personnalisation complète",
      "Mobilité et flexibilité",
      "Durabilité et résistance",
      "Installation rapide"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80"
    ]
  },
  "travaux-ba13": {
    icon: Layers,
    title: "Travaux BA13",
    subtitle: "Cloisons et faux plafonds en plaques de plâtre",
    description: "OIS réalise tous types de travaux en plaques de plâtre BA13. Nos techniciens expérimentés maîtrisent parfaitement les techniques de pose pour vous garantir un résultat impeccable.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
    mainImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: [
      { title: "Cloisons BA13", description: "Création et séparation d'espaces intérieurs." },
      { title: "Faux plafonds", description: "Plafonds suspendus et décoratifs." },
      { title: "Isolation thermique", description: "Amélioration du confort thermique de vos locaux." },
      { title: "Isolation acoustique", description: "Réduction des nuisances sonores." },
      { title: "Finitions intérieures", description: "Joints, enduits et peinture." }
    ],
    benefits: [
      "Finitions soignées",
      "Matériaux certifiés",
      "Travail propre et organisé",
      "Isolation performante",
      "Prix compétitifs"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
    ]
  },
  "filtres-industriels": {
    icon: Filter,
    title: "Filtres Industriels & Pièces d'Origine",
    subtitle: "Fourniture de filtres et pièces de rechange",
    description: "OIS est votre partenaire de confiance pour la fourniture de filtres industriels et pièces d'origine pour tous types d'équipements. Nous travaillons avec les plus grandes marques du secteur.",
    heroImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
    mainImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    features: [
      { title: "Filtres à air", description: "Filtration de l'air pour moteurs et compresseurs." },
      { title: "Filtres à huile", description: "Protection optimale de vos équipements." },
      { title: "Filtres à carburant", description: "Filtration du gasoil et de l'essence." },
      { title: "Filtres hydrauliques", description: "Pour systèmes hydrauliques industriels." },
      { title: "Pièces de maintenance", description: "Pièces détachées d'origine et compatibles." }
    ],
    benefits: [
      "Pièces d'origine garanties",
      "Large stock disponible",
      "Prix compétitifs",
      "Livraison rapide",
      "Conseil technique"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80"
    ]
  }
}

type ServiceKey = keyof typeof services

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as ServiceKey]
  
  if (!service) {
    return { title: "Service non trouvé | OIS" }
  }
  
  return {
    title: `${service.title} | OIS - Optimum International Services`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug as ServiceKey]
  
  if (!service) {
    notFound()
  }
  
  const Icon = service.icon
  
  return (
    <main className="bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="relative h-64 md:h-96 bg-secondary">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-background/80 hover:text-primary mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux services
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-background">
                    {service.title}
                  </h1>
                  <p className="text-background/80">{service.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              
              {/* Features */}
              <h2 className="text-2xl font-bold text-secondary mb-6">Nos Prestations</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-bold text-secondary mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Gallery */}
              <h2 className="text-2xl font-bold text-secondary mb-6">Galerie</h2>
              <div className="grid grid-cols-3 gap-4 mb-12">
                {service.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${service.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Benefits Card */}
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Card */}
              <div className="bg-primary p-6 rounded-lg text-primary-foreground">
                <h3 className="text-lg font-bold mb-4">Demandez un Devis</h3>
                <p className="text-sm text-primary-foreground/80 mb-6">
                  Contactez-nous pour obtenir un devis gratuit et personnalisé.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+221776576044"
                    className="flex items-center gap-3 text-sm hover:text-background transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +221 77 657 60 44
                  </a>
                  <a 
                    href="mailto:contact@ois.sn"
                    className="flex items-center gap-3 text-sm hover:text-background transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    contact@ois.sn
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-secondary text-background text-center py-3 rounded-md font-semibold mt-6 hover:bg-secondary/90 transition-colors"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Autres Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(services)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, s]) => {
                const ServiceIcon = s.icon
                return (
                  <Link 
                    key={key} 
                    href={`/services/${key}`}
                    className="bg-background p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <ServiceIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.subtitle}</p>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
