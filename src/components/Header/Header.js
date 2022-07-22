import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';

// components
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';


const Div = styled.div`
background-color: #213260;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 10em;
`
const HeaderLogo = styled.h2`
font-family: 'Indie Flower', 'cursive';
font-size: 45px;
margin-left: 4vw;
width: 45%;
a{
    color: black;
    text-decoration: none;
}

${media.lessThan('medium')`
font-size: 30px;
`}
`
const NavBar = styled.nav`
background: #19274e;
display: flex;
justify-content: space-around;
align-items: center;
width: 50%;
height: 100%;

${media.lessThan('medium')`
width: 50%;
`}
`
const NavItems = styled.h2`
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
font-size: 1.4vw;
width: 30%;
height: 60%;
cursor: pointer;
a{
    color: black;
    text-decoration: none;
}
&:hover{
    border: solid 5px #0a1026;
}

${media.lessThan('medium')`
font-size: 20px;
`}
`


export default function Header() {
    const [changingLetter] = useState("o")

    const navBarReturn = () => {
        if (window.screen.availWidth <= 768) {
            return <HamburgerMenu />

        } else {
            return (
                    <NavBar>
                        <NavItems><Link to='/portfolio'>Portfolio</Link></NavItems>
                        <NavItems><a href='https://github.com/GabrielsPaiva'>Github</a></NavItems>
                        <NavItems><a href='https://gabrielsobjetivosdobairro.netlify.app'>Objetivos Locais</a></NavItems>
                    </NavBar>
            )
        }
    }

    return (
        <Div>
            <HeaderLogo><Link to="/">{`Bem-vind${changingLetter} ao meu blog`}</Link></HeaderLogo>
            {navBarReturn()}
        </Div>
    );
}