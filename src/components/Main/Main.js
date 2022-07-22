import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
background-color: #213260;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 57.5em;
`
const PhotoDiv = styled.div`
background-image: url("https://lh3.googleusercontent.com/Z_efjf_SM-lhCJfutmXhoHvq0nWR7XtTmKcziSK2_iYibD1VxBJESfmRGGitXn8dbaj1NJZmmRWE-oV1goMkcHH4eUo__FdHTFOB9Mm85CLXv5dG8RY4gm5XY4o2gvbDW8ZwZGZwLCf3j9GIkGEJyLBbGztmY19Ul8PbdHeG1r8bA6LWCNhDnOh50Rv8xQ5JWmXk8OKJjf2Hl_qaAkVY5boP7KxZEjbe5pbcNOSomm4NktIk5Hz9cR4Dg0tESZRzG_YzuKwGBgkEemxcuH40k3IzDbWEs_29jcuzJCcI_53gIAEjRsdskkwIEORifnv9JwGSXLOnq6msTR_B7Q8E5dC8xXrnSjoQrmJ16DrOdwJAxsTc3Qz0d_IiQn9k-dPv_nc9XNEyAbgJ-QLg79IiaSvImKC86SSDqC_Pb90lpzlfKwsc_hcEXeZPLwsALhpEWvpePuopUd2u_Ra0hDQYwJI66QJ5gvYl-tLi7UvEdEBI53P0SwxgzkNl7BUpLS4i3904w8WwPaoTIyogQO6gBN31bUxYTLXWH35k0HI4MgqnomdfM7m6M7Yh6-6p4ZcN7P6JSiMqr3xdKyyvbgZiQx7OJDKRt56NBlXAS6DpTW9SwFEjGuOew8lZxrETdlbgO9zKfFF3ZbZgZ8PU5XOaPO-mc5RyMFvMyY2-donfZS1WH4JE0jgsiThtMImj3amFUEY-hfypumauTzvXVEr2PHDUHO8wx1u5WECgAXAMzvg-iP_uXOchuYHUzi5GKc6Yp-uU90TUUrTjdcdp73jti5kFk0xMJBI2HGbLTg=s299-no?authuser=0");
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
border-radius: 70%;
margin-left: 10vw;
width: 400px;
height: 400px;
`
const IntroDiv = styled.div`
background-image: url('https://thumbs.gfycat.com/FondIncompleteHuemul-max-1mb.gif');
background-size: contain;
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

`
const IntroMesssage = styled.h2`
color: white;
font-size: 1.8vw; 
text-transform: uppercase;
margin: 2vw;
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