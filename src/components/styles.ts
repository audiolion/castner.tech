import styled from 'styled-components';

export const Anchor = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration-color: ${props => props.theme.colors.white};

  &:hover,
  &:active {
    color: ${props => props.theme.colors.link};
    text-decoration-color: ${props => props.theme.colors.link};
    transition: 0.2s ease;
  }
`;
