import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

@connect((store) => {
    return {
        config: store.config
    };
})
class Button extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render () {
        return(
            <h2 style={this.props.config.configuration.header ? this.props.config.configuration.header : {display: 'none'}}>
                {this.props.text}
            </h2>
        );

    }
}

export default Button;
