import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              fontFamily: `monospace`,
            }}
          >
            &#123;<br/>
              &emsp;&emsp;author: "<strong>{author}</strong>",<br/>
              &emsp;&emsp;email: "<a href={`mailto:${social.email}`}><strong>{social.email}</strong></a>",<br/>
              &emsp;&emsp;linkedin: "<a href={`https://linkedin.com/in/${social.linkedin}`}><strong>{`linkedin.com/in/${social.linkedin}`}</strong></a>",<br/>
            &#125;
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
`

export default Bio
