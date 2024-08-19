import React from 'react'

import Timeline, { timelineItem } from './Component';

export default {
  title: 'Organisms/Timeline',
  component: Timeline,
  args: {
    items: [
      {
        id: '1',
        date: '2022-04-19T13:08:34+0200',
        title: 'Projekt Zeitplan 1',
        image: {
          src: 'images/testimages/timeline.jpg',
          alt: 'image',
        },
        body: '<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>',
      },
      {
        id: '2',
        date: '2022-04-19T13:08:34+0200',
        title: 'Projekt Zeitplan 2',
        image: {
          src: 'images/testimages/content-header.jpg',
          alt: 'image',
        },
        body: 'Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route.',
      },
      {
        id: '2-b',
        date: '2022-04-19T13:08:34+0200',
        title: 'Projekt Zeitplan 3 - no image',
        body: 'Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route Die zukünftige Trasse für den Unterstellbau von Raitersaich nach Althem steht noch nicht fest. In den Raumordnungsunterlagen wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route.',
      },
      {
        id: '3',
        date: '2022-04-19T13:08:34+0200',
        title: 'Projekt Zeitplan',
        image: {
          src: 'images/testimages/linkhover.jpg',
          alt: 'image',
        },
        body: 'Die wird der Korridor vorgeschlagen. I.E. eine mögliche zukünftige Route.',
      },
      {
        id: '4',
        date: '2022-04-19T13:08:34+0200',
        title: 'Projekt Zeitplan',
        image: {
          src: 'images/testimages/homepage-header-mobile.jpg',
          alt: 'image',
        },
        body: '<p><b>Demontage der Oberleitung</b><br /><br />Nunc dictumst amet diam, massa erat ac. Non vel <a href=\'#\'>turpis accumsan</a> magnis sed. Vulputate eu, hendrerit fringilla rutrum non eget purus convallis. Lobortis venenatis, ornare non elit. Posuere porta sapien, Lobortis venenatis, ornare non elit. Posuere porta sapien, Lobortis venenatis, ornare non elit. Posuere porta sapien, Lobortis venenatis, ornare non elit. <br/> <br/> Posuere porta sapien, <a data-reference="on" title="Erfahren Sie alles über" data-href="http://www.tesla.com" data-description="Stickstoff mit (importiertem) hochkalorischem Gas" href="#crosslink-other">cross referance item</a> Consequat vitae felis elementum, magna vitae eros amet. Erat non ac odio quis <a data-reference="on" title="Lesen Sie auch" data-href="http://www.google.com" data-description="Verbrauchs an niederkalorischem Gas im Jahr 2017" href="#crosslink-operations">operations</a> varius morbi elementum. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus. <a data-reference="on" title="Lesen Sie auch" data-href="/raport" data-description="Verbrauchs raport" href="#crosslink-raport">Raport</a>. Mattis convallis odio mattis in morbi purus eu. In pharetra quam non ridiculus.</p>',
      }
    ]
  },
}

const Template = (args: { items: timelineItem[] }) => (
  <>
    <div className="px-5 mb-5">
      <h1 className="mb-50">Timeline</h1>
    </div>
    <div className=''>
      <Timeline title="Projekt Zeitplan" items={args.items} />
    </div>
    <div className="h-[200vh] bg-brand-blue-100">content</div>
  </>
)

export const Default = Template.bind({})