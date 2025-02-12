import { atom } from "nanostores";
import { projects } from "./projects";

export const filteredProjects = atom(projects);

export const projectsIndex = atom(0);
export const jobsIndex = atom(0);
