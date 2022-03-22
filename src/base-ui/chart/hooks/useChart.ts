import * as echarts from 'echarts'

import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)

export function useChart(dom: HTMLElement) {
  const echartsInstance = echarts.init(dom)
  const setOption = (option: echarts.EChartsOption) => {
    echartsInstance.setOption(option)
  }

  const updateSize = () => {
    console.log('更新size')
    echartsInstance.resize()
  }

  // 浏览器窗口大小改变时，图表的大小也相应地改变
  window.addEventListener('resize', updateSize)

  return {
    echartsInstance,
    setOption,
    updateSize
  }
}
