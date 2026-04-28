import { logograms } from "../data/logograms.js";
import { phonetics } from "../data/phonetics.js";
import { BLEND_ORDER } from "../data/translatorRules.js";
import { tokenize } from "./tokenize.js";

function buildLogogramIndex() {
  const keywordToLogogram = new Map();
  for (const lg of logograms) {
    for (const kw of lg.keywords) {
      keywordToLogogram.set(String(kw).toLowerCase(), lg);
    }
  }
  return keywordToLogogram;
}

function buildPhoneticIndex() {
  const idToPhonetic = new Map();
  for (const ph of phonetics) idToPhonetic.set(ph.id, ph);
  return idToPhonetic;
}

const keywordToLogogram = buildLogogramIndex();
const idToPhonetic = buildPhoneticIndex();

function phoneticizeWord(word) {
  const tokens = [];
  let i = 0;

  while (i < word.length) {
    const rest = word.slice(i);

    let match = null;
    for (const blend of BLEND_ORDER) {
      if (rest.startsWith(blend)) {
        match = blend;
        break;
      }
    }

    if (!match) {
      const ch = rest[0];
      if (/[a-z]/.test(ch)) match = ch;
    }

    if (!match) {
      // Skip any unexpected character (e.g. digits) rather than looping forever.
      i += 1;
      continue;
    }

    const ph = idToPhonetic.get(match);
    if (ph) {
      tokens.push({
        type: "phonetic",
        id: ph.id,
        label: ph.sound,
        image: ph.image,
        gloss: ph.sound,
        sourceWord: word
      });
    } else {
      tokens.push({
        type: "phonetic",
        id: match,
        label: match.toUpperCase(),
        image: null,
        gloss: match.toUpperCase(),
        sourceWord: word
      });
    }

    i += match.length;
  }

  if (tokens.length === 0) {
    return [
      {
        type: "phonetic",
        id: "unknown",
        label: word,
        image: null,
        gloss: word.toUpperCase(),
        sourceWord: word
      }
    ];
  }

  return tokens;
}

export function translateToAstraGlyph(input) {
  const words = tokenize(input);
  const out = [];

  for (const w of words) {
    const lg = keywordToLogogram.get(w);
    if (lg) {
      out.push({
        type: "logogram",
        id: lg.id,
        label: lg.label,
        image: lg.image,
        gloss: lg.gloss,
        sourceWord: w
      });
      continue;
    }

    out.push(...phoneticizeWord(w));
  }

  return out;
}

