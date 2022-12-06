import { useState, useEffect, RefObject } from 'react'
import { throttle } from '@/utils'

export const useIsInViewport = <T extends HTMLElement>(
  currentElement: RefObject<T>,
  offset = 0
): boolean => {
  if (typeof window === 'undefined') return false

  const [isInViewport, setIsInViewport] = useState(false)

  const checkIsInViewport = () => {
    if (!currentElement.current) {
      setIsInViewport(false)
      return
    }

    const { top, height: refHeight } =
      currentElement.current.getBoundingClientRect()

    setIsInViewport(
      top + offset + refHeight >= 0 && top - offset <= window.innerHeight
    )
  }

  useEffect(() => {
    checkIsInViewport()
    const throttledCheckIsInViewport = throttle(() => {
      checkIsInViewport()
    })

    window.addEventListener('scroll', throttledCheckIsInViewport)

    return () =>
      window.removeEventListener('scroll', throttledCheckIsInViewport)
  }, [])

  return isInViewport
}
