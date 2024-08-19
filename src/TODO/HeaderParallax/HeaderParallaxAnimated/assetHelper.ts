import React from 'react';
import dynamic from 'next/dynamic';
import { HeaderThemes } from '../HeaderParallaxAnimated/HeaderParallaxAnimated';

import manifestGrandHotel from './../assets/manifests/grand-hotel/filesManifest.json';
import stylesGrandHotel from './../assets/styles/grand-hotel/grandHotel.module.css';

export interface ImageSize {
  width: number;
  height: number;
}

export interface Sizes {
  Desktop?: ImageSize;
  Mobile?: ImageSize;
  'Desktop-XL'?: ImageSize;
}

export interface ManifestImage {
  id: string;
  file: string;
  depth?: number;
  mobileDepth?: number;
  standalone?: boolean;
  fill?: boolean;
  sizes: Sizes;
}
export interface AssetsManifestProps {
  files: ManifestImage[];
}

interface EffectLayer {
  id: string;
  depth: number;
  component: React.ComponentType;
}

const GrandHotelEffect = dynamic(
  () =>
    import(
      '@efteling-frontend/ui/organisms/HeaderParallax/assets/EffectLayers/grand-hotel/front/GrandHotelEffectLayer'
    ),
  {
    ssr: false,
  }
);
const GrandHotelEffectLayerStars = dynamic(
  () =>
    import(
      '@efteling-frontend/ui/organisms/HeaderParallax/assets/EffectLayers/grand-hotel/stars/GrandHotelEffectLayerStars'
    ),
  {
    ssr: false,
  }
);
const LogoGrandHotel = dynamic(
  () => import('@efteling-frontend/ui/atoms/LogoGrandHotel/LogoGrandHotel'),
  {
    ssr: false,
  }
);
export const VALID_THEMES = ['grand-hotel'] as const;
const assetsMap = [
  {
    id: 'grand-hotel',
    manifest: manifestGrandHotel,
    style: stylesGrandHotel,
    logo: LogoGrandHotel,
    effectLayers: [
      {
        id: 'grand-hotel-front',
        depth: 0.5,
        component: GrandHotelEffect,
      },
      {
        id: 'grand-hotel-stars',
        depth: 0,
        component: GrandHotelEffectLayerStars,
      },
    ],
  },
];

const getItemById = (id: string) => assetsMap.find((item) => item.id === id);

export const getStyles = (theme: HeaderThemes) => getItemById(theme)?.style;

export const getManifest = (theme: HeaderThemes): AssetsManifestProps | null =>
  getItemById(theme)?.manifest as AssetsManifestProps;

export const getLogo = (theme: HeaderThemes): any => getItemById(theme)?.logo;

export const getEffectLayer = (theme: HeaderThemes): EffectLayer[] | null =>
  getItemById(theme)?.effectLayers as EffectLayer[];

export const getImagesBySize = (
  assetsManifest: AssetsManifestProps | null,
  imageSize: string
): ManifestImage[] =>
  assetsManifest?.files.filter((f) => Object.keys(f.sizes).includes(imageSize)) ?? [];
