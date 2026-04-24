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
export default genContent('ISmartOptimization', IconWrapper('ISmartOptimization',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 45C27.2208 45 32.7276 40.8 32.7276 24C32.7276 7.2 27.2208 3 24.0002 3C20.7797 3 15.2729 7.48302 15.2729 24C15.2729 40.517 20.7797 45 24.0002 45Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.10515 35.0001C6.71545 37.8124 13.2479 40.4211 28.364 31.6211C43.48 22.8211 44.5057 15.8124 42.8954 13.0001C41.2851 10.1878 34.4981 7.72728 19.6367 16.3791C4.77521 25.0308 3.49489 32.1878 5.10515 35.0001Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.10506 13.0001C3.4948 15.8124 4.52046 22.8211 19.6366 31.6211C34.7527 40.4211 41.285 37.8124 42.8953 35.0001C44.5056 32.1878 43.2253 25.0308 28.3638 16.3791C13.5024 7.72728 6.71537 10.1878 5.10506 13.0001Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
