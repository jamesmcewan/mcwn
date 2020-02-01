import React from "react";
import PropTypes from "prop-types";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} James McEwan, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
