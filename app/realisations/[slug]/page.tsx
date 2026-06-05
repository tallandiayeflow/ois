import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, MapPin, Building, Check, Phone, Mail } from "lucide-react"

const realisations = {
  "bureaux-dakar-port": {
    title: "Bureaux Conteneurisés - Port de Dakar",
    category: "Aménagement de Conteneurs",
    location: "Port Autonome de Dakar",
    year: "2024",
    duration: "6 semaines",
    client: "COSEC - Port Autonome de Dakar",
    description: "Installation de 10 bureaux modulaires conteneurisés pour les opérations administratives du port. Ce projet comprenait l'aménagement complet des espaces avec climatisation, électricité et réseau informatique.",
    challenge: "Le défi principal était d'installer les bureaux tout en maintenant les opérations portuaires actives. Nous avons travaillé en étroite coordination avec l'équipe du port pour minimiser les perturbations.",
    solution: "Nous avons pré-fabriqué tous les modules dans notre atelier avant de procéder à l'installation sur site en un temps record de 3 jours.",
    images: [
      "/images/realisations/interieur-conteneur-1.jpg",
      "/images/realisations/interieur-conteneur-2.jpg",
      "/images/realisations/interieur-conteneur-3.jpg"
    ],
    features: [
      "10 bureaux individuels climatisés",
      "Salle de réunion 20 personnes",
      "Installation électrique complète",
      "Réseau informatique intégré",
      "Isolation thermique renforcée",
      "Finitions haut de gamme"
    ]
  },
  "structure-metallique-thies": {
    title: "Structure Métallique - Thiès",
    category: "Structures Métalliques",
    location: "Zone Industrielle de Thiès",
    year: "2024",
    duration: "3 mois",
    client: "Entreprise Industrielle",
    description: "Construction d'un hangar industriel de 500m² avec charpente métallique. Le bâtiment comprend des bureaux administratifs, un espace de stockage et une zone de production.",
    challenge: "Le terrain présentait des contraintes géotechniques nécessitant une fondation spéciale. De plus, le client avait des exigences strictes en matière de délais.",
    solution: "Notre équipe d'ingénieurs a conçu une structure optimisée permettant de réduire les coûts tout en respectant toutes les normes de sécurité.",
    images: [
      "/images/realisations/batiment-modulaire-escalier.jpg",
      "/images/realisations/soudure-metallique.jpg",
      "/images/realisations/structure-beton-arme.jpg"
    ],
    features: [
      "Surface couverte de 500m²",
      "Hauteur sous ferme 8m",
      "Portée libre sans poteaux intermédiaires",
      "Bardage métallique isolé",
      "Portes sectionnelles industrielles",
      "Éclairage naturel par translucides"
    ]
  },
  "amenagement-ba13-hotel": {
    title: "Travaux BA13 - Hôtel Terrou-Bi",
    category: "Travaux BA13",
    location: "Corniche Ouest, Dakar",
    year: "2023",
    duration: "2 mois",
    client: "Hôtel Terrou-Bi 5*",
    description: "Rénovation complète des cloisons et faux plafonds de 50 chambres de l'hôtel. Le projet incluait également l'amélioration de l'isolation acoustique entre les chambres.",
    challenge: "Les travaux devaient être réalisés sans perturber le fonctionnement de l'hôtel, ce qui nécessitait un planning précis et une exécution minutieuse.",
    solution: "Nous avons travaillé par phases, rénovant les chambres par blocs tout en maintenant une capacité d'accueil suffisante pour l'hôtel.",
    images: [
      "/images/realisations/interieur-conteneur-2.jpg",
      "/images/realisations/interieur-conteneur-3.jpg",
      "/images/realisations/pose-vitrage.jpg"
    ],
    features: [
      "50 chambres rénovées",
      "Cloisons BA13 hydrofuges",
      "Faux plafonds décoratifs",
      "Isolation acoustique premium",
      "Finitions peinture incluses",
      "Travaux de nuit pour minimiser les nuisances"
    ]
  },
  "installation-filtres-sonatel": {
    title: "Filtres Industriels - SONATEL",
    category: "Filtres & Équipements",
    location: "Dakar et régions",
    year: "2024",
    duration: "Contrat annuel",
    client: "SONATEL - Orange Sénégal",
    description: "Contrat de fourniture et maintenance des systèmes de filtration pour les groupes électrogènes des sites télécoms. Ce partenariat couvre plus de 200 sites à travers le Sénégal.",
    challenge: "Assurer une disponibilité permanente des pièces et une intervention rapide sur tout le territoire national.",
    solution: "Nous avons mis en place un stock stratégique et des équipes d'intervention mobiles dans chaque région.",
    images: [
      "/images/realisations/installation-barrieres.jpg",
      "/images/realisations/cloture-metallique-port.jpg",
      "/images/realisations/equipe-chantier.jpg"
    ],
    features: [
      "Plus de 200 sites couverts",
      "Stock de pièces stratégique",
      "Intervention sous 24h",
      "Filtres d'origine certifiés",
      "Rapport de maintenance mensuel",
      "Formation du personnel technique"
    ]
  },
  "base-vie-kedougou": {
    title: "Base Vie - Kédougou",
    category: "Aménagement de Conteneurs",
    location: "Région de Kédougou",
    year: "2023",
    duration: "2 mois",
    client: "Société Minière",
    description: "Aménagement d'une base vie complète pour 100 personnes sur un site minier isolé. Le projet comprenait des logements, une cuisine, un réfectoire et des espaces de loisirs.",
    challenge: "L'accès difficile au site et les conditions climatiques difficiles ont représenté des défis logistiques importants.",
    solution: "Nous avons optimisé le transport en assemblant un maximum d'éléments en atelier et en planifiant les livraisons pendant la saison sèche.",
    images: [
      "/images/realisations/transformation-conteneurs.jpg",
      "/images/realisations/batiment-modulaire-escalier.jpg",
      "/images/realisations/interieur-conteneur-1.jpg"
    ],
    features: [
      "Capacité 100 personnes",
      "25 modules de logement",
      "Cuisine industrielle équipée",
      "Réfectoire 80 places",
      "Sanitaires et douches",
      "Groupe électrogène et citerne d'eau"
    ]
  },
  "escaliers-metalliques-immeuble": {
    title: "Escaliers Métalliques - Immeuble Keur Gorgui",
    category: "Structures Métalliques",
    location: "Keur Gorgui, Dakar",
    year: "2024",
    duration: "6 semaines",
    client: "Promoteur Immobilier",
    description: "Conception, fabrication et pose d'escaliers métalliques design pour un immeuble de bureaux de standing. Le projet comprenait également les garde-corps et la main courante.",
    challenge: "L'escalier devait s'intégrer parfaitement à l'architecture moderne du bâtiment tout en respectant les normes de sécurité strictes.",
    solution: "Notre bureau d'études a travaillé en collaboration avec l'architecte pour concevoir un escalier alliant esthétique et fonctionnalité.",
    images: [
      "/images/realisations/soudure-metallique.jpg",
      "/images/realisations/structure-beton-arme.jpg",
      "/images/realisations/cloture-metallique-port.jpg"
    ],
    features: [
      "Escalier hélicoïdal 4 niveaux",
      "Structure acier thermolaqué",
      "Marches en bois massif",
      "Garde-corps en verre trempé",
      "Main courante en inox",
      "Éclairage LED intégré"
    ]
  },
  "cloisons-clinique": {
    title: "Cloisons BA13 - Clinique Madeleine",
    category: "Travaux BA13",
    location: "Point E, Dakar",
    year: "2023",
    duration: "3 semaines",
    client: "Clinique de la Madeleine",
    description: "Installation de cloisons acoustiques haute performance pour le nouveau bloc opératoire de la clinique. Le projet nécessitait des normes d'hygiène et d'isolation très strictes.",
    challenge: "Les normes hospitalières imposaient des exigences très élevées en matière de finitions et de matériaux utilisés.",
    solution: "Nous avons utilisé des plaques BA13 hydrofuges et des bandes d'isolation spéciales pour garantir la conformité aux normes.",
    images: [
      "/images/realisations/interieur-conteneur-3.jpg",
      "/images/realisations/interieur-conteneur-1.jpg",
      "/images/realisations/pose-vitrage.jpg"
    ],
    features: [
      "Cloisons hydrofuges certifiées",
      "Isolation acoustique 52dB",
      "Finitions lisses sans aspérités",
      "Plafonds démontables",
      "Trappes de visite intégrées",
      "Conformité normes hospitalières"
    ]
  },
  "maintenance-filtres-css": {
    title: "Maintenance Filtres - CSS",
    category: "Filtres & Équipements",
    location: "Richard-Toll",
    year: "2024",
    duration: "Contrat pluriannuel",
    client: "Compagnie Sucrière Sénégalaise",
    description: "Contrat de maintenance préventive et fourniture de filtres pour les équipements industriels de la CSS. Le partenariat couvre les groupes électrogènes, compresseurs et machines agricoles.",
    challenge: "La période de campagne sucrière impose une disponibilité maximale des équipements, sans tolérance pour les pannes.",
    solution: "Nous avons mis en place un programme de maintenance préventive strict et un stock de sécurité pour garantir zéro temps d'arrêt.",
    images: [
      "/images/realisations/structure-beton-arme.jpg",
      "/images/realisations/equipe-chantier.jpg",
      "/images/realisations/installation-barrieres.jpg"
    ],
    features: [
      "Maintenance préventive planifiée",
      "Stock de filtres dédié sur site",
      "Interventions 24h/24",
      "Filtres CAT et Fleetguard d'origine",
      "Techniciens formés sur site",
      "Reporting mensuel détaillé"
    ]
  },
  "boutique-container-almadies": {
    title: "Boutique Container - Almadies",
    category: "Aménagement de Conteneurs",
    location: "Almadies, Dakar",
    year: "2024",
    duration: "4 semaines",
    client: "Entrepreneur Individuel",
    description: "Transformation d'un container 40 pieds en boutique de vêtements moderne et attractive. Le design contemporain attire l'attention des passants et maximise l'espace de vente.",
    challenge: "Créer un espace commercial attractif et fonctionnel dans un volume restreint, tout en respectant les contraintes thermiques.",
    solution: "Nous avons optimisé chaque centimètre carré et installé une isolation renforcée avec climatisation performante.",
    images: [
      "/images/realisations/pose-vitrage.jpg",
      "/images/realisations/transformation-conteneurs.jpg",
      "/images/realisations/interieur-conteneur-2.jpg"
    ],
    features: [
      "Container 40 pieds HC",
      "Façade vitrée panoramique",
      "Climatisation performante",
      "Éclairage LED design",
      "Cabine d'essayage intégrée",
      "Comptoir de caisse sur mesure"
    ]
  }
}

