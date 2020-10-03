<<<<<<< HEAD
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/index";
import Layout from "../components/Layout";
=======
import '../styles/globals.scss'
>>>>>>> frontend

function MyApp ({ Component, pageProps }) {
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
=======
    <Component {...pageProps} />
  )
>>>>>>> frontend
}
export default MyApp
