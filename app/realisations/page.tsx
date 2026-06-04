import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Réalisations | OIS - Optimum International Services",
  description: "Découvrez nos projets réalisés: aménagement de conteneurs, structures métalliques, travaux BA13 et installations industrielles au Sénégal.",
}

const categories = [
  { id: "all", label: "Tous" },
  { id: "conteneurs", label: "Aménagement de Conteneurs" },
  { id: "metalliques", label: "Structures Métalliques" },
  { id: "ba13", label: "Travaux BA13" },
  { id: "industrielles", label: "Installations Industrielles" },
  { id: "filtres", label: "Filtres & Équipements" },
]

const realisations = [
  {
    id: "bureaux-dakar-port",
    title: "Bureaux Conteneurisés - Port de Dakar",
    category: "conteneurs",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    description: "Installation de 10 bureaux modulaires pour une entreprise portuaire.",
    year: "2024"
  },
  {
    id: "structure-metallique-thies",
    title: "Structure Métallique - Thiès",
    category: "metalliques",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    description: "Construction d'un hangar industriel de 500m².",
    year: "2024"
  },
  {
    id: "amenagement-ba13-hotel",
    title: "Travaux BA13 - Hôtel Terrou-Bi",
    category: "ba13",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    description: "Rénovation complète des cloisons et faux plafonds.",
    year: "2023"
  },
  {
    id: "installation-filtres-sonatel",
    title: "Filtres Industriels - SONATEL",
    category: "filtres",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    description: "Fourniture et installation de systèmes de filtration.",
    year: "2024"
  },
  {
    id: "base-vie-kedougou",
    title: "Base Vie - Kédougou",
    category: "conteneurs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Aménagement d'une base vie complète pour chantier minier.",
    year: "2023"
  },
  {
    id: "escaliers-metalliques-immeuble",
    title: "Escaliers Métalliques - Immeuble Keur Gorgui",
    category: "metalliques",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    description: "Fabrication et pose d'escaliers métalliques design.",
    year: "2024"
  },
  {
    id: "cloisons-clinique",
    title: "Cloisons BA13 - Clinique Madeleine",
    category: "ba13",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    description: "Installation de cloisons acoustiques pour bloc opératoire.",
    year: "2023"
  },
  {
    id: "maintenance-filtres-css",
    title: "Maintenance Filtres - CSS",
    category: "filtres",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    description: "Contrat de maintenance et fourniture de filtres.",
    year: "2024"
  },
  {
    id: "boutique-container-almadies",
    title: "Boutique Container - Almadies",
    category: "conteneurs",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    description: "Transformation d'un container en boutique moderne.",
    year: "2024"
  }
]

export default function RealisationsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="relative h-64 md:h-80 bg-secondary">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center opacity-30" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-background mb-4">
                NOS <span className="text-primary">RÉALISATIONS</span>
              </h1>
              <p className="text-background/80 text-lg">Découvrez nos projets réalisés avec excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  category.id === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((project) => (
              <Link
                key={project.id}
                href={`/realisations/${project.id}`}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                  <h3 className="text-lg font-bold text-secondary mt-1 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Voir le projet
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-background px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
          >
            Demander un Devis
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
