import Events from './Events'
import Square from './components/Square'

export default function(svg, props, done) {
    const { 
        RECT_COLUMN_AMOUNT,
        RECT_ROW_AMOUNT
    } = props
    for (let i = 0; i <= RECT_ROW_AMOUNT; i++) {
        for (let k = 0; k <= RECT_COLUMN_AMOUNT; k++) {
            const PROPS = {
                X: k,
                Y: i,
                RECT_COLUMN_AMOUNT,
                RECT_ROW_AMOUNT
            }

            i === RECT_ROW_AMOUNT && k === RECT_COLUMN_AMOUNT ?
                Square(svg, PROPS, done) :
                Square(svg, PROPS)
        }
    }
}