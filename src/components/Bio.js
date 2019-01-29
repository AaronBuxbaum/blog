import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

const bioStyles = {
  fontFamily: 'monospace',
  whiteSpace: 'nowrap',
  marginBottom: rhythm(2.5),
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
          &emsp;&emsp;github: "<a href={`https://github.com/${social.github}`}><strong>{`github.com/${social.github}`}</strong></a>",<br />
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
          github
        }
      }
    }
  }
`;

export default Bio;
