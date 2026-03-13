import { useState, useEffect } from 'react'
export var useIsPageLoading = function (delay) {
  var _a = useState(true),
    isPageLoading = _a[0],
    setIsPageLoading = _a[1]
  useEffect(function () {
    setTimeout(
      function () {
        setIsPageLoading(false)
      },
      delay !== null && delay !== void 0 ? delay : 300,
    )
  }, [])
  return isPageLoading
}
