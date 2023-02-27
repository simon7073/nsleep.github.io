---
title: Hexo-Github搭建博客
date: 2018-04-01 21:46:52
tags: [Hexo, Github]
categories: [教程 ]
---

> 此篇用以记录使用`Hexo`搭建博客的过程，不时修改加以完善。


# 本地搭建

参考 [Hexo 官方文档](https://hexo.io/zh-cn/docs/#安装-Hexo)

在安装 `Hexo` 前需要先下载并安装 [node.js](https://nodejs.org/en/download/)，如果需要换国内的镜像源可以用 `npm config set registry https://registry.npm.taobao.org` 换成淘宝的镜像源。

<!-- more -->

## 安装 Hexo

`hexo-cli` （命令行）是 `hexo` 的最小安装，即 `hexo` 包含 `hexo-cli`。

```bash
# 全局安装 hexo
npm install hexo -g   
hexo -v               # 检查hexo是否安装成功
```

## 初始化

在一个空文件夹下执行

```bash
hexo init             # 初始化
npm install           # 安装所需要的组件

# 安装其他依赖包（可选）
npm install hexo-deployer-git
npm install hexo-generator-feed
npm install hexo-generator-searchdb
npm install hexo-theme-next
npm install jquery
npm uninstall hexo-generator-index
npm install hexo-generator-index2
npm uninstall hexo-renderer-marked
npm install hexo-renderer-pandoc
```

`npm audit` 用以检查安全性。
可以选择安装 `npm-check` 来维护 `npm` 包的依赖关系。
可以选择安装 `npm-check-updates` 查看可更新包
```bash
# 安装 npm-check
npm i npm-check -g 
# 检查 npm 包的依赖   
npm-check -u -g

# 检查是否有依赖冲突
npm audit
# 解决部分依赖冲突
npm audit fix --force

npm install npm-check-updates -g
# 查看可更新包
ncu
# 更新package.json
ncu -u
npm install
```

安装以后，可以使用以下两种方式执行 Hexo：
1. 使用 `npx hexo <command>` 。
2. 将 `Hexo` 所在的目录添加到环境变量，使用 `hexo <command>` 。

## 预览

```bash
hexo g
hexo s
```
`hexo g` 是 `hexo generate` 的简写，表示将 markdown 渲染生成静态文件，生成的文件在 `./public/` 文件夹下。参数`-d`表示文件生成后立即上传云端部署网站，参数`-f`表示差分机制，只会重新生成改动的文件。
`hexo s` 是 `hexo server` 的简写，表示开启本地服务，可以跟参数 `-p`+端口号，指定端口。 

## 写篇文章

```bash
hexo new [layout] "Title"
```

`[layout]` 表示采用的模板，默认值为 `post` ，模板文件在 `./scaffolds/` 文件夹下。
文章标题可以不添加双引号，同时生成两个文章需要用空格隔开。

## 清除缓存

清除缓存文件 (`db.json`) 和已生成的静态文件 (`./public/*`)。

```bash
hexo cl
```

## 写篇草稿

### 1). 新建草稿

执行以下命令将在`./source/_drafts`文件夹下创建一篇文章。

```bash
hexo new draft <filename>
```

### 2). 预览草稿

预览草稿有两种方式

{% tabs 预览草稿, 1 %}

<!-- tab 命令 -->
显示草稿的命令需要附带参数`--draft`，所以可以执行以下命令

```bash
hexo server --draft
```
<!-- endtab -->

<!-- tab 更改配置 -->
在配置文件中更改
```bash ./_config.yml
render_drafts: true
```
<!-- endtab -->

{% endtabs %}

### 3). 发表草稿

把草稿变成文章，或者页面：

```bash 
hexo publish [layout] "title"
```

- 更多参见[Hexo](https://hexo.io/zh-cn/docs/commands)


# 上传到 Github

设置本地Git环境，见 [<Github 使用指南>](2023-2-23-Github-使用指南)

## 设置远程仓库

1. 新建仓库，仓库名必须要遵守格式：`YOUR_NAME.github.io`
2. 修改分支，使其有 `main`(默认分支) 和 `gh-pages` 两个分支
3. 3在仓库设置中修改 `Github pages` 构建分支为 `gh-pages` ，域名填写 `YOUR_NAME.github.io`

## 关联仓库

```bash
git clone git@github.com:<YOUR_NAME>/<YOUR_NAME>.github.io.git
```

然后将初始化的 `hexo` 合并/复制到本地仓库

## 将原文件上传

```bash
git add .
git commit -m "first commit"
git push -u origin main
```

## 将静态文件上传

### 安装 git 插件

```bash
npm install hexo-deployer-git
```

### 修改 hexo 配置

> 注：所有配置项目的`:`后都需要一个空格

```yml
deploy: 
- type: git
  repo: <repository url> 
  # https://github.com/<username>/<project>
  # git@github.com:<username>/<username>.github.io.git
  branch: gh-pages
  message: Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}
```

### 推送页面文件(生成的缓存，即public文件夹下的文件)
```bash
hexo cl
hexo d -g             #  生成以及部署
```

- [其他部署配置](https://hexo.io/zh-cn/docs/one-command-deployment)


# 自动化部署

## Github Actions
自动化部署，每次提交原始文件到 `main` 分支即可更新。
将密钥上传到仓库的环境变量-`/settings/secrets/actions/new`,命名例如`HEXO_DEPLOY_PRIVATE_KEY`
创建新的流程-`/actions/new`
```yml main.yml
name: Hexo Blog CI
on:
  push:
    branches: [ main ]
  #pull_request:
  #  branches: [ main ]
  workflow_dispatch:
jobs:
  build-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository backup branch
        uses: actions/checkout@master 
      - name: Setup Node.js lts 
        uses: actions/setup-node@master
      - name: Setup Hexo Dependencies
        env:
          HEXO_DEPLOY_PRIVATE_KEY: ${{ secrets.HEXO_DEPLOY_PRIVATE_KEY }}
        run: |
          mkdir -p ~/.ssh/
          echo "$HEXO_DEPLOY_PRIVATE_KEY" | tr -d '\r' > ~/.ssh/id_rsa 
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name 'nsleep' 
          git config --global user.email 'simoncq@163.com'
          npm install hexo -g
          npm install
      - name: Deploy Hexo 
        run: |
          hexo clean
          hexo generate 
          hexo deploy
```

{% centerquote %}
博客搭建完成，访问 `YOUR_NAME.github.io`
{% endcenterquote %}


## js.org

{% note danger %}
**[js.org](https://js.org/) 修改了添加政策，仅接受与 JavaScript 有明确直接关系的 NPM 包、库、工具等项目**
类似的服务： [js.cool](https://github.com/js-cool/js.cool), [is-a.dev](https://github.com/is-a-dev/register), [thedev.id](https://github.com/fransallen/thedev.id), [mod.land](https://github.com/denosaurs/mod.land), [runs-on.tech](https://github.com/aakhilv/runs-on.tech)
更多类似的服务查看 [free-for.dev -> Domain](https://free-for.dev/#/?id=domain)。
{% endnote %}

~~修改 `Github pages` 域名为 `<NAME>.js.org`，并将`<NAME>.js.org`写入到新文件`source/CNAME`。~~
详细操作见 [Github -- js.org](https://github.com/js-org/js.org)


## vercel
[vercel.com](https://vercel.com/) 是一个自动构建的工具，只要将工作空间的文件所在的 `repo` 内容库链接到 `vercel` 就可以得到一个静态博客。在设置里可以自定义域名，连接的 `GitHub/Gitlib/Bitbucket` 存储库，可以触发给定分支的部署。
更有一个分析工具，洞察加载速度，响应能力，可视化的稳定性，只不过这个功能需要付费。

## Heroku

[Heroku](https://heroku.com)

## Netlify

[Netlify](https://www.netlify.com/)

# 其他部署

除了推送到`Github`，也可以使用其他平台，比如`Gitee`和`Coding`。实践出真知，可以多尝试。

{% note warning no-icon %}
对于`Gitee`和`Coding`用了一段时间，都有所限制：
- Gitee：速度尚可，但是自定义域名需要付费，即使可以免费使用几个月，我还是弃了
- Coding：速度挺好，但是在我使用的那段时间隔三岔五访问不了
{% endnote %}

## Fast.io

{% note danger %}
**fast.io于2021/01/15 关闭服务**
{% endnote %}

[Fast](https://fast.io/)支持网盘 `Google Drive` / `OneDrive` / `Github` / `Dropbox` / `MediaFire` / `BOX`。如此获取网盘资源外链，图床不是问题。
但也有 ~~（可忽略的）~~ 限制：
- 免费创建5个站点
- 单个文件最大500M
- 每个月100G流量	

## Firebase Hosting

[Firebase](https://console.firebase.google.com/) 是一个把后端作为服务的云平台（BaaS）
- 国内无法访问。

## FTP服务器

- 安装插件

```bash
# 使用淘宝镜像CNPM安装插件
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install hexo-deployer-ftpsync –save
```

- 修改配置

修改`_config.yml`文件:

```bash
deploy:
- type: ftpsync                 #上传方式，固定ftpsync
  host: hfanss.ftp-gz01.com     #ftp地址
  user: ****                    #帐号
  pass: ****                    #密码
  remote: /webroot/             #上传至哪个目录
  port: 8010                    #端口
```

## 腾讯云COS

- 安装插件

```bash
npm install hexo-deployer-cos --save
```

- 修改配置

修改`_config.yml`文件:

```bash
deploy:
- type: cos             # 上传方式，固定cos
  appId: 12529*****     # cos的appId
  secretId: AKI******   # cos的secretId
  secretKey: **********	# cos的secretKey
  bucket: *********     # cos的bucket
  region: ap-shanghai   # cos的region
```

## 其他平台

- [Bitbucket](https://bitbucket.org/)
- [aerobatic](https://www.aerobatic.com/)
- [surge](https://www.nssurge.com/)
- [atlassian](https://www.atlassian.com/)
- [GitLab](https://gitlab.com/)

代码托管
- [code.aliyun](https://code.aliyun.com/)
- [oschina](https://www.oschina.net/)
- [京东代码库](https://code.jd.com/)
- [gitshell](https://gitshell.com/)
- [gitea](https://gitea.com/)

# 更新

更新`npm`
```
npm install -g npm
```

更新`Next`主题(hexo >= 5.0)
```
npm install hexo-theme-next@latest
```

以查看所有可升级的插件
```
npm outdated
```

使用`npm-check`检查更新
```
npm install -g npm-check
npm-check
npm-check --skip-unused
npm-check -u
```

- [Hexo 升级至 5.0 版](https://www.jianshu.com/p/98ac1e253e6e)
- [Hexo 版本升级和 Next 主题升级之坑](https://blog.csdn.net/whjkm/article/details/81088518)
- [将 Hexo 升级到 v4.2.1](https://zhuanlan.zhihu.com/p/157511323)
- [Hexo 和 Next 主题升级](https://zhuanlan.zhihu.com/p/163830894)

# 其他相关阅读

[简书-hexo使用 grunt 实现自动化](https://www.jianshu.com/p/cf6d7a180aa4)

# 需要注意的问题

1. 安装 `hexo-renderer-pandoc` 插件需要 [pandoc](https://github.com/jgm/pandoc) 软件。
2. 在写 `.md` 文章的时候注意 `---` 后要留空行，不然 `hexo-renderer-pandoc` 会报错。