import styled from 'styled-components'

const HeaderContainer = styled.div`
	width: 100%
	height: 100px;
	background-color: #5CDB95;
	box-shadow: 0px 3px 6px #379683;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 1024px){
		height: 60px;
	}
`

const MobileAvatar = styled.img`
		width: 100px;
		height: 100px;
		display: block;
		padding: 0px 10px 10px 10px;
		margin-left: 15px;

		@media only screen and (max-width: 1024px){
			width: 50px;
	    height: 50px;
	    display: block;
	    padding: 10px;
	    margin-left: 15px;
		}
`
const TitleSection = styled.div`
	font-family: 'Krungthep';
	padding: 20px;
	h1{
		margin: 0px;
		text-align: center;
	}

	p{
		margin: 0px;
	}

	color: #EDF5E1

	@media only screen and (max-width: 1024px){
		color: #05386B;
		padding: 0px;
	}
`

const OptionsSection = styled.div`
	padding: 10px;

`

const Icon = styled.svg`
	.cls-1 {
		fill: #05386b;
	}
	margin: 10px;
	width: 25px;
	height: 25px;

	@media only screen and (min-width: 1024px){
		margin-top: 30px;
		width: 50px;
		height: 50px;
	}

`
export { HeaderContainer, MobileAvatar, TitleSection, OptionsSection, Icon }
