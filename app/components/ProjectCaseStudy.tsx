import type { Project } from "../content";

type ProjectCaseStudyProps = {
  project: Project;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <main className="case-page">
      <div className="case-noise" aria-hidden="true" />
      <header className="case-topbar">
        <a href="/" className="back-link">
          ← 返回工作台
        </a>
        <span>CASE STUDY / {project.number}</span>
        <span>{project.date}</span>
      </header>

      <section className="case-hero" aria-labelledby="case-title">
        <div className="case-hero-copy">
          <p className="micro-label">{project.type}</p>
          <h1 id="case-title">{project.title}</h1>
          <p className="case-english-title">{project.englishTitle}</p>
          <p className="case-lede">{project.lede}</p>
          <dl className="case-meta">
            <div>
              <dt>ROLE</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>PERIOD</dt>
              <dd>{project.date}</dd>
            </div>
          </dl>
        </div>

        <div
          className={`case-visual case-visual-${project.slug}${project.heroImage ? " case-visual-with-image" : ""}`}
          aria-hidden={project.heroImage ? undefined : true}
        >
          {project.heroImage ? (
            <img
              className="case-visual-image"
              src={project.heroImage.src}
              alt={project.heroImage.alt}
            />
          ) : null}
          <span className="case-index">{project.number}</span>
          <div className="case-orbit orbit-one" />
          <div className="case-orbit orbit-two" />
          <div className="case-visual-card">
            <span>PRODUCT SYSTEM</span>
            <strong>{project.shortTitle}</strong>
            <small>{project.tags.join(" / ")}</small>
          </div>
        </div>
      </section>

      <section className="case-intro case-section">
        <div className="section-marker">01 / CONTEXT</div>
        <div>
          <p className="case-summary">{project.summary}</p>
          <div className="case-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section case-problem">
        <div className="section-marker">02 / PROBLEM</div>
        <div>
          <h2>{project.problemHeading}</h2>
          <p>{project.problem}</p>
          <div className="target-user-list">
            <p className="micro-label">TARGET USERS / 目标用户</p>
            {project.targetUsers.map((user) => (
              <div key={user}>
                <span aria-hidden="true">↳</span>
                <p>{user}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="section-marker">03 / DECISIONS</div>
        <div>
          <div className="section-heading-row">
            <h2>关键产品决策</h2>
            <p>每项设计都对应一个明确的取舍，而不是功能堆叠。</p>
          </div>
          <div className="decision-grid">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section workflow-section">
        <div className="section-marker">04 / WORKFLOW</div>
        <div>
          <div className="section-heading-row">
            <h2>产品与 AI 工作流</h2>
            <p>从输入到反馈，每一步都有用户可理解的状态。</p>
          </div>
          <ol className="workflow-diagram" aria-label="项目工作流">
            {project.workflow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-section evidence-section">
        <div className="section-marker">05 / EVIDENCE</div>
        <div>
          <div className="section-heading-row">
            <h2>结果与验证</h2>
            <p>只呈现现阶段已有证据支持的结果。</p>
          </div>
          <div className="metric-grid">
            {project.metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
          <ul className="evidence-list">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-section reflection-section">
        <div className="section-marker">06 / REFLECTION</div>
        <div className="reflection-layout">
          <div>
            <h2>复盘：不把工程完成包装成市场验证。</h2>
            <ul>
              {project.reflections.map((reflection) => (
                <li key={reflection}>{reflection}</li>
              ))}
            </ul>
          </div>
          <aside>
            <p className="micro-label">NEXT / 下一步</p>
            <ol>
              {project.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <footer className="case-footer">
        <div>
          <p className="micro-label">END OF CASE / {project.number}</p>
          <h2>继续浏览我的产品工作台</h2>
        </div>
        <div className="case-footer-actions">
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">
              查看项目仓库 ↗
            </a>
          ) : null}
          <a href="/#projects">查看全部项目 →</a>
        </div>
      </footer>
    </main>
  );
}
