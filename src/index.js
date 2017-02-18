require('./styles/styles.scss')

import Events                 from './Events'
import Square                 from './components/Square'
import BuildNav               from './BuildNav'
import BuildPage              from './BuildPage'
import NOTIFICATIONS          from './Actions'
import NavigationActions      from './NavigationActions'
import BackgroundToColor      from './BackgroundToColor'
import loadBackgroundImage    from './LoadBackgroundImage'
import { InitEventListeners } from './EventListeners'

const SVG                = document.getElementById('svg'),
      SVG_V              = "http://www.w3.org/2000/svg",
      W_HEIGHT           = window.innerHeight,
      W_WIDTH            = window.innerWidth,
      RECT_SIZE          = 10,
      RECT_ROW_AMOUNT    = Math.ceil(W_HEIGHT / RECT_SIZE),
      RECT_COLUMN_AMOUNT = Math.ceil(W_WIDTH / RECT_SIZE)

SVG.setAttributeNS(null, 'height', W_HEIGHT)
SVG.setAttributeNS(null, 'width', W_WIDTH)

InitEventListeners()

BuildPage(
    SVG, 
    { RECT_ROW_AMOUNT, RECT_COLUMN_AMOUNT },
    NOTIFICATIONS.BACKGROUND_BUILT
)

Events.subscribe('background-built',() => {
    loadBackgroundImage()
    setTimeout(() => {
        BackgroundToColor('black', NOTIFICATIONS.INITIAL_ANIMATION_FINISHED)
    }, 5000)
})

Events.subscribe('heading-to-white',() => {
    Array.prototype.slice.call(
        document.querySelectorAll('.main--heading')
    ).map(n => n.style.color = 'white')
})