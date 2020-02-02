import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="selfie">
      <Image />
    </div>

    <div className="content">
      <p>
        Hi! I’m <em>James McEwan</em>, a developer from Scotland. I mainly work
        with JavaScript to build useful apps that are (hopefully) fun to use.
      </p>

      <p>
        I code over on <a href="https://github.com/jamesmcewan">github</a>, you
        can check out my drawings on <a href="https://mcewan.ink">mcewan.ink</a>
        {", "}and I’m usually reachable via{" "}
        <a href="https://twitter.com/mce">twitter</a>.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
