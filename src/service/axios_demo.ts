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
