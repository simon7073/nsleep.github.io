---
title: 友情链接
type: "links"
categories: links
comments: true
date: 2020-03-03 19:05:35
toc: 
  enable: false
---


{% block content %}
<link href="/static/css/links.css" rel="stylesheet">
<h1 id="网站收藏">网站收藏</h1>
<div class="row">
{% for link in site.data.links.defaultlinks  %}
    <div class="col-sm-6 col-md-4">
        <div class="panel">
            <a class="media link-site" href="{{ link.site }}" target="_blank">
                <div class="media-left">
                    <img class="link-avatar" :src="/static/images/loading.gif" src="{{ link.avatar }}" 
                    onerror="javascript:this.src='/static/images/error.png';this.onerror=null;" 
                    loading="lazy"/>
                </div>
                <div class="media-body">
                    <h4 class="link-nickname">{{ link.nickname }}</h4>
                    <div class="link-info">{{ link.info }}</div>
                </div>
            </a>
        </div>
    </div>
{% endfor %}
</div>

<h1 id="友情链接">友情链接🍭</h1>
<div class="row">
{% for link in site.data.links.friendslinks  %}
    <div class="col-sm-6 col-md-4">
        <div class="panel">
            <a class="media link-site" href="{{ link.site }}" target="_blank">
                <div class="media-left">
                    <img class="link-avatar" :src="/static/images/loading.gif" src="{{ link.avatar }}" 
                    onerror="javascript:this.src='/static/images/error.png';this.onerror=null;" 
                    loading="lazy"/>
                </div>
                <div class="media-body">
                    <h4 class="link-nickname">{{ link.nickname }}</h4>
                    <div class="link-info">{{ link.info }}</div>
                </div>
            </a>
        </div>
    </div>
{% endfor %}
</div>
{% endblock %}
---

# 申请方式:
{% note success no-icon  按照以下格式发送至[邮箱](mailto:simoncq@163.com) %}
```
名称: Simon's Blog 
主页: https://blog.simon7.top/ 
头像: https://blog.simon7.top/static/images/avatar.png
说明: 一花一世界，一叶一菩提
```
{% endnote %}
