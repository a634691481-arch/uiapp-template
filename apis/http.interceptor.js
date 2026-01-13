import md5 from 'js-md5'

const install = () => {
  uni.$u.http.interceptor.request = config => {
    const token = uni.vk.getStorageSync('uni_id_token')
    if (token) {
      config.header['ba-user-token'] = token
    }
    return config
  }

  uni.$u.http.interceptor.response = res => {
    res
  }
}
export default install
