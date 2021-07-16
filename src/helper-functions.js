export function charCleanup(charArray){
    const newArray = [];
    for (let i = 0; i < charArray.length; i++){
        newArray.push({
            name: charArray[i].name,
            gender: charArray[i].gender,
            height: charArray[i].height,
            mass: charArray[i].mass,
            eye_color: charArray[i].eye_color,
            hair_color: charArray[i].hair_color,
            skin_color: charArray[i].skin_color,
            birth_year: charArray[i].birth_year,
            films: charArray[i].films
        })
    }
    return newArray
}

export function movCleanup(movArray){
    const newArray = [];
    for (let i = 0; i < movArray.length; i++){
        newArray.push({
            episode_id: movArray[i].episode_id,
            title: movArray[i].title,
            opening_crawl: movArray[i].opening_crawl
        })
    }
    return newArray
}