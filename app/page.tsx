import type { Metadata } from "next";
import { WorkbenchHero } from "./components/WorkbenchHero";
import {
  education,
  email,
  experiences,
  github,
  projects,
  skillGroups,
} from "./content";

export const metadata: Metadata = {
  title: "严晗｜AI 产品经理",
  description:
    "严晗的 AI 产品经理作品集：实时 AI 视频理解伴侣、职场情绪支持助手、AI 智能轮椅商业方案与实践经历。",
};

export default function Home() {
  return (
    <main id="top" className="portfolio-page">
      <WorkbenchHero projects={projects} />

      <section id="projects" className="content-section projects-section">
        <header className="section-intro">
          <div>
            <span className="section-number">01</span>
            <p className="micro-label">SELECTED WORK / 项目案例</p>
          </div>
          <div>
            <h2>把 AI 能力变成可理解、可控制的产品体验。</h2>
            <p>
              三个项目分别验证实时 AI 工作流、对话与记忆治理，以及复杂产品的商业与落地判断。
            </p>
          </div>
        </header>

        <div className="portfolio-project-grid">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`portfolio-project project-${project.slug}`}
            >
              <div className="project-card-art" aria-hidden="true">
                <span className="project-card-index">{project.number}</span>
                <i className="art-ring ring-a" />
                <i className="art-ring ring-b" />
                <div className="art-caption">
                  <span>PRODUCT SYSTEM</span>
                  <strong>{project.englishTitle}</strong>
                </div>
              </div>
              <div className="portfolio-project-copy">
                <div>
                  <p className="micro-label">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="project-card-meta">
                  <span>{project.date}</span>
                  <span>VIEW CASE ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section experience-section">
        <header className="section-intro compact-intro">
          <div>
            <span className="section-number">02</span>
            <p className="micro-label">EXPERIENCE / 实践经历</p>
          </div>
          <h2>从数据判断到产品表达，再到模型与工程协作。</h2>
        </header>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article key={experience.company} className="experience-item">
              <span className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="experience-period">{experience.period}</p>
                <h3>{experience.company}</h3>
                <p className="experience-role">{experience.role}</p>
              </div>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <header className="section-intro compact-intro">
          <div>
            <span className="section-number">03</span>
            <p className="micro-label">CAPABILITIES / 能力矩阵</p>
          </div>
          <h2>既能定义 AI 产品，也能读懂实现它所需的技术语言。</h2>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article key={group.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.name}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="content-section about-section">
        <div className="about-statement">
          <p className="micro-label">ABOUT / 关于我</p>
          <h2>
            我关注的不是“能不能接上模型”，而是模型能力如何进入一个清晰、可靠、有边界的用户任务。
          </h2>
          <p>
            从网络工程、算法实习到数据分析与产品项目，我习惯在用户问题、业务指标与技术约束之间建立共同语言。现在，我希望把这种能力带到真正面向用户的 AI 产品团队。
          </p>
          <div className="about-actions">
            <a href={`mailto:${email}`}>发送邮件 →</a>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub 项目仓库 ↗
            </a>
          </div>
        </div>

        <div className="education-panel">
          <p className="micro-label">EDUCATION / 教育背景</p>
          {education.map((item) => (
            <article key={item.school}>
              <span>{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <small>{item.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-callout" aria-labelledby="resume-title">
        <div>
          <p className="micro-label">RESUME / 下载简历</p>
          <h2 id="resume-title">如果你正在寻找一位懂产品、数据与技术协作的 AI 产品经理，我们可以聊聊。</h2>
        </div>
        <div className="resume-buttons">
          <a href="/resume/yan-han-ai-pm-optimized.pdf" download>
            下载优化版 PDF <span>↓</span>
          </a>
          <a href="/resume/yan-han-ai-pm-ats.pdf" download>
            下载 ATS 版 PDF <span>↓</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>严晗 / YAN HAN</strong>
          <span>AI PRODUCT MANAGER</span>
        </div>
        <a href={`mailto:${email}`}>{email}</a>
        <p>Designed around evidence, clarity and responsible AI products.</p>
      </footer>
    </main>
  );
}
