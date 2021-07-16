import React, { useState } from 'react'
import styled from 'styled-components'

function Character (props) {
    const [show, setShow] = useState(false)
    const { character } = props;

    const StyledHead = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 20%;
        background: #E9EB9E;
        padding: 2%;
    `
    
    const StyledButton = styled.button`
        display: ${props => props.on ? show ? `none` : `inline` : show ? `inline` : `none`}
    `

    const StyledInfo = styled.div`
        text-weight: bold;
        color: #CCD9BF;
        background: #A1867F;
        margin: 0 20%;
        padding: 2%;
        display: ${show ? `block` : `none`}
    `

    return (
        <div className='character'>
            <StyledHead>
                <h2>{character.name}</h2>
                <StyledButton on={true} onClick={() => setShow(true)}>Show more</StyledButton>
                <StyledButton on={false} onClick={() => setShow(false)}>Show Less</StyledButton>
            </StyledHead>
            <StyledInfo>
                <p>Gender: {character.gender}</p>
                <p>Height: {Math.floor(character.height / 2.54)}in</p>
                <p>Mass: {Math.floor(character.mass * 2.2)}lb</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Tone: {character.skin_color}</p>
                <p>Birth Year: {character.birth_year}</p>
            </StyledInfo>
        </div>
    );
};

export default Character;