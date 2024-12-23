/**
 * Unicode Character Set Ranges.
 * Represents various character sets defined in Unicode.
 */
export enum UTFCharSet {
	/**
	 * Basic Latin: U+0000–U+007F
	 * Includes standard English letters, digits, and basic symbols.
	 */
	Basic_Latin,

	/**
	 * Latin-1 Supplement: U+0080–U+00FF
	 * Contains additional Latin characters and symbols.
	 */
	Latin_1_Supplement,

	/**
	 * Latin Extended-A: U+0100–U+017F
	 * Includes extended Latin characters for various languages.
	 */
	Latin_Extended_A,

	/**
	 * Latin Extended-B: U+0180–U+024F
	 * Additional extended Latin characters.
	 */
	Latin_Extended_B,

	/**
	 * Greek and Coptic: U+0370–U+03FF
	 * Characters for Greek and Coptic scripts.
	 */
	Greek_and_Coptic,

	/**
	 * Cyrillic: U+0400–U+04FF
	 * Characters used in Slavic and other languages.
	 */
	Cyrillic,

	/**
	 * Armenian: U+0530–U+058F
	 * Characters used in the Armenian script.
	 */
	Armenian,

	/**
	 * Hebrew: U+0590–U+05FF
	 * Characters used in the Hebrew script.
	 */
	Hebrew,

	/**
	 * Arabic: U+0600–U+06FF
	 * Characters used in the Arabic script.
	 */
	Arabic,

	/**
	 * Devanagari: U+0900–U+097F
	 * Characters used in the Devanagari script (e.g., Hindi, Sanskrit).
	 */
	Devanagari,

	/**
	 * Bengali: U+0980–U+09FF
	 * Characters used in the Bengali script.
	 */
	Bengali,

	/**
	 * Gurmukhi: U+0A00–U+0A7F
	 * Characters used in the Gurmukhi script (e.g., Punjabi).
	 */
	Gurmukhi,

	/**
	 * Gujarati: U+0A80–U+0AFF
	 * Characters used in the Gujarati script.
	 */
	Gujarati,

	/**
	 * Oriya: U+0B00–U+0B7F
	 * Characters used in the Oriya script.
	 */
	Oriya,

	/**
	 * Tamil: U+0B80–U+0BFF
	 * Characters used in the Tamil script.
	 */
	Tamil,

	/**
	 * Telugu: U+0C00–U+0C7F
	 * Characters used in the Telugu script.
	 */
	Telugu,

	/**
	 * Kannada: U+0C80–U+0CFF
	 * Characters used in the Kannada script.
	 */
	Kannada,

	/**
	 * Malayalam: U+0D00–U+0D7F
	 * Characters used in the Malayalam script.
	 */
	Malayalam,

	/**
	 * Thai: U+0E00–U+0E7F
	 * Characters used in the Thai script.
	 */
	Thai,

	/**
	 * Lao: U+0E80–U+0EFF
	 * Characters used in the Lao script.
	 */
	Lao,

	/**
	 * Tibetan: U+0F00–U+0FFF
	 * Characters used in the Tibetan script.
	 */
	Tibetan,

	/**
	 * Georgian: U+10A0–U+10FF
	 * Characters used in the Georgian script.
	 */
	Georgian,

	/**
	 * Hangul Jamo: U+1100–U+11FF
	 * Components used in Hangul syllable blocks.
	 */
	Hangul_Jamo,

	/**
	 * Latin Extended Additional: U+1E00–U+1EFF
	 * More Latin characters.
	 */
	Latin_Extended_Additional,

	/**
	 * Greek Extended: U+1F00–U+1FFF
	 * Additional Greek characters.
	 */
	Greek_Extended,

	/**
	 * General Punctuation: U+2000–U+206F
	 * Common punctuation marks.
	 */
	General_Punctuation,

	/**
	 * Superscripts and Subscripts: U+2070–U+209F
	 * Superscript and subscript characters.
	 */
	Superscripts_and_Subscripts,

	/**
	 * Currency Symbols: U+20A0–U+20CF
	 * Symbols for various currencies.
	 */
	Currency_Symbols,

	/**
	 * Combining Diacritical Marks for Symbols: U+20D0–U+20FF
	 * Marks applied to symbols and letters.
	 */
	Combining_Diacritical_Marks_for_Symbols,

	/**
	 * Letterlike Symbols: U+2100–U+214F
	 * Symbols resembling letters.
	 */
	Letterlike_Symbols,

	/**
	 * Number Forms: U+2150–U+218F
	 * Special numeric symbols.
	 */
	Number_Forms,

	/**
	 * Arrows: U+2190–U+21FF
	 * Various arrow symbols.
	 */
	Arrows,

