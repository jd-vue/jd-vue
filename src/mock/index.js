// 引入其他的mock数据文件
require('./articles')

const Mock = require('mockjs')
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: '200-600'
})
