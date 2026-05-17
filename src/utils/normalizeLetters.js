const VOWELS_BEFORE_S = new Set(["e", "i", "y"]);

/**
 * Map English letters without direct AstraGlyph glyphs (C, J, Q, X)
 * onto the existing phonetic inventory before phoneticization.
 */
export function normalizeLetters(word) {
  const w = word.toLowerCase();
  let result = "";

  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const next = w[i + 1] || "";

    if (ch === "c") {
      if (next === "h") {
        result += "ch";
        i += 1;
      } else if (VOWELS_BEFORE_S.has(next)) {
        result += "s";
      } else {
        result += "k";
      }
    } else if (ch === "j") {
      result += "dch";
    } else if (ch === "q") {
      if (next === "u") {
        result += "qu";
        i += 1;
      } else {
        result += "k";
      }
    } else if (ch === "x") {
      result += i === 0 ? "z" : "ks";
    } else {
      result += ch;
    }
  }

  return result;
}
