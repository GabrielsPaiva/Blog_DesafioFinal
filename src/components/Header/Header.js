import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Div = styled.div`
background-color: #51659b;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 10em;
`
const HeaderLogo = styled.h2`
font-family: 'Indie Flower', 'cursive';
font-size: 45px;
margin-left: 16px;
width: 45%;

${media.lessThan('medium')`
font-size: 30px;
`}
`
const NavBar = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
width: 45%;
height: 80%;

${media.lessThan('medium')`
width: 50%;
`}
`
const NavItems = styled.h2`
font-size: 25px;
cursor: pointer;

${media.lessThan('medium')`
font-size: 20px;
`}
`

export default function Header() {
    const [changingLetter, setChangingLetter] = useState("o")

    function changeLetter() {
        setInterval(() => {
            if( changingLetter === "o"){
                setChangingLetter("a")
            } else {
                setChangingLetter("o")
            }
        }, 1000)
    }

    const navBarReturn = () => {
        if(window.screen.availWidth <= 425){
            return(
                <p>hjk</p>
            )
        } else {
            return(
                <NavBar>
                    <NavItems>Portfolio</NavItems>
                    <NavItems>Github</NavItems>
                    <NavItems><a href='https://gabrielsobjetivosdobairro.netlify.app'>Objetivos Locais</a></NavItems>
                </NavBar>
            )
        }
    }

    useEffect(() => {
        changeLetter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        navBarReturn()
    }, [changingLetter])

    console.log(changingLetter)
    return (
        <Div>
            <HeaderLogo>{`Bem-vind${changingLetter} ao meu blog`}</HeaderLogo>
            {navBarReturn()}
        </Div>
    );
}