import { forwardRef } from "react";
import frame from "../../assets/tooltip-frame.svg";
import tail from "../../assets/tooltip-tail.svg";

interface TooltipProps {
  hidden?: boolean;
  children: React.ReactNode;
  showOnHover?: boolean;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ hidden, children, showOnHover = true }, ref) => {
    if (hidden && !showOnHover) return null;

    return (
      <div
        ref={ref}
        className={`absolute z-50 aspect-[215/59] flex justify-center items-center px-3 py-2 text-sm font-bold text-white min-h-8 max-w-40 -top-6 right-[20%] translate-x-1/2 -translate-y-full pointer-events-none ${showOnHover && "opacity-0 group-hover:opacity-100 peer-hover:visible"} transition-opacity duration-300`}
      >
        <span className="relative z-20">{children}</span>
        {/* Tail -------------------------------------------------- */}
        <img
          src={tail.src}
          alt=""
          className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-full z-0"
        />
        {/* frame ------------------------------------------------- */}
        <img
          src={frame.src}
          alt=""
          className="absolute top-0 left-0 w-full h-full z-10"
        />
      </div>
    );
  }
);

export default Tooltip;
