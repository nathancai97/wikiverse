import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { ArticleDetails } from "./ArticleDetails";
import { Form } from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [article, setArticle] = useState();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [user, setUser] = useState();
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  

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
  }, [isAddingArticle, selectedArticle]);

  async function handlePageClick(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const articleData = await response.json();
      setArticle(articleData);
      setSelectedArticle(slug);
      findUser(articleData.authorId);
    } catch (err) {
      console.error(err);
    }
  }

  const findUser = async (authorId) => {
    const res = await fetch(`${apiURL}/users/${authorId}`);
    const author = await res.json();
    setUser(author.name);
  };

  const addBtnOnClick = () => {
    setIsAddingArticle(!isAddingArticle);
  };

  return (
    <main>
      <h1>WikiVerse</h1>
      {selectedArticle ? (
        <ArticleDetails
          article={article}
          setSelectedArticle={setSelectedArticle}
          user={user}
        />
      ) : !isAddingArticle ? (
        <>
          <h2>An interesting 📚</h2>
          <h3>Click on a book for more info!</h3>
          <PagesList pages={pages} handlePageClick={handlePageClick} />
          <br />
          <button onClick={addBtnOnClick}>Add A Book!</button>
        </>
      ) : (
        <Form addBtnOnClick={addBtnOnClick}/>
      )}
    </main>
  );
};
