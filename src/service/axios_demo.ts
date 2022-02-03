import axios from 'axios'

// get 请求示例
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// get 请求（带请求参数）
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'coderzhj',
      age: 20
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// post 请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'zhj',
      age: 20
    }
  })
  .then((res) => {
    console.log(res.data)
  })
