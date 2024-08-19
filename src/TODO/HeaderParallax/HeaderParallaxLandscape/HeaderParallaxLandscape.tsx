import { FC } from 'react';
import { useI18n } from 'next-localization';
import { LinkField } from '@efteling-frontend/types/layoutServiceTypes';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Text from '@efteling-frontend/ui/atoms/Text/Text';
import Button from '@efteling-frontend/ui/atoms/Button/Button';
import { getLogo } from '@efteling-frontend/ui/organisms/HeaderParallax/HeaderParallaxAnimated/assetHelper';
import { ReactComponent as RotationIcon } from './rotationIcon.svg';

import style from './HeaderParallaxLandscape.styles.module.css';

interface HeaderParallaxLandscapeProps {
  title: TextField;
  payOff: TextField;
  buttonLink: LinkField;
  className?: string;
}

const Logo = getLogo('grand-hotel');

const HeaderParallaxLandscape: FC<HeaderParallaxLandscapeProps> = ({
  payOff,
  buttonLink,
  className,
}) => {
  const { t } = useI18n();

  return (
    <div className={className}>
      <div className={style.header}>
        <figure className={style.logo}>
          <Logo />
        </figure>

        <figure className={style.rotationIcon}>
          <RotationIcon />
        </figure>

        <Text as="p" variant="body">
          {t('common-rotateDeviceNotice')}
        </Text>
      </div>

      <div className={style.payOff}>
        <Text as="p" variant="bodyLarge" field={payOff} />

        <Button field={buttonLink} size="l" />
      </div>
    </div>
  );
};

export default HeaderParallaxLandscape;
