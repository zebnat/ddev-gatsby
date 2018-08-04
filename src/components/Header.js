import React from 'react'

const Header = (props) => (
	<header css={{ margin: `50px auto 1rem auto`, maxWidth: 600 }}>
		<h1>{props.h1}</h1>
		<h2>{props.h2}</h2>
		{
			props.quote ? 
			<div>
				<blockquote>
					<em>“{props.quote}”</em>
				</blockquote>
			</div> : 
			""
		}
		
	</header>
)

export default Header;