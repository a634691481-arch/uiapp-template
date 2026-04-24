<p align="center"><img alt="logo" src="	https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg" width="223"></p>
<p align="center">此插件为 iconpark 的 uni_modules 版</p>

#### 简述
- 💯高质量。提供超2600+高质量图标，免费使用，此处给我们勤劳的设计师们点赞~o(￣▽￣)ｄ
- 🎨多主题。包括：线框、填充、双色、多色4种风格
- 💪全平台。小程序、App(vue,nvue，uvue)、H5均可使用
- 🛠️自定义。可动态更改颜色、大小、线框宽度、端点类型、拐点类型等属性
- 🚀高效率。复制组件代码在React/Vue项目中去使用，直接拿去Sketch、PPT中使用

#### 说明
- 为了解决组件冲突问题，每个组件增加了前缀`i`。
- 组件符合uni_modules规范，自动按需导入，剔除未使用的组件

## 使用

### 1. 前往iconpark官网：[https://iconpark.bytedance.com/](https://iconpark.oceanengine.com/official)复制vue代码

### 2.修改vue组件标签，增加'i-'前缀

复制得到的vue组件：
```html
<all-application   theme="multi-color" size="24" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"/>
```

增加'i-'前缀，修改为：
```html
<i-all-application theme="multi-color" size="24" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"/>
```

> 'i-'前缀是为了解决组件名冲突的问题

## 组件属性Props
|参数						|说明																																																													|类型					|默认值		|
|:-:						|:-:																																																													|:-:					|:-:			|
|size						|图标的大小，即宽高的值，单位默认px，可指定单位 '48rpx'																																				|String				|24				|
|strokeWidth		|线条宽度																																																											|String				|4				|
|theme					|主题,可选值：'outline', 'filled', 'two-tone', 'multi-color'																																	|String				|outline	|
|strokeLinecap	|端点类型,可选值：'butt', 'round', 'square'																																										|String				|round		|
|strokeLinejoin	|拐点类型,可选值：'miter', 'round', 'bevel'																																										|String				|round		|
|fill						|填充颜色	'two-tone', 'multi-color'时为数组，请查看下方使用示例，uts，uvue，uniappx中使用时，fill为数组形式，:fill="['#333']"	|Array、String|'#000000'|

# 注意
uts，uvue，uniappx中使用时，fill为数组形式，:fill="['#333']"

## 使用示例

单色线性outline
```html
<i-camera></i-camera>
<i-camera theme="outline"/>
<i-camera theme="outline" fill="#2F88FF"/>
```

单色填充filled
```html
<i-camera theme="filled" fill="#333"/>
```

双色two-tone
```html
<i-camera theme="two-tone" :fill="['#333' ,'#2F88FF']"/>
```

多色multi-color
```html
<i-camera theme="multi-color" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"/>
<i-camera theme="multi-color" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" size="40"/>
```

线条粗细strokeWidth
```html
<i-camera :strokeWidth="1"></i-camera>
<i-camera :strokeWidth="2"></i-camera>
<i-camera :strokeWidth="3"></i-camera>
<i-camera :strokeWidth="4"></i-camera>
```

尺寸size
```html
<i-camera :size="20"></i-camera>
<i-camera size="20"></i-camera>
<i-camera size="20px"></i-camera>
<i-camera size="40rpx"></i-camera>
<i-camera size="2em"></i-camera>
```

端点类型strokeLinecap
```html
<i-camera ></i-camera>
<i-camera strokeLinecap="round"/>
<i-camera strokeLinecap="butt"/>
<i-camera strokeLinecap="square"/>
```

拐点类型strokeLinejoin
```html
<i-camera strokeLinejoin="round"/>
<i-camera strokeLinejoin="miter"/>
<i-camera strokeLinejoin="bevel"/>
```





#### 交流反馈

<div class="row" style="display: flex;">
  <img class="col-lg-3 col-md-4 col-xm-5" src="http://chenmeizhou.gitee.io/atom-css-doc/1.jpg" style="background-color:#999999;width: 200px;">
</div>

#### 版权信息
[Apache-2.0 License](https://bytedance.larkoffice.com/wiki/wikcn3mntCdchXbMgJFll98Ytnb)

#### 致敬
[DCloud](https://www.dcloud.io/)、[uni-app](https://uniapp.dcloud.net.cn/)、[字节跳动](https://www.bytedance.com/zh/)、[iconPark](https://iconpark.oceanengine.com)