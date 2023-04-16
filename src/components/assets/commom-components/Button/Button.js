import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
    FontSizes,
	FontWeights,
} from '../../../../shared/DesignTokens';
export const Button = styled.button`
	border: 2px solid ##90C2E7;
	outline: none;
	width: 263px;
	height: 55px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${Colors.BLUE_500};
	color: ${Colors.NEUTRAL_WHITE};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
	font-size: ${FontSizes.ONE};
 
	&:hover {
		background-color: ${Colors.BLUE_550};
	}
`;