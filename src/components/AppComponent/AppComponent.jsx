import React from 'react';
import LoginComponent from '../LoginComponent/LoginComponent.jsx';
import './app.css';

const CN = 'app';

export default class AppComponent extends React.Component {
	render() {
		return (
			<div className={`${CN}__container`}>
				<LoginComponent />
			</div>
		);
	}
}
