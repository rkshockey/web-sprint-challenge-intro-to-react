import React from 'react'
import styled from 'styled-components'

function Movies (props) {
    const { movie } = props

    const MovieCard = styled.div`
        width: 45%;
        font-weight: bold;
    `
    
    return (
        <MovieCard>
            <h3>Episode {movie.episode_id}</h3>
            <h3>{movie.title}</h3>
            <p>{movie.opening_crawl}</p>
        </MovieCard>
    )
}

export default Movies