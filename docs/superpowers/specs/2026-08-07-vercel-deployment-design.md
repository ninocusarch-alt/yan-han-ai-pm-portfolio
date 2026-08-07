# Vercel 双平台部署设计

## 目标

在不改变现有页面内容和视觉效果、不破坏 Sites 线上版本的前提下，将个人作品集同时部署到 Vercel，并让 GitHub `main` 分支后续更新能够自动触发 Vercel 生产部署。

## 方案选择

采用“双构建入口”方案：保留现有 Vinext/Sites 构建流程，同时新增标准 Next.js/Vercel 构建流程。

未采用完全迁移方案，因为它会让现有 Sites 发布流程失效；未采用纯静态导出方案，因为标准 Next.js 部署对当前 App Router 页面兼容性更直接，也保留未来增加服务端能力的空间。

## 架构与文件改动

- 保留现有 `build`、`dev` 和 `start` 脚本，继续服务于 Vinext/Sites。
- 将与现有 ESLint 插件版本匹配的 Next.js 添加为项目依赖。
- 新增 `build:vercel` 脚本，执行标准 Next.js 生产构建。
- 新增 `vercel.json`，明确 Vercel 使用 `build:vercel`，避免调用 Sites 构建入口。
- 保留 `.openai/hosting.json`，不改变现有 Sites 项目绑定。
- 不上传或提交 Vercel 访问令牌；项目关联信息由 Vercel 管理，并保持 `.vercel` 在忽略列表中。

## 部署流程

1. 本地安装并锁定 Next.js 依赖。
2. 执行标准 Next.js 生产构建。
3. 执行现有 Vinext 构建与页面测试，确认 Sites 兼容性未回归。
4. 提交并推送配置到 GitHub `main`。
5. 在 Vercel 中导入 `ninocusarch-alt/yan-han-ai-pm-portfolio`。
6. 使用默认生产分支 `main` 完成首次部署。
7. 验证首页、三个案例页、头像、社交分享图和两份简历下载文件。

## 错误处理

- 如果标准 Next.js 构建失败，只修复 Vercel 兼容问题，不重构页面设计。
- 如果 Vercel 自动识别的构建命令与配置冲突，以 `vercel.json` 为准。
- 如果 Vercel 需要账户授权，暂停在登录界面，等待用户在所选浏览器完成登录后继续。
- 如果部署失败，保留 Sites 线上版本，不更改现有生产地址。

## 验收标准

- Vercel 生产部署状态成功并返回可公开访问的 `vercel.app` 地址。
- 首页和三个项目详情页均可直接访问与刷新。
- 两份 PDF 简历能够下载，图片及字体样式完整。
- `npm run test` 继续通过，Sites 构建流程不受影响。
- GitHub `main` 后续提交可以自动触发 Vercel 更新。
