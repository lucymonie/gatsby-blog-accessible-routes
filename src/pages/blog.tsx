import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import PageHeading from "../components/PageHeading";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 1000,
};

const BlogPage: React.FC<PageProps> = () => {
  return (
    <div style={pageStyles}>
      <PageHeading headingOne="Blog posts" />
      <main>
        <Link to="./post-one" className="mb-3 block underline">
          Laika&apos;s journey begins
        </Link>
        <Link to="./post-two" className="mb-3 block underline">
          Among the stars
        </Link>
        <Link to="./post-three" className="mb-3 block underline">
          Reflections from the cosmos
        </Link>
      </main>
    </div>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blog post - Laika's Odyssey</title>;
