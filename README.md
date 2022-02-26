# Simon 博客

## 1. 环境

```powershell
# 说明：hexo-cli （命令行）是 hexo 的最小安装
#   hexo 包含 hexo-cli .
npm install hexo -g
# 在空文件夹下建立副本：
hexo init
# 安装其他依赖包
npm install hexo-deployer-git
npm install hexo-generator-feed
npm install hexo-generator-searchdb
npm install hexo-symbols-count-time
npm install hexo-theme-next
npm install jquery
npm uninstall hexo-generator-index
npm install hexo-generator-index2
npm uninstall hexo-renderer-marked
npm install hexo-renderer-pandoc
# 需 pandoc 软件，用以数学公式
```
## 2. 日常操作

```bash
hexo cl 
hexo g 
#hexo d 
#hexo b 
hexo s 

git add -all
git commit -m "."
git push
git push  origin main:main

```

# 多域名

- [blog.simon7.top](https://blog.simon7.top)
- [isimon.js.org](https://isimon.js.org)


# 需要注意的问题

1. 安装 `hexo-renderer-pandoc` 插件需要 [pandoc](https://github.com/jgm/pandoc) 软件。
2. 在写 .md 文章的时候注意 `---` 后要留空行，不然 `hexo-renderer-pandoc` 会报错。