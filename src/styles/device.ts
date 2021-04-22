export const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '650px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const minDevice = {
  mobileS: `(min-width: ${deviceSizes.mobileS})`,
  mobileM: `(min-width: ${deviceSizes.mobileM})`,
  mobileL: `(min-width: ${deviceSizes.mobileL})`,
  tabletS: `(min-width: ${deviceSizes.tabletS})`,
  tablet: `(min-width: ${deviceSizes.tablet})`,
  laptop: `(min-width: ${deviceSizes.laptop})`,
  laptopL: `(min-width: ${deviceSizes.laptopL})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
  desktopL: `(min-width: ${deviceSizes.desktop})`
}

export const maxDevice = {
  mobileS: `(max-width: ${deviceSizes.mobileS})`,
  mobileM: `(max-width: ${deviceSizes.mobileM})`,
  mobileL: `(max-width: ${deviceSizes.mobileL})`,
  tabletS: `(max-width: ${deviceSizes.tabletS})`,
  tablet: `(max-width: ${deviceSizes.tablet})`,
  laptop: `(max-width: ${deviceSizes.laptop})`,
  laptopL: `(max-width: ${deviceSizes.laptopL})`,
  desktop: `(max-width: ${deviceSizes.desktop})`,
  desktopL: `(max-width: ${deviceSizes.desktop})`
}
