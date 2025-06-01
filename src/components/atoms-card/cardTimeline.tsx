import Tooltip from "../atoms/tooltip";
import AboutIcon from "../icons/aboutIcon";
import DevIcon from "../icons/devIcon";
import JobIcon from "../icons/jobIcon";

export default function CardTimeline() {
  return (
    <ul className="hidden md:flex h-full flex-col justify-center items-end mr-1 relative">
      <li className="relative m-0 md:m-1">
        <a href="#Proyectos" className="peer group">
          <div className="p-px md:p-[2px] bg-card-accent rounded hover:bg-gradient-to-br group-hover:from-gradient-vex-green group-hover:to-gradient-vex-purple transition-all duration-100 m-1 mr-2 md:m-2 md:mr-5 hover:scale-125">
            <div className="w-5 h-5 md:w-7 md:h-7  flex justify-center items-center rounded  bg-card-bg">
              <DevIcon className="w-3 md:w-5 text-card-accent" />
              <Tooltip>Proyectos</Tooltip>
            </div>
          </div>
        </a>
        <div className="absolute w-1 h-2 md:w-2 md:h-4 bg-card-accent top-1/2 -translate-y-1/2 left-full peer-hover:scale-y-150 peer-hover:bg-gradient-to-b peer-hover:from-gradient-vex-green peer-hover:to-gradient-vex-purple transition-all" />
      </li>
      <li className="relative m-0 md:m-1">
        <a href="#Trabajos" className="peer group">
          <div className="p-px md:p-[2px] bg-card-accent rounded hover:bg-gradient-to-br group-hover:from-gradient-vex-green group-hover:to-gradient-vex-purple transition-all duration-100 m-1 mr-2 md:m-2 md:mr-5 hover:scale-125">
            <div className="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center rounded bg-card-bg">
              <JobIcon className="w-3 md:w-5 text-card-accent" />
              <Tooltip>Experiencia</Tooltip>
            </div>
          </div>
        </a>
        <div className="absolute w-1 h-2 md:w-2 md:h-4 bg-card-accent top-1/2 -translate-y-1/2 left-full peer-hover:scale-y-150 peer-hover:bg-gradient-to-b peer-hover:from-gradient-vex-green peer-hover:to-gradient-vex-purple transition-all" />
      </li>
      <li className="relative m-0 md:m-1">
        <a href="#Hobbies" className="peer group">
          <div className="p-px md:p-[2px] bg-card-accent rounded hover:bg-gradient-to-br group-hover:from-gradient-vex-green group-hover:to-gradient-vex-purple transition-all duration-100 m-1 mr-2 md:m-2 md:mr-5 hover:scale-125">
            <div className="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center rounded bg-card-bg">
              <AboutIcon className="w-3 md:w-5 text-card-accent" />
              <Tooltip>Sobre mí</Tooltip>
            </div>
          </div>
        </a>
        <div className="absolute w-1 h-2 md:w-2 md:h-4 bg-card-accent top-1/2 -translate-y-1/2 left-full peer-hover:scale-y-150 peer-hover:bg-gradient-to-b peer-hover:from-gradient-vex-green peer-hover:to-gradient-vex-purple transition-all" />
      </li>
    </ul>
  );
}
