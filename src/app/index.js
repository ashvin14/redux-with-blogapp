import React from "react";
import { render } from "react-dom";
import {createStore,applyMiddleware} from "redux";
import reducer  from "./reducer"
import { Provider} from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AllBlogs } from "./container"
import dataService from "./dataService"

const middleware = applyMiddleware(dataService)
const store = createStore(reducer,middleware);


render(<Provider store = {store}>
	<Router>
		<div>
		<Route path = "/" component = {AllBlogs} />
		</div>
	</Router>
	</Provider>,window.document.getElementById("app"));

document.domain = "localhost";