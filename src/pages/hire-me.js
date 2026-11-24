import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const keywords = [
  "aaron buxbaum",
  "consulting",
  "consultant",
  "mentorship",
  "mentor",
  "frontend architecture",
  "react",
  "typescript",
  "tech leadership",
  "staff engineer",
];

const HireMePage = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata;
  const consultingMail = `mailto:${social.email}?subject=Consulting`;
  const mentorshipMail = `mailto:${social.email}?subject=Mentorship`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Hire Me"
        keywords={keywords}
        description="Hire Aaron Buxbaum for consulting or mentorship."
      />
      <h1>Hire Me</h1>
      <p>
        I&#39;m a staff software engineer with over 10 years of experience, most
        recently leading frontend engineering at Nuro. Before that I was at
        Detect, Quantum-Si, Jet.com, and Google Maps. I&#39;m available for a
        limited amount of consulting and mentorship work.
      </p>

      <h4>Consulting</h4>
      <p>I can help with:</p>
      <ul>
        <li>
          Frontend architecture, especially React and TypeScript in larger
          codebases
        </li>
        <li>
          Big rewrites and migrations (I led the rewrite of Jet.com&#39;s 1.1M
          line codebase into React and Redux)
        </li>
        <li>Performance, both in the browser and in your build pipeline</li>
        <li>Design systems and shared component libraries</li>
        <li>Internal tools and developer infrastructure</li>
        <li>Engineering practices like code review, testing, and linting</li>
        <li>Architecture reviews and second opinions</li>
      </ul>
      <p>
        This can be a short project, like an audit or a review, or something
        longer where I work alongside your team. If you want to build something
        with AI, or you need more than one person, take a look at{" "}
        <Link to="/pseudorandom/">Pseudorandom</Link>.
      </p>
      <p>
        <a href={consultingMail}>Email me about consulting</a>
      </p>

      <h4>Mentorship</h4>
      <p>
        I&#39;ve mentored a lot of engineers over the years, including a team of
        25 frontend engineers at Jet and 9 engineers at Detect. I&#39;m happy to
        help with:
      </p>
      <ul>
        <li>Growing into a senior or staff role</li>
        <li>Moving into tech leadership (or deciding whether you want to)</li>
        <li>
          Writing better code: <Link to="/readability/">readability</Link>,{" "}
          <Link to="/testing/">testing</Link>,{" "}
          <Link to="/code-review/">code review</Link>, and{" "}
          <Link to="/refactoring/">refactoring</Link>
        </li>
        <li>React and frontend fundamentals</li>
        <li>Job searches, interviews, and career decisions</li>
      </ul>
      <p>
        We can do a single conversation or meet regularly, whichever works
        better for you.
      </p>
      <p>
        <a href={mentorshipMail}>Email me about mentorship</a>
      </p>

      <hr />
      <p>
        Send me an email with a little about what you&#39;re working on and what
        you&#39;re looking for. My <a href="/resume.pdf">resume</a> has more
        detail.
      </p>
      <Bio />
    </Layout>
  );
};

export default HireMePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          email
        }
      }
    }
  }
`;
