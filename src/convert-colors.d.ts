declare module "@csstools/convert-colors" {
  export const hex2rgb: (hex: string) => [number, nunmber, number];
  export const hex2lch: (hex: string) => [number, number, number];
  export const hex2hsl: (hex: string) => [number, number, number];
  export const hsl2hex: (h: number, s: number, l: number) => string;
  export const hsl2rgb: (h: number, s: number, l: number) => [number, number, number];
  export const lch2hex: (l: number, c: number, h: number) => string;
  export const lch2rgb: (l: number, c: number, h: number) => [number, number, number];
  export const rgb2hex: (r: number, g: number, b: number) => string;
}
