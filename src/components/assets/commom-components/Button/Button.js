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
	border: 2px solid #90C2E7;
	outline: none;
	width: 263px;
	height: 55px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
    background: none;
	color: ${Colors.NEUTRAL_WHITE};
	border-radius: ${BorderRadiuses.ONE};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
	font-size: ${FontSizes.ONE};
    @media(max-width:600px){
        margin-left: 10%; 
        width: 260px;
        height: 60px;
        font-size: ${FontSizes.ONE};
    };

	&:hover {
		background-color: ${Colors.BLUE_550};
        transform: scale(1.1);
        transition: all 0.5s;
	}
`;