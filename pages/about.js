import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import testSsrAction from '../redux/action/testSsr.action'
import { wrapper } from "../store";
const About = () => {
    const dispatch = useDispatch();
    const currentBannerState = useSelector((state) => state.testSsr);
    useEffect(() => {
        dispatch(testSsrAction.testSsr())
    }, [])
    return (
        <>
            {currentBannerState.data && currentBannerState.data.map((data, i) => (
                <div style={{ display: 'flex' }} key={i}>
                    <div style={{ marginRight: '20px' }}>
                        <p> {data.userId}</p>
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <p> {data.id}</p>
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <p> {data.title}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context) => {
            let state = await store.dispatch(testSsrAction.testSsr());
            return { props: { state: state } }
        }
)
export default About