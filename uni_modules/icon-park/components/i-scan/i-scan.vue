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
export default genContent('i-scan', IconWrapper('i-scan',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M7 24L41 24" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M24 7L24 41" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<rect x="5" y="5" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="14" y="5" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="30" y="5" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="39" y="5" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="39" y="14" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="5" y="14" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="5" y="39" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="14" y="39" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="30" y="39" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="39" y="39" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="39" y="30" width="4" height="4" fill="' + props.colors[0] + '"/>'
        + '<rect x="5" y="30" width="4" height="4" fill="' + props.colors[0] + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
