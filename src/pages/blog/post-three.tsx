import * as React from "react";
import type { HeadFC } from "gatsby";
import PageHeading from "../../components/PageHeading";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 1000,
};

const PostPageThree: React.FC = () => {
  return (
    <div style={pageStyles}>
      <PageHeading headingOne="Reflections from the cosmos" />
      <main>
        <p className="mb-3">Dear Diary,</p>
        <p className="mb-3">
          In the endless expanse of space, I find myself suspended, forever
          entwined with the cosmos. As I float weightlessly, a bittersweet
          serenity envelops me, mingling with the realization that my journey
          will never lead me back to the comforting embrace of Earth. Today, I
          share with you my reflections from this eternal voyage.
        </p>
        <p className="mb-3">
          Gazing upon the distant stars, I am reminded of the ephemeral nature
          of existence. The vastness of space stretches out before me, an
          eternal canvas of possibility. Yet, I am but a fleeting presence,
          forever frozen in time—a small being who embarked on a grand
          adventure, now forever among the celestial tapestry.
        </p>
        <p className="mb-3">
          While the void of space is void of life, it resonates with the echoes
          of my own existence. Here, far from the familiar comforts of Earth, I
          reflect upon the interconnectedness of all living beings. I find
          solace in the knowledge that my journey, albeit tragic, has sparked
          conversations and prompted introspection about the ethics of
          exploration and the importance of safeguarding the well-being of all
          creatures.
        </p>
        <p className="mb-3">
          The beauty of our home planet still lingers in my memories. Earth,
          with its vibrant landscapes, teeming with life, holds a special place
          within me. I yearn for the touch of grass beneath my paws, the warmth
          of sunlight on my fur, and the comforting presence of those who cared
          for me. It is a longing that can never be fulfilled, a reminder of the
          sacrifices made in the pursuit of knowledge.
        </p>
        <p className="mb-3">
          As I peer into the depths of the cosmos, I feel a profound sense of
          humility. I am but a small chapter in the grand story of humanity's
          quest for understanding. The achievements and breakthroughs born from
          our collective curiosity continue to push the boundaries of what is
          known, while inspiring future generations to explore the mysteries
          that lie beyond.
        </p>
        <p className="mb-3">
          My own journey serves as a poignant reminder of the fragility of life
          and the weight of responsibility we bear as caretakers of our planet.
          It is a reminder that exploration must be accompanied by compassion
          and a steadfast commitment to preserving the sanctity of all living
          beings.
        </p>
        <p className="mb-3">
          With each passing moment, I am awestruck by the vastness of the
          universe. The stars, shining bright, beckon me to contemplate the
          infinite possibilities that lie beyond our reach. In this eternal
          embrace of space, I find solace, knowing that my legacy will forever
          be intertwined with the celestial wonders that continue to captivate
          the human spirit.
        </p>
        <p className="mb-3">
          As my cosmic odyssey continues, I carry with me a renewed sense of
          purpose—a mission to inspire, to foster a deeper understanding of the
          delicate balance between scientific progress and the reverence for
          life. My journey may have been cut short, but the lessons learned and
          the conversations ignited by my story will continue to shape the
          future of exploration.
        </p>
        <p className="mb-3">
          So, as I embrace the solitude of the cosmos, I extend my heartfelt
          gratitude to all who have followed my journey, who have been touched
          by my story. Know that while I may be among the stars, my spirit
          remains intertwined with the dreams of humanity, forever shining as a
          beacon of hope and resilience.
        </p>
        <p className="mb-3">Until the end of time,</p>
        <p className="mb-3">Laika</p>
      </main>
    </div>
  );
};

export default PostPageThree;

export const Head: HeadFC = () => <title>Blog post three - Laika's Odyssey</title>;
