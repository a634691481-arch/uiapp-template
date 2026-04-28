# zero-icon

> 适用于 `vue2`、`vue3`、`uni-app`、微信小程序，其他平台可自行测试。

## 一、插件优势

- 体积小，组件本身仅约 `5kb`
- 图标来源广，兼容 `275000+` 个 Iconify 图标
- 默认按需请求 SVG，不需要把整套图标库打进主包
- 同一套组件 API 同时支持 `CDN/API`、自建 API、本地图标集
- 支持 `color`、`size`、`fallbackName`，接入成本低

如果你只是想在 uni-app 项目里快速补充图标，又不想继续维护 `iconfont`、字体文件或整套 JSON 图标库，这个插件更省事。

## 二、安装说明

将 `uni_modules/zero-icon` 整个目录复制到项目中即可。

默认使用 Iconify API：

```bash
https://api.iconify.design
```

如果发布到微信小程序或 App，记得把该域名加入合法下载域名名单。

如果你要使用本地图标集，再安装对应依赖，例如：

```bash
npm install @iconify-json/mdi
```

如果不想使用官方 API，有两种方式：

1. 通过 `apiUrl` 指向你自己的 Iconify API 服务
2. 传入 `iconSet`，切换为本地渲染模式

## 三、参数说明

| 参数           | 类型               | 默认值                       | 说明                                                              |
| -------------- | ------------------ | ---------------------------- | ----------------------------------------------------------------- |
| `name`         | `String`           | `''`                         | 图标名。CDN/API 模式下建议直接传完整写法，如 `mdi:home`           |
| `color`        | `String`           | `#333333`                    | 图标颜色                                                          |
| `size`         | `Number \| String` | `16`                         | 图标尺寸，支持数字或带单位字符串                                  |
| `iconSet`      | `Object`           | `null`                       | 本地图标集，传入后走本地渲染                                      |
| `prefix`       | `String`           | `''`                         | 默认图标前缀。设置后可把 `name="home"` 解析为 `mdi:home` 这类形式 |
| `apiUrl`       | `String`           | `https://api.iconify.design` | Iconify API 地址                                                  |
| `fallbackName` | `String`           | `''`                         | 图标加载失败时的兜底图标名                                        |

## 四、使用示例

### 1. 直接传完整图标名

```vue
<template>
  <view class="box">
    <zero-icon name="carbon:calculator-check" color="#2f6b4a" size="32" />
    <zero-icon name="carbon:qr-code" color="#038e8f" size="40" />
    <zero-icon name="mdi:home" color="#2563eb" size="40" />
  </view>
</template>
```

### 2. 统一指定前缀

同一块区域都用同一套图标时，可以传 `prefix` 简化 `name`。

```vue
<template>
  <view class="box">
    <zero-icon prefix="mdi" name="account" color="#333333" size="36" />
    <zero-icon prefix="mdi" name="home" color="#038e8f" size="40" />
  </view>
</template>
```

### 3. 使用本地图标集

```vue
<script setup>
import mdiIcons from "@iconify-json/mdi/icons.json";
</script>

<template>
  <zero-icon name="account" :iconSet="mdiIcons" color="#333333" size="36" />
</template>
```

### 4. 使用自建 Iconify API

```vue
<template>
  <zero-icon
    name="carbon:calculator-check"
    apiUrl="https://your-icon-api.example.com"
    color="#2f6b4a"
    size="32"
  />
</template>
```

## 五、使用模式

### 1. 默认 CDN/API 模式

适合优先考虑包体积的场景。优点是不用额外安装图标库，缺点是依赖网络和图标服务可用性。

### 2. 自建 API 模式

适合对稳定性、可控性要求更高的项目。组件写法不变，只需要把 `apiUrl` 换成自建服务地址。

### 3. 本地 `iconSet` 模式

适合内网、离线、私有图标或不方便配置远程域名的场景。

本地模式的好处：

- 不依赖公网
- 不请求远程 SVG
- 仍然保留统一的组件调用方式

## 六、注意事项

1. 默认不会自动补图标前缀；不传 `prefix` 时，`name` 需要写完整，如 `carbon:calendar`
2. 传入 `iconSet` 后会切换为本地渲染模式，不再请求远程 SVG
3. 微信小程序、App 等平台如限制远程图片域名，需要配置 `https://api.iconify.design`
4. 如果线上稳定性要求更高，建议使用自建 Iconify API
5. 如果需要完全离线，建议使用精简后的本地图标集

## 七、适用场景

- 现有 `uni-icons` 不够用，想快速补充更多图标
- 希望多个 uni-app 项目复用同一套图标组件
- 不想继续维护 `iconfont` 平台和字体文件
- 需要在远程加载、本地离线、私有化之间灵活切换

插件预览：

![code](https://cdn.zerojs.cn/image/common/code-z_1722414660881_1.jpg?imageMogr2/thumbnail/200x)

> 小程序搜索：零技术
>
> 预览小程序不一定及时更新当前插件
