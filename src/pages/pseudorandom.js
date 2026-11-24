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
        description="Pseudorandom LLC builds apps and tools that people like using, with AI."
      />
      <h1>Pseudorandom LLC</h1>
      <p style={taglineStyle}>{"// we build user-friendly tools with AI"}</p>

      <p>
        Pseudorandom builds apps and tools that people like using, and we use AI
        to build them.
      </p>

      <h4>Why?</h4>
      <p>
        Most internal tools, and a lot of products, are frustrating to use.
        Usually the team knew how to fix it, but there was never time. The
        budget went to getting the thing working at all, and the polish was
        always planned for next quarter.
      </p>
      <p>
        AI changes that. We use AI at every step of building software, so
        getting something working takes a fraction of the time it used to. We
        spend the time we save on the part your users care about: making the
        tool simple, fast, and obvious to use. You get a better product, and you
        get it sooner.
      </p>

      <h4>What do we build?</h4>
      <ul>
        <li>New apps and internal tools</li>
        <li>Production versions of prototypes that never got finished</li>
        <li>AI features inside your product, when AI helps your users too</li>
        <li>
          Testing and evaluation, so you know your AI features work and keep
          working as models change
        </li>
      </ul>

      <h4>Why us?</h4>
      <p>
        We&#39;ve spent our careers building software for people who aren&#39;t
        engineers: tools for the remote operators of autonomous vehicles,
        platforms for scientists at a biotech startup, the app for an at-home
        COVID test, and features for Google Maps. We&#39;ve done it at companies
        where it had to work, through an IPO and FDA authorization. Pseudorandom
        is led by <Link to="/consulting/">Aaron Buxbaum</Link>.
      </p>

      <h4>How do we work?</h4>
      <p>
        We start with the people who will use the tool (see the{" "}
        <Link to="/principle-of-least-surprise/">
          principle of least surprise
        </Link>
        ). AI writes a lot of our code, but we design it, review it, and{" "}
        <Link to="/testing/">test</Link> it, so your team can own what we build
        once we&#39;re done. We ship small pieces early, so you see progress
        every week instead of waiting months for a big reveal.
      </p>

      <h4>Get in touch</h4>
      <p>
        Send us an email with a little about what you&#39;re building, or what
        your team is stuck on:{" "}
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
