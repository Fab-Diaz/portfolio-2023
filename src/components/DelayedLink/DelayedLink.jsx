import { useContext } from 'react'
import { useRouter } from 'next/dist/client/router'
import { PageTransitionerContext } from '@/context'
export var DelayedLink = function (_a) {
  var link = _a.link,
    onClick = _a.onClick,
    children = _a.children
  var router = useRouter()
  var _b = useContext(PageTransitionerContext),
    setTransitionState = _b.setTransitionState,
    setTarget = _b.setTarget
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var delayAndGo = function (e) {
    e.preventDefault()
    setTarget(link)
    setTransitionState('closing')
    setTimeout(function () {
      setTransitionState('awaiting')
      console.log(link)
      if (onClick) {
        onClick()
      } else {
        router.push(link)
      }
    }, 400)
  }
  return <a onClick={delayAndGo}>{children}</a>
}
