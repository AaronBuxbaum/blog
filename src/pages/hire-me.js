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
        description="Consulting and mentorship with Aaron Buxbaum: frontend architecture, internal tools, technical leadership, and growing as an engineer."
      />
      <h1>Hire Me</h1>
      <p>
        I&#39;ve spent over a decade building software and leading the teams
        that build it: Google Maps, Jet.com (through the Walmart acquisition),
        Quantum-Si (through its IPO), Detect (through FDA authorization), and
        Nuro, where I led frontend engineering across the company. I take on a
        limited number of consulting and mentorship engagements alongside that
        work.
      </p>

      <h4>Consulting</h4>
      <p>
        I&#39;m most useful when a team is about to make a big decision, or has
        already made one and is living with the consequences. Some of the
        areas where I can help:
      </p>
      <ul>
        <li>
          <strong>Frontend architecture.</strong> React and TypeScript at scale,
          large rewrites (I led a 1.1M line rewrite at Jet), design systems, and
          shared patterns that let teams reuse code instead of reinventing it.
        </li>
        <li>
          <strong>Performance.</strong> Making slow apps and slow builds fast.
          At Jet, time-to-usable went from the worst of the major e-commerce
          sites to the best; at Nuro, build times improved by 500%.
        </li>
        <li>
          <strong>Internal tools.</strong> Tools for operators, scientists, and
          engineers that people actually want to use, plus the CI and
          deployment infrastructure underneath them.
        </li>
        <li>
          <strong>Technical leadership.</strong> Setting up best practices, code
          review, testing, and an Agile process that helps rather than gets in
          the way.
        </li>
        <li>
          <strong>Second opinions.</strong> An architecture review, a code
          audit, or a sanity check before you commit to a direction.
        </li>
      </ul>
      <p>
        Engagements can be short (a review or an audit) or longer and embedded
        with your team. If you need a team rather than a person, or you&#39;re
        looking to build something with AI, take a look at{" "}
        <Link to="/pseudorandom/">Pseudorandom</Link>.
      </p>
      <p>
        <a href={consultingMail}>Get in touch about consulting →</a>
      </p>

      <h4>Mentorship</h4>
      <p>
        Some of the most rewarding work I&#39;ve done has been helping other
        engineers grow. I&#39;ve managed and mentored a team of 25 frontend
        engineers at Jet and a team of 9 across web, mobile, and backend at
        Detect, and I&#39;m a strong believer in{" "}
        <Link to="/pair-programming/">pairing</Link> and in learning by
        building.
      </p>
      <p>I&#39;m happy to work with you on:</p>
      <ul>
        <li>Growing from mid-level to senior, or senior to staff.</li>
        <li>
          Moving into technical leadership, or figuring out whether you want
          to.
        </li>
        <li>
          The craft: <Link to="/readability/">readable code</Link>,{" "}
          <Link to="/testing/">testing</Link>,{" "}
          <Link to="/code-review/">code review</Link>, and{" "}
          <Link to="/refactoring/">refactoring</Link>.
        </li>
        <li>Frontend and React fundamentals.</li>
        <li>Interviewing, job searches, and career decisions.</li>
      </ul>
      <p>
        This can be a one-off conversation or a recurring session, whichever is
        more useful to you.
      </p>
      <p>
        <a href={mentorshipMail}>Get in touch about mentorship →</a>
      </p>

      <hr />
      <p>
        Either way, send me a note with a bit about what you&#39;re working on
        and what you&#39;re looking for. You can also grab my{" "}
        <a href="/resume.pdf">resume</a>.
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
