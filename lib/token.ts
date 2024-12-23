import type { Language, Token } from "@/types/token.type";
import { compressSpaces } from "./preprocess";

export const tokenizeDocuments = (
	content: string,
	config: {
		language: Language[];
	},
): Token[] => {
	const trimmedText = compressSpaces(content);

	return [];
};
