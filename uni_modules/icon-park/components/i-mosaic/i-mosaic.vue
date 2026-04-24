<template>
  <view class="a-icon-svg" :style="[boxStyle]">
    <!-- #ifdef APP-NVUE -->
    <image class="a-icon-pack-image" :style="[boxStyle]" :src="png" mode="scaleToFill"></image>
    <web-view v-if="isShow" class="__wh-0" :ref="_uid"  @onPostMessage="changeMessage" 
    src="/uni_modules/icon-park/hybrid/html/index.html" ></web-view>
    <!-- #endif -->
    <!-- #ifndef APP-NVUE -->
    <image class="a-icon-pack-image" :src="url" mode="aspectFit"></image>
    <!-- #endif -->
  </view>
</template>

<script>
import { IconWrapper , genContent } from '../runtime'
export default genContent('i-mosaic', IconWrapper('i-mosaic',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M44 36H36V44H44V36Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M28 36H20V44H28V36Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M12 36H4V44H12V36Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M44 20H36V28H44V20Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M28 20H20V28H28V20Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M12 20H4V28H12V20Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M44 4H36V12H44V4Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M28 4H20V12H28V4Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M12 4H4V12H12V4Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M20 12H12V20H20V12Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M20 28H12V36H20V28Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M36 12H28V20H36V12Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M36 28H28V36H36V28Z" fill="' + props.colors[0] + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
