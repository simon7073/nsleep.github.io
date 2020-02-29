---
title: Hexo+Github（3）
date: 2018-04-01 22:57:42
tags: Hexo
---
# 续
## 17、迁移方法
### (1)RSS
安装hexo-migrator-rss 插件
```bash
npm install hexo-migrator-rss --save
```
执行 (<source> 文件路径或网址)
```bash
hexo migrate rss <source>
``` 
<!-- more -->
### (2)Jekyll
把_post文件夹下的所有文件复制到source/_post文件夹，并修改new_post_name参数

     new_post_name: :year-:month-:day-:title.md  

### (3)Octopress
把source/_post文件夹下的所有文件复制到Hexo的source/_post文件夹，并修改new_post_name参数

	new_post_name: :year-:month-:day-:title.md

### (4)WordPress
安装 hexo-migeator-wordpress 插件

	npm install hexo-migeator-wordpress --save
	
从WP导出数据，而后执行 (<source> 文件路径或网址)

	hexo migrate wordpress <source>

### (5)Joomla
安装 hexo-migeator-joomla插件
	
	npm install hexo-migeator-joomla --save

用J2XML组件导出数据，而后执行 (<source> 文件路径或网址)

	hexo migrate joomla<source>
	
	
	