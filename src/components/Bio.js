import React from "react";
import { StaticQuery, graphql } from "gatsby";
import JsonBlock from "./JsonBlock";

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author, social } = data.site.siteMetadata;

      return (
        <JsonBlock
          entries={[
            { key: `author`, value: author },
            {
              key: `email`,
              value: social.email,
              href: `mailto:${social.email}`,
            },
            {
              key: `github`,
              value: `github.com/${social.github}`,
              href: `https://github.com/${social.github}`,
            },
            {
              key: `linkedin`,
              value: `linkedin.com/in/${social.linkedin}`,
              href: `https://linkedin.com/in/${social.linkedin}`,
            },
          ]}
        />
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