	/**
	 * Mathematical Operators: U+2200–U+22FF
	 * Symbols used in mathematics.
	 */
	Mathematical_Operators,

	/**
	 * Miscellaneous Technical: U+2300–U+23FF
	 * Symbols for technical applications.
	 */
	Miscellaneous_Technical,

	/**
	 * Control Pictures: U+2400–U+243F
	 * Symbols representing control characters.
	 */
	Control_Pictures,

	/**
	 * Optical Character Recognition: U+2440–U+245F
	 * Characters for OCR.
	 */
	Optical_Character_Recognition,

	/**
	 * Enclosed Alphanumerics: U+2460–U+24FF
	 * Numbers and letters in enclosed shapes.
	 */
	Enclosed_Alphanumerics,

	/**
	 * Box Drawing: U+2500–U+257F
	 * Box and line-drawing characters.
	 */
	Box_Drawing,

	/**
	 * Block Elements: U+2580–U+259F
	 * Characters for block patterns.
	 */
	Block_Elements,

	/**
	 * Geometric Shapes: U+25A0–U+25FF
	 * Characters for geometric shapes.
	 */
	Geometric_Shapes,

	/**
	 * Miscellaneous Symbols: U+2600–U+26FF
	 * Various miscellaneous symbols.
	 */
	Miscellaneous_Symbols,

	/**
	 * Dingbats: U+2700–U+27BF
	 * Decorative symbols and ornaments.
	 */
	Dingbats,

	/**
	 * Braille Patterns: U+2800–U+28FF
	 * Braille characters for visually impaired readers.
	 */
	Braille_Patterns,

	/**
	 * CJK Radicals Supplement: U+2E80–U+2EFF
	 * Additional CJK radicals.
	 */
	CJK_Radicals_Supplement,

	/**
	 * Kangxi Radicals: U+2F00–U+2FDF
	 * Characters used in Kangxi dictionary.
	 */
	Kangxi_Radicals,

	/**
	 * Ideographic Description Characters: U+2FF0–U+2FFF
	 * Used to describe CJK ideographs.
	 */
	Ideographic_Description_Characters,

	/**
	 * CJK Symbols and Punctuation: U+3000–U+303F
	 * Punctuation marks for CJK scripts.
	 */
	CJK_Symbols_and_Punctuation,

	/**
	 * Hiragana: U+3040–U+309F
	 * Japanese Hiragana characters.
	 */
	Hiragana,

	/**
	 * Katakana: U+30A0–U+30FF
	 * Japanese Katakana characters.
	 */
	Katakana,

	/**
	 * Bopomofo: U+3100–U+312F
	 * Phonetic characters used in Chinese.
	 */
	Bopomofo,

	/**
	 * Hangul Compatibility Jamo: U+3130–U+318F
	 * Compatibility forms of Hangul Jamo.
	 */
	Hangul_Compatibility_Jamo,

	/**
	 * Kanbun: U+3190–U+319F
	 * Annotation marks used in classical Chinese texts.
	 */
	Kanbun,

	/**
	 * Bopomofo Extended: U+31A0–U+31BF
	 * Extended set of Bopomofo characters.
	 */
	Bopomofo_Extended,

	/**
	 * CJK Strokes: U+31C0–U+31EF
	 * Additional strokes used in CJK characters.
	 */
	CJK_Strokes,

	/**
	 * Katakana Phonetic Extensions: U+31F0–U+31FF
	 * Extended Katakana phonetic characters.
	 */
	Katakana_Phonetic_Extensions,

	/**
	 * Enclosed CJK Letters and Months: U+3200–U+32FF
	 * Encircled CJK letters and months.
	 */
	Enclosed_CJK_Letters_and_Months,

	/**
	 * CJK Compatibility: U+3300–U+33FF
	 * Compatibility CJK characters.
	 */
	CJK_Compatibility,

	/**
	 * CJK Unified Ideographs Extension A: U+3400–U+4DBF
	 * Extension A set of unified CJK ideographs.
	 */
	CJK_Unified_Ideographs_Extension_A,

	/**
	 * Yijing Hexagram Symbols: U+4DC0–U+4DFF
	 * Symbols for the I Ching (Book of Changes).
	 */
	Yijing_Hexagram_Symbols,

	/**
	 * CJK Unified Ideographs: U+4E00–U+9FFF
	 * Common CJK ideographs.
	 */
	CJK_Unified_Ideographs,

	/**
	 * Yi Syllables: U+A000–U+A48F
	 * Characters for the Yi script.
	 */
	Yi_Syllables,

	/**
	 * Yi Radicals: U+A490–U+A4CF
	 * Radicals used in the Yi script.
	 */
	Yi_Radicals,

