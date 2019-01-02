import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../utils/media';

export const Header = styled.header`
  background-color: ${props => props.theme.colors.background};
  padding: 1rem 0;
`;

export const Content = styled.div`
  ${media.sm`max-width: 90%;`}
  ${media.md`max-width: 80%;`}
  ${media.lg`max-width: 70%;`}
  ${media.xl`max-width: 60%;`}
  margin: 0 auto;
`;

export const Text = styled.span<{ color: string; fontWeight?: string }>`
  color: ${props => props.color};
  font-weight ${props => props.fontWeight || 400};
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
`;
