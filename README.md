# Yuchen (Julian) Li — Personal Blog

Source for the personal blog at <https://julianli00.github.io/>, built with the open-source
[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) Jekyll theme.

## Content

- Home: a short profile, education, interests, and links
- Posts: notes on software, research, and things I am learning
- Projects: selected projects and research

## Local development

推荐先启动 Docker Desktop，再运行：

```bash
bash tools/preview.sh
```

脚本使用与 GitHub Actions 一致的 Ruby 3.4；首次运行会下载镜像并安装依赖，
之后复用 `vendor/bundle` 中的依赖。服务启动后打开 <http://localhost:4000>。
修改 Markdown 后会自动重新构建并刷新浏览器；修改 `_config.yml` 后需按 `Ctrl+C`
停止，再重新运行脚本。停止预览时容器会自动清理。

如已安装 Ruby 3.4，也可以直接运行：

```bash
bundle install
bundle exec jekyll serve --livereload
```

## 发帖

在 `_posts/` 中新建 `YYYY-MM-DD-slug.md` 文件，例如
`2026-09-24-first-post.md`。文件开头使用 YAML front matter 设置标题、日期、分类和标签，
之后用 Markdown 编写正文：

```markdown
---
title: 我的第一篇文章
date: 2026-09-24 10:00:00 +0800
categories: [Notes]
tags: [software, learning]
---

在这里写正文。
```

运行 `bash tools/preview.sh` 后，在浏览器打开 <http://localhost:4000> 预览。

草稿可放在 `_drafts/first-post.md`，用下面的命令在本地预览：

```bash
bash tools/preview.sh --drafts
```

准备发布时，将草稿移到 `_posts/`，按 `YYYY-MM-DD-slug.md` 命名，并更新日期。

## Deployment

Pushes to `main` are built and deployed through GitHub Actions.
提交文章并推送到 `main` 后，GitHub Actions 会自动构建并发布博客。

## License

The Chirpy starter and theme are licensed under the MIT License. See
[LICENSE](LICENSE).
