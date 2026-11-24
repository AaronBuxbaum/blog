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
        description="Pseudorandom LLC builds user-friendly tools with AI: internal tools, AI features, and prototypes that people actually want to use."
      />
      <h1>Pseudorandom LLC</h1>
      <p style={taglineStyle}>{"// we build user-friendly tools with AI"}</p>

      <p>
        Most AI features are a chat box bolted onto a product. The model is the
        easy part now. The hard part is everything around it: figuring out
        where AI actually helps, designing an interface people trust, handling
        the cases where the model is wrong, and shipping something that holds
        up in production. That&#39;s what we do.
      </p>

      <h4>What we build</h4>
      <ul>
        <li>
          <strong>Internal tools.</strong> AI that fits into the way your team
          already works, so the people using it every day get faster instead of
          getting a new thing to babysit.
        </li>
        <li>
          <strong>AI features in your product.</strong> Built so your users
          understand what the AI is doing, can see why, and can easily correct
          it when it&#39;s wrong.
        </li>
        <li>
          <strong>Prototypes that become products.</strong> Getting from
          &quot;we should try AI for this&quot; to something real people can
          use, quickly, and then making it solid.
        </li>
        <li>
          <strong>Evaluation and guardrails.</strong> Tests and measurements so
          you know whether the thing works, and keep knowing as models and
          prompts change.
        </li>
      </ul>

      <h4>How we work</h4>
      <ul>
        <li>
          <strong>Start with the user, not the model.</strong> A tool is only
          useful if people use it. We design around the workflow first and
          choose the AI to fit it, following the{" "}
          <Link to="/principle-of-least-surprise/">
            principle of least surprise
          </Link>
          .
        </li>
        <li>
          <strong>Ship early, ship often.</strong> Small increments in front of
          real users, not a big reveal at the end.
        </li>
        <li>
          <strong>Tested and maintainable.</strong> AI doesn&#39;t get a pass on{" "}
          <Link to="/testing/">testing</Link> or{" "}
          <Link to="/readability/">readable code</Link>. You should be able to
          own what we build after we hand it off.
        </li>
        <li>
          <strong>Honest about fit.</strong> Sometimes the right answer is a
          better form, not a language model. We&#39;ll tell you.
        </li>
      </ul>

      <h4>Background</h4>
      <p>
        Pseudorandom is led by <Link to="/hire-me/">Aaron Buxbaum</Link>, a
        staff engineer with over a decade of experience building tools for
        people who aren&#39;t engineers: remote operators and mission control
        for autonomous vehicles at Nuro, platforms for scientists at Quantum-Si,
        a consumer app and website through FDA authorization at Detect, and
        contributor tools for Google Maps. Add a master&#39;s in Analytics and
        an education in machine learning, and building good tools with AI is
        the natural next step.
      </p>

      <h4>Work with us</h4>
      <p>
        Tell us what you&#39;re trying to build, or what&#39;s slowing your team
        down, and we&#39;ll tell you honestly whether AI can help.
      </p>
      <p>
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
