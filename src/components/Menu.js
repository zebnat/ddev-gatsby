import React from 'react'
import {Link} from 'gatsby'

import ReactSwipeEvents from 'react-swipe-events'

const menuStyle = {
	position: 'fixed',
	'zIndex' : 1000,
	top: 0,
	left: 0,
	width: '300px',
	height: '100%',
	color: '#f8f8f8',
	background: '#262626',
	'@media(max-width: 300px)': {
		'.visible': {
			width: '100%'
		}
	},
	transition: "left .4s cubic-bezier(0.4, 0, 0.2, 1)"
}

const closeStyle = {
	cursor: 'pointer',
	width: 36,
	height: 36,
	position: 'absolute',
	top: '8px',
	right: '7px'
}

const listStyle = {
	listStyleType: 'none',
	margin: '6rem 0 0 3rem',
	textTransform: 'uppercase',
	fontFamily: 'Oswald, Helvetica, sans-serif',
	lineHeight: '4rem',
	fontSize: '140%',
	overflow: 'auto',
	display: 'block',
	height: '80%',
	'>li': {
		cursor: 'pointer',
		marginRight: 7,
		'>a': {
			textDecoration: 'none',
			color: '#fff'
		},
		'>a.ac': {
			color: '#b0d3ff'
		}
	}
}

class Menu extends React.Component {
	constructor(props) {
		super(props)
		
		console.log('constructed?');

		if(window.innerWidth >= 1250) {
			this.state = {visible: true}
		} else {
			this.state = {visible: false}
		}
		

		this.toggleVisibility = this.toggleVisibility.bind(this)
		this.onSwipedRight = this.onSwipedRight.bind(this)
		this.onSwipedLeft = this.onSwipedLeft.bind(this)
	}

	componentDidMount() {
		console.log( this.state.visible );
		/*
		if(window.innerWidth >= 1250 && this.state.visible != true){
			this.setState({
				visible: true
			})
		}	*/	
	}

	onSwipedRight(e, originalX, endX) {
		if(endX - originalX > 55) {
			if(this.state.visible === false) {
				this.toggleVisibility()
			}
		}
	}

	onSwipedLeft(e, originalX, endX) {
		console.log(endX - originalX);
		if(endX - originalX < -55) {
			if(this.state.visible === true) {
				this.toggleVisibility()
			}
		}
	}

	toggleVisibility() {
		this.setState({
			visible: !this.state.visible
		})

		console.log(this.state.visible);
	}

	render() {
		return (
			<ReactSwipeEvents onSwipedRight={this.onSwipedRight} onSwipedLeft={this.onSwipedLeft}>
				<nav css={menuStyle} className={this.state.visible ? "visible" : "notvisible"} style={this.state.visible ? {left: 0} : {left: -248}}>
					<div css={closeStyle} onClick={this.toggleVisibility}>
						<i className="mdi md-36">{this.state.visible ? "arrow_back" : "menu"}</i>
					</div>
						<ul css={listStyle} style={this.state.visible ? {textAlign: 'left'} : {textAlign: 'right'}}>
						{this.props.menuList.map((data, index) => 
							<li key={index}>
								<Link to={data.route} exact activeClassName={'ac'}>
									<i className="mdi md-36">{data.icon}</i>
									{this.state.visible ? <span css={{position: 'relative', top: -10, marginLeft: '1rem'}}>{data.text}</span> : ""}
								</Link>
							</li>
						)}
						</ul>
				</nav>
			</ReactSwipeEvents>
		)
	}
}

export default Menu;