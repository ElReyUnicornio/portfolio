import { forwardRef } from "react";

interface TooltipProps {
  type?: "success" | "error" | "warning" | "info";
  hidden?: boolean;
  children: React.ReactNode;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  if (props.hidden) return null;

  let color = "bg-white Text-gray-900";
  switch (props.type) {
    case "success":
      color = "bg-green-600 text-white";
      break;
    case "error":
      color = "bg-red-600 text-white";
      break;
    case "warning":
      color = "bg-yellow-600 text-white";
      break;
    case "info":
      color = "bg-blue-600 text-white";
      break;
  }

  return (
    <div
      ref={ref}
      className={`absolute z-50 inline-block px-3 py-2 text-sm font-medium border border-gray-200 rounded-lg shadow-sm ${color}`}
    >
      <span className="animate-tada">{props.children}</span>
    </div>
  );
});

export default Tooltip;
