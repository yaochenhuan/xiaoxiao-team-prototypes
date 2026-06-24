# 校校 - 产品原型管理平台

## 项目介绍

「校校」产品原型管理平台用于管理每个功能的原型图和 PRD（产品需求文档），是一个静态前端项目，无需后端、登录和数据库。

## 技术栈

- **React** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **React Router** - 路由管理
- **Zustand** - 状态管理

## 本地启动

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 目录结构

```
xiaoxiao-team-prototypes/
├── .github/workflows/deploy.yml  # GitHub Actions 部署配置
├── docs/content-checklist.md     # 内容清单
├── src/
│   ├── components/               # 组件目录
│   │   ├── common/              # 公共组件
│   │   ├── layout/              # 布局组件
│   │   ├── prd/                 # PRD 相关组件
│   │   └── prototype/           # 原型图相关组件
│   ├── data/                    # 数据目录
│   ├── pages/                   # 页面组件
│   ├── routes/                  # 路由配置
│   ├── styles/                  # 全局样式
│   ├── App.tsx                  # 应用入口组件
│   └── main.tsx                 # 应用入口文件
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 如何新增模块

1. 在 `src/data/modules.ts` 中添加新的模块定义
2. 在 `src/data/features.ts` 中为新模块添加功能

## 如何新增功能页面

在 `src/data/features.ts` 中添加新的 Feature 对象，包含：
- 功能基本信息（id, name, code, status 等）
- 原型页面配置（prototypePages）
- PRD 文档内容（prd）

## 如何维护原型

在功能的 `prototypePages` 数组中添加或修改页面配置，每个页面包含：
- id: 页面唯一标识
- name: 页面名称
- description: 页面描述
- sections: 页面包含的区块
- actions: 页面支持的操作
- states: 页面状态

## 如何维护 PRD

在功能的 `prd` 对象中维护产品需求文档，包含：
- meta: 文档元信息
- sections: 文档章节内容

## 如何部署 GitHub Pages

项目已配置 GitHub Actions，推送代码到 main 分支后会自动部署。

## 如何提交 GitHub

```bash
# 初始化仓库
git init
git add .
git commit -m "init xiaoxiao prototype and PRD management project"

git remote add origin https://github.com/yaochenhuan/xiaoxiao-team-prototypes.git
git branch -M main
git push -u origin main

# 日常开发
git checkout -b feature/homework-correction
git add .
git commit -m "feat: add homework correction prototype and PRD"
git push origin feature/homework-correction
```

## 项目地址

- GitHub 仓库: https://github.com/yaochenhuan/xiaoxiao-team-prototypes
- GitHub Pages: https://yaochenhuan.github.io/xiaoxiao-team-prototypes/