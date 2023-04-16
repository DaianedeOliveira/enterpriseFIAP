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
      <Link to="/Sobre"><li>Sobre</li></Link>      
      <Link to="/Formacao"><li>Formação</li></Link>
      <Link to="/Experiencia"><li>Experiência</li></Link>
      <Link to="/Hobbies"><li>Hobbies</li></Link>
      <Link to="/Contato"><li>Contato</li></Link>
    </Ul>
  )
}

export default RightNav