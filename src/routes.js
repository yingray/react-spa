import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Index from './pages/Default';

export const pages = [{
    path: 'default', component: require('./pages/Default').default
}];

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        {pages.map(page => <Route path={page.path} component={page.component}/>)}
    </Route>
);

export default routes;
