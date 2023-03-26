import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { wrapper, store } from "../store";
function App({ Component, pageProps,...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App