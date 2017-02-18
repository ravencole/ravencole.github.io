import backgroundToColor from './BackgroundToColor'
import Events from './Events'

const CONTAINER = document.querySelector('.container')

function pageBackgroundTransition(color) {
  backgroundToColor(color, null, 200)
}

Events.subscribe('move-page-right',() => {
  CONTAINER.style.left = '-200%'
  CONTAINER.style.top = '0'
  pageBackgroundTransition('red')
})

Events.subscribe('move-page-left',() => {
  CONTAINER.style.left = '0'
  CONTAINER.style.top = '0'
  pageBackgroundTransition('black')
})

Events.subscribe('move-page-up',() => {
  CONTAINER.style.left = '0'
  CONTAINER.style.top = '200vh'
  pageBackgroundTransition('deepskyblue')
})