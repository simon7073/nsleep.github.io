---
title: Hexo-Github搭建博客
date: 2018-04-01 21:46:52
tags: Hexo
---

此篇用以记录使用`Hexo`搭建博客的过程，不时修改加以完善。

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download/)

安装步骤参考 [hexo 文档](https://hexo.io/zh-cn/docs/)

<!-- more -->
# Git 

## 配置本地Git环境
```bash
git config --global user.name "your_name"
git config --global user.email "your_email"
# 以下可选
git config --global core.autocrlf false
git config --global http.sslVerify false
git config --global https.sslVerify false
```
<details>
<summary>CRLF 问题(折叠)</summary>
<blockquote>
	首先问题出在不同操作系统所使用的换行符是不一样的，下面罗列一下三大主流操作系统的换行符：
	<br/>Uinx/Linux采用换行符LF表示下一行（LF：LineFeed，换行）；
	<br/>Dos和Windows采用回车+换行CRLF表示下一行（CRLF: CarriageReturn LineFeed，中文意思是回车换行）；
	<br/>Mac OS采用回车CR表示下一行（CR：CarriageReturn，回车）。
	<br/><br/>为true时，Git会将你 add 的所有文件视为文本文件，将结尾的CRLF转换为LF，而checkout时会再将文件的LF格式转为CRLF格式。
	<br/>为false时，line endings不做任何改变，文本文件保持其原来的样子。
	<br/>为input时，add时Git会把CRLF转换为LF，而check时仍旧为LF，所以Windows操作系统不建议设置此值。
</blockquote>
</details>

## 创建ssh密钥
为了方便本地访问Github，创建ssh密钥，并将公钥[`%USERPROFILE%/.ssh/id_rsa.pub`]上传[Github ssh keys](https://github.com/settings/ssh/new)

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 	# 创建密钥对
ssh -T git@github.com # 测试添加ssh是否成功  -v 显示详细信息	
```

- 更多参见[Github Docs](https://help.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh)


# [Hexo](https://hexo.io/zh-cn/docs/#安装-Hexo)

## 安装
```bash
# 使用 npm 安装 Hexo
npm install hexo -g   # 全局安装 hexo ，包含hexo-cli
hexo -v               # 检查hexo是否安装成功
# 在一个空文件夹下执行
hexo init             # 初始化
npm install           # 安装所需要的组件

```

## 预览
```bash
hexo g                # 生成静态文件 -- public文件夹下
hexo s                # 开启本地服务 [-p 端口号]
```

## 写篇文章
```bash
hexo new [layout] "title" # layout 默认值为 post
```

## 文件生成
```bash
hexo generate
hexo g -d 		# 文件生成后立即部署网站
hexo g -f 		# 差分机制，只会重新生成改动的文件
```

## 清除文件
清除缓存文件 (`db.json`) 和已生成的静态文件 (`public`)。
```bash
hexo cl
```

## 写篇草稿

### 1). 新建草稿

执行以下命令将在`./source/_drafts`文件夹下创建一篇博文。

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


# [Github](https://github.com/) 
注册并新建项目，项目必须要遵守格式：`YOUR_NAME.github.io`
修改分支，使其有 `main`(默认分支) 和 `gh-pages` 两个分支，修改 `Github pages` 构建分支为 `gh-pages` ，域名填写 `YOUR_NAME.github.io`

```bash
git clone git@github.com:<YOUR_NAME>/<YOUR_NAME>.github.io.git
# 然后将初始化的hexo合并（复制）到本地仓库
```

## 安装 git 插件
```bash
npm install hexo-deployer-git --save
```

## 修改 hexo 配置
> 注：所有配置项目的分号后都需要一个空格

```yml
deploy:
- type: git
  repo: <repository url> 
  # https://github.com/<username>/<project>
  # git@github.com:<username>/<username>.github.io.git
  branch: gh-pages
```

- [其他部署配置](https://hexo.io/zh-cn/docs/one-command-deployment)

## 部署 YOUR_NAME.github.io

### 推送原始文件(也看做备份)
```bash
git add .
git commit -m "first commit"
git push -u origin main
```

### 推送页面文件(生成的缓存，即public文件夹下的文件)
```bash
hexo cl
hexo d -g             #  生成以及部署
```

# Github Actions
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


# [js.org](https://js.org/)
修改 `Github pages` 域名为 `<NAME>.js.org`，并将`<NAME>.js.org`写入到新文件`source/CNAME`。
详细操作见 [Github -- js.org](https://github.com/js-org/js.org)

{% note danger %}
**js.org 修改了添加政策，仅接受与 JavaScript 有明确直接关系的 NPM 包、库、工具等项目**
类似的服务： [js.cool](https://github.com/js-cool/js.cool), [is-a.dev](https://github.com/is-a-dev/register), [thedev.id](https://github.com/fransallen/thedev.id), [mod.land](https://github.com/denosaurs/mod.land), [runs-on.tech](https://github.com/aakhilv/runs-on.tech)
{% endnote %}

# [vercel.com](https://vercel.com/)
[vercel](https://vercel.com/) 是一个自动构建的工具，只要将生肉（就是那些工作空间的文件）所在的 repo 内容库链接到 vercel 就可以得到一个静态博客。在设置里可以自定义域名，连接的 GitHub/Gitlib/Bitbucket 存储库，可以触发给定分支的部署。
更有一个分析工具，洞察加载速度，响应能力，可视化的稳定性，只不过这个功能需要耗费。



# 其他部署

除了推送到`Github`，也可以使用其他平台，比如`Gitee`和`Coding`。实践出真知，可以多尝试。

{% note warning no-icon %}
对于`Gitee`和`Coding`用了一段时间，都有所限制：
- Gitee：速度尚可，但是自定义域名需要付费，即使可以免费使用几个月，我还是弃了
- Coding：速度挺好，但是在我使用的那段时间隔三岔五访问不了
{% endnote %}

## Fast.io
**fast.io于2021/01/15 关闭服务**
[Fast](https://fast.io/)支持网盘 `Google Drive` / `OneDrive` / `Github` / `Dropbox` / `MediaFire` / `BOX`。如此获取网盘资源外链，图床不是问题。但也有~~（可忽略的）~~限制，如下：
- 免费创建5个站点
- 单个文件最大500M
- 每个月100G流量	

## Firebase Hosting
[Firebase](https://console.firebase.google.com/)是一个把后端作为服务的云平台（BaaS）
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

- [Heroku](https://heroku.com)
- [Netlify](https://www.netlify.com/)
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

# 六、更新

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