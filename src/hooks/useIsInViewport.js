import { useState, useEffect } from 'react'
import { throttle } from '@/utils'
export var useIsInViewport = function (currentElement, offset) {
  if (offset === void 0) {
    offset = 0
  }
  if (typeof window === 'undefined') return false
  var _a = useState(false),
    isInViewport = _a[0],
    setIsInViewport = _a[1]
  var checkIsInViewport = function () {
    if (!currentElement.current) {
      setIsInViewport(false)
      return
    }
    var _a = currentElement.current.getBoundingClientRect(),
      top = _a.top,
      refHeight = _a.height
    setIsInViewport(
      top + offset + refHeight >= 0 && top - offset <= window.innerHeight,
    )
  }
  useEffect(function () {
    checkIsInViewport()
    var throttledCheckIsInViewport = throttle(function () {
      checkIsInViewport()
    })
    window.addEventListener('scroll', throttledCheckIsInViewport)
    return function () {
      return window.removeEventListener('scroll', throttledCheckIsInViewport)
    }
  }, [])
  return isInViewport
}
