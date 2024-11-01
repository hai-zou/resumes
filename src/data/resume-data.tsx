import { GitHubIcon } from "@/components/icons";
import { LinkIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "邹海",
  initials: "ZH",
  location: "江西赣州",
  locationLink: "https://www.google.com/maps/place/ganzhou",
  about: "Web 前端开发工程师 | 三年经验",
  summary: "能够独立完成从设计到开发的全流程，具有敏捷开发经验。具备优秀的团队协作能力和代码优化经验，致力于提供高效、用户友好的Web解决方案。",
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
      title: "Web前端开发工程师",
      start: "2020",
      end: "2024",
      description: [
        "根据产品原型图和 UI 设计稿完成需求开发，配合后端完成接口联调，保证项目正常上线。",
        "项目维护，解决用户在项目过程中所遇到的问题。",
        "持续优化代码，提升代码的可维护性，做一些框架的升级，替换废弃的 API，以及代码解耦等，减少了技术债务。",
        "优化页面渲染和加载速度，提升用户体验，改进项目的 SEO 表现。",
        "实现组件化开发，封装可复用的 UI 组件，为多个项目节省了大量开发时间。",
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
    "熟练掌握 HTML5、CSS3 和 JavaScript 技术，能够高度还原 PC 端移动端设计稿。",
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
        "国际化：编写多语言文案导入/导出脚本，将项目的中文导出到 Excel 表格，翻译完成后再导入项目，提升了工作效率。接入了 AI 翻译和自动化，代码通过合并请求后自动运行翻译任务。",
        "性能优化：资源上传至 CDN / 公共接口数据缓存 / 代码优化等，页面访问速度提升 40%。",
        "代码规范：接入 git hooks，以及 Eslint 配置，确保代码格式的统一性。",
      ],
    },
    {
      title: "Noc 组件库",
      link: "",
      techStack: ["Angular", "TypeScript", "Rxjs", "SvgToFont", "Markdown"],
      description: "公司内部前端 UI 组件库，提供基础组件，帮助网站快速成型。",
      contents: [
        "开发了 9 个组件，每个组件单元测试覆盖率达到 90%。",
        "负责搭建组件库文档站点，以 Markdown 形式书写，允许解析示例组件。",
        "搭建字体图标库，将 SVG 文件转为字体文件，然后将文件上传到 CDN 服务，提供给各个项目使用。",
      ],
    },
  ],
} as const;
