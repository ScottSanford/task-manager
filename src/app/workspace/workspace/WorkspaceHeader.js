import React from 'react'
import styled from 'styled-components'
import cssVar from '../../theme/constants'
import theme from 'styled-theming'
import { themeModes } from '../../theme/Theme'

const color = theme('mode', {
	[themeModes.lightMode]: cssVar.colorNeutral2,
	[themeModes.darkMode]: cssVar.colorNeutral10,
})

const StyledWorkspaceHeader = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
`

const ProjectInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
`

const ProjectType = styled.div`
	align-items: center;
	background: ${cssVar.colorPrimary5};
	border-radius: ${cssVar.bRadiusSm};
	color: ${cssVar.colorNeutral10};
	display: flex;
	height: 4rem;
	justify-content: center;
	width: 4rem;
`

const ProjectInfoMeta = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2.5rem;

	& span:first-of-type {
		font-size: 2rem;
		font-weight: 600;
	}

	& span:last-of-type {
		font-size: 1.2rem;
		color: ${color};
		font-style: italic;
	}
`

const WorkspaceHeader = () => {
	return (
		<StyledWorkspaceHeader>
			<ProjectInfo>
				<ProjectType><span className="fa fa-star fa-2x"></span></ProjectType>
				<ProjectInfoMeta>
					<span>Personal</span>
					<span>A project about getting things done quickly.</span>
				</ProjectInfoMeta>
			</ProjectInfo>
		</StyledWorkspaceHeader>
	)
}

export default WorkspaceHeader