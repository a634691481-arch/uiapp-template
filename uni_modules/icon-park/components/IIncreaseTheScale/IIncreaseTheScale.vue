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
export default genContent('IIncreaseTheScale', IconWrapper('IIncreaseTheScale',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M24 9C24 6.23858 21.7614 4 19 4C16.2386 4 14 6.23858 14 9V19C14 21.7614 16.2386 24 19 24C21.7614 24 24 21.7614 24 19V9Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<path d="M42 9C42 6.23858 39.7614 4 37 4C34.2386 4 32 6.23858 32 9V19C32 21.7614 34.2386 24 37 24C39.7614 24 42 21.7614 42 19V9Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<path d="M36 32L42 38L36 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M6 24H7" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>'
        + '<path d="M42 38H19" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
