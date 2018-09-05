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

	componentDidMount(){
		this.startConversation()
		.then(res => console.log(res))
    .catch(err => console.log(err));
	}

	handleSubmit(event){
		console.log(this.state.value)
		this.sendMessage()
		.then(res => console.log(res))
    .catch(err => console.log(err));
		event.preventDefault()
	}

	handleChange(event){
		this.setState({value: event.target.value})
	}

	startConversation = async () => {
	 const response = await fetch('/conversation/',{
    	method: 'POST',
    	body: JSON.stringify({
      	message: ''
    	}),
    	headers: {"Content-Type": "application/json"}
  	})
	 const body = await response.json();
	 if (response.status !== 200) throw Error(body.message);

	 return body;
 	};

	sendMessage = async () => {
	 const response = await fetch('/conversation/',{
    	method: 'POST',
    	body: JSON.stringify({
      	message: this.state.value
    	}),
    	headers: {"Content-Type": "application/json"}
  	})
	 const body = await response.json();
	 if (response.status !== 200) throw Error(body.message);

	 return body;
 	};

	render(){
		return(
			<StyledContainer>

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
