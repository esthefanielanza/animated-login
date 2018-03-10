
import React from 'react';
import './login.css';

export default class TextInputComponent extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			floatUsername: false,
			username: ''
		};
    }
    
    render() {
		const floatLabelStyle = {
            display: (this.props.value || this.props.float) ? 'block' : 'none',
        };
        return (
            <div className={'form-field'}>
                <div className={'form-label'} style={floatLabelStyle}>{name}</div>
                <input type={this.props.type} name={this.props.name}
                    placeholder={this.props.float ? '' : this.props.name}
                    className={'input'}
                    onFocus={() => this.props.onFloat(true)}
                    onBlur={() => this.props.onFloat(false)}
                    onChange={(e) => onChange(e.target.value)} />
            </div>
        );
	}
}

