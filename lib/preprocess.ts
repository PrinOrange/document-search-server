import { JSDOM } from "jsdom";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";
import { MarkdownElement } from "@/types/markdown.type";
import remarkStringify from "remark-stringify";
import type { Root } from "mdast";

/**
 * Compresses multiple spaces into a single space within a string.
 *
 * @param text - The string in which to compress spaces.
 * @returns A new string where all sequences of whitespace are replaced with a single space.
 */
export const compressSpaces = (text: string): string => {
  return text.replace(/\s+/g, " ");
};

/**
 * Removes elements from an HTML string based on a CSS selector.
 *
 * @param html - The HTML string to process.
 * @param selector - The CSS selector identifying elements to remove.
 * @returns A new HTML string with the specified elements removed.
 */
export const removeElementsBySelector = (
  html: string,
  selector: string
): string => {
  const dom = new JSDOM(html);
  const elements = dom.window.document.querySelectorAll(selector);

  elements.forEach((element) => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  return dom.serialize();
};

/**
 * Removes specified Markdown elements from a Markdown string.
 *
 * @param markdown - The Markdown string to process.
 * @param elementsToRemove - An array of MarkdownElement enums specifying which elements to remove.
 * @returns A new Markdown string with the specified elements removed.
 */
export const removeMarkdownElements = (
  markdown: string,
  elementsToRemove: MarkdownElement[]
): string => {
  // TODO: Need to be verified.
  const processor = unified()
    .use(remarkParse)
    .use(() => {
      return (tree: Root) => {
        visit(tree, (node, index, parent) => {
          let nodeType: MarkdownElement | undefined;
          switch (node.type) {
            case "heading":
              nodeType = MarkdownElement.heading;
              break;
            case "paragraph":
              nodeType = MarkdownElement.paragraph;
              break;
            case "code":
              nodeType = MarkdownElement.codeblock;
              break;
            case "image":
              nodeType = MarkdownElement.image;
              break;
            case "link":
              nodeType = MarkdownElement.link;
              break;
            case "table":
              nodeType = MarkdownElement.table;
              break;
						// TODO: To add more supported elements in future.
          }
          if (nodeType !== undefined && elementsToRemove.includes(nodeType)) {
            if (parent && index == -1) {
              parent.children.splice(index, 1);
            }
          }
        });
      };
    })
    .use(remarkStringify);

  return processor.processSync(markdown).toString();
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
