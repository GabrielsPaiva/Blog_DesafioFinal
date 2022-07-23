import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

// hamburger menu modal
const ModalDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
border-radius: 10px;
margin: 22% 5% 0 0;
width: 30%;
height: 250px;
transition: 900ms;
z-index: 1;

@media(max-width: 768px) {
    margin-top: 9em;
}
`

// hamburger menu
const HamburgerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 5%;
width: 48px;
height: 45px;
cursor: pointer;
`
const HamburgerLine = styled.div`
background-color: white;
border-radius: 10px;
width: 100%;
height: 20%;
`

const NavBar = styled.nav`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 72%;
`
const NavItems = styled.p`
display: flex;
justify-content: center;
align-items: center;
font-size: 2vw;
text-transform: uppercase;
width: 100%;
height: 28%;
cursor: pointer;

a{
    color: black;
    text-decoration: none;
}
&:hover{
    border: solid 2px #0096c7;
}
`

export default function HamburgerMenu() {

    const [navModal, setNavModal] = useState(false)
    const [modalDivBackground, setModalDivBackground] = useState("transparent")

    const changeBackground = () => {
        if (modalDivBackground === "transparent") {
            setModalDivBackground("#00b4d8")
        } else {
            setModalDivBackground("transparent")
        }
    }

    return (
        <ModalDiv style={{ backgroundColor: modalDivBackground }}>
            <HamburgerDiv onClick={() => { setNavModal(!navModal); changeBackground(); }}>
                <HamburgerLine></HamburgerLine>
                <HamburgerLine></HamburgerLine>
                <HamburgerLine></HamburgerLine>
            </HamburgerDiv>
            {navModal &&
                    <NavBar>
                        <NavItems><Link to='/portfolio'>Portfolio</Link></NavItems>
                        <NavItems><a href='https://github.com/GabrielsPaiva'>Github</a></NavItems>
                        <NavItems><a href='https://gabrielsobjetivosdobairro.netlify.app'>Objetivos Locais</a></NavItems>
                    </NavBar>
            }
        </ModalDiv>
    );
}