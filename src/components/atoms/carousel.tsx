import { useStore } from "@nanostores/react";
import {
  filteredProjects,
  projectsIndex,
  jobsIndex,
  projectsTimer,
  jobsTimer,
  filteredJobs,
  cooldown,
  next,
} from "../../store";
import { useEffect, useRef } from "react";
import type { Job } from "../../jobs";

export default function Carousel({ section }: { section: string }) {
  const items = useStore(
    section === "projects" ? filteredProjects : filteredJobs
  );
  const index = useStore(section === "projects" ? projectsIndex : jobsIndex);
  const timer = useStore(section === "projects" ? projectsTimer : jobsTimer);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!carouselRef.current || (section != "projects" && section != "jobs"))
      return;

    const updateTimer = () => {
      if (section === "projects") {
        projectsTimer.set(projectsTimer.get() + 1);
      }
      if (section === "jobs") {
        jobsTimer.set(jobsTimer.get() + 1);
      }
    };

    let interval = setInterval(updateTimer, 1000);

    carouselRef.current.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });

    carouselRef.current.addEventListener("mouseleave", () => {
      interval = setInterval(updateTimer, 1000);
    });

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer >= cooldown) next(section);
  }, [timer]);

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
            src={
              section === "jobs-bg"
                ? (item as Job).background.src
                : item.image.src
            }
            alt={item.name}
            className="w-full h-full absolute top-0 left-0 object-cover"
            style={{ transform: `translateX(${i * 100}%)` }}
          />
        ))}
      </div>
    </div>
  );
}
