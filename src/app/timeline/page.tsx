import Head from "next/head";
import Timeline from "@components/organisms/Timeline/Component";
import Navigation from "@components/atoms/Navigation/Component";
import { ReadmePanel } from "@components/organisms/ReadmePanel/Component";
import styles from "./page.module.css";
import clsx from "clsx";
import globalStyles from "../page.module.css";

const timelinedata = {
  items: [
    {
      id: "1",
      date: "2022-04-19T13:08:34+0200",
      title: "Projekt Zeitplan 1",
      image: {
        src: "/images/testimages/timeline.jpg",
        alt: "image",
      },
      body: '<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>',
    },
    {
      id: "2",
      date: "2022-04-19T13:08:34+0200",
      title: "Projekt Zeitplan 2",
      image: {
        src: "/images/testimages/content-header.jpg",
        alt: "image",
      },
      body: "Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route.",
    },
    {
      id: "2-b",
      date: "2022-04-19T13:08:34+0200",
      title: "Projekt Zeitplan 3 - no image",
      body: "Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route.",
    },
    {
      id: "3",
      date: "2022-04-19T13:08:34+0200",
      title: "Projekt Zeitplan",
      image: {
        src: "/images/testimages/linkhover.jpg",
        alt: "image",
      },
      body: "Die wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route.",
    },
    {
      id: "4",
      date: "2022-04-19T13:08:34+0200",
      title: "Projekt Zeitplan",
      image: {
        src: "/images/testimages/homepage-header-mobile.jpg",
        alt: "image",
      },
      body: '<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, Lobortis venenatis, ornare non elit. Posuere porta sapien, Lobortis venenatis, ornare non elit. Posuere porta sapien, Lobortis venenatis, ornare non elit. <br/> <br/> Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>',
    },
  ],
};

export default function Home() {
  return (
    <>
      <main className={clsx(globalStyles.main, globalStyles.inverted)}>
        <Navigation description="Timeline compnent" />
        <ReadmePanel
          title="Timeline"
          description={`
            <pre>
            The Timeline component creates a scrollable story/timeline with:
Pinned images on the left (desktop)
Scrollable content on the right
Animated progress indicators
            <code>
            // Pin images while scrolling
              pinTimeline = gsap.timeline({
                scrollTrigger: {
                  trigger: '.js-image-wrapper',
                  pin: true,
                  scrub: true
                }
              });

              // Animate progress bars and images
              timelineItems.forEach((elem) => {
                gsap.timeline({
                  scrollTrigger: {
                    trigger: elem,
                    start: 'top center+=10%',
                    scrub: 1
                  }
                })
                .fromTo('.js-progress', { scaleY: 0 }, { scaleY: 1 })
                .fromTo('.js-item-image', { opacity: 0 }, { opacity: 1 });
              });
      </code></pre>`}
        />
        <div className="px-5 mb-5">
          <h1 className={styles.title}>Timeline</h1>
        </div>
        <div className="">
          <Timeline title="Projekt Zeitplan" items={timelinedata.items} />
        </div>
        <div className={styles.content}>content</div>
      </main>
    </>
  );
}
