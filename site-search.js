const FALLBACK_SEARCH_INDEX = [
  {
    title: "About EXTEND Lab",
    titleZh: "关于 EXTEND Lab",
    url: "about/",
    category: "About",
    categoryZh: "关于",
    text: "mission values break boundaries unlock possibilities reinforcement learning multi-agent systems robotics embodied intelligence",
    textZh: "使命 价值观 打破边界 无限可能 强化学习 多智能体系统 机器人 具身智能"
  },
  {
    title: "News: Multi-Agent Communication Paper Revision",
    titleZh: "动态：多智能体通信论文大修",
    url: "news/#news-publication-tmlcn",
    category: "News",
    categoryZh: "动态",
    text: "xinren zhang machine learning in communications and networking major revision multi-agent communication protocols",
    textZh: "张馨仁 大修 多智能体 通信协议 强化学习"
  },
  {
    title: "News: IEEE TMC Paper Accepted",
    titleZh: "动态：IEEE TMC 论文接收",
    url: "news/#news-publication-tmc",
    category: "News",
    categoryZh: "动态",
    text: "jianing zheng ieee transactions on mobile computing multimodal federated learning accepted paper",
    textZh: "郑佳宁 TMC 接收 多模态 联邦学习"
  },
  {
    title: "News: Media Coverage",
    titleZh: "动态：媒体报道",
    url: "news/#news-media-joint-lab-forum",
    category: "News",
    categoryZh: "动态",
    text: "dr jiadong yu diandong joint laboratory media coverage data center heterogeneous computing resources",
    textZh: "于佳冬 点动 联合实验室 媒体报道 数据中心 异构计算"
  },
  {
    title: "Events: The Evolution of Vision-Language-Action Models",
    titleZh: "活动：视觉-语言-动作模型的演进",
    url: "events/#event-guanghui-vla-evolution",
    category: "Events",
    categoryZh: "活动",
    text: "extend sharing guanghui song vision language action models VLA action generation planning real-time control reinforcement learning human video memory world models 3D tactile",
    textZh: "展开讲讲 宋光辉 视觉语言动作模型 VLA 动作生成 规划 实时控制 强化学习 人类视频 记忆 世界模型 3D 触觉"
  },
  {
    title: "Events: OpenClaw and AI Agent",
    titleZh: "活动：OpenClaw 与 AI Agent",
    url: "events/#event-openclaw-ai-agent",
    category: "Events",
    categoryZh: "活动",
    text: "extend sharing openclaw ai agent jiale li tools claude code internal sharing session",
    textZh: "展开讲讲 OpenClaw AI Agent 李佳乐 Claude Code"
  },
  {
    title: "Research: Multi-Agent Systems",
    titleZh: "研究：多智能体系统",
    url: "research/",
    category: "Research",
    categoryZh: "研究",
    text: "multi-agent systems collaborative competitive intelligence cyber-physical tasks",
    textZh: "多智能体系统 协作 竞争 智能 信息物理"
  },
  {
    title: "Research: Robotic/Embodied AI",
    titleZh: "研究：机器人 / 具身智能",
    url: "research/",
    category: "Research",
    categoryZh: "研究",
    text: "robotic embodied ai perception adaptation dynamic environments",
    textZh: "机器人 具身智能 感知 适应 动态环境"
  },
  {
    title: "Research: Simulation-to-Reality RL",
    titleZh: "研究：仿真到现实强化学习",
    url: "research/",
    category: "Research",
    categoryZh: "研究",
    text: "simulation to reality reinforcement learning physical deployment training environments",
    textZh: "仿真到现实 强化学习 物理部署"
  },
  {
    title: "Research: Edge Intelligence and Wireless Systems",
    titleZh: "研究：边缘智能与无线系统",
    url: "research/",
    category: "Research",
    categoryZh: "研究",
    text: "edge intelligence wireless systems resource allocation communications intelligent infrastructure",
    textZh: "边缘智能 无线系统 资源分配 通信"
  },
  {
    title: "Projects",
    titleZh: "项目",
    url: "projects/",
    category: "Projects",
    categoryZh: "项目",
    text: "funded projects grants sponsored collaborations bristol guangdong diandong blockchain smart factories",
    textZh: "资助项目 合作 布里斯托 广东 点动 区块链 智能工厂"
  },
  {
    title: "People",
    titleZh: "成员",
    url: "people/",
    category: "People",
    categoryZh: "成员",
    text: "jiadong yu hao xiong xinren zhang jianing zheng yulong zhang guangzhi zhu nianfu wang phd mphil visiting students",
    textZh: "于佳冬 熊浩 张馨仁 郑佳宁 张育龙 张子儒 张栩棱 李佳乐 朱光智 王年福 博士生 硕士 访问学生"
  },
  {
    title: "Research Publications",
    titleZh: "研究论文",
    url: "research/#publications",
    category: "Research",
    categoryZh: "研究",
    text: "journal articles conference papers ieee twc tmc tits wireless communications internet of things",
    textZh: "期刊论文 会议论文 IEEE TWC TMC TITS 无线通信 物联网"
  },
  {
    title: "EXTEND Insights",
    titleZh: "EXTEND 洞见",
    url: "insights/",
    category: "Insights",
    categoryZh: "洞见",
    text: "technical articles paper explainers tutorials demos research insights",
    textZh: "技术文章 论文解读 教程 演示 研究洞见"
  },
  {
    title: "Learning Communication-Efficient Protocols in Multi-Agent Reinforcement Learning",
    titleZh: "多智能体强化学习中的高效通信协议",
    url: "insights/learning-communication-efficient-protocols-in-marl/",
    category: "Insights",
    categoryZh: "洞见",
    text: "multi-agent reinforcement learning MARL communication efficiency protocols partial observability CTDE IEI SEI TEI traffic junction Xinren Zhang Jiadong Yu",
    textZh: "多智能体强化学习 MARL 通信效率 通信协议 部分可观测 集中训练分散执行 IEI SEI TEI 交通路口 张馨仁 于佳冬"
  },
  {
    title: "The Evolution of Vision-Language-Action Models",
    titleZh: "视觉-语言-动作模型的演进",
    url: "insights/evolution-of-vision-language-action-models/",
    category: "Insights",
    categoryZh: "洞见",
    text: "vision language action VLA robotics embodied intelligence action generation planning real-time control reinforcement learning human video memory world models 3D tactile Guanghui Song Jiadong Yu",
    textZh: "视觉语言动作模型 VLA 机器人 具身智能 动作生成 规划 实时控制 强化学习 人类视频 记忆 世界模型 3D 触觉 宋光辉 于佳冬"
  },
  {
    title: "OpenClaw and the Anatomy of an AI Agent",
    titleZh: "OpenClaw 与 AI Agent 的构造",
    url: "insights/openclaw-from-language-models-to-action/",
    category: "Insights",
    categoryZh: "洞见",
    text: "openclaw ai agent runtime prompts tools skills subagents memory heartbeat scheduling context engineering safety robotics multi-agent systems",
    textZh: "OpenClaw AI智能体 运行时 提示词 工具 技能 子智能体 记忆 心跳 定时任务 上下文工程 安全 机器人 多智能体系统"
  },
  {
    title: "Collaborate",
    titleZh: "合作",
    url: "collaborate/",
    category: "Collaborate",
    categoryZh: "合作",
    text: "collaboration funding partners graduate students undergraduate students visiting phd scholars application materials",
    textZh: "合作 资助伙伴 研究生 本科生 访问博士 学者 申请材料"
  }
];

