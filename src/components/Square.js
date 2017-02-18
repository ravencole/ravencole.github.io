import Events from '../Events'
import getRandomColor from '../utils/color'

export default (svg, props, done) => {
    const SVG_V = "http://www.w3.org/2000/svg",
          RECT_SIZE = 10,
          { 
            RECT_ROW_AMOUNT, 
            RECT_COLUMN_AMOUNT,
            X,
            Y
          } = props

    setTimeout(() => {
        const RECT   = document.createElementNS(SVG_V, 'rect'),
              STYLES = {
                  x: X*RECT_SIZE + X,
                  y: Y*RECT_SIZE + Y,
                  height: RECT_SIZE,
                  width: RECT_SIZE,
                  fill: getRandomColor()
              }
        

        Object.keys(STYLES).map(style => {
            RECT.setAttributeNS(null, style, STYLES[style])
        })

        RECT.id = `rect_${X}_${Y}`
        svg.appendChild(RECT)

        if (done)
            done()
        
    }, (X+Y)*8)
}