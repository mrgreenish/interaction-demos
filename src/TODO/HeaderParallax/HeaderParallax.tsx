import { FC, useEffect, useState } from 'react';
import Bowser from 'bowser';
import useTheme from '@efteling-frontend/hooks/useTheme';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { LinkField } from '@efteling-frontend/types/layoutServiceTypes';
import HeaderParallaxLandscape from '@efteling-frontend/ui/organisms/HeaderParallax/HeaderParallaxLandscape/HeaderParallaxLandscape';
import HeaderParallaxAnimated, {
  HeaderThemes,
} from '@efteling-frontend/ui/organisms/HeaderParallax/HeaderParallaxAnimated/HeaderParallaxAnimated';
import { VALID_THEMES } from '@efteling-frontend/ui/organisms/HeaderParallax/HeaderParallaxAnimated/assetHelper';

import style from './HeaderParallax.styles.module.css';

export interface HeaderParallaxProps {
  title: TextField;
  payOff: TextField;
  buttonLink: LinkField;
}

const HeaderParallax: FC<HeaderParallaxProps> = ({ title, payOff, buttonLink }) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const theme = useTheme().replace(/efteling-/g, '') as HeaderThemes;

  useEffect(() => {
    setIsMobile(Bowser.getParser(window.navigator.userAgent).getPlatform().type === 'mobile');
  }, []);

  if (!VALID_THEMES.includes(theme)) {
    console.warn('HEADER THEME IS NOT VALID. THEME PROVIDED IS: ', theme);
    return null;
  }

  return (
    <header className={isMobile ? style.isMobile : undefined}>
      <HeaderParallaxLandscape
        className={style.headerParallaxLandscape}
        title={title}
        payOff={payOff}
        buttonLink={buttonLink}
      />

      <HeaderParallaxAnimated
        theme={theme}
        className={style.headerParallaxAnimated}
        title={title}
        payOff={payOff}
        buttonLink={buttonLink}
      />
    </header>
  );
};

export default HeaderParallax;