function getSiteSearchIndex() {
  if (
    typeof window !== "undefined" &&
    window.EXTEND_SITE_CONTENT &&
    typeof window.EXTEND_SITE_CONTENT.getSearchIndex === "function"
  ) {
    return window.EXTEND_SITE_CONTENT.getSearchIndex();
  }

  const isChinese =
    typeof window !== "undefined" &&
    window.EXTEND_I18N &&
    typeof window.EXTEND_I18N.getLanguage === "function" &&
    window.EXTEND_I18N.getLanguage() === "zh";

  return FALLBACK_SEARCH_INDEX.map((entry) => ({
    title: isChinese && entry.titleZh ? entry.titleZh : entry.title,
    url: entry.url,
    category: isChinese && entry.categoryZh ? entry.categoryZh : entry.category,
    text: [entry.text, entry.textZh].filter(Boolean).join(" ")
  }));
}

function t(key, fallback) {
  return typeof window !== "undefined" &&
    window.EXTEND_I18N &&
    typeof window.EXTEND_I18N.t === "function"
    ? window.EXTEND_I18N.t(key, {}, fallback)
    : fallback;
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeSearchText(text) {
  return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function scoreSearchEntry(entry, terms) {
  const haystack = normalizeSearchText(`${entry.title} ${entry.category} ${entry.text}`);
  let score = 0;

  for (const term of terms) {
    if (!term) continue;
    if (normalizeSearchText(entry.title).includes(term)) score += 8;
    if (normalizeSearchText(entry.category).includes(term)) score += 4;
    if (haystack.includes(term)) score += 2;
  }

  return score;
}

function buildResultMarkup(entry) {
  return `
    <a class="site-search-result" href="${entry.url}">
      <span class="site-search-result-title">${escapeHtml(entry.title)}</span>
      <span class="site-search-result-meta">${escapeHtml(entry.category)}</span>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".site-search").forEach((searchRoot) => {
    const input = searchRoot.querySelector(".site-search-input");
    const results = searchRoot.querySelector(".site-search-results");

    if (!input || !results) return;

    const applySearchTranslations = () => {
      input.placeholder = t("common.searchPlaceholder", "Search site");
      input.setAttribute("aria-label", t("common.searchAriaLabel", "Search site"));
    };

    const closeResults = () => {
      results.hidden = true;
      results.innerHTML = "";
    };

    const renderResults = (query) => {
      const normalizedQuery = normalizeSearchText(query);
      if (normalizedQuery.length < 2) {
        closeResults();
        return;
      }

      const terms = normalizedQuery.split(" ");
      const matches = getSiteSearchIndex()
        .map((entry) => ({ entry, score: scoreSearchEntry(entry, terms) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map((item) => item.entry);

      if (!matches.length) {
        results.innerHTML = `<div class="site-search-empty">${escapeHtml(
          t("common.noResults", "No results found.")
        )}</div>`;
        results.hidden = false;
        return;
      }

      results.innerHTML = matches.map(buildResultMarkup).join("");
      results.hidden = false;
    };

    input.addEventListener("input", (event) => {
      renderResults(event.target.value);
    });

    input.addEventListener("focus", (event) => {
      if (event.target.value.trim().length >= 2) {
        renderResults(event.target.value);
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeResults();
        input.blur();
      }

      if (event.key === "Enter") {
        const firstResult = results.querySelector(".site-search-result");
        if (firstResult) {
          window.location.href = firstResult.href;
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (!searchRoot.contains(event.target)) {
        closeResults();
      }
    });

    window.addEventListener("extend:languagechange", () => {
      applySearchTranslations();
      if (input.value.trim().length >= 2) {
        renderResults(input.value);
      } else {
        closeResults();
      }
    });

    applySearchTranslations();
  });
});
