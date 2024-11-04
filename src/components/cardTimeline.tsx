import dev from "../assets/dev.svg";
import job from "../assets/job.svg";
import rocket from "../assets/rocket.svg";

export default function CardTimeline() {
  return (
    <ul className="h-full flex flex-col justify-center items-end mr-1 relative">
      <li className="relative m-1">
        <svg className="w-2 h-2 absolute top-[calc(50%-4px)] left-full">
          <circle fill="#ADA0CF" cx="50%" cy="50%" r="4px" />
        </svg>
        <a href="#Proyectos">
          <div className="w-8 h-8 m-2 flex justify-center content-center rounded border-2 border-dashed border-[#ADA0CF] mr-5 hover:bg-white/25 hover:scale-125 transition-transform duration-100">
            <img src={dev.src} alt="proyectos" className="w-5" />
          </div>
        </a>
      </li>
      <li className="relative m-1">
        <svg className="w-2 h-2 absolute top-[calc(50%-4px)] left-full">
          <circle fill="#ADA0CF" cx="50%" cy="50%" r="4px" />
        </svg>
        <a href="#Trabajos">
          <div className="w-8 h-8 m-2 flex justify-center content-center rounded border-2 border-dashed border-[#ADA0CF] mr-5 hover:bg-white/25 hover:scale-125 transition-transform duration-100">
            <img src={job.src} alt="Trabajos" className="w-5" />
          </div>
        </a>
      </li>
      <li className="relative m-1">
        <svg className="w-2 h-2 absolute top-[calc(50%-4px)] left-full">
          <circle fill="#ADA0CF" cx="50%" cy="50%" r="4px" />
        </svg>
        <a href="#Hobbies">
          <div className="w-8 h-8 m-2 flex justify-center content-center rounded border-2 border-dashed border-[#ADA0CF] mr-5 hover:bg-white/25 hover:scale-125 transition-transform duration-100">
            <img src={rocket.src} alt="Sobre mí" className="w-5" />
          </div>
        </a>
      </li>
      <div className="absolute h-[80%] w-[1px] bg-gradient-to-b from-transparent via-[#ADA0CF] to-transparent"></div>
    </ul>
  );
}
