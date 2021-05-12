import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import SPA from "./single-page-app/app-frame/AppFrame";
import SIA from "./sia/Sia";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/sia" component={SIA}></Route>
				<Route path="/" component={SPA}></Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
