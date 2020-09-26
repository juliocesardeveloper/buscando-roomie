import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/index";

function MyApp ({ Component, pageProps }) {
  

const initialState = { user: {} };
const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
