// Supports weights 100-900
import "@fontsource-variable/work-sans";

interface AvatarProps {
  url?: string;
  name?: string;
  title?: string;
  className?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 rounded-full overflow-hidden mr-4 object-cover">
        <img
          className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20"
          src={props.url}
          alt={props.name + ", " + props.title}
        ></img>
      </div>
      <div className="font-work">
        <h1 className="text-white font-extrabold text-sm md:text-xl lg:text-3xl">
          {props.name}
        </h1>
        <div className="bg-gradient-to-tr from-gradient-vex-purple to-gradient-vex-green p-px md:p-[2px] rounded-md">
          <h2 className="text-white/75 text-xs lg:text-base w-full text-center py-1 rounded-md bg-card-bg">
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
