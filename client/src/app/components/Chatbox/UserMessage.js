import React from 'react'
import { UserMessage } from './Message.styled'

const userMessage = (props) => {
	return (
		<span className="userMessageSpan">
			<UserMessage>
				<p>
					Como faço pra eliminar uma matéria? Já sei web :D
				</p>
			</UserMessage>
		</span>
	)
}


export default userMessage
