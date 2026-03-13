/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * limits your function to be called at most every delay milliseconds
 * - call function at first time
 * - call at most every delay milliseconds
 * - call function last time even if delay milliseconds is not expired
 *
 * @param {(..._: T) => void} callback Function to invoke.
 * @param {number} delay Time in ms to wait before invoking.
 */
export var throttle = function (callback, delay) {
  if (delay === void 0) {
    delay = 300
  }
  var inThrottle, lastFn, lastTime
  return function () {
    var _this = this
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    // run callback for the first time
    if (!inThrottle) {
      callback.apply(this, args)
      // set last time callback was invoke
      lastTime = Date.now()
      inThrottle = true
    } else {
      // if in throttle period, clear last Time and set new one
      clearTimeout(lastFn)
      lastFn = setTimeout(
        function () {
          // check if throttle time has elapsed
          if (Date.now() - lastTime >= delay) {
            callback.apply(_this, args)
            lastTime = Date.now()
          }
          // omit the second argument, delay (if throttle time has elapsed),
          // to set the timeout at a default of 0 ms.
        },
        Math.max(delay - (Date.now() - lastTime), 0),
      )
    }
  }
}
