"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "../content";

type WorkbenchHeroProps = {
  projects: Project[];
};

export function WorkbenchHero({ projects }: WorkbenchHeroProps) {
  const [introVisible, setIntroVisible] = useState(true);
  const boardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 760);
    return () => window.clearTimeout(timer);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const board = boardRef.current;
    if (!board || event.pointerType === "touch") return;

    const bounds = board.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    board.style.setProperty("--pointer-x", x.toFixed(3));
    board.style.setProperty("--pointer-y", y.toFixed(3));
  }

  function resetPointer() {
    const board = boardRef.current;
    if (!board) return;
    board.style.setProperty("--pointer-x", "0");
    board.style.setProperty("--pointer-y", "0");
  }

  const videoProject = projects[0];
  const workplaceProject = projects[1];

  return (
    <section
      ref={boardRef}
      className="workbench-shell"
      aria-labelledby="workbench-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div
        className={`intro-overlay${introVisible ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        <span className="spiral-mark" />
        <span className="intro-label">INITIALIZING PORTFOLIO</span>
      </div>

      <div className="workbench-noise" aria-hidden="true" />
      <header className="workbench-status" aria-label="个人状态">
        <span>SHANGHAI / HONG KONG</span>
        <span className="status-pill">
          <i /> AVAILABLE FOR AI PM ROLES
        </span>
        <span>2026 PORTFOLIO</span>
      </header>

      <div className="workbench-grid">
        <article className="board-card profile-card">
          <p className="micro-label">PROFILE / 个人档案</p>
          <div className="profile-card-main">
            <span className="profile-monogram" aria-hidden="true">
              YH
            </span>
            <div>
              <strong>意向岗位：AI 产品经理实习生</strong>
              <p>产品 × 数据 × 技术落地</p>
            </div>
          </div>
          <dl className="mini-data">
            <div>
              <dt>EDU</dt>
              <dd>HKBU · MSc</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>随时到岗</dd>
            </div>
          </dl>
        </article>

        <a
          className="board-card project-card project-card-primary"
          href={`/projects/${videoProject.slug}`}
          aria-label={`查看项目：${videoProject.title}`}
        >
          <p className="micro-label">PROJECT / {videoProject.number}</p>
          <div className="project-signal" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="board-card-bottom">
            <strong>{videoProject.shortTitle}</strong>
            <span>ASR · TRANSLATE · Q&amp;A ↗</span>
          </div>
        </a>

        <aside className="capability-notes" aria-label="核心能力">
          <p className="micro-label">MY SIGNAL / CORE ABILITIES</p>
          <div className="paper-note note-one">AI 工作流</div>
          <div className="paper-note note-two">产品取舍</div>
          <div className="paper-note note-three">数据分析</div>
          <div className="paper-note note-four">工程理解</div>
          <p className="editorial-note">
            Turning uncertain model capability into a product people can
            understand and control.
          </p>
        </aside>

        <a
          className="board-card project-card project-card-secondary"
          href={`/projects/${workplaceProject.slug}`}
          aria-label={`查看项目：${workplaceProject.title}`}
        >
          <p className="micro-label">PROJECT / {workplaceProject.number}</p>
          <div className="conversation-preview" aria-hidden="true">
            <span className="bubble bubble-a">先说说发生了什么</span>
            <span className="bubble bubble-b">把担忧拆成可控行动</span>
            <span className="memory-chip">MEMORY / SAFE</span>
          </div>
          <div className="board-card-bottom">
            <strong>{workplaceProject.shortTitle}</strong>
            <span>CONVERSATION · MEMORY ↗</span>
          </div>
        </a>

        <div className="hero-core">
          <p className="micro-label hero-eyebrow">YAN HAN · AI PRODUCT MANAGER</p>
          <h1 id="workbench-title">严晗的产品工作台</h1>
          <div className="portrait-stage">
            <div className="portrait-halo" aria-hidden="true" />
            <img
              src="/profile-cutout.png"
              alt="严晗的黑白剪纸肖像"
              width="1086"
              height="1448"
            />
            <span className="target-mark" aria-hidden="true">
              <i />
            </span>
          </div>
          <p className="hero-thesis">
            用产品思维连接 <em>AI 能力</em>
            <br />
            与真实用户问题
          </p>
          <a className="email-chip" href="mailto:ninocusarch@gmail.com">
            <span>CONTACT@</span> NINOCUSARCH@GMAIL.COM →
          </a>
        </div>
      </div>

      <nav className="dock-navigation" aria-label="主要导航">
        <a href="#top" aria-label="返回首页顶部">
          <span aria-hidden="true">⌂</span>
          首页
        </a>
        <a href="#projects">
          <span aria-hidden="true">◇</span>
          项目
        </a>
        <a href="#experience">
          <span aria-hidden="true">↗</span>
          经历
        </a>
        <a href="#about">
          <span aria-hidden="true">◎</span>
          关于
        </a>
        <details className="resume-menu">
          <summary>
            <span aria-hidden="true">↓</span>
            简历
          </summary>
          <div className="resume-menu-panel">
            <a href="/resume/yan-han-ai-pm-optimized.pdf" download>
              优化版 PDF
            </a>
            <a href="/resume/yan-han-ai-pm-ats.pdf" download>
              ATS 版 PDF
            </a>
          </div>
        </details>
      </nav>
    </section>
  );
}
