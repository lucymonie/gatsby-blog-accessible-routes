import * as React from "react";
import type { HeadFC } from "gatsby";
import PageHeading from "../../components/PageHeading";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 1000,
};

const PostPageOne: React.FC = () => {
  return (
    <div style={pageStyles}>
      <PageHeading headingOne="Laika's journey begins" />
      <main>
        <p className="mb-3">Dear Diary,</p>
        <p className="mb-3">
          Today was the day that changed my life forever. From the cold,
          desolate streets of Moscow to the stars above, my journey as a stray
          dog took an unexpected turn. I, Laika, found myself at the center of
          an extraordinary mission &mdash; a mission that would send me soaring
          into the unknown depths of space.
        </p>
        <p className="mb-3">
          It all started weeks ago when I was merely a nameless wanderer,
          searching for food scraps and shelter amidst the bustling city. Little
          did I know that my fate was about to take a remarkable turn. On that
          fateful day, kind-hearted souls from the Institute of Aviation
          Medicine spotted me, recognizing a potential companion for an
          unimaginable voyage.
        </p>
        <p className="mb-3">
          With gentle hands, they scooped me up and brought me into their care.
          Their warmth and compassion were a stark contrast to the harshness of
          the world I once knew. I was given a name, Laika, and a purpose far
          beyond anything I could have ever imagined.
        </p>
        <p className="mb-3">
          Days turned into weeks as the scientists meticulously prepared me for
          the mission ahead. They introduced me to the confines of a small
          capsule, simulating the environment I would soon find myself in. The
          sights, sounds, and vibrations were unfamiliar, but I grew accustomed
          to them, knowing they were essential for my upcoming adventure.
        </p>
        <p className="mb-3">
          I observed the humans who worked tirelessly to ensure my safety. They
          donned white lab coats, their faces filled with both excitement and
          concern. Their commitment to unraveling the mysteries of space was
          palpable, and I felt a deep sense of responsibility resting on my
          small shoulders.
        </p>
        <p className="mb-3">
          Training sessions became a regular occurrence. They taught me to sit
          still for prolonged periods, endure the confinement of the capsule,
          and adapt to the strange sensations I would experience during launch
          and orbit. Each day brought new challenges, but I persevered,
          determined to be the best canine astronaut I could be.
        </p>
        <p className="mb-3">
          The world beyond the walls of my temporary home buzzed with
          anticipation. News of my upcoming mission spread like wildfire,
          capturing the imagination of people from all walks of life. It seemed
          my journey had become a symbol of hope and human achievement,
          transcending the boundaries of nations and ideologies.
        </p>
        <p className="mb-3">
          But amid the excitement, a cloud of concern hung in the air. Questions
          arose about the risks I would face, the toll my body would endure, and
          the unknown effects of space travel on a living being. Ethical debates
          raged, weighing the importance of scientific progress against the
          well-being of an innocent creature.
        </p>
        <p className="mb-3">
          As the day of departure drew near, I couldn't help but feel a mix of
          excitement and trepidation. I longed for the warmth of the familiar,
          for the gentle caresses of those who had cared for me during my time
          at the institute. Yet, deep within me, a spark ignited—a spark of
          bravery and curiosity that propelled me forward.
        </p>
        <p className="mb-3">
          And so, here I am, poised on the brink of history. Tomorrow, I will
          embark on a journey that no dog, no living creature, has ever
          undertaken. I carry with me the hopes and dreams of countless souls,
          the collective yearning for discovery and the boundless pursuit of
          knowledge.
        </p>
        <p className="mb-3">
          As I close my eyes tonight, I find solace in the knowledge that my
          voyage, no matter the outcome, will pave the way for future
          explorations and the betterment of humankind. I am but a small dog,
          but my spirit is boundless, and my legacy will endure.
        </p>
        <p className="mb-3">
          Tomorrow, I venture into the stars. With a heart full of anticipation,
        </p>
        <p className="mb-3">Laika</p>
      </main>
    </div>
  );
};

export default PostPageOne;

export const Head: HeadFC = () => (
  <title>Blog post one - Laika's Odyssey</title>
);
