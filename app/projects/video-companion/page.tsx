import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../components/ProjectCaseStudy";
import { projects } from "../../content";

const project = projects[0];

export const metadata: Metadata = {
  title: `${project.title}｜严晗`,
  description: project.summary,
};

export default function VideoCompanionPage() {
  return <ProjectCaseStudy project={project} />;
}
