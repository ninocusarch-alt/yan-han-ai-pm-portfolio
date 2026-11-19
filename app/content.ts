export type ProjectDecision = {
  title: string;
  body: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  englishTitle: string;
  date: string;
  role: string;
  type: string;
  lede: string;
  summary: string;
  tags: string[];
  targetUsers: string[];
  problemHeading: string;
  problem: string;
  decisions: ProjectDecision[];
  workflow: string[];
  metrics: ProjectMetric[];
  results: string[];
  reflections: string[];
  nextSteps: string[];
  heroImage?: {
    src: string;
    alt: string;
  };
  contextImage?: {
    src: string;
    alt: string;
  };
  repository?: string;
};

export const projects: Project[] = [
  {
    slug: "video-companion",
    number: "01",
    title: "实时 AI 视频理解伴侣",
    shortTitle: "视频理解伴侣",
    englishTitle: "Real-time AI Video Companion",
    date: "2026.07",
    role: "个人项目 / 产品定义与全栈 MVP",
    type: "Chrome Extension · AI Copilot",
    heroImage: {
      src: "/projects/video-companion-product.png",
      alt: "视频理解伴侣在 YouTube 页面中实时生成双语记录与视频问答的产品界面",
    },
    lede: "让英文视频的理解发生在观看现场，而不是被迫切换到另一个工具。",
    summary:
      "面向英语听力不足的 YouTube 用户，将原字幕翻译工具重构为包含实时转写、智能断句、异步翻译和上下文问答的视频理解伴侣。",
    tags: ["ASR", "智能断句", "流式翻译", "上下文问答"],
    targetUsers: [
      "观看 YouTube 英文课程、访谈、科技测评或知识内容的用户",
      "希望不中断视频就能理解内容，并继续追问长难句的用户",
    ],
    problemHeading: "用户不是缺少翻译，而是被理解流程打断。",
    problem:
      "传统流程要求用户暂停视频、复制字幕、切换翻译工具，再回到原页面定位上下文。早期版本试图让中文字幕与语音完全同步，但翻译需要上下文，强追求“瞬时中文”反而牺牲稳定性与可读性。",
    decisions: [
      {
        title: "从字幕工具改成理解伴侣",
        body: "把核心目标从“逐字同步翻译”改为“尽量不中断观看节奏地完成理解”，产品形态从底部字幕升级为可回看、可搜索、可追问的双语记录面板。",
      },
      {
        title: "英文先出现，中文异步回填",
        body: "稳定英文片段先进入记录，中文翻译完成后原位回填。这样既保留判断依据，也降低翻译等待对用户的感知。",
      },
      {
        title: "稳定片段而非每个增量都翻译",
        body: "通过智能断句控制长句阻塞、重复文本和调用成本，在速度、语义完整性与翻译质量之间做明确取舍。",
      },
      {
        title: "把异常当成产品路径",
        body: "为 ASR 连接、翻译失败、音频静音、滚动抢焦点和会话结束设计反馈与回退，不把模型与网络的不确定性留给用户猜测。",
      },
    ],
    workflow: [
      "标签页音频捕获",
      "千问实时 ASR",
      "稳定片段切分",
      "双 Worker 翻译",
      "双语记录面板",
      "选句上下文问答",
    ],
    metrics: [
      {
        value: "12",
        label: "项后端测试",
        detail: "覆盖 ASR 事件解析、增量文本、断句和会话记录",
      },
      {
        value: "1",
        label: "条端到端链路",
        detail: "音频捕获 → ASR → 翻译 → 回填 → 问答",
      },
      {
        value: "MV3",
        label: "可加载构建",
        detail: "TypeScript 检查与 Vite 生产构建通过",
      },
    ],
    results: [
      "后端 WebSocket 已收到千问实时 ASR 的 session.ready 握手。",
      "英文增量、稳定片段、中文回填和上下文问答形成可运行闭环。",
      "用户上滚、搜索或选句时，自动跟随会暂停，避免被新内容抢回底部。",
      "保留英文原文，使用户能够自行判断中文解释是否可信。",
    ],
    reflections: [
      "工程可用不等于用户价值已被证明；当前没有真实用户样本、留存或满意度数据。",
      "早期把“实时”误解为中文字幕必须与语音同步，之后才回到用户真正的理解任务。",
      "下一阶段应该建立样本—指标—失败归因—迭代的证据闭环，而不是继续堆叠模型。",
    ],
    nextSteps: [
      "招募 5–10 名目标用户完成固定观看任务。",
      "建立包含不同口音、语速、噪声和专业领域的评测集。",
      "分段记录 ASR、断句、翻译和渲染延迟，并归类失败样本。",
    ],
  },
  {
    slug: "education-agent",
    number: "02",
    title: "樾阶教育课程顾问 Agent",
    shortTitle: "课程顾问 Agent",
    englishTitle: "Education Consultant Agent",
    date: "2026.11",
    role: "个人项目 / Agent 产品设计与全栈实现",
    type: "Agentic AI · RAG · HITL",
    heroImage: {
      src: "/projects/education-agent-product.png",
      alt: "樾阶教育课程顾问 Agent 的调试后台界面，展示课程咨询对话、政策引用与工具调用路径",
    },
    contextImage: {
      src: "/projects/education-agent-workflow.png",
      alt: "樾阶教育课程顾问 Agent 的工作流与评测面板，展示退费人工审批、检查点和回归评测结果",
    },
    lede: "把课程咨询里的事实、政策与资金操作分开，让 Agent 只在该负责的范围内回答。",
    summary:
      "面向教育培训机构的课程顾问 Agent：实时业务事实走工具、教务政策走可引用检索、退费等高风险操作进入人工审批工作流，并配套全链路 Trace 与回归评测。",
    tags: ["工具调用", "RAG 引用", "人工审批", "回归评测"],
    targetUsers: [
      "咨询课程价格、活动规则、开课进度与退费条件的学员和家长",
      "需要处理大量重复咨询、同时要保证政策口径与资金操作可控的课程顾问与教务团队",
    ],
    problemHeading: "课程咨询里最贵的错误，是让模型自由编造事实。",
    problem:
      "课程价格、剩余班位和开课进度随时变化，靠模型记忆回答必然出错；退费规则、活动叠加规则需要可追溯的政策依据；涉及资金的操作更不该由模型自行决定。把三类问题混在一个聊天框里，准确率、合规与责任都不可控。",
    decisions: [
      {
        title: "事实、政策、动作三路分开",
        body: "意图路由把问题分到 Tool 路径（报名订单、开课进度、课程价格）、RAG 路径（教务政策引用）与 Workflow 路径（退费审批）。模型只负责组织语言，不负责编造数字。",
      },
      {
        title: "高风险操作停在人工审批",
        body: "未开课退费进入 require_approval，冻结报名订单状态、开课进度与退费资格，生成检查点和恢复令牌；审批时复核冻结事实，重复审批保持幂等。",
      },
      {
        title: "证据不足就明确转人工",
        body: "低置信政策问题拒绝编造，业务接口超时明确降级转人工；离线课堂使用本地字符向量时如实标注，不把替身说成语义检索，也不用镜像数据掩盖故障。",
      },
      {
        title: "把可观测做成产品的一部分",
        body: "全链路 Trace、请求级成本摘要、13 条回归评测与失败归因，让每次回答都能定位到 Tool、RAG、Workflow、Context 或安全层，而不是只看最终话术。",
      },
    ],
    workflow: [
      "意图路由",
      "工具调用查实时事实",
      "混合检索政策引用",
      "高风险动作分流",
      "人工审批与状态恢复",
      "Trace / 成本 / 回归评测",
    ],
    metrics: [
      {
        value: "13",
        label: "条回归评测",
        detail: "EVAL total 13 / passed 13 / failed 0，覆盖正常路径、边界、审批、安全与降级",
      },
      {
        value: "3",
        label: "类受控输入",
        detail: "工具返回的业务事实、带 policy_id 的政策引用、工作流状态",
      },
      {
        value: "1",
        label: "套端到端链路",
        detail: "React 调试后台 → FastAPI Agent → Spring Boot 业务后端 → MySQL",
      },
    ],
    results: [
      "完成课程咨询、报名订单详情、开课进度与退费进度的工具路径，事实来自在线业务系统。",
      "混合召回加轻量重排的政策知识库让回答附带 policy_id 引用，引用顺序跟随重排结果。",
      "未开课退费进入人工审批、已开课退费阻断，审批恢复校验检查点与令牌并保持幂等。",
      "13 条回归场景全部通过，覆盖工具调用、RAG 引用、审批恢复、故障降级与提示词注入防护。",
    ],
    reflections: [
      "13 条回归评测证明工程链路稳定，不等于真实学员满意度、转化率或人效提升已被验证。",
      "项目是教学与竞赛场景下的完整可运行作品，尚未接入真实支付网关、工单系统、监控告警和多租户隔离。",
      "最关键的取舍不是模型能力，而是明确哪些决定不能交给模型：事实来源、资金动作与权限边界。",
    ],
    nextSteps: [
      "用真实咨询日志构造评测集，补充多轮追问、口语化表达与政策冲突样本。",
      "与教务团队验证审批工作流：冻结事实变更、超时、撤销与审计留痕。",
      "补齐知识运营后台与政策版本发布流程，让引用可维护、可回滚。",
    ],
    repository: "https://github.com/ninocusarch-alt/yuejie-education-agent",
  },
  {
    slug: "smart-wheelchair",
    number: "03",
    title: "AI 智能轮椅产品商业方案",
    shortTitle: "AI 智能轮椅方案",
    englishTitle: "AI Smart Mobility",
    date: "2026.04",
    role: "5 人小组组长 / 产品与商业统筹",
    type: "Campus Venture · Product Strategy",
    lede: "从功能想象回到行动障碍用户的真实出行任务、付费关系与落地约束。",
    summary:
      "围绕行动障碍用户出行场景，完成目标用户与付费方分层、痛点优先级、MVP 功能、服务流程、商业模式、实施路线、财务和合规分析。",
    tags: ["用户分层", "MVP", "商业模式", "团队协作"],
    targetUsers: [
      "需要更安全、可控和低负担移动支持的行动障碍用户",
      "参与购买决策与照护服务的家庭、机构和医疗康复合作方",
    ],
    problemHeading: "一台智能硬件背后，是多方角色共同完成的服务系统。",
    problem:
      "智能轮椅不只是硬件功能集合。使用者、付费方、照护者和服务机构的目标并不完全相同，产品必须同时处理安全、可用性、成本、服务流程与合规边界。",
    decisions: [
      {
        title: "区分使用者与付费方",
        body: "将目标用户、家庭决策者和机构合作方分层，避免用单一用户画像解释复杂购买与使用关系。",
      },
      {
        title: "先排序场景，再定义功能",
        body: "以出行安全、操控负担和照护协作为核心场景组织痛点，不从技术清单反推需求。",
      },
      {
        title: "把服务纳入 MVP",
        body: "除产品功能外同步考虑交付、培训、售后和合作伙伴，使方案具备更完整的实施路径。",
      },
      {
        title: "让商业与合规共同约束路线",
        body: "通过财务、实施阶段和合规分析判断哪些能力应优先验证，哪些应在证据充分后再扩展。",
      },
    ],
    workflow: [
      "用户与付费方分层",
      "出行任务拆解",
      "痛点优先级",
      "MVP 与服务流程",
      "商业模式",
      "实施与合规路线",
    ],
    metrics: [
      {
        value: "5",
        label: "人跨职能小组",
        detail: "负责分工协调、内容整合与最终叙事一致性",
      },
      {
        value: "1st",
        label: "校园竞赛第一名",
        detail: "产品、商业、财务与实施方案综合评审结果",
      },
      {
        value: "1",
        label: "套完整方案",
        detail: "覆盖目标用户、MVP、服务、商业、财务与合规",
      },
    ],
    results: [
      "完成目标用户与付费方分层，并形成清晰的痛点优先级。",
      "将 MVP 功能与交付、培训、售后等服务流程共同设计。",
      "统筹商业模式、实施路线、财务与合规内容，协调五人分工和方案整合。",
      "项目获得校园竞赛第一名。",
    ],
    reflections: [
      "复杂硬件产品需要同时验证使用者价值、购买决策与服务交付，不能只证明技术可行。",
      "组长的价值不仅是分配任务，更是建立共同判断标准并保证最终叙事一致。",
      "后续若继续推进，应优先补充真实用户研究与原型任务测试。",
    ],
    nextSteps: [
      "访谈行动障碍用户、家庭照护者与机构采购方。",
      "通过低保真操控原型验证核心出行任务。",
      "建立安全、学习成本、服务成本与购买意愿的验证指标。",
    ],
  },
];

