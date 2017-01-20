import ActionTypes from '../constants/ActionTypes'
import { updateObject, createReducer } from '../utils/reducerUtils'

const initialState = {
    text: 'Click me!',
    times: 0,
    test_json: [],
    token: '',
    cookie: ''
};

const test_show = (state, action) => updateObject(state, {
    test_json: action.response
})

export default createReducer(initialState, {
	[ActionTypes.TEST_SHOW]: test_show
});