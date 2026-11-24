import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const keywords = [
  "pseudorandom",
  "pseudorandom llc",
  "ai consulting",
  "ai tools",
  "llm",
  "internal tools",
  "user experience",
  "software consulting",
  "aaron buxbaum",
];

const taglineStyle = {
  fontFamily: `monospace`,
  marginTop: rhythm(-0.5),
  marginBottom: rhythm(1.5),
};

const PseudorandomPage = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata;
  const contactMail = `mailto:${social.email}?subject=Pseudorandom`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Pseudorandom LLC"
        keywords={keywords}
        description="Pseudorandom LLC builds user-friendly tools with AI."
      />
      <h1>Pseudorandom LLC</h1>
      <p style={taglineStyle}>{"// we build user-friendly tools with AI"}</p>

      <p>
        Pseudorandom is a small software consultancy. We build apps and tools
        that people find easy to use, and we use AI to build them. AI is part of
        every step of how we work, which means you get a working product sooner.
        When it helps, we build AI into the product itself, too.
      </p>

      <h4>What do we do?</h4>
      <ul>
        <li>Build new apps and internal tools, quickly</li>
        <li>Add AI features to an existing product</li>
        <li>Turn a prototype into something you can ship</li>
        <li>
          Set up testing and evaluation, so you know your AI features work and
          keep working as models change
        </li>
      </ul>

      <h4>Why us?</h4>
      <p>
        Plenty of teams can use AI to write code or call an LLM API. Fewer can
        use it to build something people want to use. Most of our background is
        in building tools for people who aren&#39;t engineers -- remote
        operators at Nuro, scientists at Quantum-Si, customers taking an at-home
        COVID test at Detect, and contributors to Google Maps. If a tool is
        confusing, people won&#39;t use it, no matter how clever the technology
        behind it is.
      </p>

      <h4>How do we work?</h4>
      <p>
        We start with the people using the tool, and pick the technology to fit
        them (see the{" "}
        <Link to="/principle-of-least-surprise/">
          principle of least surprise
        </Link>
        ). AI writes a lot of our code, but we design it, review it, and test
        it. Because we build with AI, we can ship small pieces early so you can
        see progress and give feedback. We write{" "}
        <Link to="/testing/">tests</Link> and{" "}
        <Link to="/readability/">readable code</Link>, so your team can own what
        we build once we&#39;re done.
      </p>

      <p>
        Pseudorandom is led by <Link to="/hire-me/">Aaron Buxbaum</Link>.
      </p>

      <h4>Get in touch</h4>
      <p>
        Send us an email with a little about what you&#39;re working on:{" "}
        <a href={contactMail}>
          <strong>{social.email}</strong>
        </a>
      </p>
    </Layout>
  );
};

export default PseudorandomPage;

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
