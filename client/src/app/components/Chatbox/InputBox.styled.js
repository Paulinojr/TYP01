import styled from 'styled-components'

const InputBox = styled.div`
	width: 100%;
	height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	padding: 5px;
	margin-bottom: 10px;
`

const Input = styled.input.attrs({
	type: 'text',
	placeholder: 'Digite sua mensagem aqui...'
})`
	@media only screen and (max-width: 1024px){
		width: 85%;
	}
	width: 90%;
	font-size: 14px;
	height: 45px;
	border-radius: 21px;
	border: 1px solid #5CDB95;
	&:focus{
		outline: none;
	}
`

const Send = styled.button`
	background: #5CDB95;
	width: 90px;
	margin-left: 10px;
	height: 45px;
	border-radius: 5px;
	text-align: center;
	color: #05386B;
	@media only screen and (max-width: 1024px){
		width: 45px;
		height: 45px;
		border-radius: 50%;
		margin-left: 0;
	}
	img{
		width: 20px;
    transform: rotate(-90deg);
	}
`

export { Input, InputBox, Send }
