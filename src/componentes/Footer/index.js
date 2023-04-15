import React from 'react';
import { Link, List, ListItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const  FooterPage = styled.div`
background-color: #292828;


`

    function Footer() {
        return (
    <FooterPage>
                <List>
                    <ListItem>
                        <Link color="inherit" underline="none" target="_blank" href="">
                            <FontAwesomeIcon size="2x" icon={faEnvelope} /> &nbsp;Email
                        </Link>
                    </ListItem>


                    <ListItem>
                        <Link color="inherit" underline="none" target="_blank" href="">
                            <FontAwesomeIcon size="2x" icon={faLinkedin} /> &nbsp;Linkedin
                        </Link>
                    </ListItem>

                    </List>
                    </FooterPage>

        );
}