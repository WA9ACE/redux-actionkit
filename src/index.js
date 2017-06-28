const {
  forEachObjIndexed,
  forEach,
  isNil
} = require('ramda')

const LISTENERS = {}

const handle = (store, action) => listener => listener(store, action)
const startListening = (listener, name) => listener()

const middleware = actions => {
  forEachObjIndexed(startListening, actions)

  return store => next => action => {
    if (!isNil(LISTENERS[action.type])) {
      forEach(handle(store, actions), LISTENERS[action.type])
    }
    next(action)
  }
}

const listen = (event, fn) => () => {
  if (isNil(LISTENERS[event])) {
    LISTENERS[event] = [fn]
  } else {
    LISTENERS[event].push(fn)
  }
}

module.exports = { middleware, listen }