import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../apps/web/dashboard-ui/src/styles/global'
import { theme } from '../apps/web/dashboard-ui/src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
]
