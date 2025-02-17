import { atom } from "nanostores";
import { projects, type Project } from "./projects";
import { jobs, type Job } from "./jobs";

export const cooldown = 6;

export const filteredProjects = atom(projects);
export const filteredJobs = atom(jobs);

export const projectsIndex = atom(0);
export const jobsIndex = atom(0);

export const projectsTimer = atom(0);
export const jobsTimer = atom(0);

interface filterOptions {
  category?: string;
  technologies?: string[];
  languages?: string;
}

export const next = (section: string) => {
  if (section === "projects") {
    projectsIndex.set(
      (projectsIndex.get() + 1) % filteredProjects.get().length
    );
    projectsTimer.set(0);
  }
  if (section === "jobs" || section === "jobs-background") {
    jobsIndex.set((jobsIndex.get() + 1) % filteredJobs.get().length);
    jobsTimer.set(0);
  }
};

export const prev = (section: string) => {
  if (section === "projects") {
    projectsIndex.set(
      (projectsIndex.get() - 1 + filteredProjects.get().length) %
        filteredProjects.get().length
    );
    projectsTimer.set(0);
  }
  if (section === "jobs") {
    jobsIndex.set(
      (jobsIndex.get() - 1 + filteredJobs.get().length) %
        filteredJobs.get().length
    );
    jobsTimer.set(0);
  }
};

export const setIndex = (section: string, index: number) => {
  if (section === "projects") {
    projectsIndex.set(index);
    projectsTimer.set(0);
  }
  if (section === "jobs") {
    jobsIndex.set(index);
    jobsTimer.set(0);
  }
};

export const filter = (section: string, options: filterOptions) => {
  const items = section === "projects" ? projects : jobs;

  const result: Project[] | Job[] = items.filter((item) => {
    if (options.category && item.category !== options.category) return false;
    if (
      options.technologies &&
      options.technologies.length > 0 &&
      !options.technologies.some((tech) => item.technologies.includes(tech))
    )
      return false;
    if (options.languages && !item.languages.includes(options.languages))
      return false;
    return true;
  });
  console.log(options);

  if (section === "projects") {
    projectsIndex.set(0);
    filteredProjects.set(result);
  }
  if (section === "jobs") {
    jobsIndex.set(0);
    filteredJobs.set(result as Job[]);
  }
};
