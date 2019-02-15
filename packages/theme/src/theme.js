import { merge } from 'lodash'

// theme color palette
// inspired by https://coolors.co/app/9fb1bc-465775-ffffff-274c77-2e4057
export const themeColors = {
  bodyColor: '#465775',
  bodyBackground: '#FFFFFF',
  primary: '#274C77',
  accent: '#9FB1BC',
  secondary: '#2E4057',
}

// theme fonts
export const themeFonts = {
  primary: 'Roboto, Helvetica, Arial, sans-serif',
}

export const createTheme = opts => {
  const { fonts, theme, colors } = opts || {}
  const customFonts = merge({}, themeFonts, fonts)
  const customColors = merge({}, themeColors, colors)

  return merge(
    {},
    {
      name: 'base', // can be used in https://github.com/echoulen/storybook-addon-styled-component-theme
      colors: customColors,
      fonts: customFonts,
      body: {
        color: customColors.bodyColor,
        background: customColors.bodyBackground,
        fontSize: '16px',
        padding: '10px',
      },
      Card: {
        borderColor: customColors.secondary,
      },
    },
    theme,
  )
}

export const theme = createTheme()
