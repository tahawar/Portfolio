import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
