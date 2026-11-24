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
  const mentorCruiseUrl = `https://mentorcruise.com/mentor/aaronbuxbaum/`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Hire Me"
        keywords={keywords}
        description="Hire Aaron Buxbaum for consulting or mentorship."
      />
      <h1>Hire Me</h1>
      <p>
        Hey there! I&#39;m Aaron, and I&#39;ve been working professionally in
        software for 15 years. I have a BS and MS in Computer Science (with a
        specialization in Machine Learning), along with another MS in Analytics.
        I specialize in full-stack and frontend development, developing software
        talent at scale, and Agile and AI development processes.
      </p>
      <p>
        I&#39;ve worked on financial risk analysis with fractal algorithms, on
        Google Maps, at Walmart Labs, and as Engineer #2 at a biotech startup
        that had a successful IPO. Most recently, I&#39;ve been in the
        autonomous vehicles space, working on the ML systems that drive a
        robotaxi.
      </p>

      <h4>Consulting</h4>
      <p>
        I build software with AI. AI is part of every step of my development
        process, which lets me get a working app in front of you quickly without
        giving up on code quality. I can help with:
      </p>
      <ul>
        <li>Building a new app or internal tool</li>
        <li>
          Full-stack and frontend architecture, especially React and TypeScript
        </li>
        <li>
          Big rewrites and migrations (I led the rewrite of Jet.com&#39;s 1.1M
          line codebase into React and Redux)
        </li>
        <li>Performance, both in the browser and in your build pipeline</li>
        <li>
          Setting up AI development processes, so your own team moves faster
        </li>
        <li>Engineering practices like code review, testing, and linting</li>
        <li>Architecture reviews and second opinions</li>
      </ul>
      <p>
        This can be a short project, like an audit or a review, or something
        longer where I work alongside your team. If you need more than one
        person, take a look at <Link to="/pseudorandom/">Pseudorandom</Link>.
      </p>
      <p>
        <a href={consultingMail}>Email me about consulting</a>
      </p>

      <h4>Mentorship</h4>
      <p>
        My career has been straight down the individual contributor path, so
        that&#39;s where I can help the most: becoming a great IC with a robust
        skillset that companies want. I&#39;ve had more than 20 mentees get
        promoted, get hired, or change careers entirely. I can help with:
      </p>
      <ul>
        <li>Growing into a senior or staff role</li>
        <li>Leading your team and establishing best practices</li>
        <li>
          Writing better code: <Link to="/readability/">readability</Link>,{" "}
          <Link to="/testing/">testing</Link>,{" "}
          <Link to="/code-review/">code review</Link>, and{" "}
          <Link to="/refactoring/">refactoring</Link>
        </li>
        <li>Interview prep, including mock interviews and system design</li>
        <li>Resumes and job searches</li>
      </ul>
      <p>
        My approach is hands-on and iterative. The best way to learn is by
        doing, with tight and accurate feedback loops. My goal is to
        &quot;graduate&quot; you out of needing me as quickly as possible, so
        that you can start mentoring people of your own.
      </p>
      <p>
        I mentor through <a href={mentorCruiseUrl}>MentorCruise</a>, where you
        can book a free intro call. You can also{" "}
        <a href={mentorshipMail}>email me about mentorship</a>.
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
