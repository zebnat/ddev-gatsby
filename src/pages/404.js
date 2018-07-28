import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'


import {Link} from 'gatsby'

const NotFoundPage = () => (
  <>
		<div css={{padding: 10}}>
			<Header 
				h1={'404 ERROR'} 
				h2={'Oops'} 
				quote={'No se ha encontrado esa página'}
			/>
		<Link to="/">Vuelve al inicio</Link>
		</div>
  </>
)

export default NotFoundPage
