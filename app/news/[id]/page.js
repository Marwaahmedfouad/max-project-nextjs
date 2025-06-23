import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

export default function NewsDatails({ params }) {
  console.log(params.id);
  const newsId = params.id;
  // to show more Details of page
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);
  return (
    <article className="news-article">
      <header>
        {/* <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} /> */}
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
