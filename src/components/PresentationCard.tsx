import { useEffect, useRef, type MouseEvent } from "react";
import { Image } from "astro:assets";
import Avatar from "./avatar";
import XpBar from "./xpBar";

import pp from "../assets/pp.jpeg";
import crown from "../assets/ERUcrown.png";
import tecnologies from "../assets/tecnologies.svg";

export default function PresentationCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const maxDeg = 10;

    // Coordenadas relativas al centro de la tarjeta
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
      ${(offsetX - halfWidth) * 2 + width / 2}px
      ${(offsetY - halfHeight) * 2 + height / 2}px,
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
        <div className="flex flex-col justify-center items-center border-[2px] border-[#A9A9A9] bg-gradient-to-br from-[#9000FF] to-[#270F93] w-full h-full rounded-[35px] p-8 overflow-hidden">
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
              <XpBar value={1} max={3} legend="año exp" />
            </div>
          </div>
          <div className="flex">
            <img
              className="relative left-4 top-4 scale-[2] lg:scale-100 lg:-left-20 lg:-top-12"
              src={tecnologies.src}
              alt="react, tailwind, nest, typeScript"
            />
            <div className="w-10 h-10"></div>
          </div>
        </div>
        <div
          ref={glowRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none glow"
        />
      </div>
    </div>
  );
}
