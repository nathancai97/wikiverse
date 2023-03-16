import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { ArticleDetails } from "./ArticleDetails";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [article, setArticle] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  async function handlePageClick(slug) {
    console.log("Clicked page:", slug);
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const articleData = await response.json();
      setArticle(articleData);
      setSelectedArticle(slug);
      console.log("Selected article:", slug);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {selectedArticle ? (
        <ArticleDetails
          article={article}
          setSelectedArticle={setSelectedArticle}
        />
      ) : (
        <>
          <h3>Click on a book for more info!</h3>
          <PagesList pages={pages} handlePageClick={handlePageClick} />
        </>
      )}
    </main>
  );
};
