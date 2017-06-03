import { logout, getUserisLogin } from '../services/app';
import { routerRedux } from 'dva/router';
import { parse } from 'qs';
import { config } from '../utils';
const { prefix } = config;

export default {
    namespace: 'app',

    state: {
        user: {},
        menuPopoverVisible: false,
        siderFold: localStorage.getItem(`${prefix}siderFold`) === 'true',
        darkTheme: localStorage.getItem(`${prefix}darkTheme`) === 'true',
        isNavbar: document.body.clientWidth < 769,
        navOpenKeys: JSON.parse(localStorage.getItem(`${prefix}navOpenKeys`)) || []
    },

    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'getUserisLogin' });
            let tid;
            window.onresize = () => {
                clearTimeout(tid);
                tid = setTimeout(() => {
                    dispatch({ type: 'changeNavbar' });
                }, 300);
            };
        }
    },

    effects: {
        *getUserisLogin({
            payload
        }, { call, put }) {
            const data = yield call(getUserisLogin, parse(payload));
            if (data.success && data.data) {
                yield put({ type: 'querySuccess', payload: data.data });
                if (location.pathname === '/login') {
                    yield put(routerRedux.push('/dashboard'));
                }
            } else {
                if (location.pathname !== '/login') {
                    let from = location.pathname;
                    if (location.pathname === '/dashboard') {
                        from = '/dashboard';
                    }
                    window.location = `${location.origin}/login?from=${from}`;
                }
            }
        },

        *logout({
            payload
        }, { call, put }) {
            const data = yield call(logout, parse(payload));
            if (data.success) {
                yield put(routerRedux.push('/login'));
            } else {
                throw (data);
            }
        },

        *changeNavbar({
            payload
        }, { put, select }) {
            const { app } = yield (select(_ => _));
            const isNavbar = document.body.clientWidth < 769;
            if (isNavbar !== app.isNavbar) {
                yield put({ type: 'handleNavbar', payload: isNavbar });
            }
        }
    },

    reducers: {
        querySuccess(state, { payload: user }) {
            return {
                ...state,
                user
            };
        },

        switchSider(state) {
            localStorage.setItem(`${prefix}siderFold`, !state.siderFold);
            return {
                ...state,
                siderFold: !state.siderFold
            };
        },

        switchTheme(state) {
            localStorage.setItem(`${prefix}darkTheme`, !state.darkTheme);
            return {
                ...state,
                darkTheme: !state.darkTheme
            };
        },

        switchMenuPopver(state) {
            return {
                ...state,
                menuPopoverVisible: !state.menuPopoverVisible
            };
        },

        handleNavbar(state, { payload }) {
            return {
                ...state,
                isNavbar: payload
            };
        },

        handleNavOpenKeys(state, { payload: navOpenKeys }) {
            return {
                ...state,
                ...navOpenKeys
            };
        }
    }
};
