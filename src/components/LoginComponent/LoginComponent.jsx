import React from 'react';
import './login.css';

const CN = 'login';

export default class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			floatUsername: false,
			username: ''
		};
	}

	renderInput(type, name, float, value, onFloat, onChange) {
		const floatLabelStyle = {
			display: (value || float) ? 'block' : 'none',
		};
		return (
			<div className={`${CN}__form-field`}>
				<div className={`${CN}__form-label`} style={floatLabelStyle}>{name}</div>
				<input type={type} name={name}
					placeholder={float ? '' : name}
					className={`${CN}__input`}
					onFocus={() => onFloat(true)}
					onBlur={() => onFloat(false)}
					onChange={(e) => onChange(e.target.value)} />
			</div>
		);
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<div className={CN}>
					<div className={`${CN}__avatar`}>Avatar</div>
					{this.renderInput(
						'text', 'USERNAME',
						this.state.floatUsername, this.state.username,
						(float) => { this.setState({ floatUsername: float }) }, (value) => this.setState({ username: value }))}
				</div>
				<div className={`${CN}__botton-bar`}> BECAUSE THE UNIVER IS BIG. IT'S VAST AND COMPLICATED, AND ... RIDICULOS. AND SOMETIMES, VERY RARELY, IMPOSSIBLE THINGS JUST HAPPEN AND WE CALL THEM MIRACLES </div>
			</div>
		);
	}
}

