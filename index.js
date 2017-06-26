const { forEach, isNil } = require('ramda')

const LISTENERS = {}

const handle = (store, action) => listener => listener(store, action)

export const middleware = actions => store => next => action => {
  if (!isNil(LISTENERS[action.type])) {
    forEach(handle(store, actions), LISTENERS[action.type])
  }
  next(action)
}

export const listen = (event, fn) => {
  if (isNil(LISTENERS[event])) {
    LISTENERS[event] = [fn]
  } else {
    LISTENERS[event].push(fn)
  }
}

export default {
  middleware,
  listen
}