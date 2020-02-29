---
title: Hexo+Github（2）
date: 2018-04-01 22:44:04
tags: Hexo
---

# 续
```bash
	hexo new post "博客名"			//新建一篇博客--_posts目录下
	hexo d -g				//编辑器编好文章，那么就可以生成以及部署了
```
<!-- more -->
```bash
	hexo generate		-->  hexo g	//生成静态文件
	hexo deploy		-->  hexo d	//文件生成后立即部署网站
	hexo watch		-->  hexo w	//监视文件变动
	hexo publish [layout] <Filename> 	//发表草稿
	hexo server 				//启动服务器
	hexo port		-->  hexo p	//重设端口
	hexo static		-->  hexo s	//只使用静态文件
	hexo log		-->  hexo l	//启动日志
	hexo render <file1>[file2]...		//渲染文件
	hexo migrate <type>			//从其他博客迁移
	hexo clean		-->  hexo c	//清除缓存文件db.json和文件夹public
	hexo list <type>			//列出网站资料
	hexo version				//显示版本
	hexo safe				//安全模式 不载入插件和脚本
	hexo debug				//调试模式 显示调试信息记录在debug.log中
	hexo silent				//简洁模式 隐藏终端信息
	hexo config custom.yml			//自定义配置文件的路径
	hexo draft				//显示source/_drafts 文件夹中的草稿
	hexo cwd /path/to/cwd			//自定义当前工作目录的路径
```

