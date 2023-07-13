import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageHeading from "../components/PageHeading";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 1000,
};

const AboutPage: React.FC<PageProps> = () => {
  return (
    <div style={pageStyles}>
      <PageHeading headingOne="About" />
      <main>
        <p className="mb-3">
          Welcome to Laika's Odyssey, a blog dedicated to celebrating the
          incredible journey of Laika, the courageous dog who ventured into the
          cosmos. Laika's story is a testament to the indomitable spirit of
          exploration and the unbreakable bond between humans and animals.
        </p>
        <p className="mb-3">
          Laika, a small stray dog from the streets of Moscow, was chosen to be
          a pioneer in space exploration during the early years of the Space
          Race. On November 3, 1957, aboard the spacecraft Sputnik 2, Laika
          became the first living creature to orbit the Earth. Her voyage marked
          a historic milestone, pushing the boundaries of what was possible and
          igniting the imagination of people around the world.
        </p>
        <p className="mb-3">
          Laika&apos;s remarkable journey captured the hearts of millions, as
          she embarked on an adventure into the unknown. Through this blog, we
          aim to honour her memory and shed light on her extraordinary legacy.
          Here, you&apos;ll find captivating articles, fascinating facts, and
          thought-provoking insights into the space exploration era that Laika
          helped shape.
        </p>
        <p className="mb-3">
          Join us as we delve into the science behind Laika&apos;s mission,
          exploring the challenges and triumphs of the early space programs.
          Learn about the remarkable individuals who made it all possible and
          the groundbreaking technology that paved the way for future missions.
          Discover the lasting impact of Laika's sacrifice and the ethical
          discussions her mission sparked.
        </p>
        <p className="mb-3">
          Beyond the scientific and historical aspects, we also dive into the
          human side of Laika's story. We explore the emotional bonds formed
          between Laika and her caretakers, who lovingly prepared her for her
          journey. We reflect on the ethical considerations of sending animals
          into space and the subsequent advancements in animal welfare that
          arose from this chapter in history.
        </p>
        <p className="mb-3">
          Laika&apos;s Odyssey is not just a platform for education and
          reflection; it's a tribute to an extraordinary canine astronaut who
          captured the world's imagination. We invite you to join us on this
          exploration of Laika's legacy and the profound impact she had on space
          exploration, scientific progress, and our understanding of our place
          in the universe.
        </p>
        <p className="mb-3">
          Thank you for visiting Laika's Odyssey. Together, let's celebrate the
          spirit of adventure and pay homage to the enduring bravery of Laika,
          forever etched in the annals of space exploration.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About page - Laika's Odyssey</title>;
