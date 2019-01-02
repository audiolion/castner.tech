import React from 'react';
import * as S from './styles';

export const Header: React.SFC<{ siteTitle?: string }> = ({ siteTitle }) => (
  <S.Header>
    <S.Content>
      <S.Link to="/">
        <S.Text color="red">castner</S.Text>{' '}
        <S.Text color="white" fontWeight="600">
          at
        </S.Text>{' '}
        <S.Text color="yellow">tech</S.Text>{' '}
        <S.Text color="white" fontWeight="600">
          in
        </S.Text>{' '}
        <S.Text color="green">{`~${window.location.pathname}`}</S.Text>
      </S.Link>
    </S.Content>
  </S.Header>
);

Header.defaultProps = {
  siteTitle: ``,
};
