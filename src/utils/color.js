const getRandomColor = () => {
    return [...Array(3)].reduce( a => 
        a.replace(':color', Math.floor(Math.random() * (256))),
        'rgb(:color,:color,:color)'
    )
}

export default getRandomColor