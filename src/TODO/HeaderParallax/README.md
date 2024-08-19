# Header Parallax Workflow

## Overview

The Header Parallax workflow offers a customizable component featuring a base parallax effect with animations. This guide walks you through the steps to customize it.

## Structure

The `HeaderParallax` component handles base functionalities such as animations, parallax effects on scroll, and asset loading. Headers consist of multiple layers, defined in the `manifest.json` file. This manifest also guides the asset loader.

### Manifest Structure

```json
{
  "id": "bg",                   // Unique ID for the layer
  "file": "01_BG.webp",         // Asset file name, should match actual file name
  "standalone": true,           // Indicates if layer has its own dimensions and is positioned separately
  "fill": false,                // Specifies if image fills the screen's entire width and height
  "sizes": {
    "Desktop": {                // Natural width and height of the image for Desktop
      "width": 1740,
      "height": 960
    },
    ...
  }
}
```

## Layer Positioning

- **Main Focus Element**: The central element used for positioning the layer, which could be an image or any other component. All layers share the same positioning attributes, and their dimensions are consistent.

## Stacking Transparent PNGs for Uniform Scaling

### Overview

In this setup, we are utilizing a series of transparent PNG images that are all of the same size and are stacked directly on top of each other. This is achieved using absolute positioning, ensuring that each image starts from the exact same position.

### Key Features:

1. **Uniform Size**: All PNG images are of the same dimensions. This ensures that the images align perfectly when stacked.

2. **Absolute Positioning**: The images are positioned using the CSS `position: absolute` property, ensuring that they overlap perfectly. By doing this, every image starts from the same top, left position.

3. **Movement Within Transparent Space**: Even though the images are stacked, the primary content of each image can be uniquely positioned within its transparent space. This allows for flexibility in terms of content placement without affecting the stack order or the scaling behavior.

4. **Uniform Scaling**: Because all the images are of the same size and positioned in the same place, when we resize they all scale in a uniform manner. This ensures that the relative positioning and appearance of the stacked images remain consistent across different scale levels.

- **Standalone Elements**: These have unique dimensions and are positioned using CSS, independent of the main focus elements.

## Setting Up a New Header Parallax

### 1. Prepare Assets

Obtain layer assets for Desktop, Mobile, and Desktop-XL. Identify the main element to position the layers.

### 2. Generate the `manifest.json`

- Place PNG assets in the correct folders: `mach-website/src/frontend/libs/script-helpers/asset-manifest-generator/input` (categorized by Desktop, Mobile, Desktop-XL).
- Navigate to the `asset-manifest-generator` root:
  - Run `npm i`.
  - Execute `node index.js` to generate the `manifest.json`.
- Transfer the generated files:
  - Move assets to `mach-website/src/frontend/apps/web/public/images/assets/-NEW-THEME-/header`.
  - Copy `manifest.json` to `mach-website/src/frontend/libs/ui/src/organisms/HeaderParallax/assets/manifests/-NEW-THEME-.json`.

### 3. Style the Layers

- Create a new style module: `mach-website/src/frontend/libs/ui/src/organisms/HeaderParallax/assets/styles/-NEW THEME-/-NEW-THEME-.module.css`.
- Ensure all main items are uniformly positioned. Positioning should be managed within the image itself (use Photoshop for this, each of the files have the same width and height).

### 4. Implement Effect Layers

- These are additional components layered on top of the header.
- Design your Effect layers in `mach-website/src/frontend/libs/ui/src/organisms/HeaderParallax/assets/EffectLayers/-NEW-THEME-/-EFFECT-NAME-`.

### 5. Integrate Theme in Asset Helper

- Modify `mach-website/src/frontend/libs/ui/src/organisms/HeaderParallax/HeaderParallaxAnimated/assetHelper.ts`:

  - Import the manifest and style module.
  - Incorporate dynamic imports for effect layers.
  - Add the theme name to `VALID_THEMES`.
  - Update `assetsMap` with the new theme details.
    Example:

  ```ts
  export const VALID_THEMES = ['grand-hotel', 'efteling-hotel'] as const;
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
    {
      id: 'efteling-hotel',
      manifest: manifestEftelingHotel,
      style: stylesEftelingHotel,
      logo: LogoEftelingHotel,
      effectLayers: [
        {
          id: 'efteling-hotel-front',
          depth: 0.5,
          component: EftelingHotelEffect,
        },
      ],
    },
  ];
  ```

### 6. Optimize Assets

- Validate asset positioning and ensure transparent PNGs are accurate.
- Place assets in `mach-website/src/frontend/libs/script-helpers/webp-converter/input` (grouped by Desktop, Mobile, Desktop-XL).
- In the `webp-converter` root:
  - Run `npm i`.
  - Execute `npm start` to initiate the webp converter.
- Replace the assets folder.
- Change the extension in the `manifest.json` to `.webp`.
- Remove files from input folder.

```

```
