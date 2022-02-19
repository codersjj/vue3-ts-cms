const user = () => import('@/views/main/system/user/user.vue')
export default {
  // 注意：这里的路径要和服务器返回的数据中的 url 值一致，因此，在用 coderwhy 工具生成本文件时，注意正确指定存放的文件夹
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
