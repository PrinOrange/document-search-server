import { removeHTMLFormat, removeMarkdownFormat } from "@/lib/preprocess";

const html = `
  <div>
    <h1>标题</h1>
    <p>这是一个 <strong>段落</strong>，包含<a href="#">链接</a>。</p>
    <div><span>嵌套内容</span></div>
  </div>
`;

const markdownText = `
# 标题一

这是**加粗的文字**，这是*斜体*，还有\`行内代码\`。

## 标题二

1. 列表项一
2. 列表项二

> 这是引用文本。

![图片](url)

\`\`\`js
const code = "代码块";
\`\`\`

| 表头1 | 表头2 |
|-------|-------|
| 数据1 | 数据2 |
`;

const plainText = removeHTMLFormat(html);
console.log(removeMarkdownFormat(markdownText));
