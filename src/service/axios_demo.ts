import axios from 'axios'

// get 请求示例
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// axios 的常用（全局）配置选项（全局意味着后续每个请求都会有的配置）
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

// axios.all()：多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'coderzhj', age: 20 } }),
    axios.post('/post', { data: { name: 'zhj', age: 20 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// axios 的拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
// axios.interceptors.request.use(fn1, fn2)
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 比如：给请求添加 token
    // 比如：isLoading 动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
// fn1: 数据响应成功（服务器正常地返回了数据，状态码一般为 20x）会执行的函数
// fn2: 数据响应失败（服务器返回数据失败，状态码一般为 40x/50x）会执行的函数
// axios.interceptors.response.use(fn1, fn2)
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
