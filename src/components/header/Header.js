import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-light.png'
import profileImg from '../../assets/profile.png'
import styled from 'styled-components'
import cssVar from '../../app/theme/constants'
import ToggleTheme from '../../components/toggle-theme/ToggleTheme'
import { useSelector, useDispatch } from 'react-redux'
import { changeThemeAction } from '../../app/workspace/redux/theme'
import theme from 'styled-theming'

const background = theme('mode', {
	'light': cssVar.colorNeutral10,
	'dark': cssVar.colorNeutral2,
})

const color = theme('mode', {
	'light': cssVar.colorNeutral2,
	'dark': cssVar.colorNeutral10,
})


const NavWrapper = styled.nav`
	background: ${background};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
	color: ${color};
	height: 6rem;
	display: grid;
	grid-template-columns: 1fr 3fr 4fr 3fr 7rem;
	grid-template-rows: 1fr;
	grid-column-gap: 5px;
	grid-row-gap: 0px;

	@media only screen and (max-width: 1100px) {
		.boards {
			display: none;
		}
	}

	@media only screen and (max-width: 600px) {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 1fr;
	}
`

const StyledNavBoardLink = styled(NavLink)`
	align-self: center;
	color: currentColor;
	font-size: 1.6rem;
	font-weight: 600;
	justify-self: left;
	margin-left: 1.5rem;
	text-decoration: none;

	&.active {
		color: ${cssVar.color};
		text-decoration: none;
	}
	
	& span:first-of-type {
		margin-right: 5px;
	}

	@media only screen and (max-width: 600px) {
		justify-self: center;
	}
`

const HeaderSearch = styled.div`
	align-items: center;
	display: flex;
	font-size: 1.6rem;
	margin-left: 4rem;

	& input {
		margin: 10px;
		height: 3rem;
		justify-self: center;
		width: 100%;
		border-radius: 10px;
		border: none;
		font-size: 1.6rem;
		background: transparent;

		&:focus {
			outline: none;
		}

		&:active {
			color: ${(cssVar.colorNeutral8)};
		}

		&::placeholder {
			color: ${cssVar.colorNeutral7};
			font-style: italic;
			font-size: 1.4rem;
		}

		&:focus::-webkit-input-placeholder {
			color: ${cssVar.colorNeutral5};
		}
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
`

const Logo = styled.div`
	display: flex;
	justify-content: center;

	& img {
		height: 4rem;
		align-self: center;
	}

	@media only screen and (max-width: 600px) {
		grid-column: 2 / 2;
	}
`

const User = styled.div`
	align-items: center;
	align-self: center;
	font-size: 1.6rem;
	justify-self: end;
	display: flex;

	& img {
		height: 35px;
		border-radius: 1rem;
		margin-right: 1rem;
	}

	@media only screen and (max-width: 900px) {
		& img {
			margin-right: 3rem;
		}
	}

	@media only screen and (max-width: 600px) {
		& img, & .fa-bell {
			display: none;
		}
	}
`

const UserName = styled.div`
	margin-right: 25px;
	font-weight: 600;

	@media only screen and (max-width: 900px) {
		display: none;
	}
`

const StyledNavMenuLink = styled(NavLink)`
	align-self: center;
	color: currentColor;
	justify-self: center;
	font-size: 1.4rem;

	&.active {
		color: ${cssVar.color};
	}

	@media only screen and (max-width: 600px) {
		grid-column: 3 / -1;
		grid-row: 1;
	}
`

const Header = () => {

	const appTheme = useSelector((state) => state.appTheme)
	const dispatch = useDispatch()
	const toggleTheme = (event) => {
		console.log(event.target.value)
		return appTheme === 'light'
			? dispatch(changeThemeAction('dark'))
			: dispatch(changeThemeAction('light'))
	}

	return (
		<NavWrapper>
			<StyledNavBoardLink exact to="/workspace/test" theme={{ color: cssVar.colorNeutral8 }}>
				<span className="fa fa-clone"></span>
				<span className="boards">Boards</span>
			</StyledNavBoardLink>
			<HeaderSearch>
				<span className="fa fa-search"></span>
				<input type="text" placeholder="Search..." />
			</HeaderSearch>
			<Logo><img alt="logo" src={logo} /></Logo>
			<User>
				<img alt="profile" src={profileImg} />
				<UserName>Hello, Scott!</UserName>
				<ToggleTheme toggleTheme={toggleTheme} appTheme={appTheme} />
			</User>
			<StyledNavMenuLink exact to="/dashboard" theme={{ color: cssVar.colorNeutral8 }}>
				<span className="fa fa-bars"></span>
			</StyledNavMenuLink>
		</NavWrapper>
	)
}

export default Header
