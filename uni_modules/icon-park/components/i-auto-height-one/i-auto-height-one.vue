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
export default genContent('i-auto-height-one', IconWrapper('i-auto-height-one',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M7 42L7 6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>'
        + '<path d="M18 13.9907L23.9954 8L30 14" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M30 34.0093L24.0046 40L18 34" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M24 8V40" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M41 42L41 6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
