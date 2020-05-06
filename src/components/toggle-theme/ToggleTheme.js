import React from 'react'
import styled from 'styled-components'

const ToggleThemeStyled = styled.div`
	.theme-switch-wrapper {
		display: flex;
		align-items: center;
	}

	.theme-switch {
		display: inline-block;
		height: 30px;
		position: relative;
		width: 60px;
	}

	.theme-switch input {
		display:none;
	}

	.slider {
		background-color: #ccc;
		bottom: 0;
		cursor: pointer;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: .4s;
	}

	.slider:before {
		background-color: #fff;
		bottom: 3px;
		content: "";
		height: 23px;
		left: 4px;
		position: absolute;
		transition: .4s;
		width: 23px;
	}

	input:checked + .slider {
		background-color: #66bb6a;
	}

	input:checked + .slider:before {
		transform: translateX(26px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
`

const ToggleTheme = ({ toggleTheme, appTheme }) => {

	const inputValue = appTheme === 'dark' ? 'checked' : ''

	return (
		<ToggleThemeStyled>
			<label className="theme-switch" htmlFor="checkbox">
				<input type="checkbox" id="checkbox" onChange={toggleTheme} checked={inputValue} />
				<div className="slider round"></div>
			</label>
		</ToggleThemeStyled>
	)
}

export default ToggleTheme