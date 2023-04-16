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

export const Title = styled.h1`
    width: 481px;
    font-size:${FontSizes.THREE};
    color: ${Colors.BLUE_450};
    background: linear-gradient(138.15deg, rgba(99, 160, 206, 0.2) 37.92%, rgba(67, 160, 230, 0.05) 63.28%), linear-gradient(90.15deg, #63A0CE 0.01%, rgba(255, 255, 255, 0.8) 148.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;
export const Title2 = styled.h2`
     font-size: ${FontSizes.TWO};
     color: ${Colors.BLUE_500};
     font-weight: ${FontWeights.BOLD};
     text-align: center;
`;