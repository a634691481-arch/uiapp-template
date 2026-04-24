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
export default genContent('i-electronic-door-lock', IconWrapper('i-electronic-door-lock',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="6" y="4" width="26" height="40" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<rect x="20" y="30" width="24" height="8" rx="4" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<circle cx="12" cy="12" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="12" cy="18" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="12" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="19" cy="12" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="19" cy="18" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="19" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="26" cy="12" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="26" cy="18" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="26" cy="24" r="2" fill="' + props.colors[0] + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
