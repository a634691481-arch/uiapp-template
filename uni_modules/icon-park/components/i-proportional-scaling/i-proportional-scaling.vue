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
export default genContent('i-proportional-scaling', IconWrapper('i-proportional-scaling',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<g clip-path="' + 'url(#' + props.id + '90c265e2' + ')' + '">'
            + '<path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>'
            + '<path d="M19 40L32 18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>'
            + '<path d="M32 40L38 29" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>'
        + '</g>'
        + '<defs>'
            + '<clipPath id="' + props.id + '90c265e2' + '">'
                + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>'
            + '</clipPath>'
        + '</defs>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
