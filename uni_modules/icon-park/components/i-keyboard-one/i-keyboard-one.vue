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
export default genContent('i-keyboard-one', IconWrapper('i-keyboard-one',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="4" y="18" width="40" height="24" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<circle cx="14" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="16" cy="30" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="10" cy="30" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="20" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="22" cy="30" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="26" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="28" cy="30" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="32" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="34" cy="30" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="38" cy="24" r="2" fill="' + props.colors[0] + '"/>'
        + '<path d="M17 36H31" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
