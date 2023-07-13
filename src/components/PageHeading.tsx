import * as React from "react";
import { Link } from "gatsby";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 550,
  fontSize: "2rem",
};

const PageHeading: React.FC<{ headingOne: string }> = ({ headingOne }) => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row mb-4">
          <li className="mr-4">
            <Link className="underline" to="/">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link className="underline" to="/about">
              About
            </Link>
          </li>
          <li className="mr-4">
            <Link className="underline" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 style={headingStyles}>{headingOne}</h1>
    </header>
  );
};

export default PageHeading;
