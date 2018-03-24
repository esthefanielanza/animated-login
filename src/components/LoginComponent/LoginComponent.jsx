import React from 'react';
import SVG from 'svgjs';
import TextInputComponent from '../TextInputComponent/TextInputComponent'
import './login.css';

const CN = 'login';

export default class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		};
	}

	renderBody() {
		return( <g id="body">
			<path fill="#5EAF6C" d="M238.445,106.195l31.9-23.928c0,0,12.063,131.539-41.049,108.824
				c-53.111-22.713-33.475-56.059-33.475-56.059L238.445,106.195z"/>
			<path fill="#5EAF6C" d="M154.667,69.102c-8-14.77-2-26.102,3-28.77c5-2.666,9.501,4.668,9.501,4.668s-13.751,4-4.459,21.332
		 		C172,83.666,154.667,69.102,154.667,69.102"/>
			<path fill="#5EAF6C" d="M102.369,219.074L86.744,266.99c0,0,61.646,38.543,117.59-3.123l-16.668-44.793H102.369z"/>
			<path fill="#5EAF6C" d="M51.099,112.029L24.895,87.104c0,0-13.907,131.355,39.519,109.389
				c53.424-21.967,34.258-55.584,34.258-55.584L51.099,112.029z"/>
			<ellipse transform="matrix(0.9996 -0.029 0.029 0.9996 -4.1973 4.2882)" fill="#83C98B" cx="145.994" cy="147.098" rx="104.166" ry="86.98"/>
			<ellipse fill="#E2717C" cx="168.872" cy="36.854" rx="9.205" ry="8.813"/>
		</g>);
	}

	renderHelmet() {
		return(<g id="helmet">
			<ellipse fill="none" stroke="#F2F2F2" stroke-width="3" stroke-miterlimit="10" cx="147.147" cy="130.91" rx="139.813" ry="120.242"/>
			<circle fill="none" stroke="#F2F2F2" stroke-width="3" stroke-miterlimit="10" cx="225.417" cy="70.184" r="11.083"/>
			<circle fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="212.448" cy="92.551" r="4.448"/>
		</g>);
	}

	renderMouth() {
		return( <g id="mouth">
			<line fill="none" stroke="#5EAF6C" stroke-width="4" stroke-miterlimit="10" x1="119" y1="187.334" x2="136.333" y2="202.666"/>
		 	<line fill="none" stroke="#5EAF6C" stroke-width="4" stroke-miterlimit="10" x1="157.667" y1="202.666" x2="176.667" y2="187.334"/>
			<ellipse fill="#E2717C" cx="84.834" cy="179.5" rx="18.167" ry="7.834"/>
			<ellipse fill="#E2717C" cx="209" cy="182.9" rx="18.166" ry="7.834"/>
		</g>);
	}

	renderEyes() {
		const moveEyes = this.state.username.length * 2;
		return( <g id="eyes">
			<ellipse fill="#333333" cx={103 + moveEyes} cy={145.666 + moveEyes} rx={11.667 + moveEyes} ry={22.334 + moveEyes}/>
			<ellipse fill="#333333" cx="193.333" cy="147.332" rx="11.667" ry="22.334"/>
		</g>
		);
	}

	renderSvg() {
		return( 
			<svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="187.291px" height="183.466px" viewBox="0 0 292.667 286.667" enable-background="new 0 0 292.667 286.667">
				{this.renderBody()}
				{this.renderHelmet()}
				{this.renderMouth()}
				{this.renderEyes()}
			</svg>
		);
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<div className={CN}>
					<div className={`${CN}__avatar`}><div style={{marginTop: '30px'}}>{this.renderSvg()}</div></div>
					<TextInputComponent
						value={this.state.username}
						type='text'
						name='USERNAME'
						onChange={(value) => {
							if(value.length > this.state.username.length) {
								var draw = SVG('eyes').animate().move(100, 100).fill('#000');
								console.log('draw');
							} 
							this.setState({ username: value })
							}
						} />
					<TextInputComponent
						value={this.state.password}
						type='password'
						name='PASSWORD'
						onChange={(value) => this.setState({ password: value })} />
				</div>
				<div className={`${CN}__botton-bar`}> BECAUSE THE UNIVER IS BIG. IT'S VAST AND COMPLICATED, AND ... RIDICULOS. AND SOMETIMES, VERY RARELY, IMPOSSIBLE THINGS JUST HAPPEN AND WE CALL THEM MIRACLES </div>
			</div>
		);
	}
}

