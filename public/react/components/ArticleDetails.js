import React, { useState, useEffect } from "react";
import apiURL from "../api";

export const ArticleDetails = ({ article, setSelectedArticle, user }) => {
  const { title, content, tags, createdAt } = article;

  const deletePage = async () => {
    const response = await fetch(`${apiURL}/wiki/${title}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <h1>{title}</h1>
      <h3>Author: {user}</h3>
      <h3>Published: {new Date(createdAt).toLocaleDateString()}</h3>
      <h3>{content}</h3>
      <h3>
        Tags:
        {tags.map((tag, idx) => (
          <div key={idx}>
            {idx + 1}. "{tag.name}"
          </div>
        ))}
      </h3>
      <button
        onClick={() => {
          deletePage();
          setSelectedArticle(null);
        }}
      >
        DELETE
      </button>
      <button onClick={() => setSelectedArticle(null)}>
        Back to Wiki List
      </button>
    </>
  );
};
