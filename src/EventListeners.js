import Actions from './Actions'
import Events from './Events'

export function InitEventListeners() {
  Events.subscribe('add-event-listeners',() => {
      document.body.addEventListener('keydown', (e) => {
        if (e.keyCode === 37)
          Actions.MOVE_PAGE_LEFT()
        if (e.keyCode === 38)
          Actions.MOVE_PAGE_UP()
        if (e.keyCode === 39)
          Actions.MOVE_PAGE_RIGHT()
        if (e.keyCode === 40)
          Actions.MOVE_PAGE_LEFT()
      })
  })
}