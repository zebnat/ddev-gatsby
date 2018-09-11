import React from 'react'
import {Link} from 'gatsby'
import logo from '../../data/images/logo2.png'

const boxStyles = {
	position: 'fixed',
	top: 0,
	left: 0,
	textAlign: 'center',
	color: '#1b1b1b',
	width: '100%',
	zIndex: 900,
	height: '3rem',
	fontSize: '110%',
	lineHeight: '35pt',
	margin: '0 10px',
	'.hide' : {
		top: '-42px'
	},
	transition: 'top .25s linear'
}

const contentBoxStyles = {
	maxWidth: 730, 
	margin: '0 auto',
	background: '#f8f8f8',
	height: '100%'
}

const langSwitcherStyles = {
	float: 'right',
	marginRight: '10px',
	'>a': {
		textTransform: 'uppercase',
		color: '#efefef',
		textDecoration: 'none',
		border: '1px solid black',
		padding: '5px',
		margin: '0 2px 0 0',
		borderRadius: '4px',
		background: '#262626',
		fontSize: '80%'
	},
	">a.ac" : {
		color: '#81dbff'
	}
}

class TopBar extends React.Component {
	constructor(props) {
		super(props)
		this.mounted = false;
		this.state = {
			hide: false,
			lastY: 0,
			mounted: false
		}
	}

	componentDidMount() {
		if(typeof window !== 'undefined'){
			window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 50) );
			this.mounted = true;
		}
	}

	componentWillUnmount() {
		if(typeof window !== 'undefined'){
			window.removeEventListener('scroll', this.throttle(this.handleScroll.bind(this), 50));
			this.mounted = false;
		}
	}
	
	throttle(fn, wait) {
		var time = Date.now();
		return () => {
			if ((time + wait - Date.now()) < 0) {
				fn();
				time = Date.now();
			}
		}
	}

	handleScroll() {
		if(this.mounted) {
			if(window.scrollY > 400) {
				var hide;
				if(window.scrollY - this.state.lastY > 0){
					hide = true
				}else{
					hide = false
				}

				window.requestAnimationFrame(() => {
					this.setState({
						lastY: window.scrollY,
						hide: hide
					})
				})
			}
		}
		
		


	}

	render() {
		const {languages, defaultLang, currentLang} = this.props

		return (
			<div css={boxStyles} className={(this.state.hide === true) ? "hide" : ""} >
				<div css={contentBoxStyles}>
					<Link exact to={(currentLang === defaultLang ? '/' : '/'+currentLang+'/')}>
						<img src={logo} alt={"DanielDEV"} css={{margin: '0 0px 0 28px', float: 'left'}}/>
					</Link>

					<div css={langSwitcherStyles}>
						{
						languages.map((v, i ) =>  
						<Link 
							key={i} 
							exact
							to={v.url}
							activeClassName="ac"
						>
							{v.locale}
						</Link>
						)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default TopBar