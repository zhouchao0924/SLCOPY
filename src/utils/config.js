module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png',
  iconFontUrl: '//at.alicdn.com/t/font_c4y7asse3q1cq5mi.js',
  baseURL: 'http://139.199.27.165:8081/',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: [
    'http://localhost:7001', 'http://192.168.1.110:8000',
  ],
  openPages: ['/login'],
  apiPrefix: '',
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userisLogin: '/user/isLogin',
    users: '/user/getUserList',
    user: '/user/:id',
    dashboard: '/user/getManageArea',
  },
}
