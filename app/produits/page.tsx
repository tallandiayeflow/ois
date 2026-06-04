import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, Filter, Phone, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Produits | OIS - Optimum International Services",
  description: "Découvrez notre gamme de filtres industriels et pièces d'origine: CAT, Perkins, Fleetguard, Donaldson, Cummins. Livraison au Sénégal.",
}

const brands = [
  { id: "all", name: "Toutes les marques", logo: null },
  { id: "cat", name: "CAT", logo: "https://upload.wikimedia.org/wikipedia/en/c/c0/Caterpillar_logo.svg" },
  { id: "perkins", name: "Perkins", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Perkins_Engines_logo.svg" },
  { id: "fleetguard", name: "Fleetguard", logo: null },
  { id: "donaldson", name: "Donaldson", logo: null },
  { id: "cummins", name: "Cummins", logo: null },
]

const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "air", name: "Filtres à air" },
  { id: "huile", name: "Filtres à huile" },
  { id: "carburant", name: "Filtres à carburant" },
  { id: "hydraulique", name: "Filtres hydrauliques" },
  { id: "separateur", name: "Séparateurs eau/carburant" },
  { id: "pieces", name: "Pièces de maintenance" },
]

const products = [
  {
    id: "cat-1r-0751",
    name: "Filtre à Huile CAT 1R-0751",
    brand: "cat",
    category: "huile",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "1R-0751",
    compatibility: "Moteurs CAT C7, C9, C13",
    inStock: true
  },
  {
    id: "cat-1r-0750",
    name: "Filtre à Carburant CAT 1R-0750",
    brand: "cat",
    category: "carburant",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "1R-0750",
    compatibility: "Moteurs CAT 3406, 3408",
    inStock: true
  },
  {
    id: "cat-1r-0749",
    name: "Filtre à Air CAT 1R-0749",
    brand: "cat",
    category: "air",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "1R-0749",
    compatibility: "Pelles CAT 320, 330",
    inStock: true
  },
  {
    id: "perkins-26560145",
    name: "Filtre à Huile Perkins 26560145",
    brand: "perkins",
    category: "huile",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "26560145",
    compatibility: "Moteurs Perkins 1100, 1104",
    inStock: true
  },
  {
    id: "perkins-26561117",
    name: "Filtre à Carburant Perkins 26561117",
    brand: "perkins",
    category: "carburant",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "26561117",
    compatibility: "Moteurs Perkins 400 Series",
    inStock: false
  },
  {
    id: "fleetguard-lf9009",
    name: "Filtre à Huile Fleetguard LF9009",
    brand: "fleetguard",
    category: "huile",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "LF9009",
    compatibility: "Cummins ISX, ISM",
    inStock: true
  },
  {
    id: "fleetguard-ff5052",
    name: "Filtre à Carburant Fleetguard FF5052",
    brand: "fleetguard",
    category: "carburant",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "FF5052",
    compatibility: "Cummins B Series",
    inStock: true
  },
  {
    id: "fleetguard-fs1000",
    name: "Séparateur Eau/Carburant Fleetguard FS1000",
    brand: "fleetguard",
    category: "separateur",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "FS1000",
    compatibility: "Applications universelles",
    inStock: true
  },
  {
    id: "donaldson-p550625",
    name: "Filtre à Huile Donaldson P550625",
    brand: "donaldson",
    category: "huile",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "P550625",
    compatibility: "CAT, Cummins, Detroit",
    inStock: true
  },
  {
    id: "donaldson-p551807",
    name: "Filtre Hydraulique Donaldson P551807",
    brand: "donaldson",
    category: "hydraulique",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "P551807",
    compatibility: "Systèmes hydrauliques industriels",
    inStock: true
  },
  {
    id: "cummins-3931063",
    name: "Filtre à Air Cummins 3931063",
    brand: "cummins",
    category: "air",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "3931063",
    compatibility: "Cummins 6BT, 6CT",
    inStock: true
  },
  {
    id: "cummins-3937736",
    name: "Filtre à Huile Cummins 3937736",
    brand: "cummins",
    category: "huile",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80",
    reference: "3937736",
    compatibility: "Cummins ISB, QSB",
    inStock: false
  },
]

export default function ProduitsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="relative h-64 md:h-80 bg-secondary">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80')] bg-cover bg-center opacity-30" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-background mb-4">
                NOS <span className="text-primary">PRODUITS</span>
              </h1>
              <p className="text-background/80 text-lg">Filtres industriels et pièces d&apos;origine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-bold text-secondary mb-6">MARQUES DISPONIBLES</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="bg-[#FFCD00] px-4 py-2 rounded">
              <span className="text-xl font-bold text-secondary">CAT</span>
            </div>
            <div className="bg-[#003DA5] px-4 py-2 rounded">
              <span className="text-lg font-bold text-background">Perkins</span>
            </div>
            <div className="text-primary text-xl font-bold italic">Fleetguard</div>
            <div className="text-[#003DA5] text-xl font-bold">Donaldson.</div>
            <div className="text-[#C8102E] text-xl font-bold">CUMMINS</div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher par référence ou nom..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                Filtrer:
              </div>
              {categories.slice(0, 5).map((category) => (
                <button
                  key={category.id}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    category.id === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Brand Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold ${
                    product.brand === "cat" ? "bg-[#FFCD00] text-secondary" :
                    product.brand === "perkins" ? "bg-[#003DA5] text-background" :
                    product.brand === "cummins" ? "bg-[#C8102E] text-background" :
                    "bg-primary text-primary-foreground"
                  }`}>
                    {product.brand.toUpperCase()}
                  </div>
                  {/* Stock Badge */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${
                    product.inStock 
                      ? "bg-green-500 text-white" 
                      : "bg-red-500 text-white"
                  }`}>
                    {product.inStock ? "En stock" : "Sur commande"}
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-xs text-primary font-medium mb-1">Réf: {product.reference}</p>
                  <h3 className="font-bold text-secondary text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{product.compatibility}</p>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/221776576044?text=Bonjour, je suis intéressé par le produit: ${product.name} (Réf: ${product.reference})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Commander
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Pièces d&apos;Origine</h3>
              <p className="text-sm text-muted-foreground">
                Tous nos filtres et pièces sont certifiés d&apos;origine constructeur.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Livraison Rapide</h3>
              <p className="text-sm text-muted-foreground">
                Livraison sur tout le Sénégal en 24-48h pour les produits en stock.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Support Technique</h3>
              <p className="text-sm text-muted-foreground">
                Notre équipe vous accompagne pour trouver la bonne référence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Vous ne trouvez pas votre référence ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous avec la référence de votre équipement. Nous pouvons commander toute 
            pièce ou filtre non listé sur notre site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221776576044"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-background px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler: 77 657 60 44
            </a>
            <Link
              href="/contact"
              className="inline-block bg-background text-secondary px-8 py-3 rounded-md font-semibold hover:bg-background/90 transition-colors"
            >
              Demande Spéciale
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
