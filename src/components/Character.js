import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import Movies from './Movies'

function Character (props) {
    const [showInfo, setShowInfo] = useState(false)
    const [showMovies, setShowMovies] = useState(false)
    const { character, movies } = props;

    const StyledHead = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 20%;
        background: #E9EB9E;
        padding: 2%;
    `
    
    const StyledButton = styled.button`
        display: ${props => props.on ? showInfo ? `none` : `inline` : showInfo ? `inline` : `none`}
    `
    const MovieButton = styled.button`
        display: ${props => props.on ? showMovies ? `none` : `inline` : showMovies ? `inline` : `none`}
    `

    const StyledInfo = styled.div`
        text-weight: bold;
        color: #CCD9BF;
        background: #A1867F;
        margin: 0 20%;
        padding: 2%;
        display: ${showInfo ? `block` : `none`}
    `

    const StyledMovies = styled.div`
        display: ${showMovies ? `flex` : `none`};
        flex-wrap: wrap;
        justify-content: space-between;
    `

    const starMovies = []
    for (let i = 0; i < character.films.length; i++){
        movies.forEach(movie => {
            if (movie.title === character.films[i]){
                starMovies.push(movie)
            }
        })
    }
    console.log(starMovies)

    return (
        <div className='character'>
            <StyledHead>
                <h2>{character.name}</h2>
                <StyledButton on={true} onClick={() => setShowInfo(true)}>Show more</StyledButton>
                <StyledButton on={false} onClick={() => setShowInfo(false)}>Show Less</StyledButton>
            </StyledHead>
            <StyledInfo>
                <p>Gender: {character.gender}</p>
                <p>Height: {Math.floor(character.height / 2.54)}in</p>
                <p>Weight: {Math.floor(character.mass * 2.2)}lb</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Skin Tone: {character.skin_color}</p>
                <p>Birth Year: {character.birth_year}</p>
                <MovieButton on={true} onClick={() => setShowMovies(true)}>Show Movies</MovieButton>
                <MovieButton on={false} onClick={() => setShowMovies(false)}>Hide Movies</MovieButton>
                <StyledMovies>
                    {starMovies.map(movie => <Movies movie={movie} key={movie.title} />)}
                </StyledMovies>
            </StyledInfo>
        </div>
    );
};

export default Character;