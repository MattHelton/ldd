import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <select 
                name={this.props.name}
                value={this.props.value}
            >
                <option value="" selected disabled hidden>{this.props.placeholder}</option>
                    {this.props.options.map(option => {
                    return (
                        <option
                            key={option}
                            value={option}
                            label={option}>{option}
                        </option>
                        );
                    })}
            </select>
        )
    }
}

export default Select