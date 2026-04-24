// 图标Wrapper
export function IconWrapper(name, render) {

    return (props) => {
        // const config = getConfig();
        // const svgProps = IconConverter(guid(), props, config);
        return render(props);
    };
}

export const ISvgIconProps = {}

export const genContent = (name = 'IZoomOut', ZoomOut)=>{
  return {
      name,
      components: {},
      props: {
        size: {
          type: [String, Number],
          default: 18,
          desc: '图标的大小，即宽高的值'
        },
        strokeWidth: {
          type: [String, Number],
          default: 4,
          desc: '线条宽度'
        },
        theme: {
          type: String,
          default: 'outline',
          validator(value) {
            return ['outline', 'filled', 'two-tone', 'multi-color'].includes(value)
          }
        },
        strokeLinecap: {
          type: String,
          default: 'round',
          validator(value) {
            return ['butt', 'round', 'square'].includes(value)
          },
          desc: '描边端点类型'
        },
        strokeLinejoin: {
          type: String,
          default: 'round',
          validator(value) {
            return ['miter', 'round', 'bevel'].includes(value)
          },
          desc: '描边连接类型'
        },
        fill: {
          type: [String, Array],
          default: '#000000'
        }
      },
    
      data() {
        return {
          png: '',
          rtl: false,
          isShow: true,
          colors1: {
            outline: {
              fill: '#333',
              background: 'transparent'
            },
            filled: {
              fill: '#333',
              background: '#FFF'
            },
            twoTone: {
              fill: '#333',
              twoTone: '#2F88FF'
            },
            multiColor: {
              outStrokeColor: '#333',
              outFillColor: '#2F88FF',
              innerStrokeColor: '#FFF',
              innerFillColor: '#43CCF8'
            }
          },
          prefix: 'i'
        }
      },
      computed: {
        fillColor() {
          return typeof this.fill === 'string' ? [this.fill] : this.fill || []
        },
        outStrokeColor() {
          return typeof this.fillColor[0] === 'string' ? this.fillColor[0] : 'currentColor'
        },
        outFillColor() {
          return typeof this.fillColor[1] === 'string' ? this.fillColor[1] : 'currentColor'
        },
        innerStrokeColor() {
          return typeof this.fillColor[2] === 'string'
            ? this.fillColor[2]
            : this.colors1.multiColor.innerStrokeColor
        },
        innerFillColor() {
          return typeof this.fillColor[3] === 'string'
            ? this.fillColor[3]
            : this.colors1.multiColor.innerFillColor
        },
        sizeWithUnit(){
          let size = this.size + ''
          if(/\d$/.test(this.size)){
            size = this.size + 'px'
          }else if(size.endsWith('rpx')){
            size = uni.upx2px(parseInt(size)) + 'px'
          }
          return size
        },
        colors() {
          const dict = {
            outline: 'outline',
            filled: 'filled',
            'two-tone': 'twoTone',
            'multi-color': 'multi'
          }
          return this[dict[this.theme]]()
        },
        boxStyle() {
          const style = {
            width: this.sizeWithUnit,
            height: this.sizeWithUnit
          }
          return style
        },
        url() {
          return  'data:image/svg+xml,' + encodeURIComponent(this.url11);
        },
        url11() {
          return ZoomOut(this)
        }
      },
      mounted() {
        console.log('==== this :', this._uid);
      },
      methods: {
        changeMessage(e) {
        	if (e.detail.data[0].isInitialize) {
        		this.$refs[this._uid].evalJS("onReceiveSvg('" + this.url11 + "')");
        	} else {
        		this.png = e.detail.data[0].png;
        		this.isShow = false;
        	};
        },
        multi() {
          return [this.outStrokeColor, this.outFillColor, this.innerStrokeColor, this.innerFillColor]
        },
        twoTone() {
          return [this.outStrokeColor, this.outFillColor, this.outStrokeColor, this.outFillColor]
        },
        filled() {
          return [this.outStrokeColor, this.outStrokeColor, '#FFF', '#FFF']
        },
        outline() {
          return [this.outStrokeColor, 'none', this.outStrokeColor, 'none']
        }
      }
    
    
  }
}

