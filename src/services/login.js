import {request, config} from '../utils'
const {api} = config
const {userLogin} = api

export async function login(data) {
	console.log(data);
	return request({
		url: userLogin,
		method: 'get',
		data: {
			data: JSON.stringify(data)
		}
	})
}
