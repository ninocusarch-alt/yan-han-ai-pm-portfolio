import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../components/ProjectCaseStudy";
import { projects } from "../../content";

const project = projects[2];

export const metadata: Metadata = {
  title: `${project.title}｜严晗`,
  description: project.summary,
};

export default function SmartWheelchairPage() {
  return <ProjectCaseStudy project={project} />;
}
