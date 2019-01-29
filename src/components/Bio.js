import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const bioStyles = {
  fontFamily: 'monospace',
  whiteSpace: 'nowrap',
};

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata;

      return (
        <div style={bioStyles}>
          &#123;<br />
          &emsp;&emsp;author: "<strong>{author}</strong>",<br />
          &emsp;&emsp;email: "<a href={`mailto:${social.email}`}><strong>{social.email}</strong></a>",<br />
          &emsp;&emsp;linkedin: "<a href={`https://linkedin.com/in/${social.linkedin}`}><strong>{`linkedin.com/in/${social.linkedin}`}</strong></a>",<br />
          &#125;
      </div>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          email
          linkedin
        }
      }
    }
  }
`;

export default Bio;
