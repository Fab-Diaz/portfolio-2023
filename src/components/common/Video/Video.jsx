import { useEffect, useRef } from 'react'
import { useIsInViewport } from '@/hooks'
export var Video = function (_a) {
  var link = _a.link,
    _b = _a.isTest,
    isTest = _b === void 0 ? false : _b
  var videoRef = useRef(null)
  var isInViewport = useIsInViewport(videoRef)
  useEffect(
    function () {
      var _a, _b
      if (!isTest) {
        if (isInViewport) {
          ;(_a =
            videoRef === null || videoRef === void 0
              ? void 0
              : videoRef.current) === null || _a === void 0
            ? void 0
            : _a.play()
        } else {
          ;(_b =
            videoRef === null || videoRef === void 0
              ? void 0
              : videoRef.current) === null || _b === void 0
            ? void 0
            : _b.pause()
        }
      }
    },
    [isInViewport],
  )
  return (
    <video
      ref={videoRef}
      src={link}
      width="100%"
      loop={true}
      muted={true}
      controls={true}
      playsInline={true}
    />
  )
}
