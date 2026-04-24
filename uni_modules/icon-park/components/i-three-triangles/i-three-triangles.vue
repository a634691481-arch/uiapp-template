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
export default genContent('i-three-triangles', IconWrapper('i-three-triangles',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M17.0001 7L24.0001 19.1244L29.9905 29.5H4.00977L17.0001 7Z" fill="' + props.colors[1] + '"/>'
        + '<path d="M31.0001 7L43.9905 29.5H18.0098L24.0001 19.1244L31.0001 7Z" fill="' + props.colors[1] + '"/>'
        + '<path d="M11.0098 41.5H36.9905L29.9905 29.5H18.0098L11.0098 41.5Z" fill="' + props.colors[1] + '"/>'
        + '<path d="M29.9905 29.5L24.0001 19.1244M18.0098 29.5L11.0098 41.5H36.9905L29.9905 29.5H18.0098ZM18.0098 29.5H43.9905L31.0001 7L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5H29.9905H18.0098ZM29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244L29.9905 29.5Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
