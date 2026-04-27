const TOKEN_KEY = 'uni_id_token'

// 防重复弹框标记
let isShowingAlert = false

// 统一错误提示方法
function showErrorAlert(res, message) {
  // 如果正在显示弹框，则不重复显示
  if (isShowingAlert) return Promise.reject(res)

  isShowingAlert = true

  const code = res.code || res.status || ''
  const errorMsg = message || '操作失败'
  const alertMessage = code ? `[${code}] ${errorMsg}` : errorMsg

  uni.showModal({
    title: '提示',
    content: alertMessage,
    showCancel: false,
    success: () => {
      isShowingAlert = false
    },
  })

  return Promise.reject(res)
}

const install = () => {
  // 请求拦截
  uni.$u.http.interceptor.request = config => {
    const token = uni.getStorageSync(TOKEN_KEY)
    if (token) config.header['Authorization'] = token

    config.header['x-timestamp'] = Date.now()
    config.header['x-client-platform'] = uni.getSystemInfoSync().platform

    return config
  }

  // 响应拦截
  uni.$u.http.interceptor.response = res => {
    // console.log('🚀 ~ http response:', res)

    const CODE_HANDLERS = {
      // 业务失败
      0: () => {
        uni.hideLoading()
        return showErrorAlert(res, res.msg || res.message || '操作失败')
      },

      // 业务成功
      1: () => res,

      // 业务成功
      200: () => res,

      // 未登录或登录过期
      401: () => {
        uni.hideLoading()

        // 如果正在显示弹框，则不重复显示
        if (isShowingAlert) return Promise.reject(res)

        isShowingAlert = true
        uni.showModal({
          title: '提示',
          content: '登录已过期,请重新登录',
          showCancel: false,
          success: () => {
            isShowingAlert = false
            uni.reLaunch({ url: '/pages/login/index' })
          },
        })
        return Promise.reject(res)
      },

      // 无权限
      403: () => {
        uni.hideLoading()
        return showErrorAlert(res, res.msg || res.message || '暂无权限访问')
      },

      // 服务器错误
      500: () => {
        uni.hideLoading()
        return showErrorAlert(res, res.msg || res.message || '服务器错误,请稍后重试')
      },
    }

    const handler = CODE_HANDLERS[res.code || res.status]
    if (handler) {
      return handler()
    }

    console.warn(`未处理的响应码: ${res.code}`, res)
    return res
  }
}
export default { install }
