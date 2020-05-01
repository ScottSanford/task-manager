import React from 'react'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

import LoginForm from './login-form/LoginForm'
import LoginVideo from './LoginVideo'

const LoginPageStyled = styled.div`
	background: ${({ theme }) => theme.colorWhite};
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: 100vh;

	@media only screen and (max-width: 1000px) {
		grid-template-columns: 2fr 3fr;
	}

	@media only screen and (max-width: 800px) {
		grid-template-columns: 100%;
		grid-template-rows: repeat(2, 1fr);

		& img {
			display: block;
			height: 5rem;
			margin: 0 auto;
		}
	}
`

const Left = styled.div`
	margin: 8rem 2rem 8rem 5rem;

	& img {
		height: 8rem;
	}

	@media only screen and (max-width: 800px) {
		margin: 3rem 8rem;
	}

	@media only screen and (max-width: 800px) {
		grid-row: 1 / 1;
		grid-column: 1 / -1;
	}
`

const RightWrap = styled.div`
	grid-row: 1 / -1;
	grid-column: 2 / -1;
	filter: drop-shadow(-2px 0px 6px rgba(50, 50, 0, 0.5));

	@media only screen and (max-width: 800px) {
		grid-row: 2 / -1;
		grid-column: 1 / -1;
		filter: drop-shadow(0 -2px 6px rgba(50, 50, 0, 0.5));
	}
`

const Right = styled.div`
	align-items: center;
	background: ${({ theme }) => theme.colorGreen3};
	clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
	display: flex;
	position: relative;
	padding: 10rem;
	overflow: hidden;
	height: 100vh;

	@media only screen and (max-width: 1000px) {
		padding: 7rem;
	}
	
	@media only screen and (max-width: 800px) {
		clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 100%);
	}
`

const LoginPage = () => {

	return (
		<LoginPageStyled>

			<Left>
				<img alt="logo" src={logo} />
				<LoginForm />
			</Left>

			<RightWrap>
				<Right>
					<LoginVideo />
				</Right>
			</RightWrap>
		</LoginPageStyled>
	)
}

export default LoginPage
