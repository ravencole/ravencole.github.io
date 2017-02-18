import Events from './Events'

export default (ROW_AMOUNT, COLUMN_AMOUNT) => {
    const CENTER = [COLUMN_AMOUNT - 20, ROW_AMOUNT - 15],
          NAV_CORDS = [
            [-1,0,'left'],
            [1,0,'right'],
            [0,1,'down'],
            [0,-1,'up']
          ]

    // NAV_CORDS.map(c => {
    //     const RECT = document.getElementById(`rect_${CENTER[0] + c[0]}_${CENTER[1] + c[1]}`)

    //     RECT.removeAttributeNS(null, 'fill')
    //     RECT.classList.add('nav--btn')
    //     RECT.addEventListener('click', () => {
    //         console.log('sending ' + `move-page-${c[2]}`)
    //         Events.publish(`move-page-${c[2]}`)
    //     })
    // })
}