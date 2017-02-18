import Events from './Events'
import getRandomColor from './utils/color'

export default (color, done, amountPerPass = 50) => {
    const ALL_RECTS = Array.prototype.slice.call(document.querySelectorAll('svg > rect'))
                        .sort(() => {
                            switch(Math.floor(Math.random() * (2+1))) {
                                case 0:
                                    return 0
                                case 1:
                                    return 1
                                case 2:
                                    return -1
                                default:
                                    return 0
                            }
                        })

    const TIMER = setInterval(function() {
        if (ALL_RECTS.length < 1) {
            if (done) done()
            return clearInterval(TIMER)
        }

        for(let i = 0; i < amountPerPass; i++) {
            if (ALL_RECTS.length) {
                const RECT = ALL_RECTS[0],
                      COLOR = color === 'random' ?
                              getRandomColor() :
                              color

                RECT.setAttributeNS(null, 'fill', COLOR)
                ALL_RECTS.shift()
            }
        }
    }.bind(this), 10)
}