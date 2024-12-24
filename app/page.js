import dynamic from 'next/dynamic';
// Charger dynamiquement les composants avec ssr: false pour les bibliothèques ou composants manipulant le DOM
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

// Charger lottie-react dynamiquement pour éviter l'erreur côté serveur
const LottieReact = dynamic(() => import('lottie-react'), { ssr: false });

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
};
