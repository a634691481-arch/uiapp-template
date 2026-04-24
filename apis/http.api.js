let http = uni.$u

const ENV_MAP = {
  prod: 'https://travel.tasiai.cn/h5/api/tasi_travel_manage_system_prod',
  pre: 'https://travel.tasiai.cn/h5/api/tasi_travel_manage_system_pre',
  test: 'https://travel.tasiai.cn/h5/api/tasi_travel_manage_system_test',
}

const currentEnvironment = 'prod' // 'pre' | 'prod' | 'test' 默认预览环境

const BASE_URL = ENV_MAP[currentEnvironment] || ENV_MAP.pre

const install = e => {
  http.http.setConfig({
    baseUrl: BASE_URL,
  })
  let vkGlobalThis = vk.getGlobalObject()
  if (typeof vkGlobalThis == 'object') vkGlobalThis.api = createApi()
}
// pageNum, pageSize
const createApi = () => ({
  // 发送短信验证码
  sendSms: params => http.post(`/api/sms/send`, params, {}),
})
export default install
