import DevIcon from "../icons/devIcon";
import { useStore } from "@nanostores/react";
import { filteredProjects, projectsIndex } from "../../store";
import { useEffect, useState } from "react";
import AutoIcon from "./autoIcon";

export default function CategoryIcon() {
  const projects = useStore(filteredProjects);
  const index = useStore(projectsIndex);

  const [category, setCategory] = useState(projects[index].category);

  useEffect(() => {
    setCategory(projects[index].category);
  }, [projects, index]);

  return <AutoIcon name={category} />;
}
