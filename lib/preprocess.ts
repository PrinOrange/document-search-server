import { JSDOM } from "jsdom";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";

/**
 * Compresses multiple spaces into a single space within a string.
 *
 * @param text - The string in which to compress spaces.
 * @returns A new string where all sequences of whitespace are replaced with a single space.
 */
export const compressSpaces = (text: string): string => {
	return text.replace(/\s+/g, " ");
};

export const parseMarkdownElements = (text: string) => {
	// TODO: Finish the markdown elements parser.
};

/**
 * Removes Markdown formatting from a given string.
 *
 * @param markdown - The markdown formatted string to process.
 * @returns A string with Markdown formatting removed and spaces compressed.
 */
export const removeMarkdownFormat = (markdown: string) => {
	const mdast = unified().use(remarkParse).use(remarkGfm).parse(markdown);
	const series: string[] = [];

	visit(mdast, "text", (node) => {
		series.push(node.value);
	});

	return compressSpaces(series.join(" "));
};

/**
 * Removes HTML formatting from a given string.
 *
 * @param html - The HTML formatted string to process.
 * @returns A string with HTML tags removed and spaces compressed.
 */
export const removeHTMLFormat = (html: string) => {
	const dom = new JSDOM(html);
	return compressSpaces(dom.window.document.body.textContent || "");
};
