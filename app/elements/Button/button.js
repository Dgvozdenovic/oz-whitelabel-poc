import React, { Component, PropTypes } from 'react';
import { getConfigForElement } from '~/app/helpers/configHelper'

class Button extends Component {
    static propTypes = {
        btnText: PropTypes.any.isRequired,
        className: PropTypes.string,
        href: PropTypes.string,
        isDisabled: PropTypes.bool,
        small: PropTypes.bool,
        onClick: PropTypes.func,
    };

    componentWillMount () {
        this.style = getConfigForElement('button');
    }

    render () {
        return(
            <a className='btn' onClick={this.props.onClick} style={this.style}>
                {this.props.btnText}
            </a>
        );

    }
}

export default Button;
