import React from 'react'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

import LoginForm from './login-form/LoginForm'
import LoginVideo from './LoginVideo'

const LoginPageStyled = styled.div`
	background: var(--color-white);
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: 100vh;

	@media only screen and (max-width: 700px) {
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
	margin: 8rem;

	& img {
		height: 8rem;
	}

	@media only screen and (max-width: 800px) {
		margin: 5rem;
	}

	@media only screen and (max-width: 800px) {
		grid-row: 1 / 1;
		grid-column: 1 / -1;
	}
`

const Right = styled.div`
	align-items: center;
	background: var(--color-green-3);
	display: flex;
	grid-row: 1 / -1;
	grid-column: 2 / -1;
	position: relative;
	padding: 10rem;
	overflow: hidden;

	@media only screen and (max-width: 1000px) {
		padding: 7rem;
	}

	@media only screen and (max-width: 800px) {
		padding: 5rem;
	}

	@media only screen and (max-width: 700px) {
		grid-row: 2 / -1;
		grid-column: 1 / -1;
	}
`

const LoginPage = () => {

	return (
		<LoginPageStyled>

			<Left>
				<img alt="logo" src={logo} />
				<LoginForm />
			</Left>

			<Right>
				<LoginVideo />
			</Right>
		</LoginPageStyled>
	)
}

export default LoginPage
