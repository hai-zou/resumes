import { GitHubIcon } from "@/components/icons";
import { LinkIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "邹海",
  initials: "ZH",
  location: "江西赣州",
  locationLink: "https://www.google.com/maps/place/ganzhou",
  about: "Web 前端开发工程师",
  experience: "三年经验",
  summary: "能够独立完成从设计到开发的全流程，具有敏捷开发经验。具备优秀的团队协作能力和代码优化经验，致力于提供高效、用户友好的 Web 解决方案。",
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://blog.izou.top",
  contact: {
    email: "me@izou.top",
    tel: "17779036853",
    social: [
      {
        name: "博客",
        url: "https://blog.izou.top",
        icon: LinkIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/hai-zou",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "新余学院",
      degree: "本科 | 计算机科学与技术专业",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "深圳市无限进制科技有限公司",
      link: "https://www.stary.com",
      badges: [],
      title: "Web 前端开发工程师",
      start: "2020/12",
      end: "2024/10",
      description: [
        "主导某项目的 UI 框架重构，组件设计全面升级，提升了整体代码质量、可维护性和扩展性，同时优化了用户体验。",
        "负责框架升级，解决框架升级后遇到的问题。",
        "实现组件化开发，封装可复用的 UI 组件，为多个项目节省了大量开发时间。",
        "优化页面渲染和加载速度，提升用户体验，改进项目的 SEO 表现。",
        "持续优化代码：替换废弃的 API，以及代码解耦等，提升代码的可维护性，减少了技术债务。",
      ],
    },
  ],
  skills: [
    "Html",
    "CSS",
    "JavaScript",
    "Angular",
    "Vue",
    "React/Next.js",
    "Node.js",
    "Git",
    "Webpack",
    "Vite",
    "Rollup",
  ],
  skillDetails: [
    "熟练掌握 HTML5、CSS3 和 JavaScript 技术，能够高度还原 PC 端和移动端设计稿。",
    "具备 Angular、Vue 和 React 框架的开发经验，能够在复杂业务需求中灵活运用组件化、模块化设计，实现高效的前端开发。",
    "熟练运用 Element、Ant Design 和 Material 等主流 UI 框架，具备组件定制和主题优化能力，能够快速构建一致性高、用户体验优越的界面。",
    "掌握 Git 版本控制工具，具备处理多分支开发中的代码冲突经验，确保团队协作中的代码质量与开发流程顺畅。",
    "具备 Node.js 基础，能够编写高效脚本以满足业务需求，如数据处理、自动化任务等，增强项目的灵活性和可扩展性。",
    "熟悉 Webpack、Vite、Rollup 等前端构建工具，掌握其配置与优化技术。",
  ],
  projects: [
    {
      title: "中后台管理系统",
      link: "",
      techStack: ["Angular", "TypeScript", "Rxjs", 'Noc', 'Material'],
      description: "开发过多个管理系统，用于提升公司业务处理效率。",
      contents: [
        "负责接入权限系统，控制角色能够访问的页面和可操作的按钮。",
        "项目新版本发布检测，账号冲突检测，确保数据的准确性和一致性，避免不必要的问题发生。",
        "封装公共可复用组件/指令：动态表单、表格组件、按钮权限指令等。",
        "负责项目的 国际化（i18n） 实施，从架构设计到具体语言包配置，支持多语言切换，提升了产品在海外市场的用户体验和竞争力。",
        "性能优化：资源上传至 CDN / 公共接口数据缓存 / 代码优化等，页面访问速度提升40%。",
        "代码规范：接入 git hooks，以及 Eslint 配置，确保代码格式的统一性。",
        "应用了微前端技术，整合了各个不同框架的项目。",
      ],
    },
    {
      title: "Noc 组件库",
      link: "https://noc.test.stary.com/",
      techStack: ["Angular", "TypeScript", "Rxjs", "SvgToFont", "Markdown"],
      description: "公司内部前端 UI 组件库，提供基础组件，帮助网站快速成型。",
      contents: [
        "开发了 9 个组件，每个组件单元测试覆盖率达到90%。",
        "负责搭建组件库文档站点，以 Markdown 形式书写，允许解析示例组件。",
        "搭建字体图标库，将 SVG 文件转为字体文件，然后将文件上传到 CDN 服务，提供给各个项目使用。",
        "利用流水线发布机制，实现了从代码提交到组件发布的全自动化流程，提升了组件库的发布效率和可靠性，减少了人工干预导致的错误",
      ],
    },
    {
      title: "写作站 - 小说创作平台",
      link: "",
      techStack: ["React/Next.js", "Antd", "SSR",  "Quill"],
      description: "一个专注于网络文学创作者的在线平台，旨在为作者提供一个高效、流畅的创作环境。",
      contents: [
        "负责平台核心模块的开发与维护，包括富文本编辑器、作品展示页以及用户评论区，确保了良好的用户体验。",
        "日志与监控：集成 Sentry 工具，实时监控平台运行状态，快速定位与解决问题。",
        "用户反馈优化：基于用户反馈持续改进平台功能，提升了作品发布流程的便捷性。",
      ],
    },
    {
      title: "订阅页面 - H5 WebView 集成",
      link: "",
      techStack: ["React/Next.js", "Antd Mobile", "JSBridge"],
      description: "一个通过 WebView 嵌入到 APP 中的 H5 页面，旨在为用户提供便捷的产品订阅服务。",
      contents: [
        "与原生 APP 联调：与原生开发团队合作，利用桥接技术实现 H5 与 APP 端的数据交互。",
        "A/B 测试：对订阅页面进行多版本测试，优化订阅文案与页面布局，提高转化率约15%。",
      ],
    },
  ],
} as const;
