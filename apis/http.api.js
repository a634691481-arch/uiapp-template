const ENV_MAP = {
  prod: 'https://travel.tasiai.cn/h5/api/tasi_travel_manage_system_prod',
  pre: 'https://travel.tasiai.cn/h5/api/tasi_travel_manage_system_pre',
  test: 'https://travel.tasiai.cn/h5/api/tasi_travel_manage_system_test',
}

const currentEnvironment = 'prod' // 'pre' | 'prod' | 'test' 默认预览环境

const BASE_URL = ENV_MAP[currentEnvironment] || ENV_MAP.pre

const install = () => {
  uni.$u.http.setConfig({
    baseUrl: BASE_URL,
  })
  // 挂载到全局，方便各页面直接调用
  uni.$api = api
}

// API 封装
const api = {
  // 发送短信验证码
  sendSms: params => uni.$u.http.post('/api/sms/send', params),
}

export default { install, api }
