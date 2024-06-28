import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "邹海",
  initials: "ZH",
  location: "江西赣州",
  locationLink: "https://www.google.com/maps/place/ganzhou",
  about: "Web前端开发工程师 | 三年经验",
  summary: "工作认真踏实，积极热情。性格开朗随和，具备良好的沟通能力和团队协作能力。具备良好的编码习惯，以及分析问题解决问题的能力。",
  avatarUrl: "https://imgs.izou.top/user/avatar.jpg",
  personalWebsiteUrl: "https://izou.top",
  contact: {
    email: "zou.hai@outlook.com",
    tel: "17779036853",
    social: [
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
				"根据产品原型图和ui设计稿完成需求开发",
				"配合后端完成接口联调，保证项目正常上线",
				"项目维护，解决用户在项目过程中所遇到的问题"
			],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
		"Angular",
		"Vue",
    "React/Next.js",
    "Node.js",
  ],
	skillDetails: [
		"熟练掌握 HTML5，CSS3 的基本使用以及常用的响应式布局的最佳实践",
		"掌握Vue和Angular框架的基本使用",
		"掌握Element、Ant Desgin、Material等UI框架的使用",
		"掌握Typescript技术、并用于实际开发",
		"熟悉git命令，并对解决代码冲突有一定经验",
		"了解node.js技术，能够编写一些简单的脚本来满足业务需求",
		"了解webpack、gulp等打包工具",
	],
  projects: [
    {
      title: "Noc 组件库",
			link: "",
      techStack: ["Angular", "TypeScript", "Rxjs", "SvgToFont", "Markdown"],
      description: "公司内部前端UI组件库，提供基础组件，帮助网站快速成型",
			contents: [
				"开发了9个组件，每个组件单元测试覆盖率达到90%",
				"负责搭建组件库文档站点，以markdown形式展示",
				"编写字体图标发布脚本，将打包后的字体图标上传到CDN服务",
			],
    },
		{
      title: "内容中台",
			link: "",
      techStack: ["Angular"],
      description: "提升公司业务处理效率",
			contents: [
				"参与版本的迭代开发与日常维护工作",
				"编写文案替换脚本，将项目的中文导出到Excel表格，翻译成英文后再写入项目，提升了研发效率",
				"负责接入权限系统，控制角色能够访问的页面和可操作的按钮",
				"性能优化：资源上传至CDN / 公共接口数据缓存 / 代码优化等，页面访问速度提升40%",
				"代码重构"
			],
    },
    {
      title: "活动平台",
			link: "",
      techStack: ["React", "Antd"],
      description: "低代码平台，以少量代码快速搭建活动页面",
			contents: [
				"基于H5-Dooring二次开发，搭建活动平台，通过拖拽生成H5活动页面",
				"开发九宫格抽奖组件，通过修改配置来更换奖品",
			],
    },
  ],
} as const;
