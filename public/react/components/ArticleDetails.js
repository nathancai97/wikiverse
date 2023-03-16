import React from "react";

export const ArticleDetails = ({ article, setSelectedArticle }) => {
  const { title, status, content, tags, createdAt } = article;

  return (
    <>
      <h1>{title}</h1>
      {/* <h3>Author: {article.author}</h3> */}
      <h3>Content: {content}</h3>
      <h3>Status: {status}</h3>
      <h3>
        Tags: 
        {tags.map((tag, idx) => (
          <div>{idx + 1}. "{tag.name}"</div>
        ))}
      </h3>
      <h3>Updated: {new Date(createdAt).toLocaleDateString()}</h3>
      <button onClick={() => setSelectedArticle(null)}>
        Back to Wiki List
      </button>
    </>
  );
};
