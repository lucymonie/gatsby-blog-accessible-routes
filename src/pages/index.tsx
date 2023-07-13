import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import laika from "../images/laika.png";
import PageHeading from "../components/PageHeading";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
  fontSize: "1.5rem",
};
const headingAccentStyles = {
  color: "#663399",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={pageStyles}>
      <PageHeading headingOne="Laika's Odyssey" />
      <main>
        <h2 style={headingStyles}>
          It's a blog
          <br />
          <span style={headingAccentStyles}>About a dog</span>
        </h2>
        <div className="w-1/4">
          <img
            src={laika}
            alt="oil pastel drawingof Laika the space-going dog as drawn by dalle. The dog is looking at us face on, with a reddish background. Its expression is sweet and trusting."
          />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home page - Laika's Odyssey</title>;