type RealisationKey = keyof typeof realisations

export async function generateStaticParams() {
  return Object.keys(realisations).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const realisation = realisations[slug as RealisationKey]
  
  if (!realisation) {
    return { title: "Réalisation non trouvée | OIS" }
  }
  
  return {
    title: `${realisation.title} | OIS - Optimum International Services`,
    description: realisation.description,
  }
}

export default async function RealisationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const realisation = realisations[slug as RealisationKey]
  
  if (!realisation) {
    notFound()
  }
  
  return (
    <main className="bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="relative h-64 md:h-96 bg-secondary">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${realisation.images[0]})` }}
          />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link 
                href="/realisations"
                className="inline-flex items-center gap-2 text-background/80 hover:text-primary mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux réalisations
              </Link>
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                {realisation.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-background mb-4">
                {realisation.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-background/80 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {realisation.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {realisation.year}
                </span>
                <span className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  {realisation.client}
                </span>
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
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-4">Description du Projet</h2>
                <p className="text-muted-foreground leading-relaxed">{realisation.description}</p>
              </div>
              
              {/* Challenge & Solution */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-secondary mb-3">Le Défi</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{realisation.challenge}</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-3">Notre Solution</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{realisation.solution}</p>
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6">Galerie Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {realisation.images.map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${realisation.title} - Photo ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info */}
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Informations Projet</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase">Client</span>
                    <p className="font-medium text-secondary">{realisation.client}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase">Localisation</span>
                    <p className="font-medium text-secondary">{realisation.location}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase">Année</span>
                    <p className="font-medium text-secondary">{realisation.year}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase">Durée</span>
                    <p className="font-medium text-secondary">{realisation.duration}</p>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Caractéristiques</h3>
                <ul className="space-y-3">
                  {realisation.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Card */}
              <div className="bg-primary p-6 rounded-lg text-primary-foreground">
                <h3 className="text-lg font-bold mb-4">Un projet similaire ?</h3>
                <p className="text-sm text-primary-foreground/80 mb-6">
                  Contactez-nous pour discuter de votre projet.
                </p>
                <div className="space-y-3 mb-6">
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
                  className="block w-full bg-secondary text-background text-center py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Demander un Devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Autres Réalisations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(realisations)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, r]) => (
                <Link 
                  key={key} 
                  href={`/realisations/${key}`}
                  className="bg-background rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40">
                    <Image
                      src={r.images[0]}
                      alt={r.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">{r.category}</span>
                    <h3 className="font-bold text-secondary mt-1">{r.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
