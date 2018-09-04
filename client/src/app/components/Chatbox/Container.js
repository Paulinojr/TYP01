import React, { Component } from 'react'
import StyledContainer from './Container.styled'
import BotMessage from './BotMessage'
import UserMessage from './UserMessage'
import { Input, InputBox, Send } from './InputBox.styled.js'


class Container extends Component {
	constructor(props){
		super(props)

		this.state = {
				value: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event){
		console.log("this is the message: ", this.state.value)
		event.preventDefault()
	}

	handleChange(event){
		this.setState({value: event.target.value})
	}

	render(){
		return(
			<StyledContainer>
				<BotMessage></BotMessage>

				<UserMessage></UserMessage>

				<form onSubmit={this.handleSubmit}>
					<InputBox>
						<Input value={this.state.value} onChange={this.handleChange}></Input>
						<Send>
							<img src="/images/ic_send.svg" alt="send"/>
						</Send>
					</InputBox>
				</form>

			</StyledContainer>
		)
	}
}

export default Container
