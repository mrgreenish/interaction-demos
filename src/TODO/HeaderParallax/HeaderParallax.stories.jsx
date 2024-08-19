import HeaderParallax from './HeaderParallax';

export default {
  title: 'Organisms/Header Parallax',
  component: HeaderParallax,
  args: {
    title: {
      value: 'Efteling Grand Hotel - de residentie der wonderen',
    },
    titleImage: {
      src: 'https://xmc-eftelingbv1-website-development.sitecorecloud.io/-/media/Project/efteling/efteling/Images/HeroShots/Titles/grand-hotel-title.png',
      alt: 'Efteling Grand Hotel',
      width: 515,
      height: 120,
    },
    siteLink: {
      linkType: 'internal',
      url: '/nl',
      target: null,
      text: 'Bezoek Efteling.com',
    },
    buttonLink: {
      linkType: 'anchor',
      url: '#waitlist',
      target: null,
      text: 'Schrijf je in voor de wachtlijst',
    },
    backgroundImageMobile: {
      src: '/images/storybook/ParallaxHeader/header-grand-hotel-static-mobile.jpg',
      alt: 'Illustratie Efteling Grand Hotel',
      width: 750,
      height: 1540,
    },
    backgroundImageDesktop: {
      src: '/images/storybook/ParallaxHeader/header-grand-hotel-static.jpg',
      alt: 'Illustratie Efteling Grand Hotel',
      width: 2880,
      height: 1924,
    },
    payOff: {
      value: ' Een nieuwe luxueuze manier om de wondere wereld van de Efteling te bezoeken',
    },
  },
};

export const Default = (args) => (
  <div className="bg-grain--light" style={{ minHeight: '300vh' }}>
    <HeaderParallax title={args.title} payOff={args.payOff} buttonLink={args.buttonLink} />
  </div>
);
