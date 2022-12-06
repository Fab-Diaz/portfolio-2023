import { useState, useEffect } from 'react'

export const useIsPageLoading = (delay?: number): boolean => {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setIsPageLoading(false)
    }, delay ?? 300)
  }, [])

  return isPageLoading
}
