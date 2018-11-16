import styled from 'styled-components'

const Message = styled.div`
	&.botMessage{
		position: relative;
		background: #5CDB95;
		box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
		border-radius: .4em;
		max-width: 500px;
		min-height: 50px;
		padding: 5px;
		margin-bottom: 20px;
		p{
			color: #05386B;
			font-family: 'Share Tech Mono';
			font-weight: 100;
			font-size: 18px;
		}

		@media only screen and (max-width: 1024px){
			max-width: 250px;
			min-height: 50px;
		}
	}

	&.userMessage{
		position: relative;
		background: #fff;
		box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
		border-radius: .4em;
		max-width: 500px;
		min-height: 50px;
		min-width: 90px;
		padding: 3px;
		margin-bottom: 20px;

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
