import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ContentCardGrid from "./Component";
import image from "./images/image.jpg";

const cardData = {
  id: "card-1",
  text: "How do you pronounce Mentos?",
  button: {
    title: "I want gum",
    id: "gum",
  },
  modalContent: {
    text: [{
      "children": [
        {
          "marks": [],
          "text": "Mentos wordt in Nederland in Breda en in Weert geproduceerd. Daarnaast zijn er vele fabrieken over de hele wereld: onder andere in Italië, Polen, Roemenië, Turkije, Brazilië, India, China en Indonesië.",
          "_key": "769c31d6b5099c5479f6f2c3124810c9",
          "_type": "span"
        }
      ],
      "_type": "block",
      "style": "normal",
      "_key": "a367e2f1ae9df68f4bb9c25fe3642382",
      "markDefs": []
    }],
    image: {
      url: image.src,
      alt: "Image",
    },
  },
};

const items = [
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
];
const cards = items.map((card, index) => ({
  ...card,
  id: `${card.id}-${index}`,
}));

export default {
  title: "Organism/ContentCardGrid",
  component: ContentCardGrid,
} as Meta<typeof ContentCardGrid>;

export const Element: StoryFn<typeof ContentCardGrid> = () => (
  <ContentCardGrid cards={cards} />
);
