const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')
const Home = r => require.ensure([], () => r(require('../pages/home/Home')), 'Home')
const loginNewUser = r => require.ensure([], () => r(require('../pages/login/loginNewUser')), 'loginNewUser')
const loginNewcompany = r => require.ensure([], () => r(require('../pages/login/loginNewcompany')), 'loginNewcompany')
const wareDetails = r => require.ensure([], () => r(require('../pages/wareDetails/wareDetails')), 'wareDetails')
export default [
  // //登录
  {
    path: '/login',
    component: login
  },
  // //注册新用户
  {
    path: '/loginNewUser',
    component: loginNewUser
  },
  // //注册企业新用户
  {
    path: '/loginNewcompany',
    component: loginNewcompany
  },
  {
    path: '/wareDetails',
    component: wareDetails,
    meta: false
  },
  { // //首页
    path: '/',
    name: 'Home',
    component: Home
  },
  { // //首页
    path: '/home',
    name: 'Home',
    component: Home
  }
]
