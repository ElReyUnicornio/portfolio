import {
  next,
  prev,
  setIndex,
  filteredProjects,
  filteredJobs,
  projectsIndex,
  jobsIndex,
} from "../../store";
import { useStore } from "@nanostores/react";
import Chevron from "../icons/chevron";

interface Props {
  forSection: "projects" | "jobs";
}

export default function CarouselController(props: Props) {
  const items = useStore(
    props.forSection === "projects" ? filteredProjects : filteredJobs
  );
  const index = useStore(
    props.forSection === "projects" ? projectsIndex : jobsIndex
  );

  return (
    <div className="w-full flex justify-between items-center">
      <button
        className="w-9 h-9 rounded-full flex items-center justify-center bg-white/75 relative z-10"
        onClick={() => prev(props.forSection)}
      >
        <Chevron rotation={90} className="w-6 h-6 text-bg" />
      </button>
      <div className="flex gap-4">
        {items.map((_, i) => (
          <button
            key={i}
            className="w-4 h-4 rounded-sm -skew-x-12"
            onClick={() => setIndex(props.forSection, i)}
            style={{
              backgroundColor:
                i == index ? _.startColor : "rgba(255, 255, 255, 0.75)",
            }}
          ></button>
        ))}
      </div>
      <button
        className="w-9 h-9 rounded-full flex items-center justify-center bg-white/75 relative z-10"
        onClick={() => next(props.forSection)}
      >
        <Chevron rotation={-90} className="w-6 h-6 text-bg" />
      </button>
    </div>
  );
}
