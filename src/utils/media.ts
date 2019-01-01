import { css, CSSObject, SimpleInterpolation } from 'styled-components';

export const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

type Args = [CSSObject | TemplateStringsArray, SimpleInterpolation[]];

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: Args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
