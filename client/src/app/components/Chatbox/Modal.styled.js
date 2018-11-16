import styled from 'styled-components'

const IdentityModal = styled.div`
		&.selected{
			display: none;
		}
		width: 100vw;
		height: 100vh;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgb(0,0,0); /* Black fallback color */
    background-color: rgba(0,0,0, 0.7); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		.modal{
			height: 70%;
			display: flex;
			position: relative;
			width: 50%;
			border-radius: 25px;
			background-color: #fff;
			justify-content: space-between;
			padding: 5%
			.avatar{
				margin-top: 20%;
				width: 55%;
			}
			.content{
				font-family: 'Share Tech Mono';
				text-align: center;
				color: #05386B;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}
`

const Avatar = styled.svg`
	.cls-1, .cls-4 {
		fill: #ececec;
	}

	.cls-2, .cls-3 {
		fill: #208631;
	}

	.cls-13, .cls-2, .cls-4, .cls-7, .cls-8 {
		stroke: #707070;
	}

	.cls-5 {
		fill: #42a942;
	}

	.cls-10, .cls-17, .cls-5 {
		stroke: #0c580c;
	}

	.cls-6 {
		fill: rgba(83,76,76,0.16);
		stroke: rgba(112,112,112,0);
	}

	.cls-7 {
		fill: #020202;
	}

	.cls-18, .cls-21, .cls-8 {
		fill: none;
	}

	.cls-10, .cls-13, .cls-15, .cls-9 {
		fill: lime;
	}

	.cls-9 {
		stroke: rgba(112,112,112,0.6);
	}

	.cls-11, .cls-17 {
		fill: #121010;
	}

	.cls-12 {
		fill: #fff;
	}

	.cls-14 {
		fill: red;
		stroke: red;
	}

	.cls-15, .cls-18 {
		stroke: lime;
	}

	.cls-16 {
		fill: rgba(0,0,0,0.36);
		font-size: 2px;
		font-family: Krungthep;
	}

	.cls-19, .cls-20 {
		stroke: none;
	}

	.cls-20 {
		fill: #707070;
	}
`

const OptionButton = styled.button`
	height: 50px;
	width: 200px;
	background-color: #8EE4AF;
	color: #EDF5E1;
	font-size: 18px;
	display: block;
	border: none;
	border-radius: 5px;
	margin-top: 15px;
	box-shadow: 0px 1px 2px #379683;
	&:focus{
		outline: none;
	}
	&:hover {
		background-color: #5CDB95;
		cursor: pointer;
	}

	&:active {
	  background-color: #5CDB95;
	  box-shadow: 0px 0px 0px;
	  transform: translateY(4px);
	}
`

export { IdentityModal, Avatar, OptionButton }
