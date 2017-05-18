import { query } from '../services/dashboard';
import { parse } from 'qs';

export default {
    namespace: 'dashboard',

    state: {
        Citylist: []
    },

    subscriptions: {
        setup({ dispatch }) {
            dispatch({ type: 'query' });
        }
    },

    effects: {
        *query({
            payload
        }, { call, put }) {
            const data = yield call(query, parse(payload));
            console.log(data);
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        Citylist: data.data[0].list
                    }
                });
            }
        }
    },

    reducers: {
        querySuccess(state, action) {
            const { Citylist } = action.payload;
            return {
                ...state,
                Citylist
            };
        }
    }
};
