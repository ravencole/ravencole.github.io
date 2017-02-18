import Events from './Events'
import Square from './components/Square'
import BuildPage from './BuildPage'
import backgroundToColor from './backgroundToColor'
import loadBackgroundImage from './LoadBackgroundImage'
import BuildNav from './BuildNav'
// import Actions from './Actions'
// import * as EventListeners from './EventListeners'

require('./styles/styles.scss')

const W_HEIGHT           = window.innerHeight,
      W_WIDTH            = window.innerWidth,
      SVG                = document.getElementById('svg'),
      SVG_V              = "http://www.w3.org/2000/svg",
      RECT_SIZE          = 10,
      RECT_ROW_AMOUNT    = Math.ceil(W_HEIGHT / RECT_SIZE),
      RECT_COLUMN_AMOUNT = Math.ceil(W_WIDTH / RECT_SIZE),
      NOTIFICATIONS      = {
                              BACKGROUND_BUILT: () => Events.publish('background-built'),
                              HEADING_TO_WHITE: () => Events.publish('heading-to-white'),
                              MOVE_PAGE_LEFT: () => Events.publish('move-page-left'),
                              MOVE_PAGE_UP: () => Events.publish('move-page-up'),
                              MOVE_PAGE_RIGHT: () => Events.publish('move-page-right'),
                              INITIAL_ANIMATION_FINISHED: () => {
                                Events.publish('heading-to-white')
                                Events.publish('add-event-listeners')
                              }
                            }

SVG.setAttributeNS(null, 'height', W_HEIGHT)
SVG.setAttributeNS(null, 'width', W_WIDTH)

BuildPage(
    SVG, 
    { RECT_ROW_AMOUNT, RECT_COLUMN_AMOUNT },
    NOTIFICATIONS.BACKGROUND_BUILT
)

Events.subscribe('background-built',() => {
    loadBackgroundImage()
    setTimeout(() => {
        backgroundToColor('black', NOTIFICATIONS.HEADING_TO_WHITE)
    }, 5000)
})

Events.subscribe('heading-to-white',() => {
    Array.prototype.slice.call(
        document.querySelectorAll('.main--heading')
    ).map(n => n.style.color = 'white')
    BuildNav(RECT_ROW_AMOUNT, RECT_COLUMN_AMOUNT)
})

document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 37)
    NOTIFICATIONS.MOVE_PAGE_LEFT()
  if (e.keyCode === 38)
    NOTIFICATIONS.MOVE_PAGE_UP()
  if (e.keyCode === 39)
    NOTIFICATIONS.MOVE_PAGE_RIGHT()
  if (e.keyCode === 40)
    NOTIFICATIONS.MOVE_PAGE_LEFT()
})
// EventListeners.Init(Events)

Events.subscribe('move-page-right',() => {
  document.querySelector('.container').style.left = '-200%'
  document.querySelector('.container').style.top = '0'
  backgroundToColor('red', null, 200)
  console.log('MOVE RIGHT')
})

Events.subscribe('move-page-left',() => {
  document.querySelector('.container').style.left = '0'
  document.querySelector('.container').style.top = '0'
  backgroundToColor('black', null, 200)
  console.log('MOVE LEFT')
})

Events.subscribe('move-page-up',() => {
  document.querySelector('.container').style.left = '0'
  document.querySelector('.container').style.top = '200vh'
  backgroundToColor('deepskyblue', null, 200)
  console.log('MOVE UP')
})



