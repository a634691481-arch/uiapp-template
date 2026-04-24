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
export default genContent('IWashingMachine', IconWrapper('IWashingMachine',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="8.77783" y="4" width="32" height="40" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
        + '<path d="M8.77783 15.5H40.7778" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<circle cx="28.7778" cy="10" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="34.7778" cy="10" r="2" fill="' + props.colors[0] + '"/>'
        + '<circle cx="24.7778" cy="30" r="7" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
