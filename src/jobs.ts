//Eufonia Studio
import eufonia from "./assets/eufonia.webp";
import eufoniaBG from "./assets/eufonia-bg.png";
import eufoniaLogo from "./assets/eufonia-logo.svg";

//GM store
import gms from "./assets/gms.webp";
import gmsBG from "./assets/gms-bg.png";
import gmsLogo from "./assets/gms-logo.svg";

export interface Job {
  name: string;
  description: {
    es: string;
    en: string;
  };
  category: string;
  technologies: string;
  languages: string;
  demo: string;
  image: ImageMetadata;
  logo: ImageMetadata;
  background: ImageMetadata;
  startColor: string;
  endColor: string;
}

export const jobs: Job[] = [
  {
    name: "Eufonia Studio",
    description: {
      es: "Estudio de desarrollo de videojuegos enfocado en Minecraft. Colaboré hasta ahora en tres proyectos como desarrollador de mods en Java.",
      en: "Video game development studio focused on Minecraft. I have collaborated so far on three projects as a Java mod developer."
    },
    category: "web",
    technologies: "java gradle fabric",
    languages: "java",
    demo: "https://eufonia.studio/",
    image: eufonia,
    logo: eufoniaLogo,
    background: eufoniaBG,
    startColor: "#bcfe47",
    endColor: "#05cc2a",
  },
  {
    name: "GM Store",
    description: {
      es: "Consultora dónde desarrollé aplicaciones web fullstack, aplicaciones móviles con react native y le dí mantenimiento a algunas de las aplicaciones ya existentes",
      en: "Consultancy where I developed fullstack web applications, mobile applications with react native and maintained some of the existing applications."
    },
    category: "web",
    technologies: "react angular laravel mySql",
    languages: "js php",
    demo: "https://gmstore.com.mx/",
    image: gms,
    logo: gmsLogo,
    background: gmsBG,
    startColor: "#000000",
    endColor: "#0092BE",
  },
];
