## 项目介绍

「食光机用户使用手册」是一个基于React的Web应用，展示了"食光机"微信小程序的使用指南。该项目采用现代前端技术栈构建，提供了直观、美观的界面，全面介绍食光机小程序的各项功能与操作方法。

## 项目特点

- 💡 **响应式设计** - 完美适配移动端、平板与桌面环境
- 🎨 **精美UI** - 采用食材低饱和度色系，打造沉浸式阅读体验
- 📱 **交互式展示** - 通过丰富的截图和交互式组件，直观展示小程序功能
- 🚀 **高性能** - 基于Vite构建，加载迅速，交互流畅

## 技术栈

- **React** - 用户界面构建库
- **TypeScript** - 类型安全的JavaScript超集
- **Tailwind CSS** - 实用优先的CSS框架
- **Vite** - 现代前端构建工具
- **React Router** - 路由管理
- **Framer Motion** - 动画效果库

## 主要功能

本项目全面展示了"食光机"微信小程序的功能与使用方法，包括：

- 🏠 **主页功能** - 食材状态提醒、今日推荐菜谱、库存概览等
- 🍅 **食材库存管理** - 查看库存、食材操作等功能介绍
- 📷 **食材扫描与识别** - 扫描功能使用指南
- 🍲 **餐饮计划** - 餐饮计划创建与管理功能
- 📋 **菜谱详情** - 菜谱信息查看及使用说明
- 📊 **营养分析** - 营养数据查看与分析功能
- 👤 **个人设置** - 用户信息、偏好设置等功能介绍

## 安装与使用

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── assets/         # 静态资源
├── components/     # 组件
│   ├── layout/     # 布局组件
│   ├── sections/   # 页面各部分组件
│   └── ui/         # UI组件
├── pages/          # 页面
├── data/           # 数据文件
├── hooks/          # 自定义hooks
├── types/          # TypeScript类型定义
└── utils/          # 工具函数
```

## 设计系统

项目使用了以食材为灵感的低饱和度色彩系统：

- **主色系统**:
  - 牛油果核心绿 (#8C9E7E)
  - 烘焙小麦米 (#D4A57C)
  - 成熟番茄红 (#B3423A)
- **辅助系统**:
  - 砂岩白 (#FAF6F0) - 基底色
  - 黑松露深咖 (#4A2F2B) - 强调色

