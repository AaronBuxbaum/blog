import React from "react";
import { Link, graphql } from "gatsby";

import JsonBlock from "../components/JsonBlock";
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
  "ai development",
];

const ConsultingPage = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata;
  const consultingMail = `mailto:${social.email}?subject=Consulting`;
  const mentorshipMail = `mailto:${social.email}?subject=Mentorship`;
  const trainingMail = `mailto:${social.email}?subject=Training`;
  const mentorCruiseUrl = `https://mentorcruise.com/mentor/aaronbuxbaum/`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Consulting"
        keywords={keywords}
        description="Hire Aaron Buxbaum to build your app with AI, train your team, or mentor you."
      />
      <JsonBlock
        entries={[
          { key: `consultant`, value: `Aaron Buxbaum` },
          { key: `builds`, value: `software, with AI` },
          { key: `offers`, value: `building, training, mentoring` },
          { key: `email`, value: social.email, href: consultingMail },
        ]}
      />
      <p>
        Hey there! I&#39;m Aaron. I&#39;ve been building software professionally
        for 15 years, and I build it with AI.
      </p>
      <p>
        AI is part of every step of my development process, from planning to
        code to tests. It means I can get a working app in front of you in a
        fraction of the time it used to take, without the code turning into a
        mess you have to throw away later. You get the speed of AI and the
        judgment of someone who has shipped a lot of software that had to work.
      </p>

      <h4>Software that had to work</h4>
      <p>
        I&#39;ve spent my career at companies where things going wrong was
        expensive:
      </p>
      <ul>
        <li>
          At Jet.com, I led the rewrite of a 1.1M line codebase into React. The
          site went from the slowest of the major e-commerce sites to the
          fastest, ahead of Amazon and Walmart.
        </li>
        <li>
          At Quantum-Si, I was Engineer #2 and built the cloud platform from
          scratch. The company went public at a $1.5B valuation.
        </li>
        <li>
          At Detect, I led the team that built the app for an at-home COVID
          test. It went through FDA authorization and sold over a million tests.
        </li>
        <li>
          In autonomous vehicles, I&#39;ve worked on remote assist for robotaxis
          at Nuro, ML infrastructure for robotaxis at Cruise, and remote assist
          for autonomous trucking at StackAV.
        </li>
      </ul>
      <p>
        Before that, I worked on Google Maps and on financial risk analysis with
        fractal algorithms. I have a BS and MS in Computer Science (with a
        specialization in Machine Learning) and an MS in Analytics.
      </p>

      <h4>What can I help with?</h4>
      <ul>
        <li>Building a new app or internal tool, start to finish</li>
        <li>Turning a prototype into something you can ship</li>
        <li>
          Rescuing a codebase that has gotten slow, fragile, or hard to change
        </li>
        <li>Training your team to build with AI</li>
        <li>Architecture reviews and second opinions</li>
      </ul>
      <p>
        I work best on projects where one experienced engineer with AI can
        replace a small team. If you need more than one person, take a look at{" "}
        <Link to="/pseudorandom/">Pseudorandom</Link>.
      </p>
      <p>
        <a href={consultingMail}>Email me about your project</a>
      </p>

      <h4>Training</h4>
      <p>
        I also train engineering teams to build software with AI. Training is
        hands-on and happens in your own codebase, so it sticks. We cover
        setting up an AI development process, getting good results out of AI
        tools, and keeping code quality high while you move faster. I can also
        teach the fundamentals I write about here, like{" "}
        <Link to="/testing/">testing</Link>,{" "}
        <Link to="/code-review/">code review</Link>, and React.
      </p>
      <p>
        <a href={trainingMail}>Email me about training</a>
      </p>

      <h4>Mentorship</h4>
      <p>
        I also mentor engineers. My career has been straight down the individual
        contributor path, so that&#39;s where I can help the most: becoming a
        great IC with a robust skillset that companies want. More than 20 of my
        mentees have been promoted, hired, or changed careers entirely.
      </p>
      <p>
        My approach is hands-on and iterative: we work on real problems, with
        tight feedback loops, whether that&#39;s growing into a staff role,{" "}
        <Link to="/code-review/">writing better code</Link>, leading your team,
        or preparing for interviews. My goal is to &quot;graduate&quot; you out
        of needing me as quickly as possible, so that you can start mentoring
        people of your own.
      </p>
      <p>
        You can book a free intro call on{" "}
        <a href={mentorCruiseUrl}>MentorCruise</a>, or{" "}
        <a href={mentorshipMail}>email me</a>.
      </p>
    </Layout>
  );
};

export default ConsultingPage;

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
