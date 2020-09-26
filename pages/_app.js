import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers/index";

function MyApp ({ Component, pageProps }) {
<<<<<<< HEAD
  

const initialState = { user: {} };
const store = createStore(reducer, initialState);

=======
const initialState = { user: {} };
const store = createStore(reducer, initialState);
>>>>>>> 89d70ad1c22697e9d9fe25145731a3f4744744e3
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
