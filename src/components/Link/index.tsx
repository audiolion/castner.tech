import React from 'react';
import { Box, BoxProps } from 'rebass';
import styled from 'styled-components';

type LinkProps = React.ComponentPropsWithoutRef<'a'>;

export const StyledLink = styled(Box)`
  color: ${props => props.theme.colors.white};
  text-decoration-color: ${props => props.theme.colors.white};

  &:hover,
  &:active {
    color: ${props => props.theme.colors.link};
    text-decoration-color: ${props => props.theme.colors.link};
    transition: 0.2s ease;
  }
`;

export const Link: React.SFC<BoxProps & LinkProps> = ({ children, ...props }) => (
  <StyledLink as="a" {...props}>
    {children}
  </StyledLink>
);
