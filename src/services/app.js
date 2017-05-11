import { request, config } from '../utils'
const { api } = config
const { user, userLogout, userLogin, userisLogin } = api

export async function login (params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}

export async function logout (params) {
  return request({
    url: userLogout,
    method: 'get',
    data: params,
  })
}

export async function query (params) {
  return request({
    url: user.replace('/:id', ''),
    method: 'get',
    data: params,
  })
}

export async function getUserisLogin(params) {
	return request({url: userisLogin, method: 'get', data: params})
}
