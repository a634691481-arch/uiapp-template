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
export default genContent('i-gas', IconWrapper('i-gas',(props)=>(
    '<?xml version="1.0" encoding="UTF-8"?>'
    + '<svg width="' + props.sizeWithUnit + '" height="' + props.sizeWithUnit + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M23.0488 9.78854C24.6746 9.35291 26.3402 10.2971 26.769 11.8975C27.1978 13.4979 26.2275 15.1485 24.6017 15.5841C22.9759 16.0197 6.70807 17 6.70807 17C6.70807 17 21.423 10.2242 23.0488 9.78854Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M23.1066 38.4467C24.7324 38.8823 26.398 37.9381 26.8268 36.3377C27.2556 34.7373 26.2853 33.0868 24.6595 32.6511C23.0337 32.2155 6.7659 31.0039 6.7659 31.0039C6.7659 31.0039 21.4808 38.011 23.1066 38.4467Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>'
        + '<path d="M33.9996 16.0039C34.9118 14.7895 36.3642 14.0039 38 14.0039C40.7614 14.0039 43 16.2425 43 19.0039C43 21.7653 40.7614 24.0039 38 24.0039H16" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>'
    + '</svg>'
)))
</script>

<style lang="scss" scoped>
@import '../../style/index.css';
</style>
