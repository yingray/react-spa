import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import testReducer from './reducers/testReducer';

const mode =  process.env.REACT_APP_MODE;

export const configureStore = (history, initialState) => {

	const reducer = combineReducers({
        testReducer,
        form: formReducer,
		routing: routerReducer
	})

	const composeEnhancers = (mode === 'dev') ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : (compose)

    const makeHydratable = (reducer, hydrateActionType) => {
        return function (state, action) {
            switch (action.type) {
                case hydrateActionType:
                    return reducer(action.state, action);
                default:
                    return reducer(state, action);
            }
        }
    }

	const store = createStore(
        makeHydratable(reducer, 'INITIAL_STATE'),
		initialState,
		composeEnhancers(
			applyMiddleware(
				thunkMiddleware,
				routerMiddleware(history)
			)
		)
	);

    store.dispatch({
        type: 'INITIAL_STATE',
        state: initialState
    });

	return store
}