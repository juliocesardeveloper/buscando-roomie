import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/index";
import Layout from "../components/Layout";

function MyApp ({ Component, pageProps }) {
	
const initialState = { user: {} };
const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
