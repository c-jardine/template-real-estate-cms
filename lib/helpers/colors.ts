import { RgbColor, RgbColorPalette, RgbColorProps } from '../../src/types';

/**
 * Generate a tint of the provided RGB color and tint factor.
 * @param rgb An object representing an RGB color. The basic formula used
 * internally is: Math.round({param} + (255 - {param}) * {tintFactor}).
 * @param tintFactor The tint factor to be applied to the color. A higher
 * number results in a lighter tint.
 * @returns {RgbColor} A string representing the tinted color in the form of'rgb(r,g,b)'.
 */
export const generateTint = (
  rgb: RgbColorProps,
  tintFactor: number
): RgbColor => {
  const tint = {
    r: Math.round(rgb.r + (255 - rgb.r) * tintFactor),
    g: Math.round(rgb.g + (255 - rgb.g) * tintFactor),
    b: Math.round(rgb.b + (255 - rgb.b) * tintFactor),
  };
  return `rgb(${tint.r}, ${tint.g}, ${tint.b})`;
};

/**
 * Generate a shade of the provided RGB color and shade factor.
 * @param rgb An object representing an RGB color. The basic formula used
 * internally is: Math.round({param} * {shadeFactor}).
 * @param shadeFactor The shade factor to be applied to the color. A smaller
 * number results in a darker shade.
 * @returns {RgbColor} A string representing the shaded color in the form of'rgb(r,g,b)'.
 */
export const generateShade = (
  rgb: RgbColorProps,
  shadeFactor: number
): RgbColor => {
  const shade = {
    r: Math.round(rgb.r * shadeFactor),
    g: Math.round(rgb.g * shadeFactor),
    b: Math.round(rgb.b * shadeFactor),
  };
  return `rgb(${shade.r}, ${shade.g}, ${shade.b})`;
};

/**
 * Generate a color palette from 50 to 900 from a provided RGB color object.
 * @param rgb An object representing an RGB color.
 * @returns {RgbColorPalette} An object containing tints and shades of the provided color. The
 * provided color remains unchanged and is at key 500. Keys 50 to 400 contain
 * tints, while keys 600 to 900 contain shades.
 */
export const generatePalette = (rgb: RgbColorProps): RgbColorPalette => {
  return {
    50: generateTint(rgb, 0.9),
    100: generateTint(rgb, 0.8),
    200: generateTint(rgb, 0.7),
    300: generateTint(rgb, 0.6),
    400: generateTint(rgb, 0.5),
    500: generateShade(rgb, 1),
    600: generateShade(rgb, 0.9),
    700: generateShade(rgb, 0.8),
    800: generateShade(rgb, 0.7),
    900: generateShade(rgb, 0.6),
  };
};
