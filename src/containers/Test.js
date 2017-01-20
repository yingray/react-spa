import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from '../actions/testActions';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        this.props.testActions.showTest();
    }

    handleClick(event) {
    }

    render() {
        let {test_json} = this.props.testState;
        return (
            <div>
                <div>
                    <h2>Back-end API Testing:</h2>
                    <p>{JSON.stringify(test_json, null, 2)}</p>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        testState: state.testReducer
    }),
    dispatch => ({
        testActions: bindActionCreators({...testActions}, dispatch)
    })
)(Test)