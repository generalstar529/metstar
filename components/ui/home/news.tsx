'use client'

import React from 'react';
import { useEffect, useRef } from 'react';

interface INewsItem {
  title: string;
  content: string;
}

const news : INewsItem[] = [
  {
    title: "Metstar Premier Era Innovations partners with Synchrony Financial",
    content: "Big News Alert!  Get ready for a financial game-changer! Metstar Premier Era Innovations is now partnered with Synchrony Financial for easy-peasy financing! Make your purchases more convenient with flexible payment plans. Elevate your home without breaking the bank! Dive into the excitement NOW and schedule your free estimate!"
  },
  {
    title: "Metstar Premier Era Innovations is the newest authorized Generac Generator dealer",
    content: "Metstar Premier Era Innovations is proud to announce that we are the latest authorized dealer of Generac Generators. With our commitment to excellence and top-tier service, we're thrilled to offer the finest in backup power solutions. Whether for residential or commercial needs, trust us to deliver reliability and peace of mind. Contact us today for a complimentary quote and experience the difference with Metstar Premier Era Innovations.",
  }
]

export default function News() {

  const newsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if(newsContainerRef.current) {
      let posY = newsContainerRef.current.offsetTop;
      
      if(posY < pageBottom) {
        addClasses();
      }
      else {
        removeClasses();
      }
    }
  }

  const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function addClasses() {
    let sections = document.getElementsByClassName('tag');
    for (let i = 0; i < sections.length; i ++) {
      let tag = sections[i];
      tag.classList.add(`visible-tag${i+1}`);
    }
  }

  function removeClasses() {
    let sections = document.getElementsByClassName('tag');
    for (let i = 0; i < sections.length; i ++) {
      let tag = sections[i];
      tag.classList.remove(`visible-tag${i+1}`);
    }
  }

  return (
    <section className="home-news">
      <div className='container mx-auto'>
        <div className="flex mx-11 items-end">
          <div className='flex home-news-bargroup'>
            <span className='home-news-bargroup-first hidden lg:block'></span>
            <span className='home-news-bargroup-second hidden lg:block'></span>
            <span className='home-news-bargroup-third hidden lg:block'></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold ms-0 lg:ms-10 home-news-title">
              NEWS
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-20 bg-zinc-100 px-0 lg:px-28 py-28 news-container' ref={newsContainerRef}>
            {
              news.map((newsItem, idx) => (
                <section key={idx} className='tag'>
                  <div className='flex'>
                      <div className='px-10 py-2'>
                        <div className='text-2xl font-bold text-black mb-10'>
                          {newsItem.title}
                        </div>
                        <div>{newsItem.content}</div>
                      </div>
                  </div>
                </section>
              ))
            }
        </div>
      </div>
    </section>
  )
}