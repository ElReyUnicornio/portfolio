// Supports weights 100-900
import "@fontsource-variable/raleway";

interface AvatarProps {
  url?: string;
  name?: string;
  title?: string;
  className?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full overflow-hidden mr-4 object-cover">
        <img
          className="w-16 lg:w-20 h-16 lg:h-20"
          src={props.url}
          alt={props.name + ", " + props.title}
        ></img>
      </div>
      <div className="font-raleway">
        <h1 className="text-white font-extrabold text-xl lg:text-3xl">
          {props.name}
        </h1>
        <h2 className="text-white/75 text-xs lg:text-base w-full text-center py-1 bg-white/25 rounded-md">
          {props.title}
        </h2>
      </div>
    </div>
  );
}
