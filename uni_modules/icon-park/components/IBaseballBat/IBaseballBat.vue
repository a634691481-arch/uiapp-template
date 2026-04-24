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
export default genContent('IBaseballBat', IconWrapper('IBaseballBat',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<circle cx="40" cy="40" r="3" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<path d="M16.502 9.43095C16.502 9.43095 26.4998 22 37.4998 37.5C21.4998 26 9.43102 16.5021 9.43102 16.5021C9.43102 16.5021 3.11056 10.8894 6.99983 7.00032C10.8891 3.11124 16.502 9.43095 16.502 9.43095Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
