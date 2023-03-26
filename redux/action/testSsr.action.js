import { TEST_SSR } from "../types";

export function testSsr() {
    return{
        type:TEST_SSR.FETCH
    }
}
export function testSsrSuccess(data) {
    return {
        type: TEST_SSR.SUCCESS,
        payload: data
    }
}
export function testSsrError(message) {
    return {
        type: TEST_SSR.ERROR,
        payload: message
    }
}
export function testSsrReset() {
    return {
        type: TEST_SSR.RESET
    }
}
const testSsrAction = {
    testSsr,
    testSsrSuccess,
    testSsrError,
    testSsrReset
}
export default testSsrAction