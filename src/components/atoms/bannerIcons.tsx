import AutoIcon from "./autoIcon";
import { useStore } from "@nanostores/react";
import {
  filteredProjects,
  projectsIndex,
  filteredJobs,
  jobsIndex,
} from "../../store";
import { useEffect, useState } from "react";

interface Props {
  section: string;
}

export default function BannerIcons(props: Props) {
  const items = useStore(
    props.section === "projects" ? filteredProjects : filteredJobs
  );
  const index = useStore(
    props.section === "projects" ? projectsIndex : jobsIndex
  );
  const [technologies, setTechnologies] = useState(items[index].technologies);

  useEffect(() => {
    if (props.section === "projects") {
      setTechnologies(filteredProjects.get()[index].technologies);
    } else {
      setTechnologies(filteredJobs.get()[index].technologies);
    }
  }, [items, index]);

  return technologies?.split(" ").map((tecnology) => (
    <div key={props.section + "_" + tecnology} className="skew-x-[25deg]">
      <AutoIcon name={tecnology} />
    </div>
  ));
}
