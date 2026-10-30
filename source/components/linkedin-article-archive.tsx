'use client';

import { useMemo, useState } from 'react';
import articles from '../data/linkedin-articles.json';

const PAGE_SIZE = 12;
const articlePage =
  'https://www.linkedin.com/in/maheshlambe/recent-activity/articles/';

function preview(text: string) {
  if (text.length < 165) return text;
  return `${text
    .slice(0, 165)
    .replace(/\s+\S*$/, '')
    .trimEnd()}…`;
}

export default function LinkedInArticleArchive() {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const matchingArticles = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return articles;

    return articles.filter(({ title, summary }) =>
      `${title} ${summary}`.toLocaleLowerCase().includes(term),
    );
  }, [query]);
  const visibleArticles = matchingArticles.slice(0, visibleCount);

  return (
    <div
      className="article-archive"
      role="region"
      aria-label="LinkedIn article archive"
    >
      <div className="article-archive-intro">
        <div>
          <p className="paper-meta">LinkedIn archive · 30 October 2026</p>
          <p className="article-archive-note">
            I gathered all 139 published articles here. Search a title or
            subject; each preview opens the original on LinkedIn.
          </p>
        </div>
        <a
          className="text-link"
          href={articlePage}
          target="_blank"
          rel="noreferrer"
        >
          Browse on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="article-archive-tools">
        <label className="article-search">
          <span className="sr-only">Search article titles and previews</span>
          <input
            type="search"
            value={query}
            placeholder="Search all 139 articles"
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
          />
          <span className="article-search-mark" aria-hidden="true"></span>
        </label>
        <p className="article-result-count" aria-live="polite">
          {matchingArticles.length}{' '}
          {matchingArticles.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      {matchingArticles.length > 0 ? (
        <div className="article-grid">
          {visibleArticles.map((article) => (
            <a
              className="article-card"
              href={article.url}
              key={article.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="paper-meta">LinkedIn · {article.readTime}</span>
              <h3>{article.title}</h3>
              <p>{preview(article.summary)}</p>
              <span className="article-card-link">
                Read original <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      ) : (
        <p className="article-empty" role="status">
          No articles match “{query}”. Try another word or phrase.
        </p>
      )}

      {visibleCount < matchingArticles.length && (
        <button
          className="article-more"
          type="button"
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
        >
          Show more articles <span aria-hidden="true">↓</span>
          <span className="article-more-count">
            {matchingArticles.length - visibleArticles.length} remaining
          </span>
        </button>
      )}
    </div>
  );
}
