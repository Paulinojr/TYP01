import styled from 'styled-components'

const Message = styled.div`
	&.botMessage{
		position: relative;
		background: #379683;
		border-radius: .4em;
		max-width: 500px;
		min-height: 50px;
		padding: 3px;
		margin-bottom: 20px;
		&:after{
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			width: 0;
			height: 0;
			border: 20px solid transparent;
			border-right-color: #379683;
			border-left: 0;
			margin-top: -20px;
			margin-left: -20px;
		}

		p{
			color: #fff;
			font-family: 'Krungthep';
			font-weight: 100;
		}

		@media only screen and (max-width: 1024px){
			max-width: 250px;
			min-height: 50px;
		}
	}

	&.userMessage{
		position: relative;
		background: #5CDB95;
		border-radius: .4em;
		max-width: 500px;
		min-height: 50px;
		display: flex;
		justify-content: flex-end;
		padding: 3px;
		&:after{
			content: '';
			position: absolute;
			right: -20px;
			top: 50%;
			width: 0;
			height: 0;
			border: 20px solid transparent;
			border-left-color: #5CDB95;
			border-right: 0;
			margin-top: -20px;
			margin-left: -20px;
			@media only screen and (max-width: 1024px){
				right: -15px;
			}
		}

		p{
			color: #05386B;
			font-family: 'Kefa';
			font-weight: 100;
		}

		@media only screen and (max-width: 1024px){
			max-width: 250px;
			min-height: 50px;
		}
	}
`

export { Message }
