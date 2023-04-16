import React from 'react';
import styled from 'styled-components';
import Burger from './Burguer';
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

const Nav = styled.nav`
  width: 100%;
  height: 120px;
  background-color: ${Colors.BLACK_500};
  color:${Colors.NEUTRAL_WHITE};
  padding: 15px 150px;
  font-family:${FontFamilies.PRIMARY};
  font-size:${FontSizes.ONE};
  font-weight:${FontWeights.SEMIBOLD};
  display: flex;
  justify-content: space-between;
  .logo {
    width:150px;
    height:100px;
  }
  .logo img{
    width: 150px;
    height: 100px;
    margin: 0 15px;  
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <div className="logo">
        <img src="https://i.imgur.com/yBKbtZy.png"></img>
        </div>
      </Link>
      <Burger />
    </Nav>
  )
}

export default Navbar