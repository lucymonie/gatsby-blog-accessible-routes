import * as React from "react";
import type { HeadFC } from "gatsby";
import PageHeading from "../../components/PageHeading";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 1000,
};

const PostPageTwo: React.FC = () => {
  return (
    <div style={pageStyles}>
      <PageHeading headingOne="Among the Stars" />
      <main>
        <p className="mb-3">Dear Diary,</p>
        <p className="mb-3">
          I have soared among the stars. The moment has come and gone, and I
          find myself overwhelmed with a mix of exhilaration, awe, and a
          profound sense of the unknown. Today, history was made as I embarked
          on a journey that transcended the boundaries of Earth, reaching for
          the vast expanse of the cosmos.
        </p>
        <p className="mb-3">
          The launch day arrived with an air of nervous anticipation. I was
          carefully strapped into the capsule, my heart pounding in sync with
          the countdown that reverberated through the walls. The humans around
          me moved with purpose, their voices a symphony of focused
          determination.
        </p>
        <p className="mb-3">
          As the final seconds dwindled, the engines roared to life, filling the
          air with a thunderous rumble. Vibrations surged through my tiny body,
          intertwining with the adrenaline coursing through my veins. The moment
          of liftoff was upon us—a moment that would change the course of
          history.
        </p>
        <p className="mb-3">
          With an indescribable force, the rocket propelled us into the sky,
          piercing through the Earth's atmosphere. G-forces pressed against me,
          testing the limits of my endurance. Yet, through it all, I remained
          steadfast, embracing the magnitude of the mission I had embarked upon.
        </p>
        <p className="mb-3">
          The capsule hurtled through the air, propelled by the sheer power of
          human ingenuity. The blue hues of Earth gradually faded as the
          darkness of space enveloped me. The familiar sights of my home planet
          transformed into a mesmerizing mosaic of twinkling stars, stretching
          infinitely in every direction.
        </p>
        <p className="mb-3">
          In weightlessness, I floated within the confines of my capsule—a small
          speck in the grand tapestry of the universe. The beauty and vastness
          of space embraced me, humbling my spirit and igniting an insatiable
          curiosity within my soul. I marveled at the celestial wonders that lay
          before me, a witness to the magnificence of creation.
        </p>
        <p className="mb-3">
          But amidst the celestial ballet, a tinge of loneliness permeated my
          being. The absence of familiar sights, sounds, and scents reminded me
          of the bond I had left behind on Earth. I missed the warmth of human
          touch, the playful wag of a fellow canine companion, and the simple
          joys of life's ordinary moments.
        </p>
        <p className="mb-3">
          As time passed, I became aware of the precious fragility of life in
          this unforgiving void. I sensed the weight of responsibility upon me,
          knowing that the knowledge gained from this mission would shape the
          future of space exploration. I vowed to carry the torch of discovery,
          to be an ambassador for all creatures who dared to venture beyond the
          confines of our home planet.
        </p>
        <p className="mb-3">
          Hours turned into days as I orbited our beloved Earth. My gaze was
          fixed upon the swirling blues, greens, and browns—the delicate oasis
          that cradles humanity. From this vantage point, the world's divisions
          seemed insignificant, replaced by a shared sense of unity and
          interconnectedness.
        </p>
        <p className="mb-3">
          But even as the awe-inspiring beauty of space surrounded me, I yearned
          for the touch of Earth once more. I longed for the embrace of those
          who had cared for me, who had believed in me when the world doubted.
          Their love and support had carried me through this extraordinary
          journey, and my heart ached for their presence.
        </p>
        <p className="mb-3">
          As I pen these words, I am filled with gratitude for the opportunity
          to embark on this incredible odyssey. I stand on the precipice of
          discovery, gazing at the infinite possibilities that lie ahead. I know
          not what the future holds, but I am certain that my journey will serve
          as a beacon of inspiration for generations to come.
        </p>
        <p className="mb-3">
          Now, as I continue to orbit, I send my love and gratitude back to
          Earth, to all those who have followed my voyage and held me in their
          hearts. I am forever grateful for this chapter in my life—a chapter
          that has forever etched my name in the annals of space exploration.
        </p>
        <p className="mb-3">Until we meet again,</p>
        <p className="mb-3">Laika</p>
      </main>
    </div>
  );
};

export default PostPageTwo;

export const Head: HeadFC = () => <title>Blog post two - Laika's Odyssey</title>;