export const experiences = [
  {
    period: "2024.01 — 2024.12",
    company: "希维教育",
    role: "课程教师 / 教研",
    points: [
      "负责学生课程设计及对外教研产品规划。",
      "围绕课程组合、卖点表达和反馈迭代优化推广方案，推动相关课程销量提升约 30%。",
    ],
  },
  {
    period: "2023.05 — 2023.11",
    company: "云量科技",
    role: "数据分析与广告投放管培生",
    points: [
      "搭建 CTR、CPA、ROI 指标分析框架，定位素材与定向问题并推动策略迭代。",
      "CTR 由 0.8% 提升至 2.1%，CPA 降低 35%，ROI 由 1:3 提升至 1:5.2。",
      "沉淀 26 份分析报告，将异常定位、素材复盘和策略建议形成周度闭环。",
    ],
  },
  {
    period: "2021.09 — 2022.01",
    company: "恒电信息",
    role: "算法工程实习生",
    points: [
      "参与文本分类与模型压缩，协助数据清洗、实验对比和结果复盘。",
      "通过知识蒸馏将训练效率提升 40%，为产品侧模型选型提供依据。",
    ],
  },
];

export const skillGroups = [
  {
    name: "AI 产品",
    skills: [
      "AI 工作流设计",
      "Prompt 设计",
      "结构化 JSON 输出",
      "评测用例",
      "安全治理",
      "异常降级",
    ],
  },
  {
    name: "技术与数据",
    skills: [
      "Python",
      "SQL / MySQL",
      "REST API",
      "WebSocket",
      "JSON Schema",
      "Git / GitHub",
      "日志调试",
    ],
  },
  {
    name: "分析与表达",
    skills: ["Power BI", "Tableau", "数据看板", "CET-6", "IELTS 6.5", "英语工作沟通"],
  },
];

export const education = [
  {
    school: "香港浸会大学",
    degree: "资讯科技管理 · 硕士",
    period: "2025.09 — 2026.11（预计）",
    detail: "IT Project Skills 方向均分 A- · IT Management 方向均分 A",
  },
  {
    school: "华南师范大学",
    degree: "网络工程 · 学士",
    period: "2018.09 — 2022.06",
    detail: "网络与软件工程基础",
  },
];

export const email = "ninocusarch@gmail.com";
export const github = "https://github.com/ninocusarch-alt/yuejie-education-agent";
