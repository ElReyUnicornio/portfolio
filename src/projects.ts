import solidos from "./assets/solidos.png";
import menu from "./assets/menu.png";
//import gaibu from "./assets/Gaibu.png";
import smartSchool from "./assets/smartSchool.png";
import webones from "./assets/webones.png";
import hardcorez from "./assets/hardcorez.png";
import mitologias from "./assets/mitologias.png";
import salonBliss from "./assets/salonBliss.png";

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
    name: "Mitologías RPG",
    description:
      "Serie de Minecraft estilo MMO RPG centrado en el farmeo y el combate. Participé desarrollando muchas mecánicas y sistemas para el gameplay de la serie.",
    category: "gamedev",
    technologies: "java gradle fabric",
    languages: "java",
    demo: "https://www.youtube.com/watch?v=Z9_607HEe8U",
    image: mitologias,
    startColor: "#372C30",
    endColor: "#DD4740",
  },
  {
    name: "Hardcore Z",
    description:
      "Serie de Minecraft donde tenías que sobrevivir a una invasión zombie. Ayudé en el desarrollo de diversos objetos y algunas mecánicas principales para el gameplay.",
    category: "gamedev",
    technologies: "java gradle fabric",
    languages: "java",
    demo: "https://www.youtube.com/watch?v=iw2otpv6rDQ",
    image: hardcorez,
    startColor: "#B42319",
    endColor: "#E8A71A",
  },
  {
    name: "Webones Show",
    description:
      "Serie de Minecraft CTM compuesta por cuatro dimensiones donde había que recolectar cuatro huevos. Participé desarrollando algunos de los minijuegos diarios y objetos para la serie.",
    category: "gamedev",
    technologies: "java gradle fabric",
    languages: "java",
    demo: "https://www.youtube.com/watch?v=RlQ6KALfnr8",
    image: webones,
    startColor: "#E2E151",
    endColor: "#E89879",
  },
  {
    name: "SmartSchool",
    description: "Un sistema de control escolar para docentes y alumnos donde ayudé a mantener el código existente y posteriormente a pasar el sistema a móviles con react native.",
    category: "web",
    technologies: "angular react laravel mysql",
    languages: "javascript php",
    demo: "https://smartschool.com.mx/",
    image: smartSchool,
    startColor: "#DB1333",
    endColor: "#0A3468"
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
    startColor: "#998100",
    endColor: "#FFD700",
  },
  {
    name: "Salón bliss",
    description: "Servicio de agenda de citas para salones de belleza donde hice la base del proyecto.",
    category: "web",
    technologies: "laravel",
    languages: "php",
    demo: "https://salon.gmstore.com.mx/",
    image: salonBliss,
    startColor: "#f04adf",
    endColor: "#D42875",
  },
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
