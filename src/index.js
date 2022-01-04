import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./main/home/home";
import {Provider} from 'react-redux';

import store from './store';
import './index.css';

ReactDOM.render(  <Provider store={store}>
    <Home />
  </Provider>, document.querySelector("#root"));