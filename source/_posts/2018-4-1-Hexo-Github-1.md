---
title: Hexo+Github（1）
date: 2018-04-01 21:46:52
tags: Hexo
---

## 1、Github账户
注册并新建项目，项目必须要遵守格式：账户名.github.io

## 2、安装[Git](https://git-scm.com/downloads)
### 配置好Git环境
```bash
git config --global user.name "your_name"
git config --global user.email "your_email"
```
<!-- more -->
### 创建ssh密钥，将公钥上传
```bash
ssh-keygen -t rsa -C "your_email" 
eval "$(ssh-agent -s)"  		//添加密钥到ssh-agent ,似乎非必要
ssh -T git@github.com  		//测试添加ssh是否成功
```

## 3、创建一个文件夹，然后通过命令行或Git Bash进入到该文件夹里面

## 4、安装[Node.js](https://nodejs.org/en/)
### 并配置好Node.js环境

## 5、安装[Hexo](https://hexo.io/)
```bash
npm install hexo-cli -g
hexo -v //检查hexo是否安装成功
```
## 6、初始化该文件夹
```bash
hexo init
```
## 7、安装所需要的组件
```bash
npm install
```
## 8、Hexo生成静态文件--public文件夹下
```bash
hexo g
```
## 9、开启本地服务
```bash
hexo s 
```
## *10、改变端口号
```bash
hexo server -p 端口号
```
## 11、修改_config.yml文件
修改repo值（在末尾）,注意：所有配置项目的分号后都需要一个空格
```bash
deploy:
	type: git
	repo: git@github.com:your_name/your_name.github.io.git
	branch: master
```
## 12、生成及部署文章
生成以及部署文章之前，需要安装一个扩展
```bash
npm install hexo-deployer-git --save
```
在_posts目录下新建一篇博客，编辑器编好文章，那么就可以生成以及部署了
```bash
	hexo new post "博客名"	
	hexo d -g	
```