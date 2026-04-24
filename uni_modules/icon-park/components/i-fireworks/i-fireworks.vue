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
export default genContent('i-fireworks', IconWrapper('i-fireworks',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M6 41.9999L14.6741 17.2639L31 34.0384L6 41.9999Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M23 19L28 14C30.6667 11.3333 31 9 29 7" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M29 25L34 20C37.3333 16.6667 40.6667 16.6667 44 20" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M20 7C21.1046 7 22 6.10457 22 5C22 3.89543 21.1046 3 20 3C18.8954 3 18 3.89543 18 5C18 6.10457 18.8954 7 20 7Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M42 6C43.1046 6 44 5.10457 44 4C44 2.89543 43.1046 2 42 2C40.8954 2 40 2.89543 40 4C40 5.10457 40.8954 6 42 6Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M42 29C43.1046 29 44 28.1046 44 27C44 25.8954 43.1046 25 42 25C40.8954 25 40 25.8954 40 27C40 28.1046 40.8954 29 42 29Z" fill="' + props.colors[0] + '"/>'
        + '<path d="M39 38C40.1046 38 41 37.1046 41 36C41 34.8954 40.1046 34 39 34C37.8954 34 37 34.8954 37 36C37 37.1046 37.8954 38 39 38Z" fill="' + props.colors[0] + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
