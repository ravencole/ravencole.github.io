import Events from './Events'
import Square from './components/Square'
import BuildPage from './BuildPage'

const W_HEIGHT           = window.innerHeight,
      W_WIDTH            = window.innerWidth,
      SVG                = document.getElementById('svg'),
      SVG_V              = "http://www.w3.org/2000/svg",
      RECT_SIZE          = 10,
      RECT_ROW_AMOUNT    = Math.ceil(W_HEIGHT / RECT_SIZE),
      RECT_COLUMN_AMOUNT = Math.ceil(W_WIDTH / RECT_SIZE),
      NOTIFICATIONS = {
        BACKGROUND_BUILT: (() => Events.publish('background-built'))
      }

SVG.setAttributeNS(null, 'height', W_HEIGHT)
SVG.setAttributeNS(null, 'width', W_WIDTH)

BuildPage(
    SVG, 
    { RECT_ROW_AMOUNT, RECT_COLUMN_AMOUNT },
    NOTIFICATIONS.BACKGROUND_BUILT
)

function backgroundToColor(color) {
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

    const TIMER = setInterval(() => {
        if (ALL_RECTS.length < 1) {
            Events.publish('heading-to-white')
            return clearInterval(TIMER)
        }

        for(let i = 0; i < 50; i++) {
            const RECT = ALL_RECTS[0]

            RECT.setAttributeNS(null, 'fill', color)
            ALL_RECTS.shift()
        }
    }, 10)
}

function backgroundToBlack() {
    backgroundToColor('black')
}

function backgroundToWhite() {
    backgroundToColor('white')
}

function loadBackgroundImage() {
    document.getElementById('backgroundImage').style.opacity = 1
}

Events.subscribe('background-built',() => {
    loadBackgroundImage()
    setTimeout(() => {
        backgroundToBlack()
    }, 5000)
})

Events.subscribe('heading-to-white',() => {
    Array.prototype.slice.call(document.querySelectorAll('.main--heading')).map(n => n.style.color = 'white')
})
