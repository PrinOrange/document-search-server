import { UTFCharSet } from "@/types/token.type";

/**
 * Splits a string into an array of individual characters.
 *
 * @param str - The string to be split into characters.
 * @returns An array where each element is a single character from the input string.
 */
export const stringToCharArray = (str: string): string[] => {
	return str.split("");
};

/**
 * Determines the Unicode character set region of a given character.
 *
 * This function takes a character and maps it to its corresponding Unicode block
 * based on known Unicode regions. If the character doesn't belong to a recognized
 * block, it returns `UTFCharSet.UNKNOWN`.
 *
 * @param char - A single Unicode character.
 * @returns - The corresponding `UTFCharSet` enum value.
 */
export function getUTFCharSet(char: string): UTFCharSet {
	const codePoint = char.codePointAt(0);

	if (codePoint !== undefined) {
		if (codePoint >= 0x0000 && codePoint <= 0x007f) {
			return UTFCharSet.Basic_Latin;
		}
		if (codePoint >= 0x0080 && codePoint <= 0x00ff) {
			return UTFCharSet.Latin_1_Supplement;
		}
		if (codePoint >= 0x0100 && codePoint <= 0x017f) {
			return UTFCharSet.Latin_Extended_A;
		}
		if (codePoint >= 0x0180 && codePoint <= 0x024f) {
			return UTFCharSet.Latin_Extended_B;
		}
		if (codePoint >= 0x0370 && codePoint <= 0x03ff) {
			return UTFCharSet.Greek_and_Coptic;
		}
		if (codePoint >= 0x0400 && codePoint <= 0x04ff) {
			return UTFCharSet.Cyrillic;
		}
		if (codePoint >= 0x0530 && codePoint <= 0x058f) {
			return UTFCharSet.Armenian;
		}
		if (codePoint >= 0x0590 && codePoint <= 0x05ff) {
			return UTFCharSet.Hebrew;
		}
		if (codePoint >= 0x0600 && codePoint <= 0x06ff) {
			return UTFCharSet.Arabic;
		}
		if (codePoint >= 0x0900 && codePoint <= 0x097f) {
			return UTFCharSet.Devanagari;
		}
		if (codePoint >= 0x0980 && codePoint <= 0x09ff) {
			return UTFCharSet.Bengali;
		}
		if (codePoint >= 0x0a00 && codePoint <= 0x0a7f) {
			return UTFCharSet.Gurmukhi;
		}
		if (codePoint >= 0x0a80 && codePoint <= 0x0aff) {
			return UTFCharSet.Gujarati;
		}
		if (codePoint >= 0x0b00 && codePoint <= 0x0b7f) {
			return UTFCharSet.Oriya;
		}
		if (codePoint >= 0x0b80 && codePoint <= 0x0bff) {
			return UTFCharSet.Tamil;
		}
		if (codePoint >= 0x0c00 && codePoint <= 0x0c7f) {
			return UTFCharSet.Telugu;
		}
		if (codePoint >= 0x0c80 && codePoint <= 0x0cff) {
			return UTFCharSet.Kannada;
		}
		if (codePoint >= 0x0d00 && codePoint <= 0x0d7f) {
			return UTFCharSet.Malayalam;
		}
		if (codePoint >= 0x0e00 && codePoint <= 0x0e7f) {
			return UTFCharSet.Thai;
		}
		if (codePoint >= 0x0e80 && codePoint <= 0x0eff) {
			return UTFCharSet.Lao;
		}
		if (codePoint >= 0x0f00 && codePoint <= 0x0fff) {
			return UTFCharSet.Tibetan;
		}
		if (codePoint >= 0x10a0 && codePoint <= 0x10ff) {
			return UTFCharSet.Georgian;
		}
		if (codePoint >= 0x1100 && codePoint <= 0x11ff) {
			return UTFCharSet.Hangul_Jamo;
		}
		if (codePoint >= 0x1e00 && codePoint <= 0x1eff) {
			return UTFCharSet.Latin_Extended_Additional;
		}
		if (codePoint >= 0x1f00 && codePoint <= 0x1fff) {
			return UTFCharSet.Greek_Extended;
		}
		if (codePoint >= 0x2000 && codePoint <= 0x206f) {
			return UTFCharSet.General_Punctuation;
		}
		if (codePoint >= 0x2070 && codePoint <= 0x209f) {
			return UTFCharSet.Superscripts_and_Subscripts;
		}
		if (codePoint >= 0x20a0 && codePoint <= 0x20cf) {
			return UTFCharSet.Currency_Symbols;
		}
		if (codePoint >= 0x20d0 && codePoint <= 0x20ff) {
			return UTFCharSet.Combining_Diacritical_Marks_for_Symbols;
		}
		if (codePoint >= 0x2100 && codePoint <= 0x214f) {
			return UTFCharSet.Letterlike_Symbols;
		}
		if (codePoint >= 0x2150 && codePoint <= 0x218f) {
			return UTFCharSet.Number_Forms;
		}
		if (codePoint >= 0x2190 && codePoint <= 0x21ff) {
			return UTFCharSet.Arrows;
		}
		if (codePoint >= 0x2200 && codePoint <= 0x22ff) {
			return UTFCharSet.Mathematical_Operators;
		}
		if (codePoint >= 0x2300 && codePoint <= 0x23ff) {
			return UTFCharSet.Miscellaneous_Technical;
		}
		if (codePoint >= 0x2400 && codePoint <= 0x243f) {
			return UTFCharSet.Control_Pictures;
		}
		if (codePoint >= 0x2440 && codePoint <= 0x245f) {
			return UTFCharSet.Optical_Character_Recognition;
		}
		if (codePoint >= 0x2460 && codePoint <= 0x24ff) {
			return UTFCharSet.Enclosed_Alphanumerics;
		}
		if (codePoint >= 0x2500 && codePoint <= 0x257f) {
			return UTFCharSet.Box_Drawing;
		}
		if (codePoint >= 0x2580 && codePoint <= 0x259f) {
			return UTFCharSet.Block_Elements;
		}
		if (codePoint >= 0x25a0 && codePoint <= 0x25ff) {
			return UTFCharSet.Geometric_Shapes;
		}
		if (codePoint >= 0x2600 && codePoint <= 0x26ff) {
			return UTFCharSet.Miscellaneous_Symbols;
		}
		if (codePoint >= 0x2700 && codePoint <= 0x27bf) {
			return UTFCharSet.Control_Pictures;
		}
		if (codePoint >= 0x2800 && codePoint <= 0x28ff) {
			return UTFCharSet.Dingbats;
		}
		if (codePoint >= 0x2e80 && codePoint <= 0x2eff) {
			return UTFCharSet.Braille_Patterns;
		}
		if (codePoint >= 0x2f00 && codePoint <= 0x2fdf) {
			return UTFCharSet.CJK_Radicals_Supplement;
		}
		if (codePoint >= 0x2ff0 && codePoint <= 0x2fff) {
			return UTFCharSet.Kangxi_Radicals;
		}
		if (codePoint >= 0x3000 && codePoint <= 0x303f) {
			return UTFCharSet.Ideographic_Description_Characters;
		}
		if (codePoint >= 0x3040 && codePoint <= 0x309f) {
			return UTFCharSet.CJK_Symbols_and_Punctuation;
		}
		if (codePoint >= 0x30a0 && codePoint <= 0x30ff) {
			return UTFCharSet.Hiragana;
		}
		if (codePoint >= 0x3100 && codePoint <= 0x312f) {
			return UTFCharSet.Katakana;
		}
		if (codePoint >= 0x3130 && codePoint <= 0x318f) {
			return UTFCharSet.Bopomofo;
		}
		if (codePoint >= 0x3190 && codePoint <= 0x319f) {
			return UTFCharSet.Hangul_Compatibility_Jamo;
		}
		if (codePoint >= 0x31a0 && codePoint <= 0x31bf) {
			return UTFCharSet.Kanbun;
		}
		if (codePoint >= 0x31c0 && codePoint <= 0x31ef) {
			return UTFCharSet.Bopomofo_Extended;
		}
		if (codePoint >= 0x31f0 && codePoint <= 0x31ff) {
			return UTFCharSet.CJK_Strokes;
		}
		if (codePoint >= 0x3200 && codePoint <= 0x32ff) {
			return UTFCharSet.Katakana_Phonetic_Extensions;
		}
		if (codePoint >= 0x3300 && codePoint <= 0x33ff) {
			return UTFCharSet.Enclosed_CJK_Letters_and_Months;
		}
		if (codePoint >= 0x3400 && codePoint <= 0x4dbf) {
			return UTFCharSet.CJK_Compatibility;
		}
		if (codePoint >= 0x4dc0 && codePoint <= 0x4dff) {
			return UTFCharSet.CJK_Unified_Ideographs_Extension_A;
		}
		if (codePoint >= 0x4e00 && codePoint <= 0x9fff) {
			return UTFCharSet.Yijing_Hexagram_Symbols;
		}
		if (codePoint >= 0xa000 && codePoint <= 0xa48f) {
			return UTFCharSet.CJK_Unified_Ideographs;
		}
		if (codePoint >= 0xa490 && codePoint <= 0xa4cf) {
			return UTFCharSet.Yi_Syllables;
		}
		if (codePoint >= 0xac00 && codePoint <= 0xd7af) {
			return UTFCharSet.Yi_Radicals;
		}
		if (codePoint >= 0xd800 && codePoint <= 0xdb7f) {
			return UTFCharSet.Hangul_Syllables;
		}
		if (codePoint >= 0xdb80 && codePoint <= 0xdbff) {
			return UTFCharSet.High_Surrogates;
		}
		if (codePoint >= 0xdc00 && codePoint <= 0xdfff) {
			return UTFCharSet.High_Private_Use_Surrogates;
		}
		if (codePoint >= 0xe000 && codePoint <= 0xf8ff) {
			return UTFCharSet.Low_Surrogates;
		}
		if (codePoint >= 0xf900 && codePoint <= 0xfaff) {
			return UTFCharSet.Private_Use_Area;
		}
		if (codePoint >= 0xfb00 && codePoint <= 0xfb4f) {
			return UTFCharSet.CJK_Compatibility_Ideographs;
		}
		if (codePoint >= 0xfb50 && codePoint <= 0xfdff) {
			return UTFCharSet.Arabic_Presentation_Forms_A;
		}
		if (codePoint >= 0xfe00 && codePoint <= 0xfe0f) {
			return UTFCharSet.Variation_Selectors;
		}
		if (codePoint >= 0xfe10 && codePoint <= 0xfe1f) {
			return UTFCharSet.Vertical_Forms;
		}
		if (codePoint >= 0xfe20 && codePoint <= 0xfe2f) {
			return UTFCharSet.Combining_Half_Marks;
		}
		if (codePoint >= 0xfe30 && codePoint <= 0xfe4f) {
			return UTFCharSet.CJK_Compatibility_Forms;
		}
		if (codePoint >= 0xfe50 && codePoint <= 0xfe6f) {
			return UTFCharSet.Small_Form_Variants;
		}
		if (codePoint >= 0xfe70 && codePoint <= 0xfeff) {
			return UTFCharSet.Arabic_Presentation_Forms_B;
		}
		if (codePoint >= 0xff00 && codePoint <= 0xffef) {
			return UTFCharSet.Halfwidth_and_Fullwidth_Forms;
		}
		if (codePoint >= 0xfff0 && codePoint <= 0xffff) {
			return UTFCharSet.Specials;
		}
		return UTFCharSet.Unknown;
	} else {
		return UTFCharSet.Unknown;
	}
}
