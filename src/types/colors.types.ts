/**
 * Interface representing an RGB color in object form.
 */
export interface RgbColorProps {
  r: number;
  b: number;
  g: number;
}

/**
 * String pattern type for basic RGB color.
 */
export type RgbColor = `rgb(${number}, ${number}, ${number})`;

/**
 * Representation of a color palette that can be used in theming.
 */
export type RgbColorPalette = {
  50: RgbColor;
  100: RgbColor;
  200: RgbColor;
  300: RgbColor;
  400: RgbColor;
  500: RgbColor;
  600: RgbColor;
  700: RgbColor;
  800: RgbColor;
  900: RgbColor;
};
