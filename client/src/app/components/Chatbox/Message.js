import React from 'react'
import { Message } from './Message.styled'

const message = (props) => {
	return (
		<Message className={props.messageClass}>
			<p> {props.value} </p>
		</Message>
	)
}

export default message
