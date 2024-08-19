"use client";
import React from "react";
import { useMedia } from "react-use";
import Grid from "@white-label/atoms/Grid/Component";
import ContentCard, {
  Card,
} from "@white-label/molecules/ContentCard/Component";
import ConditionalWrap from "@lib/conditional-wrapper/Component";
import Slider from "@white-label/molecules/Slider/Component";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import { useThemeConfig } from "@white-label/atoms/ThemeConfig/Component";
import { DecorationManager } from "@white-label/molecules/DecorationManager/Component";

const UFOMouseFollow = dynamic(
  () => import("@components/white-label/atoms/UFOMouseFollow/Component"),
  {
    ssr: false,
  }
);

interface Props {
  cards: Card[];
}

export default function ContentCardGrid(props: Props): JSX.Element {
  const themeConfig = useThemeConfig();
  const isMobile = useMedia("(max-width: 767px)", false);
  const [activeElement, setActiveElement] =
    React.useState<React.RefObject<HTMLElement> | null>(null);

  return (
    <div className={styles.wrapper}>
      {themeConfig.options.useUfoMouseFollow && (
        <UFOMouseFollow activeElement={activeElement} />
      )}
      <DecorationManager location={"content-card-grid"} />
      <ConditionalWrap
        condition={!isMobile}
        wrapper={(children) => {
          return <Grid>{children}</Grid>;
        }}
      >
        <ConditionalWrap
          condition={isMobile}
          wrapper={(children) => {
            const slides = Array.isArray(children) ? children : [children];

            return <Slider>{slides}</Slider>;
          }}
        >
          {props.cards.map((card) => (
            <ContentCard
              key={`content-card-grid-${card.id}`}
              className={styles.card}
              data={card}
              hasDarkHover
              hoverHandler={(el) => setActiveElement(el)}
            />
          ))}
        </ConditionalWrap>
      </ConditionalWrap>
    </div>
  );
}
