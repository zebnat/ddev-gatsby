import React from 'react'
import {Link} from 'gatsby'
import logo from '../../data/images/logo2.png'

const boxStyles = {
	borderBottom: '1px solid #ececec',
	background: '#fff',
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
	'.visible' : {

	}
}

const contentBoxStyles = {
	maxWidth: 730, 
	margin: '0 auto'
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
		background: '#262626'
	},
	">a.ac" : {
		color: '#81dbff'
	}
}

const TopBar = ({languages, defaultLang, currentLang}) => {
	//console.log(languages.length);
	//if(hrefLangs.length < 2) return null;
	

	return (
		<div css={boxStyles}>
			<div css={contentBoxStyles}>
				<Link exact to={(currentLang === defaultLang ? '/' : '/'+currentLang+'/')}>
					<img src={logo} alt={"DanielDEV"} css={{margin: '0 0px 0 28px', float: 'left'}}/>
				</Link>

				<div css={langSwitcherStyles}>
					{
					languages.map((v, i ) =>  
					<Link 
						key={v.lang} 
						exact
						to={ ((v.lang === defaultLang) ? '' : '/'+ v.lang ) + v.url }
						activeClassName="ac"
					>
						{v.lang}
					</Link>
					)
					}
				</div>
			</div>
		</div>
		)
}

export default TopBar