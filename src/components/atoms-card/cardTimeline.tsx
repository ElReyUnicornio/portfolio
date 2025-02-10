import AboutIcon from "../icons/aboutIcon";
import DevIcon from "../icons/devIcon";
import JobIcon from "../icons/jobIcon";

export default function CardTimeline() {
  return (
    <ul className="h-full flex flex-col justify-center items-end mr-1 relative">
      <li className="relative m-1">
        <a href="#Proyectos" className="peer group">
          <div className="w-8 h-8 m-2 flex justify-center items-center rounded border-2 border-card-accent mr-5 bg-card-bg hover:bg-white/25 hover:scale-125 group-hover:border-none group-hover:bg-gradient-to-b group-hover:from-gradient-vex-green group-hover:to-gradient-vex-purple transition-all duration-100">
            <DevIcon className="w-5 text-card-accent group-hover:text-card-bg" />
          </div>
        </a>
        <div className="absolute w-2 h-4 bg-card-accent top-1/2 -translate-y-1/2 left-full peer-hover:scale-y-150 peer-hover:bg-gradient-to-b peer-hover:from-gradient-vex-green peer-hover:to-gradient-vex-purple transition-all" />
      </li>
      <li className="relative m-1">
        <a href="#Trabajos" className="peer group">
          <div className="w-8 h-8 m-2 flex justify-center items-center rounded border-2 border-card-accent mr-5 bg-card-bg hover:bg-white/25 hover:scale-125 group-hover:border-none group-hover:bg-gradient-to-b group-hover:from-gradient-vex-green group-hover:to-gradient-vex-purple transition-all duration-100">
            <JobIcon className="w-5 text-card-accent group-hover:text-card-bg" />
          </div>
        </a>
        <div className="absolute w-2 h-4 bg-card-accent top-1/2 -translate-y-1/2 left-full peer-hover:scale-y-150 peer-hover:bg-gradient-to-b peer-hover:from-gradient-vex-green peer-hover:to-gradient-vex-purple transition-all" />
      </li>
      <li className="relative m-1">
        <a href="#Hobbies" className="peer group">
          <div className="w-8 h-8 m-2 flex justify-center items-center rounded border-2 border-card-accent mr-5 bg-card-bg hover:bg-white/25 hover:scale-125 group-hover:border-none group-hover:bg-gradient-to-b group-hover:from-gradient-vex-green group-hover:to-gradient-vex-purple transition-all duration-100">
            <AboutIcon className="w-5 text-card-accent group-hover:text-card-bg" />
          </div>
        </a>
        <div className="absolute w-2 h-4 bg-card-accent top-1/2 -translate-y-1/2 left-full peer-hover:scale-y-150 peer-hover:bg-gradient-to-b peer-hover:from-gradient-vex-green peer-hover:to-gradient-vex-purple transition-all" />
      </li>
    </ul>
  );
}
