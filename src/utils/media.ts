import { css, CSSObject, SimpleInterpolation } from 'styled-components';

export const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

type Args = [CSSObject | TemplateStringsArray, SimpleInterpolation[]];

type Media = {
  sm: (cssObject: any) => any;
  md: (cssObject: any) => any;
  lg: (cssObject: any) => any;
  xl: (cssObject: any) => any;
};

// Iterate through the sizes and create a media template
export const media: Media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (...args: Args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;

    return acc;
  },
  {} as Media
);
