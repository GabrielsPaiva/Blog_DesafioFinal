import React from 'react';
import styled from 'styled-components';

// imagens
import perfilPhoto from '../../assets/perfilPhoto.png'

const Div = styled.div`
background-color: #213260;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 57.5em;

@media(max-width: 1024px) {
    height: 38em;
}
@media(max-width: 768px) {
    flex-direction: column;
    height: 84.4vh;
}
@media(max-width: 425px) {
    height: 78.6vh;
}
`
const PhotoDiv = styled.div`
background-image: url(${perfilPhoto});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
border-radius: 70%;
margin-left: 10vw;
width: 400px;
height: 400px;

@media(max-width: 1024px) {
    width: 300px;
    height: 300px;
}
@media(max-width: 768px) {
    margin-left: 0;
}
@media(max-width: 425px) {
    width: 200px;
    height: 200px;
}
`
const IntroDiv = styled.div`
background-image: url('https://thumbs.gfycat.com/FondIncompleteHuemul-max-1mb.gif');
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
border-radius: 10px;
margin-right: 3vw;
width: 50%;
height: 59%;

@media(max-width: 768px) {
    border-radius: 0;
    margin-right: 0;
    width: 100%;
}
`
const IntroMesssage = styled.h2`
color: white;
font-size: 1.8vw; 
text-transform: uppercase;
margin: 2vw;

@media(max-width: 768px) {
    font-size: 3vw;
}
`
const NameInTheMessage = styled.span`
color: #8c1414;
font-style: italic;
`

export default function Main() {
    return (
        <Div>
            <PhotoDiv></PhotoDiv>
            <IntroDiv>
                <IntroMesssage>Oi, Meu nome é <NameInTheMessage>Gabriel Souza</NameInTheMessage></IntroMesssage>
            </IntroDiv>
        </Div>
    );
}