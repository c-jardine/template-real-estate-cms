import { RgbColor, RgbColorPalette, RgbColorProps } from '../../src/types';

/**
 * Generate a tint of the provided RGB color and tint factor. Internally, the
 * following formula is used:
 * ```ts
 * Math.round(rgb.param + (255 - rgb.param) * tintFactor)
 * ```
 * @param rgb - An object representing an RGB color.
 * @param tintFactor - The tint factor to be applied to the color. A higher
 * number results in a lighter tint.
 * @returns A string representing the tinted color in the form of 'rgb(r,g,b)'.
 * @example
 * ```ts
 * const tintedIndigo = generateTint({ r: 79, g: 70, b: 229 }, 0.7);
 * console.log(tintedIndigo);
 * // 'rgb(202, 200, 247)'
 * ```
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
 * Generate a shade of the provided RGB color and shade factor. Internally, the
 * following formula is used:
 * ```ts
 * Math.round(rgb.param * shadeFactor)
 * ```
 * @param rgb - An object representing an RGB color.
 * @param shadeFactor - The shade factor to be applied to the color. A lower
 * number results in a darker.
 * @returns A string representing the shaded color in the form of'rgb(r,g,b)'.
 * @example
 * ```ts
 * const shadedIndigo = generateShade({ r: 79, g: 70, b: 229 }, 0.4);
 * console.log(shadedIndigo);
 * // 'rgb(32, 28, 92)'
 * ```
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
 * @param rgb - An object representing an RGB color.
 * @returns An object containing tints and shades of the provided color. The
 * provided color remains unchanged and is at key 500. Keys 50 to 400 contain
 * tints, while keys 600 to 900 contain shades.
 * @example
 * ```ts
 * const indigoPalette = generatePalette({ r: 79, g: 70, b: 229 });
 * console.log(indigoPalette);
 * // {
 * //   50: 'rgb(237, 237, 252)',
 * //   100: 'rgb(220, 218, 250)',
 * //   200: 'rgb(202, 200, 247)',
 * //   300: 'rgb(185, 181, 245)',
 * //   400: 'rgb(167, 163, 242)',
 * //   500: 'rgb(79, 70, 229)',
 * //   600: 'rgb(71, 63, 206)',
 * //   700: 'rgb(63, 56, 183)',
 * //   800: 'rgb(55, 49, 160)',
 * //   900: 'rgb(47, 42, 137)'
 * // }
 * ```
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
