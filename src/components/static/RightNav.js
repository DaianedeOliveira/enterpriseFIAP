import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
    FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${Colors.BLUE_450};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      font-weight: ${FontWeights.BOLD};
      color: ${Colors.NEUTRAL_WHITE};
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/Amanda"><li>Amanda</li></Link>      
      <Link to="/Daiane"><li>Daiane</li></Link>
      <Link to="/Cristina"><li>Cristina</li></Link>
      <Link to="/Kevin"><li>Kevin</li></Link>
      <Link to="/Thais"><li>Thais</li></Link>
    </Ul>
  )
}

export default RightNav;