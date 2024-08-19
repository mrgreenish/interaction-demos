import { FC, useRef, useState, useMemo } from 'react';
import { useIsomorphicLayoutEffect } from '@react-hookz/web';
import clsx from 'clsx';
import Image from 'next/image';
import { useMediaQuery } from '@react-hookz/web';
import { useImageLoader } from '@efteling-frontend/misc/hooks/useImageLoader';
import { useInViewElement } from '@efteling-frontend/hooks/useInViewElement';
import { useTransitions } from './useTransitions';
import Button from '@efteling-frontend/ui/atoms/Button/Button';
import Text from '@efteling-frontend/ui/atoms/Text/Text';
import {
  getStyles,
  getManifest,
  getEffectLayer,
  getLogo,
  AssetsManifestProps,
  Sizes,
  ManifestImage,
  VALID_THEMES,
  getImagesBySize,
} from './assetHelper';
import { HeaderParallaxProps } from '@efteling-frontend/ui/organisms/HeaderParallax/HeaderParallax';

import style from './styles.module.css';

/*
check these tools for creating images and manifests als tool to create webp images.
before optimizes image first with TinyPng
manifest builder: /src/frontend/libs/script-helpers/asset-manifest-generator
webp converter: /src/frontend/libs/script-helpers/webp-converter
For manifests for the header you still need to add the depth of the image manually.
*/

export type HeaderThemes = (typeof VALID_THEMES)[number];

const HeaderParallaxAnimated: FC<
  HeaderParallaxProps & { className: string; theme: HeaderThemes }
> = ({ title, payOff, buttonLink, className, theme }) => {
  const imageRoot = `/images/assets/${theme}/header/webp/`;
  const layerStyles = getStyles(theme);
  const assetsManifest: AssetsManifestProps | null = getManifest(theme);
  const effectLayers = getEffectLayer(theme);
  const Logo = getLogo(theme);

  const el = useRef<HTMLDivElement>(null);
  const isWide = useMediaQuery('only screen and (min-width : 821px)');
  const isUltraWide = useMediaQuery('only screen and (min-width : 1700px)');
  const [isMediaQueryEvaluated, setIsMediaQueryEvaluated] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [playEffectLayer, setPlayEffectLayer] = useState<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<string[] | null>(null);
  const [isStickyButtonInView, setIsStickyButtonInView] = useState(true);
  const currentSize = useRef<string>(isUltraWide ? 'Desktop-XL' : isWide ? 'Desktop' : 'Mobile');

  const [assetData, setAssetData] = useState<{
    imagesSizes: string;
    assetPath: string;
  }>({
    imagesSizes: isUltraWide ? 'Desktop-XL' : isWide ? 'Desktop' : 'Mobile',
    assetPath: `${imageRoot}${isUltraWide ? 'Desktop-XL' : isWide ? 'Desktop' : 'Mobile'}`,
  });

  const toLoadImages = useMemo(
    () =>
      getImagesBySize(assetsManifest, assetData.imagesSizes)?.map(
        (image) => `${assetData.assetPath}/${image.file}`
      ),
    [assetData]
  );

  useIsomorphicLayoutEffect(() => {
    currentSize.current = isUltraWide ? 'Desktop-XL' : isWide ? 'Desktop' : 'Mobile';

    setAssetData({
      imagesSizes: currentSize.current,
      assetPath: `${imageRoot}${currentSize.current}`,
    });

    setIsMediaQueryEvaluated(true);
  }, [isWide, isUltraWide]);

  useInViewElement('[data-id="hide-newsletter-sticky-element"]', (isInView: boolean) => {
    setIsStickyButtonInView(isInView);
  });

  useTransitions(el, imagesLoaded, () => setPlayEffectLayer(true));

  useImageLoader({
    loadedCallback: (images) => {
      setImagesLoaded(images);
    },
    images: isMediaQueryEvaluated ? toLoadImages : [],
  });

  const imageLayer = (image: ManifestImage) => {
    const size = assetData.imagesSizes as keyof Sizes;

    if (image?.sizes?.[size]?.width) {
      return (
        <Image
          unoptimized={true}
          key={image.id}
          priority={true}
          src={`${assetData.assetPath}/${image.file}`}
          alt=""
          width={image.fill ? undefined : image.sizes[size]?.width}
          height={image.fill ? undefined : image.sizes[size]?.height}
          sizes={image.fill ? '100vw' : undefined}
          fill={image.fill}
          data-depth={image.depth}
          data-mobile-depth={image.mobileDepth}
          className={clsx(
            style.headerLayer,
            !image.standalone && layerStyles?.fullSizeLayer,
            `${layerStyles?.[image.id]}`,
            `js-${image.id}`,
            'js-scene-layer',
            image.fill && style.isFilled
          )}
        />
      );
    }

    return null;
  };

  return (
    <div ref={el} className={clsx(style.wrapper, className)}>
      <div
        className={clsx(
          style.header,
          layerStyles?.header,
          playEffectLayer && layerStyles?.isLoaded
        )}
      >
        <div className={clsx(style.headerWrapper, 'js-wrapper')}>
          <div className={clsx(style.scene, style.bgWrapper, 'js-scene')}>
            {isMediaQueryEvaluated && (
              <Image
                src={`${assetData.assetPath}/00_BG.webp`}
                alt=""
                unoptimized={true}
                onLoad={() => setBackgroundLoaded(true)}
                priority={true}
                width={
                  assetsManifest?.files.find((image) => image.id === 'bg')?.sizes[
                    currentSize.current as keyof Sizes
                  ]?.width
                }
                height={
                  assetsManifest?.files.find((image) => image.id === 'bg')?.sizes[
                    currentSize.current as keyof Sizes
                  ]?.height
                }
                className={clsx(
                  style.headerBackground,
                  backgroundLoaded && style.isBackgroundLoaded
                )}
              />
            )}

            <div className={style.sceneLayers}>
              {imagesLoaded && (
                <>
                  <div className={style.sky} />

                  <div className={layerStyles?.mobileBottomFill} />

                  {assetsManifest?.files.map((image) => (
                    <div className={style.layerWrapper} key={image.id}>
                      {imageLayer(image)}
                    </div>
                  ))}
                </>
              )}

              {effectLayers?.map((effectLayer) => (
                <div
                  key={effectLayer.id}
                  className={clsx(style.effectLayer, 'js-scene-layer effect-layer')}
                  data-depth={effectLayer.depth}
                >
                  {playEffectLayer && <>{<effectLayer.component />}</>}
                </div>
              ))}
            </div>

            <h1
              className={clsx(style.logo, 'js-logo', 'js-scene-layer')}
              data-fixed="true"
              data-depth="0.5"
            >
              <div className={clsx(style.logoImage)}>
                <Logo />
              </div>

              <Text as="span" field={title} className="visually-hidden" />
            </h1>
          </div>
        </div>
      </div>

      <div className={clsx(style.payoff)}>
        <div className={clsx(style.payoffInner, 'js-payoff')}>
          <Text
            aria-hidden="true"
            as="p"
            variant="bodyLarge"
            field={payOff}
            className={clsx(style.payoffText, 'js-payoff-text')}
          />
          <Text as="p" variant="bodyLarge" field={payOff} className={clsx('visually-hidden')} />

          <div className={clsx(style.isFixed, !isStickyButtonInView && style.isHidden)}>
            <Button field={buttonLink} className={clsx(style.button, 'js-button')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderParallaxAnimated;
