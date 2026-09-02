/** Copy still awaiting real words is written as "TODO — ...". */
export const isTodo = (s: string): boolean => s.trimStart().startsWith('TODO');

/**
 * Splits a heading on {braced} runs so they can be rendered in the accent
 * colour: "Come home to the {quiet}" → [{quiet:false,…},{quiet:true,…}].
 */
export function emphasise(s: string): { text: string; mark: boolean }[] {
  return s
    .split(/(\{[^}]*\})/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('{') && part.endsWith('}')
        ? { text: part.slice(1, -1), mark: true }
        : { text: part, mark: false },
    );
}
