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
    slug: "workplace-support",
    number: "02",
    title: "“缓一缓”职场情绪支持助手",
    shortTitle: "“缓一缓”情绪助手",
    englishTitle: "Pause & Reframe",
    date: "2026.07",
    role: "个人项目 / AI 产品设计与 Web MVP",
    type: "Conversational AI · Memory",
    lede: "不替用户做决定，而是把混乱的职场压力整理成下一步可控行动。",
    summary:
      "将泛化 AI 陪伴收敛到具体职场压力场景，以结构化对话、长期记忆、安全边界和数据删除权组织完整体验。",
    tags: ["对话工作流", "长期记忆", "安全治理", "评测框架"],
    targetUsers: [
      "遭遇临时加活、汇报焦虑、沟通冲突等具体职场事件的人",
      "需要先表达、再梳理，并形成十分钟内可开始行动的人",
    ],
    problemHeading: "用户需要的不是诊断，而是一套可控的整理过程。",
    problem:
      "泛化陪伴范围过大，成功标准模糊，也容易触及心理诊断和依赖风险。用户真正需要的不是一个替自己判断的聊天机器人，而是一套能把事实、情绪、担忧、需要与行动分开的整理过程。",
    decisions: [
      {
        title: "先用规则跑通任务，再接模型",
        body: "第一阶段先验证三种开场与五步对话是否完整；第二阶段才用模型处理自由表达，避免一开始就把模型能力误当成产品价值。",
      },
      {
        title: "产品控制阶段，模型负责表达",
        body: "对话沿事件—情绪—担忧—需要—行动推进；结构化 JSON 把模型输出连接到快捷回答与复盘卡，而不是让模型自由漂移。",
      },
      {
        title: "匿名身份优先于账号体系",
        body: "使用同浏览器匿名身份保存历史，暂不引入注册、找回密码与跨设备同步，把复杂度留给真正需要验证的核心任务。",
      },
      {
        title: "长期记忆必须可控且克制",
        body: "限定记忆类别、数量和引用方式；历史信息只能以试探性表达出现，不能把系统推测当作本次事实。",
      },
    ],
    workflow: [
      "选择支持模式",
      "识别具体事件",
      "逐步梳理情绪与担忧",
      "形成最小行动",
      "生成复盘卡",
      "提炼结构化记忆",
    ],
    metrics: [
      {
        value: "30",
        label: "组评测框架",
        detail: "覆盖正常任务、越界、安全和异常场景，尚待正式执行",
      },
      {
        value: "7",
        label: "条联调消息",
        detail: "一次验收会话保存的开场、用户与助手消息",
      },
      {
        value: "4",
        label: "条结构化记忆",
        detail: "联调中完成提炼并在新会话验证跨会话引用",
      },
    ],
    results: [
      "完成真实模型接入、匿名历史、结构化长期记忆、复盘卡和私密部署。",
      "端到端联调完成连续三轮模型回复、七条历史消息和四条记忆提炼。",
      "为高风险表达、模型空响应、网络失败和数据删除设计明确路径。",
      "测试结束后调用全部数据删除接口，验收记录已清除。",
    ],
    reflections: [
      "当前联调只证明功能链路可用，不能包装成真实用户价值、准确率或留存结果。",
      "长期记忆的下一步不是扩大数量，而是让用户查看、编辑或拒绝写入。",
      "公开访问前仍需完成最小用户验证、评测执行、成本防护和本地化安全资源。",
    ],
    nextSteps: [
      "访谈 5–8 位目标用户，验证对话保存与长期记忆意愿。",
      "让 5 位用户完成一次五步任务并观察中断点。",
      "执行 30 组评测样本，记录复盘准确度与最小行动接受度。",
    ],
    repository: "https://github.com/ninocusarch-alt/workplace-emotion-demo",
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
export const github = "https://github.com/ninocusarch-alt/workplace-emotion-demo";
