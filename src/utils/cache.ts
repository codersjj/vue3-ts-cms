class LocalCache {
  // 设置缓存时，也可以提供一个 boolean 类型的参数，用来选择使用 localStorage 或者 sessionStorage 进行缓存。
  // 或者提供一个枚举类型的参数，以提供更多样的缓存方式，比如使用本地数据库保存数据。
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // value 的值是之前 JSON.stringify() 转换之后的字符串，转换前的 value 有可能是对象，需要 JSON.parse() 转换回对象
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
