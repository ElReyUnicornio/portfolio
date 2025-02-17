export interface Job {
  name: string;
  description: string;
  category: string;
  technologies: string;
  languages: string;
  demo: string;
  image: ImageMetadata;
  background: ImageMetadata;
  startColor: string;
  endColor: string;
}

export const jobs: Job[] = [];
