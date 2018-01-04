###  幸运大转盘
基于vue2 + vue-router + move-js（转盘动画） + stylus
采用vue-cli脚手架自动生成项目结构，安装vue-cli
> npm install --global vue-cli   //全局安装vue-cli
> vue init webpack my-project    //用vue-cli生成my-project项目

### 布局 
用的flex.js，在*/static* 目录下
在head标签引入，主要功能：
> 1、自动生成viewport  
> 2、自动在html标签生成rem

### 目录结构
#### build
> dev和production环境配置
#### config
> 一些共用的配置，端口在index.js
#### static
> 静态资源，这个目录的资源一般放CDN
#### src
> 源码，主要工作目录
>> assets目录---放css、img等。注意*_function.styl*，36为基数，表示设计稿宽360，比如设计稿640*1080，36换成64即可
>> components目录---放公用组件
>> pages目录---放各页面组件
>> router目录---页面路由配置，详细配置看[vue-router](https://router.vuejs.org/zh-cn/)
>> App.vue---入口组件，通常写个router-view渲染视图就可以了
>> main.js---入口js，把Vue、router之类注册到对应的DOM上