import solidos from "./assets/solidos.png";
import menu from "./assets/menu.png";
import gaibu from "./assets/Gaibu.png";

export interface Project {
  name: string;
  description: string;
  category: string;
  technologies: string;
  languages: string;
  demo: string;
  image: ImageMetadata;
  startColor: string;
  endColor: string;
}

export const projects: Project[] = [
  {
    name: "Sólidos en revolución",
    description:
      "Aplicación web que permite visualizar la revolución de sólidos en 3D.",
    category: "web",
    technologies: "html tailwind js vite",
    languages: "javaScript",
    demo: "https://solidos-en-revolucion.alejandrosoto.site/",
    image: solidos,
    startColor: "#9333EA",
    endColor: "#3B82F6",
  },
  {
    name: "Menú Durango",
    description:
      "Un servicio de menú digital dinámico para restaurantes, incluye subida de contenido y un punto de venta.",
    category: "web",
    technologies: "react tailwind laravel mysql",
    languages: "javaScript php",
    demo: "https://menudgo.com/",
    image: menu,
    startColor: "#FFD700",
    endColor: "#998100",
  },
  {
    name: "Gaibu",
    description:
      "Una tienda de libretas personalizadas donde puedes crear y ver tus propios diseños en tiempo real.",
    category: "web",
    technologies: "react tailwind firebase threejs",
    languages: "javaScript",
    demo: "https://gaibu-36d61.web.app/",
    image: gaibu,
    startColor: "#7745ED",
    endColor: "#5411EB",
  },
];
