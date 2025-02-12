import { useStore } from "@nanostores/react";
import { filteredProjects, projectsIndex, jobsIndex } from "../../store";
import { useEffect, useRef } from "react";

export default function Carousel({ section }: { section: string }) {
  const items = useStore(filteredProjects);
  const index = useStore(section === "projects" ? projectsIndex : jobsIndex);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const next = () => {
      if (section === "projects") {
        projectsIndex.set((projectsIndex.get() + 1) % items.length);
      }
      if (section === "jobs") {
        jobsIndex.set((jobsIndex.get() + 1) % items.length);
      }
    };

    let interval = setInterval(next, 5000);

    carouselRef.current.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });

    carouselRef.current.addEventListener("mouseleave", () => {
      interval = setInterval(next, 5000);
    });

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        ref={carouselRef}
        className="w-full h-full transition-transform duration-1000"
      >
        {items.map((item, i) => (
          <img
            key={item.name + "_carousel_image_" + i}
            src={item.image.src}
            alt={item.name}
            className="w-full h-full absolute top-0 left-0 object-cover"
            style={{ transform: `translateX(${i * 100}%)` }}
          />
        ))}
      </div>
    </div>
  );
}
