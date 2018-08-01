import React from 'react'
import Header from '../../components/Header'
import {Helmet} from 'react-helmet'


const translation = {
	"en" : {
		"h1" : "Fullstack Developer & SEO Portfolio from Barcelona",
		"h2" : "My name is Daniel Domínguez Rubio and this is my personal website",
		"title" : "Fullstack developer & SEO - Daniel Domínguez",
		"quote" : `This is Jackass`
	},
	"es" : {
		"h1" : "Portfolio de un Fullstack Developer y SEO en Barcelona",
		"h2" : "Mi nombre es Daniel Domínguez Rubio y esta es mi web personal",
		"title" : "Desarrollador Web Fullstack con SEO - Daniel Domínguez",
		"quote" : `Esto es Jackass`
	}
}

const HomePage = (props) => (
	<>
		<Helmet>
			<html lang={props.lang} />
			<title>{translation[props.lang].title}</title>
		</Helmet>
		<Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} quote={translation[props.lang].quote}/>

		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum nunc diam. Pellentesque malesuada velit in nisl venenatis consequat. Aliquam pharetra massa nisl, eget dignissim turpis lacinia nec. Morbi quis rhoncus arcu. Pellentesque eleifend, urna nec hendrerit lobortis, sem ipsum imperdiet purus, dapibus molestie sem ipsum vel leo. Vestibulum hendrerit fringilla ipsum id dictum. Mauris vel erat accumsan, mattis erat at, lobortis odio. Phasellus in dolor bibendum, placerat velit vel, feugiat justo. Morbi hendrerit a purus sit amet congue. Nulla gravida dignissim velit vitae ultrices. Integer euismod dignissim lectus nec posuere. Suspendisse potenti. Nam a aliquam magna.</p>
		<p>Proin tempus, ex quis dignissim tincidunt, lectus lectus semper lacus, in sagittis purus purus sed nibh. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec convallis placerat turpis, vel blandit dui. Curabitur eu dapibus lectus. In quis tempus dolor. Donec efficitur, tortor a facilisis egestas, neque erat tincidunt nisi, id dapibus massa elit et ante. Cras rutrum leo sed mattis accumsan. Sed ac venenatis augue. Maecenas mollis velit vitae mi pulvinar elementum.</p>
		<p>Sed dignissim dolor nec convallis malesuada. Quisque tincidunt elit quis vehicula laoreet. Nunc ut convallis urna. Suspendisse congue consectetur risus, quis lacinia tellus tincidunt ac. Donec bibendum ligula massa. Praesent nec vestibulum augue. Morbi id pharetra turpis. Mauris cursus convallis dolor, sed blandit tortor bibendum a. In hac habitasse platea dictumst. Pellentesque dignissim rutrum pellentesque. Vestibulum enim sem, dignissim et ipsum sed, maximus blandit dolor. Donec porta, purus sit amet ullamcorper rhoncus, metus massa max</p>
	</>
)

export default HomePage