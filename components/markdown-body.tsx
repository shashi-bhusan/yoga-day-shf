import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";

function loadMarkdown() {
  const file = path.join(process.cwd(), "content", "site.md");
  return fs.readFileSync(file, "utf8");
}

export function MarkdownBody() {
  const source = loadMarkdown();

  return (
    <article id="home" className="site-article">
      <ReactMarkdown
        rehypePlugins={[rehypeSlug]}
        components={{
          h1: ({ children }) => (
            <h1 className="site-hero__title">{children}</h1>
          ),
          p: ({ children }) => <p className="site-prose__p">{children}</p>,
          h2: ({ children }) => (
            <h2 className="site-section__title">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="site-card__title">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="site-subcard__title">{children}</h4>
          ),
          blockquote: ({ children }) => (
            <blockquote className="site-quote">{children}</blockquote>
          ),
          ul: ({ children }) => (
            <ul className="site-list site-list--plain">{children}</ul>
          ),
          li: ({ children }) => <li className="site-list__item">{children}</li>,
          a: ({ href, children }) => (
            <a className="site-link" href={href ?? "#"}>
              {children}
            </a>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </article>
  );
}
