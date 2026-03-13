import { createContext, useState } from 'react'
export var PageTransitionerContext = createContext({
  transitionState: 'idle',
  setTransitionState: function () {
    return undefined
  },
  target: '',
  setTarget: function () {
    return undefined
  },
})
export var PageTransitionerProvider = function (_a) {
  var children = _a.children
  var _b = useState('idle'),
    transitionState = _b[0],
    setTransitionState = _b[1]
  var _c = useState(''),
    target = _c[0],
    setTarget = _c[1]
  return (
    <PageTransitionerContext.Provider
      value={{
        transitionState: transitionState,
        setTransitionState: setTransitionState,
        target: target,
        setTarget: setTarget,
      }}
    >
      {children}
    </PageTransitionerContext.Provider>
  )
}
