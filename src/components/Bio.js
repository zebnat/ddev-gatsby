import React from 'react'
import dani1 from '../../data/images/dani1.jpg'
import dani2 from '../../data/images/dani2.jpg'
import dani3 from '../../data/images/dani3.jpg'

const imageStyle = {display: 'block', width: 250, height: 250, borderRadius: 500, margin: '0 auto'};
const Bio = () => (
	<>
		<img css={imageStyle} src={dani1} />
		<img css={imageStyle} src={dani2} />
		<img css={imageStyle} src={dani3} />
	</>
);
export default Bio