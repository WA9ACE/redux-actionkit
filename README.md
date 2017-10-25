# Redux ActionKit
Simple and small alternative to redux saga and redux thunk.

```js
import { middleware as ActionKitMiddleware } from 'redux-actionkit'
import actions from 'actions' // or wherever your listeners are stored

applyMiddleware(ActionKitMiddleware(actions))
```

```js
import { listen } from 'redux-actionkit'

const EVENT = 'EXAMPLE_MESSAGE'

const listener = listen(EVENT, async function (store, action) {
  const response = await fetch('http://ip.jsontest.com/')
  const data = await response.json()
  store.dispatch({ type: 'RECEIVED_IP', payload: { ip: data.ip } })
})

export default listener
```
