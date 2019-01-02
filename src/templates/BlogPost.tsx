import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';
import { Layout } from '../components/Layout';

type Props = {
  data: {
    markdownRemark: any;
  };
};

const StyledArticle = styled.article`
  ${media.sm`max-width: 90%;`}
  ${media.md`max-width: 80%;`}
  ${media.lg`max-width: 70%;`}
  ${media.xl`max-width: 60%;`}
`;

const H1 = styled.h1`
  color: ${props => props.theme.colors.cyan};
`;

const Meta = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: 12px;
`;

const BlogPost: React.SFC<Props> = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <Helmet title={`${post.frontmatter.title} | castner.tech`} />
    <StyledArticle>
      <H1>{post.frontmatter.title}</H1>
      <Meta>{post.frontmatter.date}</Meta>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </StyledArticle>
  </Layout>
);

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default BlogPost;
