import styled from 'styled-components';
import { Anchor } from '../styles';

export const Footer = styled.footer`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 0.75rem;
`;

export const FooterAnchor = styled(Anchor)`
  margin: 0 8px;
  place-self: center;
`;

export const Copyright = styled.div`
  margin-top: 4rem;
  font-size: 0.5rem;
  text-align: center;
  grid-column: 1 / 4;
`;
