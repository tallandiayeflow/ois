import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Brands from "@/components/brands"
import Realisations from "@/components/realisations"
import WhyChooseUs from "@/components/why-choose-us"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brands />
      <Realisations />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
