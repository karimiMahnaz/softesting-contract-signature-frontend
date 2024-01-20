import React, { useState, useContext } from "react";
import {
  Link,
  withRouter, 
} from "react-router-dom";
import {articles} from '../utils/articles';

import styles from "../styles/search.module.scss";
import img from "../assets/background/2.jpg";
import searchIcon from "../assets/Icon/search1.png";
import { VisibilityContext } from "../contexts/visibilityContext";
import { NavContext } from "../contexts/navContext";

const Search = () => {
 
  const [foundArticles, setFoundArticles] = useState(articles);
  const [articleName, setArticleName] = useState("");
  const { setBlogShow, setFormsHide } = useContext(VisibilityContext);
  const { setOffMenu } = useContext(NavContext);
  document.title = "SofTesting | Search Articles ";

  const handleBlogShow = () => {
    setBlogShow();
  };

  const doSearch = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = articles.filter((article) => {
        return article.articleName
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });

      setFoundArticles(results);
    } else {
      setFoundArticles(articles);
    }

    setArticleName(keyword);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${img})` }}
      onClick={setFormsHide}
      onMouseEnter={setOffMenu}
    >
      <input
        className={styles.searchInput}
        type="text"
        onChange={(e) => doSearch(e)}
        placeholder="Filter Article"
        style={{ backgroundImage: `url(${searchIcon})` }}
      />

      <div className={styles.searchResut}>
        {foundArticles && foundArticles.length > 0 ? (
          foundArticles.map((article) => (
            <li key={article.id} className={styles.article}>
              <Link
                to={`${article.path}`}
                className={styles.articleName}
                target="_blank"
                onClick={handleBlogShow}
              >
                {article.articleName}
              </Link>
            </li>
          ))
        ) : (
          <h3> No results found</h3>
        )}
      </div>
    </div>
  );
};

export default withRouter(Search);
