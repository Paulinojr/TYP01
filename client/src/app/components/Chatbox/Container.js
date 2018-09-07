import React, { Component } from 'react'
import StyledContainer from './Container.styled'
import Message from './Message'
import { Input, InputBox, Send } from './InputBox.styled.js'


class Container extends Component {
	constructor(props){
		super(props)

		this.state = {
			value: '',
			messages: [],
			context: {}
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleBotMessage = this.handleBotMessage.bind(this)
		this.handleUserMessage = this.handleUserMessage.bind(this)
		this.scrollToBottom = this.scrollToBottom.bind(this)
	}

	componentDidMount(){
		this.sendMessage()
		.then(res => this.handleBotMessage(res))
		.catch(err => console.log(err))
	}

	componentDidUpdate() {
		this.scrollToBottom()
	}

	handleBotMessage(message){
		this.setState({
			messages: this.state.messages.concat({
				message: message.output.text,
				messageClass: 'botMessage'
			})
		})
	}

	handleUserMessage(userMessage){
		this.setState({
			messages: this.state.messages.concat({
				message: userMessage,
				messageClass: 'userMessage'
			})
		})
	}

	handleSubmit(event){
		this.handleUserMessage(this.state.value)

		this.sendMessage()
		.then(res => this.handleBotMessage(res))
		.catch(err => console.log(err));

		this.setState({value: ''})

		event.preventDefault()
	}

	handleChange(event){
		this.setState({value: event.target.value})
	}


	sendMessage = async () => {
		const response = await fetch('/conversation/',{
			method: 'POST',
			body: JSON.stringify({
				text: this.state.value,
				context: this.state.context,
			}),
			headers: {"Content-Type": "application/json"}
		})
		const body = await response.json();
		this.setState({context: body.context})
		console.log(this.state.context)

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	scrollToBottom(){
		
	}

	render(){
		return(
			<StyledContainer>
				<div className="messageList">
					{
						this.state.messages.map(function(message, i){
							return (
								<span key={i} className={message.messageClass == 'userMessage' ? 'userMessageSpan' : ''}>
									<Message value={message.message} messageClass={message.messageClass}></Message>
								</span>
							)
						})
					}
				</div>

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
