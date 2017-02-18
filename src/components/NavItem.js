export default (config) => {
    const {
            X,
            Y
          } = config,
          ID = 'rect_' + X + '_' + Y,
          ELEM = document.getElementById(ID)

    ELEM.setAttributeNS(null, 'fill', 'white')
    ELEM.addEventListener('click', () => {
        console.log(`HERE!! ${X},${Y}`)
    })
}