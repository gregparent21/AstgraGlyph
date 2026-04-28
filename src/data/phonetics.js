export const phonetics = [
  // Vowels
  {
    id: "a",
    sound: "A",
    category: "vowel",
    image: "/glyphs/phonetics/vowels/a.svg",
    example: "Astra",
    description: "Open vowel sound."
  },
  {
    id: "e",
    sound: "E",
    category: "vowel",
    image: "/glyphs/phonetics/vowels/e.svg",
    example: "Earth",
    description: "Front vowel sound."
  },
  {
    id: "i",
    sound: "I",
    category: "vowel",
    image: "/glyphs/phonetics/vowels/i.svg",
    example: "Signal",
    description: "Short vowel sound."
  },
  {
    id: "o",
    sound: "O",
    category: "vowel",
    image: "/glyphs/phonetics/vowels/o.svg",
    example: "Orbit",
    description: "Rounded vowel sound."
  },
  {
    id: "u",
    sound: "U",
    category: "vowel",
    image: "/glyphs/phonetics/vowels/u.svg",
    example: "Luna",
    description: "Back vowel sound."
  },
  {
    id: "ai",
    sound: "AI",
    category: "vowel",
    image: "/glyphs/phonetics/vowels/ai.svg",
    example: "AI",
    description: "Vowel blend used in words like AI and astral."
  },

  // Consonants
  ...[
    ["b", "B"],
    ["d", "D"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["k", "K"],
    ["l", "L"],
    ["m", "M"],
    ["n", "N"],
    ["p", "P"],
    ["r", "R"],
    ["s", "S"],
    ["t", "T"],
    ["v", "V"],
    ["w", "W"],
    ["y", "Y"],
    ["z", "Z"]
  ].map(([id, sound]) => ({
    id,
    sound,
    category: "consonant",
    image: `/glyphs/phonetics/consonants/${id}.svg`,
    example: sound,
    description: "Consonant symbol."
  })),

  // Blends
  {
    id: "sh",
    sound: "SH",
    category: "blend",
    image: "/glyphs/phonetics/blends/sh.svg",
    example: "ship",
    description: "Blended sound used in words like ship and shield."
  },
  {
    id: "ch",
    sound: "CH",
    category: "blend",
    image: "/glyphs/phonetics/blends/ch.svg",
    example: "channel",
    description: "Blended sound used in words like channel."
  },
  {
    id: "th",
    sound: "TH",
    category: "blend",
    image: "/glyphs/phonetics/blends/th.svg",
    example: "threat",
    description: "Blended sound used in words like threat."
  },
  {
    id: "st",
    sound: "ST",
    category: "blend",
    image: "/glyphs/phonetics/blends/st.svg",
    example: "astra",
    description: "Blend used in words like astra and station."
  },
  {
    id: "tr",
    sound: "TR",
    category: "blend",
    image: "/glyphs/phonetics/blends/tr.svg",
    example: "terraform",
    description: "Blend used in words like terraform."
  },
  {
    id: "qu",
    sound: "QU",
    category: "blend",
    image: "/glyphs/phonetics/blends/qu.svg",
    example: "quantum",
    description: "Blend used in words like quantum."
  }
];

