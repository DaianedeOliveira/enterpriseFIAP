import styled from 'styled-components';
import { Colors, BorderRadiuses, Spaces, FontWeights, FontSizes, FontFamilies} from '../../../../shared//DesignTokens';
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
    list-style: none;

`;
export const Card1 = styled.div`
	width: 40%;
	height: 579px;
    padding:20%;
        text-align:center;
        position:absolute;
        z-index:99;
        background: ${Colors.BLUE_450};
        border-radius: ${BorderRadiuses.ONE};
        margin-left: 30%;
            color: ${Colors.NEUTRAL_WHITE};
            font-weight: ${FontWeights.BOLD};
            font-size: ${FontSizes.THREE};
            font-family:${FontFamilies.SECONDARY};
            text-transform: uppercase;
            display: flex;
            align-items:center;
        justify-content: center;
        list-style: none;

        `;
        export const Card2 = styled.div`
            width: 50%;
            height: 579px;
        padding: 2%;
        position: relative;
        margin-left: 15%;
        text-align:center;
        background: ${Colors.BLUE_450};
        border-radius: ${BorderRadiuses.ONE};
        color: ${Colors.NEUTRAL_WHITE};
        font-weight: ${FontWeights.SEMIBOLD};
        font-size: ${FontSizes.ONE_HALF};
        font-family:${FontFamilies.SECONDARY};
        display: flex;
        align-items:center;
        justify-content: center;
        list-style: none;

`;
