import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${pathname}-${process.pid}-${Date.now()}-${Math.random()}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the finished AI product manager portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  assert.match(html, /<title>严晗｜AI 产品经理<\/title>/i);
  assert.match(html, /严晗的产品工作台/);
  assert.match(html, /意向岗位：AI 产品经理实习生/);
  assert.match(html, /实时 AI 视频理解伴侣/);
  assert.match(html, /“缓一缓”职场情绪支持助手/);
  assert.match(html, /AI 智能轮椅产品商业方案/);
  assert.match(html, /ninocusarch@gmail\.com/i);
  assert.match(html, /yan-han-ai-pm-optimized\.pdf/);
  assert.match(html, /yan-han-ai-pm-ats\.pdf/);
  assert.match(html, /http:\/\/localhost\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /153\s*2769\s*0822/);
});

test("renders each project case study with evidence and navigation", async () => {
  const routes = [
    ["/projects/video-companion", "12", "产品与 AI 工作流"],
    ["/projects/workplace-support", "30", "长期记忆"],
    ["/projects/smart-wheelchair", "校园竞赛第一名", "商业模式"],
  ];

  for (const [pathname, evidence, topic] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /返回工作台/, pathname);
    assert.match(html, new RegExp(evidence), pathname);
    assert.match(html, new RegExp(topic), pathname);
    assert.match(html, /复盘/, pathname);
    assert.match(html, /下一步/, pathname);
  }
});

test("ships the portrait, social card and both resume files", async () => {
  await Promise.all([
    access(new URL("../public/profile-cutout.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(
      new URL(
        "../public/resume/yan-han-ai-pm-optimized.pdf",
        import.meta.url,
      ),
    ),
    access(
      new URL("../public/resume/yan-han-ai-pm-ats.pdf", import.meta.url),
    ),
  ]);

  await assert.rejects(
    access(new URL("../app/_sites-preview", import.meta.url)),
  );
});

test("ships the video companion product screenshot", async () => {
  await access(
    new URL(
      "../public/projects/video-companion-product.png",
      import.meta.url,
    ),
  );

  const response = await render("/projects/video-companion");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /\/projects\/video-companion-product\.png/);
  assert.match(html, /视频理解伴侣在 YouTube 页面中实时生成双语记录与视频问答/);
});

test("ships the workplace support product screenshot", async () => {
  await Promise.all([
    access(
      new URL(
        "../public/projects/workplace-support-product.png",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/projects/workplace-support-conversation.png",
        import.meta.url,
      ),
    ),
  ]);

  const response = await render("/projects/workplace-support");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /\/projects\/workplace-support-product\.png/);
  assert.match(html, /缓一缓职场情绪支持助手的首页界面/);
  assert.match(html, /\/projects\/workplace-support-conversation\.png/);
  assert.match(html, /展示用户表达压力与助手共情梳理的过程/);
});
