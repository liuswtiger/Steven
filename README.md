# 曼曼导航 · 个人工具页

这是一个轻量级的个人导航站，收录了常用的 AI 工具、云服务、开发平台、软件资源等，支持分类切换、图标展示、描述提示与响应式布局。

## 🧱 项目结构


## 📦 分类说明

- `Home`：常用入口工具  
- `Ai-stuff`：AI 应用与生成平台  
- `Cloud`：云服务与主机平台  
- `Container`：部署与容器平台  
- `Software`：效率工具与软件服务  
- `Tools`：实用工具类网站  
- `Mail & Domain`：邮箱与域名服务  
- `Dev`：开发者相关平台

## 🚀 部署方式

本项目支持 GitHub Pages 与 Cloudflare Pages 自动部署：

### GitHub Pages

1. 推送代码到 `main` 分支  
2. 在仓库设置中启用 Pages，选择根目录或 `/docs`  
3. 访问地址：`https://liuswtiger.github.io/Steven/`

### Cloudflare Pages

1. 在 Cloudflare 控台创建 Pages 项目  
2. 连接 GitHub 仓库并选择 `main` 分支  
3. 自动构建并部署，访问地址如：`https://steven-94m.pages.dev/`

## 🛠 使用说明

- 点击分类标签切换工具列表  
- 工具图块显示图标与名称，悬停显示描述  
- 图标自动加载 favicon，失败时显示默认图标  
- 所有链接均在新标签页打开

## 📌 图标替换说明

如需替换某个工具图标：

1. 上传新图标至 `public/` 文件夹  
2. 修改 `data.js` 中对应工具的 `icon` 字段路径  
3. 保存并推送更新，页面将自动刷新图标

---

欢迎 Fork 或定制属于你自己的导航页 🎯
