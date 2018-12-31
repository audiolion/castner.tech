import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

type Props = {
  data: {
    markdownRemark: any;
  };
};

const BlogPost: React.SFC<Props> = ({ data: { markdownRemark: post } }) => (
  <div>
    <Helmet title={`${post.frontmatter.title} | Castner.Tech`} />
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </div>
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
