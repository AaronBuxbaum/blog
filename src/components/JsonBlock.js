import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

const blockStyles = {
  fontFamily: "monospace",
  whiteSpace: "nowrap",
  marginBottom: rhythm(2.5),
};

const Value = ({ value, href, to }) => {
  const text = <strong>{value}</strong>;
  if (to) return <Link to={to}>{text}</Link>;
  if (href) return <a href={href}>{text}</a>;
  return text;
};

// Renders an object-literal style block, e.g. { author: "Aaron Buxbaum", }
const JsonBlock = ({ entries }) => (
  <div style={blockStyles}>
    &#123;
    {entries.map(({ key, value, href, to }) => (
      <React.Fragment key={key}>
        <br />
        &emsp;&emsp;{key}: &quot;
        <Value value={value} href={href} to={to} />
        &quot;,
      </React.Fragment>
    ))}
    <br />
    &#125;
  </div>
);

export default JsonBlock;
