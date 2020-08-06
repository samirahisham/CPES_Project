import React from "react";
import Route from "./Routes/Route";
import { Provider } from "react-redux";
import { store } from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
