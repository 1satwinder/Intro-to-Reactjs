import React from 'react'
import styled from 'styled-components';

function StyledComponents() {

    const StylesButton = styled.button`
    color: black;
    background-color: ${props => props.alt? 'yellow': 'green'};
    border: 2px solid red;
    border-radius: 5px;
    box-shadow: 2px 5px blue;
    margin-bottom: 50px;

    &:hover{
        background-color: ${props => props.alt? 'lightgreen': 'black'}; 
        color:black;
    }
    ` 
    return (
        <div>
            {/* conditional styled componets example.*/}
            <StylesButton alt={true}>StyledComponents</StylesButton>
        </div>
    )
}

export default StyledComponents;
