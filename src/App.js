import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import store from "./utils/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