	/**
	 * Hangul Syllables: U+AC00–U+D7AF
	 * Hangul syllable blocks.
	 */
	Hangul_Syllables,

	/**
	 * High Surrogates: U+D800–U+DB7F
	 * High surrogate code units for UTF-16.
	 */
	High_Surrogates,

	/**
	 * High Private Use Surrogates: U+DB80–U+DBFF
	 * High surrogate code units for private use.
	 */
	High_Private_Use_Surrogates,

	/**
	 * Low Surrogates: U+DC00–U+DFFF
	 * Low surrogate code units for UTF-16.
	 */
	Low_Surrogates,

	/**
	 * Private Use Area: U+E000–U+F8FF
	 * Code points reserved for private use.
	 */
	Private_Use_Area,

	/**
	 * CJK Compatibility Ideographs: U+F900–U+FAFF
	 * Compatibility forms of CJK ideographs.
	 */
	CJK_Compatibility_Ideographs,

	/**
	 * Alphabetic Presentation Forms: U+FB00–U+FB4F
	 * Presentation forms of alphabetic characters.
	 */
	Alphabetic_Presentation_Forms,

	/**
	 * Arabic Presentation Forms-A: U+FB50–U+FDFF
	 * Presentation forms of Arabic characters.
	 */
	Arabic_Presentation_Forms_A,

	/**
	 * Variation Selectors: U+FE00–U+FE0F
	 * Selectors for character variations.
	 */
	Variation_Selectors,

	/**
	 * Vertical Forms: U+FE10–U+FE1F
	 * Characters for vertical text layout.
	 */
	Vertical_Forms,

	/**
	 * Combining Half Marks: U+FE20–U+FE2F
	 * Half marks for combining characters.
	 */
	Combining_Half_Marks,

	/**
	 * CJK Compatibility Forms: U+FE30–U+FE4F
	 * Compatibility forms of CJK characters.
	 */
	CJK_Compatibility_Forms,

	/**
	 * Small Form Variants: U+FE50–U+FE6F
	 * Small-sized variants of characters.
	 */
	Small_Form_Variants,

	/**
	 * Arabic Presentation Forms-B: U+FE70–U+FEFF
	 * Additional Arabic presentation forms.
	 */
	Arabic_Presentation_Forms_B,

	/**
	 * Halfwidth and Fullwidth Forms: U+FF00–U+FFEF
	 * Halfwidth and fullwidth variants of characters.
	 */
	Halfwidth_and_Fullwidth_Forms,

	/**
	 * Specials: U+FFF0–U+FFFF
	 * Special-purpose characters.
	 */
	Specials,

	/**
	 * Unknown: U+???? (default fallback)
	 * Represents characters outside recognized ranges.
	 */
	Unknown,
}

/**
 * @enum Language
 * @description Represents different languages and their respective codes.
 */
export enum Language {
	/**
	 * Modern Chinese Mandarin
	 */
	HAN = "HAN",

	/**
	 * English language
	 */
	EN = "EN",

	/**
	 * Español language
	 */
	ES = "ES",

	/**
	 * Japanese language
	 */
	JA = "JA",

	/**
	 * Korean language
	 */
	KO = "KO",

	/**
	 * Unknown or unsupported language.
	 */
	UNKNOWN = "UNKNOWN",
}

/**
 * Represents a token in a given language or context.
 *
 * For languages that use phonetic scripts, characters may appear the same visually but carry
 * different meanings based on context. For example, in Japanese, the kana **はし (hashi)** can
 * mean:
 * _ Bridge (橋)
 * _ Chopstick (箸)
 * _ Edge (端)
 *
 * To distinguish between these different meanings, the `idea` property should be used to
 * provide a unique identifier for each specific meaning.
 *
 * Additionally, the `language` property represents the language of the token, which could
 * be `null` if the token is non_linguistic (e.g., Arabic numbers, punctuation marks).
 *
 * The `utfCharSet` property contains the corresponding Unicode character sets for the
 * characters within the token. This function recognizes characters up to the Unicode
 * standard as of 2023, and for characters not included, it returns `UNKNOWN`.
 *
 * @property **idea** _ A unique identifier for the specific meaning or usage of the token.
 * @property **language** _ The language in which the token is used. Can be `null` for non_linguistic
 *                     symbols (e.g., numbers, punctuations).
 * @property **utfCharSet** _ An array of Unicode character sets representing the characters
 *                        within the token.
 * @property **content** _ The textual content of the token.
 */
export type Token = {
	idea: string[] | Symbol[] | null;
	language: Language | null;
	utfCharSet: UTFCharSet[];
	content: string;
};
