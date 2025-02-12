import AutoIcon from "./autoIcon";
import { useStore } from "@nanostores/react";
import { filteredProjects, projectsIndex } from "../../store";
import { useEffect, useState } from "react";

interface Props {
  section: string;
}

export default function BannerIcons(props: Props) {
  const projects = useStore(filteredProjects);
  const index = useStore(projectsIndex);
  const [technologies, setTechnologies] = useState(
    filteredProjects.get()[projectsIndex.get()].technologies
  );

  useEffect(() => {
    setTechnologies(filteredProjects.get()[projectsIndex.get()].technologies);
  }, [projects, index]);

  return technologies?.split(" ").map((tecnology) => (
    <div key={props.section + "_" + tecnology} className="skew-x-[25deg]">
      <AutoIcon name={tecnology} />
    </div>
  ));
}
