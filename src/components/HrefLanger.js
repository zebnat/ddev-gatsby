import React from 'react'

/*
const HrefLanger = ({hrefLangs}) => (
	hrefLangs.map((v,i) => 
		<link rel="alternate" hreflang={v.lang} href={'https://www.danieldev.es' + (v.lang === "es" ? v.url : v.lang+v.url)} />
	)
)
*/
const HrefLanger = ({hrefLangs, defaultLang}) => {
	return (
		<>
			{
				hrefLangs.map((v,i) => 
				<link rel="alternate" hreflang={v.lang} href={'https://www.danieldev.es' + (v.lang === defaultLang ? v.url : '/'+v.lang+v.url)} />
				)
			}
		</>
	)
}



export default HrefLanger