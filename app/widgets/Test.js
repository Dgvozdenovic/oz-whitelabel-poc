import React from 'react'
import { connect } from 'react-redux'
import { setString, setList } from "~/rdx/actions/testActions"
import withRedux from 'next-redux-wrapper'
import { initStore } from '~/store'

@connect((store) => {
    return {
        test: store.test
    };
})
class Test extends React.Component {
    clicked () {
        this.props.dispatch(setString());
        this.props.dispatch(setList());
    }
    render () {
        return (
            <div style={{margin: '10px', padding: '10px', border: '1px solid silver'}}>
                <a onClick={this.clicked.bind(this)}>Click me!</a>
                <br/>
                {this.props.test.testString}
            </div>
        )
    }
}

export default withRedux(initStore)(Test)
