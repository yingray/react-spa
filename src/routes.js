import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';

import Default from './pages/Default';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Default}/>
		<Route path="default" component={Default}/>
    </Route>
);

export default routes;
