import gms from "./assets/gms.png";
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
    name: "GM Store",
    description:
      "Consultora dónde desarrollé aplicaciones web fullstack, aplicaciones móviles con react native y le dí mantenimiento a algunas de las aplicaciones ya existentes",
    category: "web",
    technologies: "react angular tailwind laravel mySql",
    languages: "js php",
    demo: "https://gmstore.com.mx/",
    image: gms,
    logo: gmsLogo,
    background: gmsBG,
    startColor: "#000000",
    endColor: "#0092BE",
  },
];
