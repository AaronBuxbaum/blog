import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

const headerStyle = {
  fontFamily: `monospace`,
  marginTop: 0,
};

const navStyle = {
  fontFamily: `monospace`,
  marginTop: rhythm(-1),
  marginBottom: rhythm(1.5),
};

const navLinks = [
  { to: `/`, label: `blog` },
  { to: `/hire-me/`, label: `hire me` },
  { to: `/pseudorandom/`, label: `pseudorandom llc` },
];

const Nav = () => (
  <nav style={navStyle}>
    {navLinks.map(({ to, label }, index) => (
      <React.Fragment key={to}>
        {index > 0 && ` · `}
        <Link to={to} style={{ boxShadow: `none` }}>
          {label}
        </Link>
      </React.Fragment>
    ))}
  </nav>
);

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h2 style={headerStyle}>
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      );
    } else {
      header = (
        <h3 style={headerStyle}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <Nav />
        {children}
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    );
  }
}

export default Layout;
