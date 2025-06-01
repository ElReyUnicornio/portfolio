import { useEffect, useRef, useState } from "react";
import Tooltip from "./tooltip";

export default function ContactMail() {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipHidden, setTooltipHidden] = useState(true);

  //tooltip controls
  useEffect(() => {
    if (tooltipHidden) return;

    const timer = setTimeout(() => {
      setTooltipHidden(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [tooltipHidden]);

  function copyToClipboard() {
    const email = "contacto@alejandrosoto.site";
    navigator.clipboard.writeText(email);
    setTooltipHidden(false);
  }

  return (
    <div className="relative">
      <p
        className="text-xs md:text-sm text-white font-medium md:font-bold py-0 md:py-1 rounded-full cursor-pointer"
        onClick={copyToClipboard}
      >
        contacto@alejandrosoto.site
      </p>
      <Tooltip ref={tooltipRef} hidden={tooltipHidden} showOnHover={false}>
        ¡Copiado!
      </Tooltip>
    </div>
  );
}
