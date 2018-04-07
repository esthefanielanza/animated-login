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
		const headColor='#CEFF88';
		const bodyColor='#AFD974';
		const antennaColor='#E880AC';

		return( <g id="body">
			<path fill={bodyColor} d="M238.445,106.195l31.9-23.928c0,0,12.063,131.539-41.049,108.824
				c-53.111-22.713-33.475-56.059-33.475-56.059L238.445,106.195z"/>
			<path fill={bodyColor} transform={`translate(0, 50`} d="M51.099,112.029L24.895,87.104c0,0-13.907,131.355,39.519,109.389
				c53.424-21.967,34.258-55.584,34.258-55.584L51.099,112.029z"/>
			<path fill={bodyColor} d="M102.369,219.074L86.744,266.99c0,0,61.646,38.543,117.59-3.123l-16.668-44.793H102.369z"/>
			<path fill={bodyColor} d="M154.667,69.102c-8-14.77-2-26.102,3-28.77c5-2.666,9.501,4.668,9.501,4.668s-13.751,4-4.459,21.332
		 		C172,83.666,154.667,69.102,154.667,69.102"/>
			<ellipse transform="matrix(0.9996 -0.029 0.029 0.9996 -4.1973 4.2882)" fill={headColor} cx="143.994" cy="145.098" rx="96.166" ry="84.98"/>
			<ellipse fill={antennaColor} cx="170.872" cy="38.854" rx="11.205" ry="10.813"/>
		</g>);
	}

	renderHelmet() {
		return(<g id="helmet">
			<ellipse fill="none" transform="translate(0,-5)" stroke="#F2F2F2" stroke-width="6" stroke-miterlimit="10" cx="147.147" cy="135.91" rx="139.813" ry="125.242"/>
			<circle fill="none" stroke="#F2F2F2" stroke-width="4" stroke-miterlimit="10" cx="225.417" cy="70.184" r="11.083"/>
			<circle fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="212.448" cy="92.551" r="4.448"/>
		</g>);
	}

	renderMouth() {
		const colorCheeks = '#E880AC';
		const colorMount = '#5EAF6C';
		return( <g id="mouth">
			<line fill="none" stroke={colorMount} stroke-width="2" stroke-miterlimit="10" x1="119" y1="187.334" x2="136.333" y2="202.666"/>
		 	<line fill="none" stroke={colorMount} stroke-width="2" stroke-miterlimit="10" x1="157.667" y1="202.666" x2="176.667" y2="187.334"/>
			<ellipse fill={colorCheeks} cx="84.834" cy="179.5" rx="18.167" ry="7.834"/>
			<ellipse fill={colorCheeks} cx="209" cy="182.9" rx="18.166" ry="7.834"/>
		</g>);
	}

	renderEyes() {
		const eyesStart = this.state.focus ? -8 : 0;
		const shouldMoveEyes = eyesStart + this.state.username.length/2;
		const moveEyes = shouldMoveEyes < 8 ? shouldMoveEyes : 8;
		return( <g id="eyes">
			<ellipse fill="#333333" transform={`translate(${moveEyes},8)`} cx={103} cy={145.666} rx={11.667} ry={22.334}/>
			<ellipse fill="#333333" transform={`translate(${moveEyes},8)`} cx="193.333" cy="147.332" rx="11.667" ry="22.334"/>
		</g>
		);
	}

	renderSvg() {
		const jump = this.state.focus ? 6 : 4;
		return( 
			<svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" transform={`translate(0,${jump})`}
			width="168.561px" height="165.199px" viewBox="0 0 292.667 286.667" enable-background="new 0 0 292.667 286.667">
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
					<div className={`${CN}__avatar`}>
						<div style={{marginTop: '30px'}}>{this.renderSvg()}</div>
					</div>
					<div className={`${CN}__login-fields`}>
					<TextInputComponent
						value={this.state.username}
						type='text'
						name='USERNAME'
						onChange={(value) => {
							this.setState({ username: value })
						}}
						onFocus={() => { this.setState({focus: true}); }}
						onBlur={() => { this.setState({focus: false}); }} />
					<TextInputComponent
						value={this.state.password}
						type='password'
						name='PASSWORD'
						onChange={(value) => this.setState({ password: value })} />
					</div>
				</div>
				<div className={`${CN}__botton-bar`}> BECAUSE THE UNIVERSE IS BIG. IT'S VAST AND COMPLICATED, AND ... RIDICULOS. AND SOMETIMES, VERY RARELY, IMPOSSIBLE THINGS JUST HAPPEN AND WE CALL THEM MIRACLES </div>
			</div>
		);
	}
}

