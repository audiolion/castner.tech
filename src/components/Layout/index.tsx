import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { theme } from '../../utils/theme';
import * as S from './styles';
import './layout.css';

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <S.Main>
            <S.Content>
              {children}
              <Footer />
            </S.Content>
          </S.Main>
        </>
      </ThemeProvider>
    )}
  />
);
