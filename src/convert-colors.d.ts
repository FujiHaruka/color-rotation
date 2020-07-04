declare module "@csstools/convert-colors" {
  export const hex2rgb: (hex: string) => [number, nunmber, number];
  export const hex2lch: (hex: string) => [number, number, number];
}
