const TOKEN_KEY = 'uni_id_token'

// 防重复弹框标记
let isShowingAlert = false

// 统一错误提示方法
function showErrorAlert(res, message, callback) {
  // 如果正在显示弹框，则不重复显示
  if (isShowingAlert) return

  isShowingAlert = true

  const code = res.code || res.status || ''
  const errorMsg = message || '操作失败'
  const alertMessage = code ? `[${code}] ${errorMsg}` : errorMsg
  vk.alert(alertMessage, () => {
    isShowingAlert = false
    if (callback) callback()
  })
}

const install = () => {
  uni.$u.http.interceptor.request = config => {
    const token = uni.vk.getStorageSync(TOKEN_KEY)
    if (token) config.header['Authorization'] = token

    config.header['x-timestamp'] = Date.now()
    config.header['x-client-platform'] = uni.getSystemInfoSync().platform

    //
    return config
  }
  uni.$u.http.interceptor.response = (res, header, config) => {
    console.log('🚀 ~ :14 ~ install ~ res:', res)
    const CODE_HANDLERS = {
      // 业务失败
      0: () => {
        vk.hideLoading()
        showErrorAlert(res, res.msg || res.message || '操作失败', () => {
          return Promise.reject(res)
        })
      },

      // 业务成功
      1: () => {
        return res
      },

      // 业务成功
      200: () => {
        return res
      },

      // 未登录或登录过期
      401: () => {
        vk.hideLoading()

        // 如果正在显示弹框，则不重复显示
        if (isShowingAlert) return Promise.reject(res)

        isShowingAlert = true
        vk.alert('登录已过期,请重新登录', () => {
          isShowingAlert = false
          vk.reLaunch('/pages/login/index')
        })
        return Promise.reject(res)
      },

      // 无权限
      403: () => {
        vk.hideLoading()
        showErrorAlert(res, res.msg || res.message || '暂无权限访问', () => {
          return Promise.reject(res)
        })
      },

      // 服务器错误
      500: () => {
        vk.hideLoading()
        showErrorAlert(res, res.msg || res.message || '服务器错误,请稍后重试', () => {
          return Promise.reject(res)
        })
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
export default install
