import Angular from "../icons/angular";
import DevIcon from "../icons/devIcon";
import FirebaseIcon from "../icons/FirebaseIcon";
import Github from "../icons/github";
import HTMLIcon from "../icons/HTMLIcon";
import JSIcon from "../icons/JSIcon";
import LaravelIcon from "../icons/LaravelIcon";
import MySQL from "../icons/mySql";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import ThreeJSIcon from "../icons/ThreeJSIcon";
import ViteIcon from "../icons/ViteIcon";

export default function AutoIcon({ name }: { name: string }) {
  switch (name) {
    case "firebase":
      return <FirebaseIcon />;
    case "github":
      return <Github className="h-20 w-20" />;
    case "html":
      return <HTMLIcon />;
    case "js":
      return <JSIcon />;
    case "laravel":
      return <LaravelIcon />;
    case "react":
      return <ReactIcon />;
    case "tailwind":
      return <TailwindIcon />;
    case "threejs":
      return <ThreeJSIcon />;
    case "vite":
      return <ViteIcon />;
    case "angular":
      return <Angular className="h-14 w-14 mx-2 first:ml-0" />;
    case "mySql":
      return <MySQL className="h-16 w-16 mx-2 first:ml-0" />;
    case "web":
      return <DevIcon className="w-10 h-10 text-bg" />;
    default:
      return;
  }
}
