import Events from './Events'

export default {
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