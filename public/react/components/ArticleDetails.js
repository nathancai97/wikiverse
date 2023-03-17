import React, {useState, useEffect} from "react";
import seedData from "../../../server/seedData";
import apiURL from "../api";

export const ArticleDetails = ({ article, setSelectedArticle, user }) => {
  const { title, content, tags, createdAt, authorId } = article;

  return (
    <>
      <h1>{title}</h1>
      <h3>Author: {user}</h3>
      <h3>Published: {new Date(createdAt).toLocaleDateString()}</h3>
      <h3>{content}</h3>
      {/* <h3>Status: {author}</h3> */}
      <h3>
        Tags:
        {tags.map((tag, idx) => (
          <div key={idx}>
            {idx + 1}. "{tag.name}"
          </div>
        ))}
      </h3>
      <button onClick={() => setSelectedArticle(null)}>
        Back to Wiki List
      </button>
    </>
  );
};
