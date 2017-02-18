import Actions from './Actions'
import Events from './Events'

export function InitEventListeners() {
  Events.subscribe('add-event-listeners',() => {
      const LEFT_ARROW  = 37,
            UP_ARROW    = 38,
            RIGHT_ARROW = 39,
            DOWN_ARROW  = 40

      document.body.addEventListener('keydown', (e) => {
        switch(e.keyCode) {
          case LEFT_ARROW:
            return Actions.MOVE_PAGE_LEFT()
          case UP_ARROW:
            return Actions.MOVE_PAGE_UP()
          case RIGHT_ARROW:
            return Actions.MOVE_PAGE_RIGHT()
          case DOWN_ARROW:
            return Actions.MOVE_PAGE_LEFT()
        }
      })
  })
}