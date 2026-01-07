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
  description: string;
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
    description:
      "Estudio de desarrollo de videojuegos enfocado en Minecraft. Colaboré hasta ahora en tres proyectos como desarrollador de mods en Java.",
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
    description:
      "Consultora dónde desarrollé aplicaciones web fullstack, aplicaciones móviles con react native y le dí mantenimiento a algunas de las aplicaciones ya existentes",
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
