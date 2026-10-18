import solidos from "./assets/solidos.webp";
import menu from "./assets/menu.webp";
//import gaibu from "./assets/Gaibu.png";
import smartSchool from "./assets/smartSchool.webp";
import webones from "./assets/webones.webp";
import hardcorez from "./assets/hardcorez.webp";
import mitologias from "./assets/mitologias.webp";

export interface Project {
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
  startColor: string;
  endColor: string;
}

export const projects: Project[] = [
  {
    name: "Mitologías RPG",
    description: {
      es: "Serie de Minecraft estilo MMO RPG centrado en el farmeo y el combate. Participé desarrollando muchas mecánicas y sistemas para el gameplay de la serie.",
      en: "Minecraft series MMO RPG style focused on farming and combat. I participated in developing many mechanics and systems for the gameplay of the series."
    },
    category: "gamedev",
    technologies: "java gradle fabric",
    languages: "java ",
    demo: "https://www.youtube.com/watch?v=Z9_607HEe8U",
    image: mitologias,
    startColor: "#372C30",
    endColor: "#DD4740",
  },
  {
    name: "Hardcore Z",
    description: {
      es: "Serie de Minecraft donde tenías que sobrevivir a una invasión zombie. Ayudé en el desarrollo de diversos objetos y algunas mecánicas principales para el gameplay.",
      en: "Minecraft series where you had to survive a zombie invasion. I helped in the development of various objects and some main mechanics for the gameplay."
    },
    category: "gamedev",
    technologies: "java gradle fabric",
    languages: "java ",
    demo: "https://www.youtube.com/watch?v=iw2otpv6rDQ",
    image: hardcorez,
    startColor: "#B42319",
    endColor: "#E8A71A",
  },
  {
    name: "Webones Show",
    description: {
      es: "Serie de Minecraft CTM compuesta por cuatro dimensiones donde había que recolectar cuatro huevos. Participé desarrollando algunos de los minijuegos diarios y objetos para la serie.",
      en: "Minecraft CTM series composed of four dimensions where four eggs had to be collected. I participated in developing some of the daily minigames and objects for the series."
    },
    category: "gamedev",
    technologies: "java gradle fabric",
    languages: "java ",
    demo: "https://www.youtube.com/watch?v=RlQ6KALfnr8",
    image: webones,
    startColor: "#E2E151",
    endColor: "#E89879",
  },
  {
    name: "SmartSchool",
    description: {
      es: "Un sistema de control escolar para docentes y alumnos donde ayudé a mantener el código existente y posteriormente a pasar el sistema a móviles con react native.",
      en: "A school control system for teachers and students where I helped maintain the existing code and later move the system to mobile with React Native."
    },
    category: "web",
    technologies: "angular react laravel mySql",
    languages: "javascript php",
    demo: "https://smartschool.com.mx/",
    image: smartSchool,
    startColor: "#DB1333",
    endColor: "#0A3468"
  },
  {
    name: "Menú Durango",
    description: {
      es: "Un servicio de menú digital dinámico para restaurantes, incluye subida de contenido y un punto de venta.",
      en: "A dynamic digital menu service for restaurants, includes content upload and a point of sale."
    },
    category: "web",
    technologies: "react tailwind laravel mySql",
    languages: "javascript php",
    demo: "https://menudgo.com/",
    image: menu,
    startColor: "#998100",
    endColor: "#FFD700",
  },
  {
    name: "Sólidos en revolución",
    description: {
      es: "Aplicación web que permite visualizar la revolución de sólidos en 3D.",
      en: "Web application that allows visualizing the revolution of solids in 3D."
    },
    category: "web",
    technologies: "html tailwind js vite",
    languages: "javascript",
    demo: "https://solidos-en-revolucion.alejandrosoto.site/",
    image: solidos,
    startColor: "#9333EA",
    endColor: "#3B82F6",
  },
  // {
  //   name: "Gaibu",
  //   description:
  //     "Una tienda de libretas personalizadas donde puedes crear y ver tus propios diseños en tiempo real.",
  //   category: "web",
  //   technologies: "react tailwind firebase threejs",
  //   languages: "javaScript",
  //   demo: "https://gaibu-36d61.web.app/",
  //   image: gaibu,
  //   startColor: "#7745ED",
  //   endColor: "#5411EB",
  // },
];
