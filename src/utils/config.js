module.exports = {
	name: 'AntD Admin',
	prefix: 'antdAdmin',
	footerText: 'Ant Design Admin 版权所有 © 2016 由 zuiidea 支持',
	logo: 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png',
	iconFontUrl: '//at.alicdn.com/t/font_c4y7asse3q1cq5mi.js',
	baseURL: 'http://139.199.27.165:8081/',
	YQL: ['http://www.zuimeitianqi.com'],
	CORS: ['http://localhost:7001'],
	openPages: ['/login'],
	apiPrefix: '',
	api: {
		userLogin: '/user/login',
		userLogout: '/user/logout',
		userInfo: '/user/isLogin',
		users: '/users',
		dashboard: '/user/getManageArea'
	}
}
