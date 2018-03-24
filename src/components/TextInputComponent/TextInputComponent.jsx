
import React from 'react';

export default class TextInputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			float: false,
		};
	}

	render() {
		const input = this.props.labelStyle || {
			marginBottom: '20px',
			height: '30px',
			padding: '0px',
			background: 'transparent',
			outline: 'none',
			border: 'none',
			borderBottom: '1px dashed #83A4C5',
			width: '275px',
			overflow: 'hidden',
			resize: 'none',
			height: '20px',
			color: 'white'
		};
		const labelStyle = this.props.labelStyle || {
			fontSize: '11px',
			color: 'rgb(101, 199, 170)',
			marginBottom: '3px',
		};
		labelStyle.display = (this.props.value || this.state.float) ? 'block' : 'none';
		return (
			<div className={'form-field'}>
				<div className={'form-label'} style={labelStyle}>{this.props.name}</div>
				<input type={this.props.type} name={this.props.name}
					placeholder={this.props.float ? '' : this.props.name}
					style={input}
					onFocus={() => this.setState({ float: true })}
					onBlur={() => this.setState({ float: false })}
					onChange={(e) => this.props.onChange(e.target.value)} />
			</div>
		);
	}
}

