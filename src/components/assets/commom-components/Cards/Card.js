import styled from 'styled-components';
import { Colors, BorderRadiuses, Spaces, FontWeights, FontSizes } from '../../../../shared//DesignTokens';
export const Card = styled.div`
	width: 100%;
	height: 100%;
	background: ${Colors.BLUE_450};
    border-radius: ${BorderRadiuses.ONE};
    margin: ${Spaces.HALF};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.ONE_QUARTER};
    display: flex;
    align-items:center;
    justify-content: center;
`;