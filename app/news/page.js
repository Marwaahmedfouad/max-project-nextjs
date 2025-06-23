import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import React from "react";

function NewsPage() {
  return (
    <>
      <h1>news page </h1>
      <ul className="news-list">
        <li>
          <Link href="/news/first-news">First news Item</Link>
        </li>
        <li>
          <Link href="/news/Second-news">Second news Item</Link>
        </li>
        <li>
          <Link href="/news/Third-news">Third news Item</Link>
        </li>
      </ul>
      <ul className="news-list">
        {DUMMY_NEWS.map((newitem) => (
          <li key={newitem.id}>
            <Link href={`/news/${newitem.slug}`}>
              <img src={`/images/news/${newitem.image}`} />
              <span>{newitem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsPage;
