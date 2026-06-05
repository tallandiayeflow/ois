import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Nos Réalisations | OIS - Optimum International Services",
  description: "Découvrez nos projets réalisés: aménagement de conteneurs, structures métalliques, travaux BA13 et installations industrielles au Sénégal.",
}

const bloc1 = [
  {
    id: "bureaux-dakar-port",
    title: "Bureaux Conteneurisés",
    image: "/images/realisations/interieur-conteneur-1.jpg",
    year: "2024"
  },
  {
    id: "structure-metallique-thies",
    title: "Structure Métallique",
    image: "/images/realisations/batiment-modulaire-escalier.jpg",
    year: "2024"
  },
  {
    id: "amenagement-ba13-hotel",
    title: "Travaux BA13",
    image: "/images/realisations/interieur-conteneur-2.jpg",
    year: "2023"
  },
  {
    id: "installation-filtres-sonatel",
    title: "Filtres Industriels",
    image: "/images/realisations/installation-barrieres.jpg",
    year: "2024"
  },
]

const plafonds = [
  "/images/realisations/plafond/plafond-led-suspensions.jpg",
  "/images/realisations/plafond/plafond-cadre-sombre.jpg",
  "/images/realisations/plafond/plafond-led-bleu-lustre.jpg",
  "/images/realisations/plafond/plafond-led-orange.jpg",
  "/images/realisations/plafond/plafond-niches-murales.jpg",
  "/images/realisations/plafond/plafond-led-or.jpg",
  "/images/realisations/plafond/plafond-led-creme-lustre.jpg",
  "/images/realisations/plafond/plafond-led-marine.jpg",
  "/images/realisations/plafond/plafond-multi-carres.jpg",
  "/images/realisations/plafond/plafond-led-violet.jpg",
  "/images/realisations/plafond/plafond-led-blanc-etage.jpg",
  "/images/realisations/plafond/plafond-led-classique.jpg",
  "/images/realisations/plafond/plafond-led-suspensions-2.jpg",
  "/images/realisations/plafond/plafond-led-rose.jpg",
  "/images/realisations/plafond/plafond-led-bleu-simple.jpg",
  "/images/realisations/plafond/plafond-led-blanc-multi.jpg",
  "/images/realisations/plafond/plafond-led-angulaire.jpg",
  "/images/realisations/plafond/plafond-led-brun-lustre.jpg",
  "/images/realisations/plafond/plafond-led-labyrinthe.jpg",
  "/images/realisations/plafond/plafond-led-losange.jpg",
  "/images/realisations/plafond/plafond-led-grille.jpg",
  "/images/realisations/plafond/plafond-led-grille-2.jpg",
]

const bloc2 = [
  {
    id: "base-vie-kedougou",
    title: "Base Vie",
    image: "/images/realisations/transformation-conteneurs.jpg",
    year: "2023"
  },
  {
    id: "escaliers-metalliques-immeuble",
    title: "Escaliers Métalliques",
    image: "/images/realisations/soudure-metallique.jpg",
    year: "2024"
  },
  {
    id: "cloisons-clinique",
    title: "Cloisons BA13",
    image: "/images/realisations/interieur-conteneur-3.jpg",
    year: "2023"
  },
  {
    id: "maintenance-filtres-css",
    title: "Maintenance Filtres",
    image: "/images/realisations/structure-beton-arme.jpg",
    year: "2024"
  },
]

function ProjectCard({ project }: { project: typeof bloc1[0] }) {
  return (
    <div className="group overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="pt-3 pb-1">
        <h3 className="text-sm font-semibold text-secondary">{project.title}</h3>
      </div>
    </div>
  )
}

export default function RealisationsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="relative h-64 md:h-80 bg-secondary">
          <div className="absolute inset-0 bg-[url('/images/realisations/batiment-modulaire-escalier.jpg')] bg-cover bg-center opacity-30" />
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

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Bloc 1 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bloc1.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="border-t border-border" />

          {/* Bloc 2 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bloc2.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="border-t border-border" />

          {/* Faux Plafonds */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {plafonds.map((src) => (
              <div key={src} className="group overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt="Faux plafond LED"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
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
