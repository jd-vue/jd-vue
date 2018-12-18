const wareDetails = r => require.ensure([], () => r(require('../pages/wareDetails/wareDetails')), 'wareDetails')
export default [
  // 商品详情页
  {
    path: '/wareDetails',
    component: wareDetails,
    meta: false
  }
]
