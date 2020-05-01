import React from 'react'
import styled from 'styled-components'
import video from '../../assets/mountains2.mp4'

const BackgroundVideo = styled.video`
	height: 100%;
	left: 0;
	opacity: 0.65;
	overflow: hidden;
	position: absolute;
	top: 0;

	@media only screen and (max-width: 800px) {
		object-fit: cover;
		width: 100%;
		
	}
`

const BackgroundVideoContent = styled.div`
	z-index: 2;
	width: 100%;
	padding-left: 10rem;

	@media only screen and (max-width: 1000px) {
		padding-left: 5rem;
	}
`

const PlayButton = styled.div`
	align-items: center;
	background: ${({ theme }) => theme.colorYellow5};
	border-radius: 50%;
	color: ${({ theme }) => theme.colorWhite};
	display: flex;
	height: 5rem;
	justify-content: center;
	margin-top: 30rem;
	width: 5rem;
	font-size: 1.4rem;

	@media only screen and (max-width: 800px) {
		margin-top: 0;
	}

	@media only screen and (max-width: 700px) {
		height: 4rem;
		width: 4rem;
	}
`

const Title = styled.div`
	font-size: 5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colorNeutral10};
	margin-top: 2rem;

	@media only screen and (max-width: 1100px) {
		font-size: 3rem;
	}

	@media only screen and (max-width: 800px) {
		font-size: 2.5rem;
		margin-top: 1rem;
	}
`

const Subtext = styled.span`
	background: ${({ theme }) => theme.colorGreen8};
	border-radius: ${({ theme }) => theme.bRadiusSm};
	color: ${({ theme }) => theme.colorNeutral1};
	font-size: 1.6rem;
	padding: 0.25rem 1rem 0.25rem 0.5rem;
	position: relative;
	top: 7px;
	font-weight: 500;

	@media only screen and (max-width: 800px) {
		font-size: 1.2rem;
	}
`

const LoginVideo = () => {
	return (
		<>
			<BackgroundVideo autoPlay muted loop>
				<source src={video} type="video/mp4" />
			</BackgroundVideo>
			<BackgroundVideoContent>
				<PlayButton><span className="fa fa-map"></span></PlayButton>
				<Title>Plan Your Adventure</Title>
				<Subtext>Lorem Ipsum Dolor Sit Amet</Subtext>
			</BackgroundVideoContent>
		</>
	)
}

export default LoginVideo