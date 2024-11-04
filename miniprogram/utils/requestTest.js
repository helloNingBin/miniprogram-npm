// 创建 WxRequest 类
class WxRequest {
  // 定义实例属性，用来设置默认请求参数
  defaults = {
    baseURL: '', // 请求基准地址
    url: '', // 接口的请求路径
    data: null, // 请求参数
    method: 'GET', // 默认的请求方法
    // 请求头
    header: {
      'Content-type': 'application/json' // 设置数据的交互格式
    },
    timeout: 6000, // 默认的超时时长，小程序默认的超时时长是 1 分钟
    isLoading: true // 控制是否使用默认的 loading，默认值是 true 表示使用默认的 loading
  }
  constructor(params = {}) {
    this.defaults = Object.assign({}, this.defaults, params)
    console.log('合并后的默认参数', this.defaults)
  }
  // 定义拦截器对象
  // 需要包含请求拦截器以及响应拦截器，方便在请求之前以及响应以后时进行逻辑处理
  interceptors = {
    // 请求拦截器
    // 在请求发送之前，对请求参数进行新增或者修改
    request: (config) => config,

    // 响应拦截器
    // 在服务器响应数据以后，对服务器响应的数据进行逻辑处理
    response: (response) => response
  }
  request(options) {
    options.url = this.defaults.baseURL + options.url
    console.log('url', options.url)
    console.log('请求参数,合并前', options)
    options = { ...this.defaults, ...options }
    console.log('请求参数,合并后', options)
    // 在请求发送之前，调用请求拦截器，新增和修改请求参数
    options = this.interceptors.request(options)
    // 使用 Promise 封装异步请求
    return new Promise((resolve, reject) => {
      // 使用 wx.request 发起请求
      wx.request({
        ...options,

        // 接口调用成功的回调函数
        success: (res) => {
          const mergeRes = Object.assign({}, res, {
            config: options,
            isSuccess: true
          })
          resolve(this.interceptors.response(mergeRes))
        },

        // 接口调用失败的回调函数
        fail: (err) => {
          // 不管是成功响应还是失败响应，都需要调用响应拦截器
          const mergeErr = Object.assign({}, err, {
            config: options,
            isSuccess: false
          })
          reject(this.interceptors.response(mergeErr))
        }
      })
    })
  }

  // 封装 GET 实例方法
  get(url, data = {}, config = {}) {
    // 需要调用 request 请求方法发送请求，只需要组织好参数，传递给 request 请求方法即可
    // 当调用 get 方法时，需要将 request 方法的返回值 return 出去
    return this.request(Object.assign({ url, data, method: 'GET' }, config))
  }

  // 封装 DELETE 实例方法
  delete(url, data = {}, config = {}) {
    return this.request(Object.assign({ url, data, method: 'DELETE' }, config))
  }

  // 封装 POST 实例方法
  post(url, data = {}, config = {}) {
    return this.request(Object.assign({ url, data, method: 'POST' }, config))
  }

  // 封装 PUT 实例方法
  put(url, data = {}, config = {}) {
    return this.request(Object.assign({ url, data, method: 'PUT' }, config))
  }
}
// 对 WxRequest 进行实例化
const instance = new WxRequest({ baseURL: 'http://139.159.196.163:8990', timeout: 5000 })

instance.interceptors.request = (config) => {
  console.log('请求前拦截的请求参数', config)
  config.data.storeType = 1
  return config
}
instance.interceptors.response = (response) => {
  console.log('拦截器响应拦截', response)
  const { response: res, isSuccess } = response

  // isSuccess: false 表示是网络超时或其他问题，提示 网络异常，同时将返回即可
  if (!isSuccess) {
    wx.toast('网络异常，请稍后重试~')
    // 如果请求错误，将错误的结果返回出去
    return res
  }
  return response.data
}

// 将 WxRequest 的实例通过模块化的方式暴露出去
export default instance
