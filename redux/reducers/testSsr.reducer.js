import { TEST_SSR } from '../types';
const initialState = { data: null, loading: false, error: null };
const testSsrReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case TEST_SSR.FETCH: {
            return { ...state, loading: true }
        }
        case TEST_SSR.SUCCESS: {
            const data = payload;
            return { ...state, loading: false, data }
        }
        case TEST_SSR.ERROR: {
            const message = payload
            return { ...state, loading: false, message }
        }
        case TEST_SSR.RESET: {
            return {...initialState}
        }
        default:
            return state
    }
}

export default testSsrReducer