import {
  Navbar,
  Hero,
  Features,
  Products,
  About,
  Testimonials,
  CTA,
  Contact,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
