import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'

import {menuList} from '../../data/config';

import {Link} from 'gatsby'

const NotFoundPage = () => (
  <Layout>
		<Header 
			h1={'Error 404 - No se encuentra'} 
			h2={'La página que has solicitado no existe'} 
		/>
		<h3>Si lo deseas puedes visitar las siguientes páginas</h3>
		<ul>
			{menuList.map((data, index) =>
			<li key={index}>
				<Link to={data.route} exact>
					{data.text}
				</Link>
			</li>
			)}
		</ul>
  </Layout>
)

export default NotFoundPage
