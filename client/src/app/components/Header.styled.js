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

const MobileAvatar = styled.svg`
	display: none;
	@media only screen and (max-width: 1024px){
		width: 50px;
    height: 50px;
    display: block;
    padding: 10px;
    margin-left: 15px;

		.cls-1, .cls-2 {
			fill: #ececec;
		}

		.cls-2, .cls-3, .cls-4, .cls-9 {
			stroke: #707070;
		}

		.cls-3 {
			fill: #020202;
		}

		.cls-12, .cls-4 {
			fill: none;
		}

		.cls-5, .cls-6, .cls-9 {
			fill: lime;
		}

		.cls-5 {
			stroke: rgba(112,112,112,0.6);
		}

		.cls-6 {
			stroke: #0c580c;
		}

		.cls-7 {
			fill: #121010;
		}

		.cls-8 {
			fill: #fff;
		}

		.cls-10, .cls-11 {
			stroke: none;
		}

		.cls-11 {
			fill: #707070;
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
