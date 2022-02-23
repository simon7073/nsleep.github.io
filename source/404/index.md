---
title: 404
permalink: /404
date: 2021-08-03 16:00:53
comments: false
layout: false
---

<meta http-equiv="refresh" content="10;url=https://blog.simon7.top">

<link rel="stylesheet"  href="static/css/404/main.css" type="text/css" >

<section class="container">

		<div class="f404">
			<img src="{{ site.url }}{{ page.header-img }}" >
			<h1>404 . Not Found</h1>
			<h2>{{ page.description }}</h2>
			<div class="post-button text-center">
				<a class="btn" href="{{ page.baseurl }}" rel="contents" >返回首页</a>
			</div>
		</div>
		
</section>
<script>
	window.onload = function () { 
		document.body.classList.add('page-fullscreen');
		document.getElementsByTagName('h1')[0].remove();
		document.getElementsByClassName("container-lg")[0].removeAttribute("class"); 
		//$("div.container-lg")[0].setAttribute("id","container-lg");
		//$("div#container-lg")[0].removeAttribute("class"); 
	}
</script>