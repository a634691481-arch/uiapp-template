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
export default genContent('ISocks', IconWrapper('ISocks',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M40.0001 18C37.0001 18 32.0005 18 30.0003 23C28 28 30.5002 32.5 33.0002 35" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M18 10L40 10" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M20.0005 4H38.0006C39.1052 4 40.0006 4.89543 40.0006 6V24.2876C40.0006 27.7198 38.4001 30.9554 35.6645 33.0283C32.0224 35.7881 27.0882 39.5088 25.0005 41C21.5005 43.5 15.0005 46 10.0008 41C5.00104 36 6.25114 29.443 10.001 26C13.7508 22.557 18.0005 19.1519 18.0005 19.1519V6C18.0005 4.89543 18.8959 4 20.0005 4Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
