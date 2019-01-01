import { sizes } from './media';

export const theme = {
  colors: {
    black: '#16252b',
    grey: '#65727d',
    red: '#ec5e66',
    green: '#99c793',
    yellow: '#fac862',
    blue: '#6699cb',
    magenta: '#c593c4',
    cyan: '#5fb3b2',
    white: '#fefefe',
    background: '#16242c',
    link: '#005bbb',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  breakpoints: Object.keys(sizes).map(key => sizes[key]),
  fontWeights: [400, 600, 800],
};
