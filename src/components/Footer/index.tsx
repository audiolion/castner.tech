import React from 'react';
import * as S from './styles';

const footerLinks = [
  { name: 'Github', href: 'https://github.com/audiolion' },
  { name: 'Twitter', href: 'https://twitter.com/@ryan_castner' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ryan-castner-b38894113' },
];

export const Footer: React.SFC<{}> = () => (
  <S.Footer>
    {footerLinks.map(({ name, href }, idx) => (
      <S.FooterAnchor key={idx} href={href} target="_blank" rel="noopener">
        {name}
      </S.FooterAnchor>
    ))}
    <S.Copyright>&copy; {new Date().getFullYear()}, Ryan Castner</S.Copyright>
  </S.Footer>
);
