import Bookmark from "./bookmark";
import { useStore } from "@nanostores/react";
import { jobsIndex, filteredJobs } from "../../store";
import { useEffect, useState } from "react";

export default function JobBookmark() {
  const index = useStore(jobsIndex);
  const [animation, setAnimation] = useState(["animate-slide-down"]);

  useEffect(() => {
    setAnimation(["animate-slide-down"]);
  }, [index]);
  return (
    <div className="flex flex-col items-center justify-center relative mr-[10px] md:h-56 h-20 aspect-[83/164]">
      <div className="w-3/4 overflow-hidden">
        <img
          src={filteredJobs.get()[index].logo.src}
          alt="corona"
          className={`w-full ${animation[0]}`}
        />
      </div>
      <Bookmark
        from={filteredJobs.get()[index].startColor}
        to={filteredJobs.get()[index].endColor}
        id="job"
        className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 h-full w-full"
      />
    </div>
  );
}
