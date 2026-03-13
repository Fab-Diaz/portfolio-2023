var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/styles/theme'
var ProviderWrapper = function (_a) {
  var children = _a.children
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
var customRender = function (ui, options) {
  return render(ui, __assign({ wrapper: ProviderWrapper }, options))
}
export * from '@testing-library/react'
export { customRender as render }
