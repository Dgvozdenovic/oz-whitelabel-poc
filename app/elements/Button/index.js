import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

@connect((store) => {
    return {
        config: store.config
    };
})
class Button extends Component {
    static propTypes = {
        btnText: PropTypes.any.isRequired,
        className: PropTypes.string,
        href: PropTypes.string,
        isDisabled: PropTypes.bool,
        small: PropTypes.bool,
        onClick: PropTypes.func,
    };

    render () {
        return(
            <a className='btn' onClick={this.props.onClick} style={this.props.config.configuration.button ? this.props.config.configuration.button : {display: 'none'}}>
                {this.props.btnText} {this.props.config.text}
            </a>
        );

    }
}

export default Button;
