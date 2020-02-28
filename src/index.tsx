import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from "./serviceWorker";
import Todo from './Components/Todo'

ReactDOM.render(<Provider store={store}><Todo /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
