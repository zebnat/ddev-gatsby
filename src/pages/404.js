import React from 'react'
import Header from '../components/Header'

import { Link } from 'gatsby'

const NotFoundPage = () => (
  <>
    <div css={{ padding: 10 }}>
      <Header h1={'404 ERROR'} h2={'Oops'} quote={'Not found'} />
      <Link to="/">Inicio</Link>
      <br />
      <Link to="/">Homepage</Link>
      <br />
    </div>
  </>
)

export default NotFoundPage
