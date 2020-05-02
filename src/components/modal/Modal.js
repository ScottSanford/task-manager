import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../../app/theme/Theme'

const ModalStyled = styled.div`
	background: ${({ theme }) => theme.colorWhite};
	border-radius: ${({ theme }) => theme.bRadiusSm};
	box-shadow: 0 1.5rem 3.5rem hsla(0, 0%, 0%, 0.2);
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: 1.1s ease-out;
	width: 60rem;
`

const Backdrop = styled.div`
	background: ${({ theme }) => theme.colorNeutral1};
	position: absolute;
	height: 100%;
	left: 0;
	opacity: 0.5;
	top: 0;
	width: 100%;
`

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	background: ${({ theme }) => theme.colorNeutral9};
	border-top-left-radius: ${({ theme }) => theme.bRadiusSm};
	border-top-right-radius: ${({ theme }) => theme.bRadiusSm};
	color: ${({ theme }) => theme.colorPrimary1};

	& div {
		font-size: 1.8rem;
		font-weight: 800;
	}
`

const ModalContent = styled.div`
	padding: 2rem;

	&:first-child {
		margin: 2rem 0;
	}
`

const ModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 3rem;
	padding: 2rem;
	border-top: 1px solid ${({ theme }) => theme.colorNeutral9};
	border-bottom-left-radius: ${({ theme }) => theme.bRadiusSm};
	border-bottom-right-radius: ${({ theme }) => theme.bRadiusSm};
`

const TicketTitle = styled.div`
	font-size: 1.4rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colorNeutral3};
`

const CancelButton = styled.button`
	align-items: center;
	border: 1px solid ${({ theme }) => theme.colorNeutral6};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	padding: 1rem 1.5rem;
	text-transform: uppercase;
	font-weight: 700;
	color: ${({ theme }) => theme.colorNeutral5};
	margin-right: 1rem;
	transition: all 0.25s;

	&:hover {
		background: ${({ theme }) => theme.colorNeutral6};
		color: ${({ theme }) => theme.colorNeutral10};
	}

	&:focus {
		outline: none;
	}
`

const SaveButton = styled.button`
	align-items: center;
	background: ${({ theme }) => theme.colorGreen6};
	border-radius: 5px;
	border: none;
	display: flex;
	justify-content: center;
	padding: 1rem 1.5rem;
	text-transform: uppercase;
	font-weight: 700;
	color: ${({ theme }) => theme.colorNeutral10};

	&:hover {
		background: ${({ theme }) => theme.colorGreen5};
	}

	&:focus {
		outline: none;
	}
`

const PriorityType = styled.div`
	align-items: center;
	background: ${({ theme, type, priority }) => (type === priority ? typeColor(type, 9) : theme.colorNeutral10)};
	border: ${({ type, priority }) => (type === priority ? `2px solid ${typeColor(type, 5)}` : '')};
	border-radius: ${({ theme }) => theme.bRadiusSm};
	color: ${({ type, priority }) => (type === priority ? typeColor(type, 1) : 'currentColor')};
	cursor: pointer;
	display: flex;
	font-size: 1.3rem;
	font-weight: 700;
	height: 4rem;
	justify-content: center;
	position: relative;
	width: 8rem;
	text-transform: capitalize;

	:not(:last-of-type) {
		margin-right: 1rem;
	}
`

const typeColor = (type, number) => {
	switch (type) {
		case 'low':
			return theme[`colorGreen${number}`]
		case 'medium':
			return theme[`colorYellow${number}`]
		default:
			return theme[`colorRed${number}`]
	}
}

const Modal = ({
	data,
	onClose,
	onSave,
	show,
}) => {
	const [item, setItem] = useState()
	useEffect(() => setItem(data), [data])
	const handlePriority = (priority) => setItem({ ...data, priority })

	if (!show) {
		return null
	}
	return (
		<>
			<Backdrop></Backdrop>
			<ModalStyled id="modal">
				<ModalHeader>
					<div>{data.title}</div>
				</ModalHeader>
				<ModalContent>
					<div>
						<TicketTitle>Change ticket priority</TicketTitle>
						<div style={{ display: 'flex' }}>
							{['low', 'medium', 'high'].map(type => (
								<PriorityType
									key={type}
									type={type}
									priority={item.priority}
									onClick={() => handlePriority(type)}>
									<span>{type}</span>
								</PriorityType>
							))}
						</div>
					</div>
				</ModalContent>
				<ModalFooter>
					<CancelButton onClick={() => onClose()}>Cancel</CancelButton>
					<SaveButton onClick={() => onSave(item)}>Save</SaveButton>
				</ModalFooter>
			</ModalStyled>
		</>
	)
}

export default Modal