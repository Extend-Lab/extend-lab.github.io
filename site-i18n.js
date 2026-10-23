(function () {
  const STORAGE_KEY = "extend-site-language";
  const SUPPORTED_LANGUAGES = ["en", "zh"];

  const MESSAGES = {
    en: {
      common: {
        nav: ["About", "News", "Events", "Research", "Projects", "People", "Insights", "Collaborate"],
        searchPlaceholder: "Search site",
        searchAriaLabel: "Search site",
        noResults: "No results found.",
        toggleNavigation: "Toggle navigation",
        languageMenuLabel: "Language",
        languageToggleLabel: "Switch language",
        languageShort: "EN",
        languageOptions: {
          en: "English",
          zh: "中文"
        }
      },
      archive: {
        findMore: "Find More",
        showLess: "Show Less"
      },
      content: {
        newsLabel: "News",
        eventsLabel: "Events",
        highlightNavigation: "Highlight navigation",
        highlightSet: "Show highlight set {{index}}"
      }
    },
    zh: {
      common: {
        nav: ["关于", "动态", "活动", "研究", "项目", "成员", "洞见", "合作"],
        searchPlaceholder: "搜索站内内容",
        searchAriaLabel: "搜索站内内容",
        noResults: "未找到相关结果。",
        toggleNavigation: "切换导航",
        languageMenuLabel: "语言",
        languageToggleLabel: "切换语言",
        languageShort: "中文",
        languageOptions: {
          en: "English",
          zh: "中文"
        }
      },
      archive: {
        findMore: "查看更多",
        showLess: "收起"
      },
      content: {
        newsLabel: "动态",
        eventsLabel: "活动",
        highlightNavigation: "精选内容导航",
        highlightSet: "查看第 {{index}} 组精选"
      },
      pages: {
        index: {
          title: "EXTEND Lab",
          metaDescription: "香港科技大学（广州）EXTEND Lab，专注强化学习、多智能体系统、机器人与具身智能、边缘智能及无线系统研究。",
          updates: [
            {
              selector: ".hero-eyebrow",
              text: "学术研究实验室"
            },
            {
              selector: ".hero-title",
              html: "打破边界，<br>无限可能。"
            },
            {
              selector: ".hero-subtitle",
              text: "EXTEND Lab 面向未来智能系统，推进强化学习、多智能体系统与边缘智能研究。"
            },
            {
              selector: ".hero-button-row .index-cta",
              text: "了解更多"
            },
            {
              selector: ".section-kicker",
              multiText: ["研究方向", "实验室动态"]
            },
            {
              selector: ".section-heading",
              multiText: ["我们探索的主题", "最新亮点"]
            },
            {
              selector: ".card-grid .feature-card",
              multiHtml: [
                "<h3>多智能体系统</h3><p>面向复杂信息物理系统与真实世界任务的协作式与竞争式智能。</p>",
                "<h3>机器人 / 具身智能</h3><p>让智能体能够在不确定、动态环境中感知、行动、适应并稳健学习。</p>",
                "<h3>仿真到现实强化学习</h3><p>通过稳健的强化学习流程，打通虚拟训练环境与真实物理部署之间的鸿沟。</p>",
                "<h3>边缘智能与无线系统</h3><p>聚焦学习驱动的通信、资源分配与智能基础设施。</p>"
              ]
            },
            {
              selector: ".index-cta-wrap-research .index-cta",
              text: "继续探索"
            }
          ]
        },
        about: {
          title: "关于 EXTEND Lab – EXTEND Lab",
          metaDescription: "关于 EXTEND Lab。",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "关于 EXTEND Lab"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "使命、价值观与研究方向。"
            },
            {
              selector: ".about-copy",
              html:
                "<p><strong>EXTEND Lab</strong> 位于中国广州的香港科技大学（广州），建立在一个朴素却充满雄心的信念之上：打破边界，无限可能。我们不仅把强化学习视为一种算法，更把它当作一种思维方式，用以持续迭代我们的研究项目，也推动每位探索者的个人成长。</p>" +
                "<p>好奇心、执行力与韧性，是驱动我们前行的核心价值观；从提出研究问题，到推动真实世界中的系统落地，这些价值始终贯穿其中。</p>" +
                "<p>我们的使命，是通过多智能体系统推动物理世界中的智能发展，并把正在发生的 AI 变革视为重新想象机器与人类如何协同创造价值的机会。</p>" +
                "<p>在 EXTEND Lab，我们重点关注：</p>" +
                "<ul>" +
                "<li>面向真实物理任务的协作式与竞争式多智能体系统</li>" +
                "<li>可在动态环境中感知、行动并持续适应的具身智能与智能体</li>" +
                "<li>利用强化学习打通仿真训练与真实系统部署之间的桥梁</li>" +
                "</ul>" +
                "<p>我们欢迎对未知保持热情的合作伙伴加入。无论你是研究者、学生，还是产业伙伴，只要你同样被好奇心与韧性驱动，都欢迎与我们一起拓展智能的边界。</p>" +
                "<p>让我们一起打破边界。</p>" +
                "<p>联系：<a href=\"mailto:extend-lab@hkust-gz.edu.cn\" class=\"email\">extend-lab@hkust-gz.edu.cn</a></p>"
            }
          ]
        },
        research: {
          title: "研究 – EXTEND Lab",
          metaDescription: "EXTEND Lab 的研究方向。",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "研究"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "EXTEND Lab 的核心研究方向。"
            },
            {
              selector: ".section-kicker",
              multiText: ["研究方向", "征稿信息", "论文成果"]
            },
            {
              selector: ".section-heading",
              multiText: ["我们探索的主题", "开放征集与征稿", "精选论文"]
            },
            {
              selector: ".card-grid .feature-card",
              multiHtml: [
                "<h3>多智能体系统</h3><p>面向复杂信息物理系统与真实世界任务的协作式与竞争式智能。</p>",
                "<h3>机器人 / 具身智能</h3><p>让智能体能够在不确定、动态环境中感知、行动、适应并稳健学习。</p>",
                "<h3>仿真到现实强化学习</h3><p>通过稳健的强化学习流程，打通虚拟训练环境与真实物理部署之间的鸿沟。</p>",
                "<h3>边缘智能与无线系统</h3><p>聚焦学习驱动的通信、资源分配与智能基础设施。</p>"
              ]
            },
            {
              selector: ".research-poster-hint",
              text: "点击海报查看大图"
            },
            {
              selector: ".research-cfp-link-card",
              multiHtml: [
                "<p class=\"event-feature-date\">2026年5月29日 · 英国</p>" +
                  "<h3 class=\"event-feature-title\">海报征集：Towards Edge Intelligence</h3>" +
                  "<p class=\"event-feature-text\"><strong>首届 Towards Edge Intelligence Seminar</strong> 由布里斯托大学与香港科技大学（广州）联合主办，诚邀博士生分享边缘智能、多智能体系统、感知、计算、通信、无线 AI、联邦学习与网络智能等相关研究。</p>" +
                  "<p class=\"research-cfp-meta\"><strong>提交截止：</strong>2026年5月18日</p>" +
                  "<p class=\"research-cfp-website\">活动网站：extend-lab.github.io/TEI/</p>",
                "<p class=\"event-feature-date\">2026年9月1日至4日 · 新加坡</p>" +
                  "<h3 class=\"event-feature-title\">征稿启事：面向情境感知通信的多智能体智能与连接</h3>" +
                  "<p class=\"event-feature-text\">我们正在 <strong>IEEE PIMRC 2026</strong> 组织一个工作坊，聚焦多智能体智能与通信网络在情境感知连接中的深度协同。诚邀相关方向投稿与交流。</p>" +
                  "<p class=\"research-cfp-meta\"><strong>截稿日期：</strong>2026年6月5日</p>" +
                  "<p class=\"research-cfp-website\">工作坊网站：sites.google.com/york.ac.uk/pimrc2026-multi-agent-intel</p>"
              ]
            },
            {
              selector: ".research-poster-trigger",
              attrs: {
                "aria-label": "打开征集海报"
              }
            },
            {
              selector: ".research-poster-modal",
              attrs: {
                "aria-label": "征集海报预览"
              }
            },
            {
              selector: ".research-poster-close",
              attrs: {
                "aria-label": "关闭海报预览"
              }
            },
            {
              selector: ".research-poster-toolbar",
              attrs: {
                "aria-label": "海报缩放控制"
              }
            },
            {
              selector: "[data-action='zoom-out']",
              text: "−",
              attrs: {
                "aria-label": "缩小"
              }
            },
            {
              selector: "[data-action='zoom-in']",
              text: "+",
              attrs: {
                "aria-label": "放大"
              }
            },
            {
              selector: ".research-poster-tool-reset",
              text: "重置"
            },
            {
              selector: ".research-publications .publication-stat-label",
              multiText: ["期刊论文", "会议论文"]
            },
            {
              selector: ".publication-preview-heading h3",
              multiText: ["最新期刊论文", "最新会议论文"]
            },
            {
              selector: ".research-publications .archive-toggle-button",
              text: "查看更多"
            }
          ]
        },
        insights: {
          title: "EXTEND 博客 – EXTEND Lab",
          metaDescription: "来自 EXTEND Lab 的技术文章、论文解读、教程与演示。",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "EXTEND 博客"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "来自 EXTEND Lab 的技术文章、论文解读、教程与演示。"
            },
            {
              selector: ".blog-content .section-kicker",
              text: "浏览洞见"
            },
            {
              selector: ".blog-content .section-heading",
              text: "按主题与形式探索"
            },
            {
              selector: ".blog-tag",
              multiText: ["全部", "技术文章", "论文解读", "教程", "演示"]
            },
            {
              selector: ".blog-tag-list",
              attrs: {
                "aria-label": "博客内容类型"
              }
            },
            {
              selector: ".blog-empty-panel h3",
              text: "实验室故事即将上线。"
            },
            {
              selector: ".blog-empty-panel p",
              text: "新的技术笔记、研究解读、实践教程与演示将在这里发布。"
            }
          ]
        },
        people: {
          title: "成员 – EXTEND Lab",
          metaDescription: "EXTEND Lab 成员。",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "成员"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "教师、学生与合作成员。"
            },
            {
              selector: ".section-heading",
              multiText: ["研究团队", "合作成员", "校友"]
            },
            {
              selector: ".person-body",
              multiHtml: [
                "<h3>于佳冬</h3><p><span class=\"person-role-line\">助理教授</span><span class=\"person-role-line\">物联网和人工智能学域</span></p>",
                "<h3>张育龙</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2023年春季至今</span></p>",
                "<h3>熊浩</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2023年秋季至今</span></p>",
                "<h3>张子儒</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2024年秋季至今</span></p>",
                "<h3>郑嘉宁</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2024年秋季至今</span></p>",
                "<h3>张栩棱</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2024年秋季至今</span></p>",
                "<h3>张馨仁</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2025年秋季至今</span></p>",
                "<h3>李佳乐</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2025年秋季至今</span></p>",
                "<h3>宋光辉</h3><p><span class=\"person-role-line\">博士生</span><span class=\"person-role-line\">2026年秋季至今</span></p>",
                "<h3>朱光智</h3><p>硕士研究生</p>",
                "<h3>王年福</h3><p>来自哈尔滨工业大学（深圳）与鹏城实验室的访问博士生</p>",
                "<h3>陆荣琦</h3><p><span class=\"person-role-line\">硕士毕业于西安电子科技大学。</span><span class=\"person-role-line\">即将入职华为。</span></p>",
                "<h3>张耀尹</h3><p>来自复旦大学的访问本科生</p>"
              ]
            },
            {
              selector: ".table thead th",
              multiText: ["姓名", "之前团队角色", "去向"]
            },
            {
              selector: ".table tbody tr td:nth-child(1)",
              multiText: ["商晨", "成思希"]
            },
            {
              selector: ".table tbody tr td:nth-child(2)",
              multiText: ["2024年-2025年研究助理", "2025年研究助理"]
            },
            {
              selector: ".table tbody tr td:nth-child(3)",
              multiText: ["悉尼科技大学博士生", "新加坡科技设计大学博士生"]
            }
          ]
        },
        collaborate: {
          title: "合作 – EXTEND Lab",
          metaDescription: "EXTEND Lab 合作与招募信息。",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "合作"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "合作机会、联合研究与资助路径。"
            },
            {
              selector: ".section-kicker",
              multiText: ["概览", "参与方式", "来访申请"]
            },
            {
              selector: ".section-heading",
              multiText: ["与 EXTEND Lab 一起工作", "参与渠道", "申请材料"]
            },
            {
              selector: ".support-intro",
              html:
                "<p>我们欢迎希望与我们一起围绕强化学习、多智能体系统、边缘智能与机器人构建智能系统的学生、访问学者、资助伙伴与产业合作方。</p>"
            },
            {
              selector: ".support-card",
              multiHtml: [
                "<h3>合作与资助伙伴</h3><p>我们积极寻求资助伙伴和产业合作方，共同支持有潜力的学生，并推动智能系统、边缘计算与自主机器人等方向的跨学科研究。</p>",
                "<h3>潜在研究生申请者</h3><p>我们欢迎对 RL、MARL、MAS、边缘智能与机器人有浓厚兴趣、且具备扎实基础的 MPhil 与 PhD 申请者。</p><ul class=\"support-list\"><li>欢迎来自 HKUST(GZ) AI、ROAS、DSA、IoT 等学域的学生申请。</li><li>也欢迎通过 Red Bird MPhil/PhD Program 以及其他交叉培养通道申请。</li></ul>",
                "<h3>本科生</h3><p>欢迎来自 HKUST(GZ)、HKUST 清水湾校区及其他高校的优秀本科生参与我们的研究项目。</p><ul class=\"support-list\"><li>UG Research Program 是积累实践科研经验的重要入口。</li><li>也欢迎对智能算法与自主系统感兴趣的同学通过 Directed Study Projects 加入。</li></ul>",
                "<h3>访问博士生与访问学者</h3><p>我们欢迎来自世界各地、研究兴趣与实验室方向契合的访问博士生和访问学者。</p><ul class=\"support-list\"><li>优先方向包括 RL、MARL、MAS、边缘智能与机器人。</li><li>对于与团队当前研究紧密相关的来访计划，我们可以提供支持。</li></ul>",
                "<h3>所需材料</h3><ul class=\"support-list\"><li>个人简历</li><li>动机信 / Cover letter</li><li>围绕 RL、MARL、MAS、边缘智能或机器人的研究计划</li><li>如适用，语言能力证明</li><li>如方便，可提供一封推荐信</li></ul>",
                "<h3>我们可提供的支持</h3><p>对于研究兴趣高度契合的申请者，我们可提供有条件邀请函，以支持奖学金或资助申请。</p><p class=\"support-note\">如有需要，我们也可以分享一份非正式流程说明，帮助访问学者了解 HKUST(GZ) 的行政办理流程。</p><p class=\"support-note\">联系：<a href=\"mailto:extend-lab@hkust-gz.edu.cn\" class=\"email\">extend-lab@hkust-gz.edu.cn</a></p>"
              ]
            }
          ]
        },
        news: {
          title: "动态 – EXTEND Lab",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "动态"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "研究亮点、论文进展与媒体报道。"
            },
            {
              selector: "#news-publications .section-kicker",
              text: "论文动态"
            },
            {
              selector: "#news-publications .section-heading",
              text: "论文进展"
            },
            {
              selector: "#news-publications .news-section-text",
              text: "实验室近期的期刊进展与重要论文更新。"
            },
            {
              selector: "#news-media .section-kicker",
              text: "媒体报道"
            },
            {
              selector: "#news-media .section-heading",
              text: "媒体报道"
            },
            {
              selector: "#news-media .news-section-text",
              text: "精选报道与受邀采访，展示 EXTEND Lab 的研究与交流活动。"
            }
          ]
        },
        events: {
          title: "活动 – EXTEND Lab",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "活动"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "来访交流、分享会与社区活动。"
            },
            {
              selector: ".section-kicker",
              multiText: ["精选活动", "精选活动"]
            },
            {
              selector: ".section-heading",
              multiText: ["近期活动", "展开讲讲"]
            },
            {
              selector: ".news-section-text",
              multiText: [
                "记录实验室来访、对外交流与合作活动。",
                "记录团队内部围绕工具、想法与研究实践展开讲讲的分享活动。"
              ]
            }
          ]
        },
        projects: {
          title: "项目 – EXTEND Lab",
          metaDescription: "EXTEND Lab 项目。",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "项目"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "在研项目与合作资助。"
            },
            {
              selector: ".section-kicker",
              text: "项目布局"
            },
            {
              selector: ".section-heading",
              text: "当前项目"
            },
            {
              selector: ".project-table thead th",
              multiText: ["项目", "资助方", "经费", "开始时间", "结束时间"]
            },
            {
              selector: ".project-title-vr",
              text: "面向虚拟现实用户体验提升的移动边缘智能资源分配理论与方法研究"
            },
            {
              selector: ".project-funder-vr",
              text: "广东省基础与应用基础研究基金区域联合基金青年基金"
            },
            {
              selector: ".project-funding-vr",
              text: "CNY 100k"
            },
            {
              selector: ".project-title-hrc",
              text: "面向建筑场景的人机协作中平滑且安全的鲁棒辅助行为生成"
            },
            {
              selector: ".project-funder-hrc",
              text: "粤港高校“1+1+1”联合资助计划"
            },
            {
              selector: ".project-title-quanzhun",
              text: "基于生成模型数据增强的工业图像与 CAD 识别算法预研"
            },
            {
              selector: ".project-funder-quanzhun",
              text: "广东泉准智能科技有限公司"
            },
            {
              selector: ".project-title-diandong",
              text: "智能区块链计算资源分配研究"
            },
            {
              selector: ".project-funder-diandong",
              text: "点动科技"
            },
            {
              selector: ".project-title-municipal",
              text: "面向智能工厂信息物理系统的同步与安全算法研究"
            },
            {
              selector: ".project-funder-municipal",
              text: "广州市校联合项目"
            },
            {
              selector: ".project-title-bristol",
              text: "面向情境感知的多智能体系统：感知、通信与计算"
            },
            {
              selector: ".project-funder-bristol",
              text: "布里斯托大学全球定位基金"
            },
            {
              selector: ".project-title-irs",
              text: "智能反射面辅助的边缘计算研究"
            },
            {
              selector: ".project-funder-postdoc",
              text: "广州市及南沙区博士后资助"
            },
            {
              selector: "#project-detail-1 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid\"><div><h3>团队成员</h3><ul><li>刘小兰博士，布里斯托大学</li><li>于佳冬博士，香港科技大学（广州）</li></ul></div><div><h3>项目简介</h3><p>围绕面向情境感知的多智能体系统，开展紧耦合感知、通信与分布式智能研究。</p><p>主题：迈向边缘智能：面向情境感知的感知、计算与通信的多智能体方法</p><div class=\"project-meta\"><p><strong>日期：</strong>2026年5月29日</p><p><strong>地点：</strong>英国布里斯托大学 BDFI（65 Avon St, Bristol, UK BS2 0PZ）</p></div></div></div>"
            },
            {
              selector: "#project-detail-2 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid\"><div><h3>团队成员</h3><ul><li>张子儒</li><li>张栩棱</li><li>王年福</li></ul></div><div><h3>项目简介</h3><p>开发面向工业图像与 CAD 理解任务的数据增强识别算法。</p></div></div>"
            },
            {
              selector: "#project-detail-3 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid\"><div><h3>团队成员</h3><ul><li>于佳冬博士，香港科技大学（广州）</li><li>于言滔博士，香港科技大学</li><li>张子儒</li></ul></div><div><h3>项目简介</h3><p>面向建筑作业场景，设计平滑且安全的人机协作鲁棒辅助行为。</p></div></div>"
            },
            {
              selector: "#project-detail-4 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid\"><div><h3>团队成员</h3><ul><li>于佳冬博士，香港科技大学（广州）</li><li>王雪超博士，香港科技大学（广州）</li><li>朱光智</li><li>熊浩</li><li>苏宏旭</li></ul></div><div><h3>项目简介</h3><p>设计区块链赋能系统中的智能计算资源分配策略。</p></div></div>"
            },
            {
              selector: "#project-detail-5 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid single-column\"><div><h3>项目简介</h3><p>开发用于智能工厂环境中可靠信息物理运行的同步与安全算法。</p></div></div>"
            },
            {
              selector: "#project-detail-7 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid single-column\"><div><h3>项目简介</h3><p>本项目研究面向虚拟现实用户体验提升的移动边缘智能资源分配理论与方法。</p></div></div>"
            },
            {
              selector: "#project-detail-6 .project-detail-panel",
              html:
                "<div class=\"project-detail-grid single-column\"><div><h3>项目简介</h3><p>研究智能反射面辅助移动边缘计算系统中的学习驱动优化方法。</p></div></div>"
            }
          ]
        },
        publications: {
          title: "论文 – EXTEND Lab",
          metaDescription: "EXTEND Lab 代表性论文。",
          updates: [
            {
              selector: ".archive-return-link",
              text: "返回研究"
            },
            {
              selector: ".quarto-title .title",
              text: "论文"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "EXTEND Lab 的期刊与会议论文。"
            },
            {
              selector: ".publication-stat-label",
              multiText: ["期刊论文", "会议论文"]
            },
            {
              selector: ".section-kicker",
              multiText: ["同行评审成果", "同行评审成果"]
            },
            {
              selector: ".section-heading",
              multiText: ["期刊论文", "会议论文"]
            }
          ]
        },
        resources: {
          title: "资源 – EXTEND Lab",
          updates: [
            {
              selector: ".quarto-title .title",
              text: "资源"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "模型、数据、开放课程与其他资源"
            },
            {
              selector: ".section-kicker",
              text: "开放材料"
            },
            {
              selector: ".section-heading",
              text: "资源"
            },
            {
              selector: ".empty-panel p",
              text: "该部分内容正在整理中，敬请期待。"
            }
          ]
        },
        "news/publication-highlights": {
          title: "论文进展 – EXTEND Lab",
          updates: [
            {
              selector: ".archive-return-link",
              text: "返回动态"
            },
            {
              selector: ".quarto-title .title",
              text: "论文进展"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "EXTEND Lab 全部与论文相关的动态。"
            }
          ]
        },
        "news/media-coverage": {
          title: "媒体报道 – EXTEND Lab",
          updates: [
            {
              selector: ".archive-return-link",
              text: "返回动态"
            },
            {
              selector: ".quarto-title .title",
              text: "媒体报道"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "EXTEND Lab 全部媒体相关报道与专题内容。"
            }
          ]
        },
        "events/recent-activity": {
          title: "近期活动 – EXTEND Lab",
          updates: [
            {
              selector: ".archive-return-link",
              text: "返回活动"
            },
            {
              selector: ".quarto-title .title",
              text: "近期活动"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "EXTEND Lab 的来访、交流与合作活动汇总。"
            }
          ]
        },
        "events/extend-sharing": {
          title: "展开讲讲 – EXTEND Lab",
          updates: [
            {
              selector: ".archive-return-link",
              text: "返回活动"
            },
            {
              selector: ".quarto-title .title",
              text: "展开讲讲"
            },
            {
              selector: ".quarto-title .subtitle",
              text: "EXTEND Lab 全部内部分享与交流活动。"
            }
          ]
        }
      }
    }
  };

  const originalState = {
    title: "",
    metaDescription: null,
    pageKey: "",
    pageUpdates: new Map()
  };

  function resolveLanguage(candidate) {
    return SUPPORTED_LANGUAGES.includes(candidate) ? candidate : "en";
  }

  function detectPreferredLanguage() {
    try {
      const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
        return storedLanguage;
      }
    } catch (error) {
      // Ignore storage failures and fall back to browser language.
    }

    if (typeof navigator !== "undefined") {
      const browserLanguage = String(navigator.language || "").toLowerCase();
      if (browserLanguage.startsWith("zh")) return "zh";
    }

    return "en";
  }

  let currentLanguage = detectPreferredLanguage();

  function getPageKey() {
    const pathname = (window.location && window.location.pathname) || "/";
    const normalized = pathname.replace(/index\.html$/, "").replace(/\/+$/, "");
    const segments = normalized.split("/").filter(Boolean);
    const pageRootIndex = segments.lastIndexOf("Page");
    const relevantSegments = pageRootIndex >= 0 ? segments.slice(pageRootIndex + 1) : segments;

    if (!relevantSegments.length) return "index";
    return relevantSegments.join("/");
  }

  function getMetaDescriptionNode() {
    return document.querySelector('meta[name="description"]');
  }

  function interpolate(template, params) {
    return String(template || "").replace(/\{\{(\w+)\}\}/g, (_, key) => {
      return Object.prototype.hasOwnProperty.call(params || {}, key) ? params[key] : "";
    });
  }

  function readMessage(lang, key) {
    const parts = key.split(".");
    let cursor = MESSAGES[lang];

    for (const part of parts) {
      if (!cursor || !Object.prototype.hasOwnProperty.call(cursor, part)) {
        return undefined;
      }
      cursor = cursor[part];
    }

    return cursor;
  }

  function t(key, params, fallback) {
    const language = getLanguage();
    const value = readMessage(language, key);
    const fallbackValue = value === undefined ? readMessage("en", key) : value;

    if (typeof fallbackValue === "string") {
      return interpolate(fallbackValue, params || {});
    }

    if (fallbackValue !== undefined) return fallbackValue;
    if (fallback !== undefined) return fallback;
    return key;
  }

  function getLanguage() {
    return currentLanguage;
  }

  function capturePageState(pageKey) {
    if (!pageKey || originalState.pageUpdates.has(pageKey)) return;

    const pageSpec = MESSAGES.zh.pages && MESSAGES.zh.pages[pageKey];
    if (!pageSpec) return;

    const snapshot = pageSpec.updates.map((update) => {
      const elements = Array.from(document.querySelectorAll(update.selector));
      return {
        selector: update.selector,
        innerHTML: elements.map((element) => element.innerHTML),
        textContent: elements.map((element) => element.textContent),
        attrs: update.attrs
          ? Object.keys(update.attrs).reduce((acc, attrName) => {
              acc[attrName] = elements.map((element) => element.getAttribute(attrName));
              return acc;
            }, {})
          : null
      };
    });

    originalState.pageUpdates.set(pageKey, snapshot);
  }

  function applyUpdate(update, restoreSnapshot) {
    const elements = Array.from(document.querySelectorAll(update.selector));
    if (!elements.length) return;

    if (restoreSnapshot) {
      elements.forEach((element, index) => {
        const originalHtml = restoreSnapshot.innerHTML[index];
        const originalText = restoreSnapshot.textContent[index];

        if (update.html !== undefined || update.multiHtml) {
          if (originalHtml !== undefined) {
            element.innerHTML = originalHtml;
          }
        } else if (update.text !== undefined || update.multiText) {
          if (originalText !== undefined) {
            element.textContent = originalText;
          }
        }

        if (restoreSnapshot.attrs) {
          Object.entries(restoreSnapshot.attrs).forEach(([attrName, values]) => {
            const originalValue = values[index];
            if (originalValue === null || originalValue === undefined) {
              element.removeAttribute(attrName);
            } else {
              element.setAttribute(attrName, originalValue);
            }
          });
        }
      });
      return;
    }

    if (update.multiText) {
      elements.forEach((element, index) => {
        if (update.multiText[index] !== undefined) {
          element.textContent = update.multiText[index];
        }
      });
    }

    if (update.multiHtml) {
      elements.forEach((element, index) => {
        if (update.multiHtml[index] !== undefined) {
          element.innerHTML = update.multiHtml[index];
        }
      });
    }

    if (update.text !== undefined) {
      elements.forEach((element) => {
        element.textContent = update.text;
      });
    }

    if (update.html !== undefined) {
      elements.forEach((element) => {
        element.innerHTML = update.html;
      });
    }

    if (update.attrs) {
      elements.forEach((element) => {
        Object.entries(update.attrs).forEach(([attrName, attrValue]) => {
          element.setAttribute(attrName, attrValue);
        });
      });
    }
  }

  function applyCommonTranslations(lang) {
    const navItems = document.querySelectorAll(".navbar-nav .menu-text");
    const navLabels = t("common.nav");
    navItems.forEach((element, index) => {
      if (navLabels[index]) {
        element.textContent = navLabels[index];
      }
    });

    const insightsLink = navItems[6] && navItems[6].closest("a");
    if (insightsLink) {
      insightsLink.setAttribute("href", "insights/");
    }

    document.querySelectorAll(".site-search-input").forEach((input) => {
      input.placeholder = t("common.searchPlaceholder");
      input.setAttribute("aria-label", t("common.searchAriaLabel"));
    });

    document.querySelectorAll(".navbar-toggler").forEach((button) => {
      button.setAttribute("aria-label", t("common.toggleNavigation"));
    });

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("xml:lang", lang);
    document.body.setAttribute("data-language", lang);
  }

  function applyProjectTableTranslations(lang) {
    if (getPageKey() !== "projects" || lang !== "zh") return;

    const projectRows = {
      "project-detail-7": {
        title: "面向虚拟现实用户体验提升的移动边缘智能资源分配理论与方法研究",
        funder: "广东省基础与应用基础研究基金区域联合基金青年基金",
        funding: "CNY 100k"
      },
      "project-detail-3": {
        title: "面向建筑场景的人机协作中平滑且安全的鲁棒辅助行为生成",
        funder: "粤港高校“1+1+1”联合资助计划"
      },
      "project-detail-2": {
        title: "基于生成模型数据增强的工业图像与 CAD 识别算法预研",
        funder: "广东泉准智能科技有限公司"
      },
      "project-detail-4": {
        title: "智能区块链计算资源分配研究",
        funder: "点动科技"
      },
      "project-detail-5": {
        title: "面向智能工厂信息物理系统的同步与安全算法研究",
        funder: "广州市校联合项目"
      },
      "project-detail-1": {
        title: "面向情境感知的多智能体系统：感知、通信与计算",
        funder: "布里斯托大学全球定位基金"
      },
      "project-detail-6": {
        title: "智能反射面辅助的边缘计算研究",
        funder: "广州市及南沙区博士后资助"
      }
    };

    document.querySelectorAll(".project-summary-row").forEach((row) => {
      const toggle = row.querySelector(".project-toggle");
      const rowSpec = projectRows[toggle && toggle.getAttribute("aria-controls")];
      if (!rowSpec) return;

      const title = row.querySelector(".project-toggle-title");
      const cells = row.querySelectorAll("td");
      if (title) title.textContent = rowSpec.title;
      if (cells[1]) cells[1].textContent = rowSpec.funder;
      if (rowSpec.funding && cells[2]) cells[2].textContent = rowSpec.funding;
    });
  }

  function restorePageState(pageKey) {
    document.title = originalState.title;

    const metaDescription = getMetaDescriptionNode();
    if (metaDescription && originalState.metaDescription !== null) {
      metaDescription.setAttribute("content", originalState.metaDescription);
    }

    const snapshot = originalState.pageUpdates.get(pageKey);
    const pageSpec = MESSAGES.zh.pages && MESSAGES.zh.pages[pageKey];
    if (!snapshot || !pageSpec) return;

    pageSpec.updates.forEach((update, index) => {
      applyUpdate(update, snapshot[index]);
    });
  }

  function applyPageTranslations(lang) {
    const pageKey = getPageKey();
    const pageSpec = MESSAGES.zh.pages && MESSAGES.zh.pages[pageKey];

    if (!pageSpec) return;

    if (lang === "en") {
      restorePageState(pageKey);
      return;
    }

    if (pageSpec.title) {
      document.title = pageSpec.title;
    }

    const metaDescription = getMetaDescriptionNode();
    if (metaDescription && pageSpec.metaDescription) {
      metaDescription.setAttribute("content", pageSpec.metaDescription);
    }

    pageSpec.updates.forEach((update) => applyUpdate(update));
    applyProjectTableTranslations(lang);
  }

  function updateLanguageSwitcher() {
    const toggle = document.querySelector(".language-switcher-button");
    if (!toggle) return;

    const menu = document.querySelector(".language-switcher-menu");
    if (menu) {
      menu.setAttribute("aria-label", t("common.languageMenuLabel"));
    }

    const label = toggle.querySelector(".language-switcher-current");
    if (label) {
      label.textContent = t("common.languageShort");
    }

    toggle.setAttribute("aria-label", t("common.languageToggleLabel"));

    document.querySelectorAll(".language-switcher-option").forEach((button) => {
      const optionLanguage = button.getAttribute("data-language");
      const isActive = optionLanguage === getLanguage();
      const optionLabel = t(`common.languageOptions.${optionLanguage}`);

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.textContent = optionLabel;
    });
  }

  function injectLanguageSwitcher() {
    if (document.querySelector(".language-switcher")) return;

    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (!navbarCollapse) return;

    const languageSwitcher = document.createElement("div");
    languageSwitcher.className = "language-switcher dropdown";
    languageSwitcher.innerHTML =
      '<button class="btn language-switcher-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">' +
      '<i class="bi bi-globe2" aria-hidden="true"></i>' +
      '<span class="language-switcher-current"></span>' +
      "</button>" +
      '<ul class="dropdown-menu dropdown-menu-end language-switcher-menu" aria-label="' +
      t("common.languageMenuLabel") +
      '">' +
      '<li><button type="button" class="dropdown-item language-switcher-option" data-language="en"></button></li>' +
      '<li><button type="button" class="dropdown-item language-switcher-option" data-language="zh"></button></li>' +
      "</ul>";

    const searchRoot = navbarCollapse.querySelector(".site-search");
    if (searchRoot) {
      navbarCollapse.insertBefore(languageSwitcher, searchRoot);
    } else {
      navbarCollapse.appendChild(languageSwitcher);
    }

    languageSwitcher.querySelectorAll(".language-switcher-option").forEach((button) => {
      button.addEventListener("click", () => {
        const nextLanguage = button.getAttribute("data-language");
        setLanguage(nextLanguage);
      });
    });

    updateLanguageSwitcher();
  }

  function applyTranslations(lang) {
    applyCommonTranslations(lang);
    applyPageTranslations(lang);
    updateLanguageSwitcher();
  }

  function setLanguage(nextLanguage) {
    const resolvedLanguage = resolveLanguage(nextLanguage);
    currentLanguage = resolvedLanguage;

    try {
      window.localStorage.setItem(STORAGE_KEY, resolvedLanguage);
    } catch (error) {
      // Ignore storage write failures.
    }

    applyTranslations(resolvedLanguage);
    window.dispatchEvent(
      new CustomEvent("extend:languagechange", {
        detail: {
          language: resolvedLanguage
        }
      })
    );
  }

  function initializeI18n() {
    originalState.title = document.title;
    originalState.metaDescription = getMetaDescriptionNode()
      ? getMetaDescriptionNode().getAttribute("content")
      : null;
    originalState.pageKey = getPageKey();
    capturePageState(originalState.pageKey);

    injectLanguageSwitcher();
    applyTranslations(currentLanguage);
  }

  window.EXTEND_I18N = {
    getLanguage,
    setLanguage,
    t
  };

  document.addEventListener("DOMContentLoaded", initializeI18n);
})();
