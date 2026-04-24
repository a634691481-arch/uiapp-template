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
export default genContent('i-gift-box', IconWrapper('i-gift-box',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M6 9C6 7.34315 7.34315 6 9 6H24H39C40.6569 6 42 7.34315 42 9V24V39C42 40.6569 40.6569 42 39 42H24H9C7.34315 42 6 40.6569 6 39V24V9Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M4 24H44" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M24 44V4" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M6 30V18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M42 30V18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M30 42H18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M30 6H18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M24.0001 23.9999C24.0001 23.9999 31.8972 20.4542 33.0988 19.2526C34.3004 18.051 34.3004 16.1028 33.0988 14.9012C31.8972 13.6996 29.9489 13.6996 28.7473 14.9012C27.5457 16.1028 24.0001 23.9999 24.0001 23.9999ZM24.0001 23.9999C24.0001 23.9999 16.1027 20.4542 14.901 19.2526M24.0001 23.9999C24.0001 23.9999 20.4541 16.1028 19.2525 14.9012M24.0001 23.9999C24.0001 23.9999 31.897 27.5458 33.0986 28.7474M24.0001 23.9999C24.0001 23.9999 27.5455 31.8972 28.7472 33.0988M24.0001 23.9999C24.0001 23.9999 16.1028 27.5458 14.9012 28.7474C13.6996 29.949 13.6996 31.8972 14.9012 33.0988C16.1028 34.3004 18.0511 34.3004 19.2527 33.0988C20.4543 31.8972 24.0001 23.9999 24.0001 23.9999Z" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
