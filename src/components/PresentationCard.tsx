import { useEffect, useRef, useState, type MouseEvent } from "react";
import Avatar from "./avatar";
import XpBar from "./xpBar";

import pp from "../assets/pp.jpeg";
import crown from "../assets/ERUcrown.png";
import tecnologies from "../assets/tecnologies.svg";
import linkedin from "../assets/linkedin.svg";
import Github from "./github";
import Tooltip from "./tooltip";
import CardTimeline from "./cardTimeline";

export default function PresentationCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipHidden, setTooltipHidden] = useState(true);

  //tooltip controls
  useEffect(() => {
    const setTooltipPosition = (e: globalThis.MouseEvent) => {
      if (tooltipRef.current && cardRef.current) {
        tooltipRef.current.style.top =
          e.clientY - cardRef.current.getBoundingClientRect().y - 66 + "px";
        tooltipRef.current.style.left =
          e.clientX - cardRef.current.getBoundingClientRect().x - 44 + "px";
      }
    };
    window.addEventListener("mousemove", setTooltipPosition);
    window.addEventListener("click", setTooltipPosition);

    if (tooltipHidden) return;

    setTimeout(() => {
      setTooltipHidden(true);
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", setTooltipPosition);
      window.removeEventListener("click", setTooltipPosition);
    };
  }, [tooltipHidden]);

  //gyroscope controls
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!event.beta || !event.gamma) return;
      window;
      const beta =
        window.innerWidth < window.innerHeight ? event.beta : event.gamma;
      const gamma =
        window.innerWidth < window.innerHeight ? event.gamma : event.beta;
      const maxDeg = 20;
      const orientationFactor =
        (event.alpha ?? 0) > 100 &&
        (event.alpha ?? 0) < 250 &&
        window.innerWidth > window.innerHeight
          ? -1
          : 1;

      const degY = gamma > maxDeg ? maxDeg : gamma < -maxDeg ? -maxDeg : gamma;
      if (cardRef.current && glowRef.current) {
        cardRef.current.style.transitionProperty = "none";
        cardRef.current.style.transform = `rotateY(${degY * orientationFactor}deg)`;
        glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${100 - (gamma * 2 + 50)}% 
        ${((beta - 135 / 6) * 2 + 50) * orientationFactor}%,
        #ffffff55,
        #0000000f
      )
    `;
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    } else {
      console.log("Tu navegador no soporta DeviceOrientation");
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const maxDeg = 10;

    // Coordinates relative to the card
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    const rotationX = ((offsetX - halfWidth) / halfWidth) * maxDeg;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * maxDeg;

    if (cardRef.current && glowRef.current) {
      cardRef.current.style.transitionProperty = "none";
      cardRef.current.style.transform = `rotateX(${-rotationY}deg) rotateY(${rotationX}deg)`;
      glowRef.current.style.backgroundImage = `
    radial-gradient(
      circle at
      ${width - offsetX}px
      ${(offsetY - halfHeight) * 2 + halfHeight}px,
      #ffffff55,
      #0000000f
    )
  `;
    }
  }

  function handleMouseLeave() {
    if (cardRef.current && glowRef.current) {
      cardRef.current.style.transitionProperty = "transform";
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      glowRef.current.style.backgroundImage = "none";
    }
  }

  function copyToClipboard() {
    const email = "contacto@alejandrosoto.site";
    navigator.clipboard.writeText(email);
    setTooltipHidden(false);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-10/12 h-svh lg:max-w-4xl lg:h-[500px] perspective relative z-20"
    >
      <div
        ref={cardRef}
        className="w-full h-full rounded-[50px] shadow-inner-card bg-transparent  lg:max-w-4xl lg:h-[500px] p-5 transition-transform overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center border-[2px] border-[#A9A9A9] bg-gradient-to-br from-[#9000FF] to-[#270F93] w-full h-full rounded-[35px] p-8 overflow-hidden shadow shadow-gray-900">
          {/* Avatar && XpBar ------------------------------------------------------------------------------ */}

          <div className="flex flex-col lg:flex-row justify-between w-full">
            <Avatar
              url={pp.src}
              name="Alejandro Soto"
              title="Desarrollador Fullstack"
            />
            <div className="flex flex-col items-center">
              <a
                href="https://www.instagram.com/srreyunicornio/"
                target="_blank"
                className="hover:scale-125 hover:bg-glow transition-transform duration-100"
              >
                <img src={crown.src} alt="corona" />
              </a>
              <XpBar value={2} max={3} legend="año exp" />
            </div>
          </div>

          {/* Tecnologies && sections ------------------------------------------------------------------------------ */}

          <div className="flex justify-between">
            <img
              className="relative w-10/12 left-4 top-4 scale-[2] lg:scale-[1.4] lg:left-2 lg:-top-0"
              src={tecnologies.src}
              alt="react, tailwind, nest, typeScript"
            />
            <div className="w-20 h-full grow">
              <CardTimeline />
            </div>
          </div>

          {/* Contact ------------------------------------------------------------------------------ */}

          <div className="relative flex justify-between w-full items-end">
            <div className="ml-8">
              <h1 className="font-bold text-base text-white">contacto:</h1>
              <p
                className="text-sm text-white font-bold py-1 px-8 bg-white/25 rounded-full cursor-pointer"
                onClick={copyToClipboard}
              >
                contacto@alejandrosoto.site
              </p>
            </div>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/alejandro-soto-canales-0a811528b/"
                target="_blank"
                className="hover:scale-125 transition-transform duration-100"
              >
                <img
                  className="w-10 h-10 mr-4"
                  src={linkedin.src}
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/ElReyUnicornio"
                target="_blank"
                className="hover:scale-125 transition-transform duration-100"
              >
                <Github className="w-10 h-10" fill="#AE84E4" />
              </a>
            </div>
          </div>
        </div>

        {/* Glow ------------------------------------------------------------------------------ */}

        <div
          ref={glowRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none glow"
        />
      </div>
      <Tooltip ref={tooltipRef} hidden={tooltipHidden} type="success">
        ¡Copiado!
      </Tooltip>
    </div>
  );
}
