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
    width: 100%;
    margin-bottom: 10%;
    font-size:${FontSizes.THREE};
    color: ${Colors.BLUE_450};
    background: linear-gradient(138.15deg, rgba(99, 160, 206, 0.2) 37.92%, rgba(67, 160, 230, 0.05) 63.28%), linear-gradient(90.15deg, #63A0CE 0.01%, rgba(255, 255, 255, 0.8) 148.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media(max-width:600px){
        width: 100%;
        text-align:center;
        font-size:${FontSizes.ONE_QUARTER};
    };

`;
export const Title2 = styled.h2`
     font-size: ${FontSizes.TWO};
     color: ${Colors.BLUE_500};
     font-weight: ${FontWeights.BOLD};
     text-align: center;
`;

export const Title3 = styled.h2`
     font-size: ${FontSizes.ONE_QUARTER};
     color: ${Colors.BLUE_500};
     font-weight: ${FontWeights.BOLD};
     text-align: center;
`;
export const Title4 = styled.h3`
    font-size: ${FontSizes.ONE_HALF};
    color: ${Colors.BLUE_500};
    font-weight: ${FontWeights.BOLD};
    font-family:${FontFamilies.PRIMARY};
    text-align: left;
`