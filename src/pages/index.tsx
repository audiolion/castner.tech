import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

type Props = {
  data: any;
};

const IndexPage: React.SFC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.frontmatter.path}>
        <Link to={`${node.frontmatter.path}`}>{node.frontmatter.title}</Link>
        <div>
          <time>{node.frontmatter.date}</time>
        </div>
        <div>{node.frontmatter.excerpt}</div>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query BlogExcerpts {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
