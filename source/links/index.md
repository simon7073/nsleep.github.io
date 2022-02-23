---
title: 友情链接
type: "links"
categories: links
comments: true
date: 2020-03-03 19:05:35
---


{% block content %}
  {######################}
  {### LINKS BLOCK ###}
  {######################}
    
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="index/myLinkcss.css">
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <!-- 引入MDUI -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/css/mdui.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/js/mdui.min.js"></script>
    <div id="links">
        <el-tooltip :content=" '当前样式: ' + value " placement="top">
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
              
              active-value="default"
              inactive-value="square"
              @change = changeStyleClass>
            </el-switch>
        </el-tooltip>
          
        <div class="links-content">
        
        <div class="mdui-panel mdui-panel-gapless " mdui-panel="{accordion: false}">
            
            <div class="mdui-panel-item mdui-panel-item-open">
                <div class="mdui-panel-item-header no-icon note warning">
                    <div class="link-info">👨‍🎓 跟着大佬走，成为小大佬</div>
                    <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                </div>
                
                <div class="mdui-panel-item-body link-navigation">
                
                    {% for link in site.data.links.defaultlinks  %}

                        <div class="card">
                            <a class="link" href="{{ link.site }}" target="_blank">
                            <el-avatar {% if site.data.links.shape === 'square' %} shape="square" {% else %} shape="circle" {% endif %}
                                :size="60" 
                                fit="contain"
                                src="{% if link.avatar !== '' %}{{ link.avatar }}{% endif %}" 
                                @error="errorHandler">
                                
                                  <img class="ava" src="{{ site.data.links.defaultPic }}"/>
                            </el-avatar>
                            
                                <div class="card-header">
                                    <div>{{ link.nickname }}</div>
                                    <div class="info">{{ link.info }}</div>
                                </div>
                            </a>
                        </div>

                    {% endfor %}

                </div>
            </div>
            
            <div class="mdui-panel-item mdui-panel-item-open">
                <div class="mdui-panel-item-header no-icon note primary">
                    <div class="link-info">🍭 五湖四海的朋友们</div>
                    <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                </div>
                <div class="mdui-panel-item-body link-navigation">
                
                    {% for link in site.data.links.friendslinks  %}
                
                        <div class="card">
                            <a class="link" href="{{ link.site }}" target="_blank">
                            <el-avatar {% if site.data.links.shape === 'square' %} shape="square" {% else %} shape="circle" {% endif %}
                                :size="60" 
                                fit="contain"
                                src="{% if link.avatar !== '' %}{{ link.avatar }}{% endif %}" 
                                @error="errorHandler">
                                
                                  <img class="ava" src="{{ site.data.links.defaultPic }}"/>
                            </el-avatar>
                            
                                <div class="card-header">
                                    <div>{{ link.nickname }}</div>
                                    <div class="info">{{ link.info }}</div>
                                </div>
                            </a>
                        </div>
                
                    {% endfor %}
                
                </div>
            </div>
        </div>
        {{ page.content }}
        </div>
    </div>
    <script>
    new Vue({
        el: '#links',
        data: function() {
            return { 
                value: 'default',
                circleUrl: "/static/images/default.png"
            }
        },
        methods:{
            changeStyleClass: function(callback){
                console.log(callback)
                if(callback !== 'square'){
                    var x = document.getElementsByClassName("squareCard");
                    var l = x.length;
                    for(var i=0;i<l;i++){
                        x[0].getElementsByTagName("a")[0].getElementsByTagName("span")[0].classList.toggle('el-avatar')
                        x[0].getElementsByTagName("a")[0].getElementsByTagName("span")[0].classList.toggle('el-avatar--square')
                        x[0].classList.replace('squareCard','card');
                    }
                }else{
                    var x = document.getElementsByClassName("card");
                    var l = x.length;
                    for(var i=0;i<l;i++){
                        x[0].getElementsByTagName("a")[0].getElementsByTagName("span")[0].classList.toggle('el-avatar')
                        x[0].getElementsByTagName("a")[0].getElementsByTagName("span")[0].classList.toggle('el-avatar--square')
                        x[0].classList.replace('card','squareCard');
                    }
                }
            },
            errorHandler() {
                return true
            }
        }
    })
    </script>
    <script>
    var cards = document.getElementsByClassName("card");
    for (var i=0;i<cards.length;i++){
        cards[i].onclick = function(){
            this.firstElementChild.click();
        }
    }
    </script>
  {##########################}
  {### END LINKS BLOCK ###}
  {##########################}
{% endblock %}


---

### 友链声明：
1、本站会定期清理无法访问的友链，如果更换了链接信息请至评论区留言，谢谢合作！
2、本站会定期查看双方是否互为友链，如果取消本站友链，本站也会将您的友链移除

### 申请要求：
1、内容持续更新且可以稳定访问
2、网页整洁无繁杂广告推广
3、头像能够快速加载

### 申请方式：
按照以下格式发送至[邮箱](mailto:simoncq@163.com)

[^_^]: 先将本站的友链添加到您的友链，相关信息如下
[^_^]: 然后按照以下格式在本站留言区留言，待博主为您添上友链

{% note success no-icon %}
名称：Simon's Blog 
主页：https://blog.simon7.top/ 
头像：https://blog.simon7.top/static/images/avatar.png
说明：一花一世界，一叶一菩提
{% endnote %}

