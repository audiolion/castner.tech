import styled from 'styled-components';
import { media } from '../../utils/media';

export const Main = styled.main`
  height: 100%;
  padding-top: 2rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  ${media.sm`max-width: 90%;`}
  ${media.md`max-width: 80%;`}
  ${media.lg`max-width: 70%;`}
  ${media.xl`max-width: 60%;`}
`;
