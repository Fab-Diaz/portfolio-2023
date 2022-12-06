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

export const throttle = (callback: () => void, delay = 300): (() => void) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number

  return function (this: any, ...args: []) {
    // run callback for the first time
    if (!inThrottle) {
      callback.apply(this, args)
      // set last time callback was invoke
      lastTime = Date.now()
      inThrottle = true
    } else {
      // if in throttle period, clear last Time and set new one
      clearTimeout(lastFn)

      lastFn = setTimeout(() => {
        // check if throttle time has elapsed
        if (Date.now() - lastTime >= delay) {
          callback.apply(this, args)
          lastTime = Date.now()
        }
        // omit the second argument, delay (if throttle time has elapsed),
        // to set the timeout at a default of 0 ms.
      }, Math.max(delay - (Date.now() - lastTime), 0))
    }
  }
}
