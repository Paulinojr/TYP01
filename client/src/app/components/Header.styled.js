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
		width: 75px;
		height: 50px;
		display: block;
		padding: 5px;

		.cls-1, .cls-10, .cls-8 {
			fill: #fff;
		}

		.cls-1 {
			stroke: rgba(112,112,112,0.21);
		}

		.cls-11, .cls-2, .cls-4 {
			fill: #208631;
		}

		.cls-2 {
			stroke: rgba(112,112,112,0.53);
		}

		.cls-3 {
			fill: #ededed;
		}

		.cls-3, .cls-5, .cls-7 {
			stroke: rgba(142,139,139,0.31);
		}

		.cls-4 {
			stroke: rgba(112,112,112,0.49);
		}

		.cls-6 {
			fill: rgba(131,131,131,0);
			stroke: rgba(112,112,112,0.31);
		}

		.cls-7 {
			fill: #50a51a;
		}

		.cls-10, .cls-13, .cls-8, .cls-9 {
			stroke: #707070;
		}

		.cls-8 {
			stroke-width: 2px;
		}

		.cls-9 {
			fill: rgba(255,255,255,0.63);
		}

		.cls-11 {
			stroke: #238433;
		}

		.cls-12, .cls-13, .cls-15, .cls-17 {
			fill: none;
		}

		.cls-12 {
			stroke: #28743a;
		}

		.cls-14 {
			fill: rgba(255,255,255,0);
			stroke: rgba(47,103,36,0.6);
		}

		.cls-15 {
			stroke: rgba(112,112,112,0.55);
		}

		.cls-16 {
			stroke: none;
		}
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
