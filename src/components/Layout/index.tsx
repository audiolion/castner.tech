import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Box } from 'rebass';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { theme } from '../../utils/theme';
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
          <Box as="main" bg="background" color="white">
            {children}
            <Footer />
          </Box>
        </>
      </ThemeProvider>
    )}
  />
);
