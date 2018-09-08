import React from 'react'
import {
	HeaderContainer,
	MobileAvatar,
	TitleSection,
	OptionsSection,
	Icon
} from './Header.styled'

const header = (props) => {
	return (
		<HeaderContainer>
			<MobileAvatar src="/images/typ01.svg">
			</MobileAvatar>
			<TitleSection>
				<h1>TYP01</h1>
				<p>Chatbot IFSP</p>
			</TitleSection>
			<OptionsSection>
				<Icon>
					<path id="ic_info_outline_24px" className="cls-1" d="M13.5,21.028H16.06V13.417H13.5ZM14.782,2A12.686,12.686,0,1,0,27.563,14.685,12.738,12.738,0,0,0,14.782,2Zm0,22.833A10.148,10.148,0,1,1,25.007,14.685,10.2,10.2,0,0,1,14.782,24.833ZM13.5,10.88H16.06V8.343H13.5Z" transform="translate(-2 -2)"/>
				</Icon>
				<Icon>
					<path id="ic_settings_24px" className="cls-1" d="M21.58,14.286a8.671,8.671,0,0,0,.079-1.1,8.672,8.672,0,0,0-.079-1.1l2.374-1.846a.562.562,0,0,0,.135-.716L21.839,5.659a.567.567,0,0,0-.686-.246l-2.8,1.119a8.233,8.233,0,0,0-1.9-1.1L16.021,2.47A.548.548,0,0,0,15.47,2h-4.5a.548.548,0,0,0-.551.47L9.989,5.435a8.657,8.657,0,0,0-1.9,1.1l-2.8-1.119a.55.55,0,0,0-.686.246L2.349,9.531a.55.55,0,0,0,.135.716l2.374,1.846a8.825,8.825,0,0,0-.079,1.1,8.825,8.825,0,0,0,.079,1.1L2.484,16.133a.562.562,0,0,0-.135.716L4.6,20.721a.567.567,0,0,0,.686.246l2.8-1.119a8.233,8.233,0,0,0,1.9,1.1l.428,2.965a.548.548,0,0,0,.551.47h4.5a.548.548,0,0,0,.551-.47l.428-2.965a8.657,8.657,0,0,0,1.9-1.1l2.8,1.119a.55.55,0,0,0,.686-.246l2.251-3.872a.562.562,0,0,0-.135-.716Zm-8.361,2.82a3.916,3.916,0,1,1,3.939-3.916A3.932,3.932,0,0,1,13.219,17.106Z" transform="translate(-2.271 -2)"/>
				</Icon>
			</OptionsSection>
		</HeaderContainer>
	)
}

export default header
