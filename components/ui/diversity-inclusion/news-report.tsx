'use client'

import { ImageCard, AnimatedButton } from '@/components/utils'
import imgNewsreport from '@/assets/images/diversity-newsreport.webp'
import { useEffect, useRef } from 'react';

interface INewsItem {
  title: string;
  content: string;
}

const news : INewsItem[] = [
  {
    title: "Allteck Receives Jobs West 2021 Employer of The Year Award",
    content: "Every year Jobs West honors an employer for fostering a diverse workforce that includes neurodiverse staff members. Allteck is Jobs West’s choice for Employer of the Year in 2021! Jobs West enables people with developmental disabilities to prepare for, find and maintain community-based employment placements."
  },
  {
    title: "Metstar Premier Era Innovations Participates in Human Rights Campaign Corporate Equality Index",
    content: "Here at Metstar Premier Era Innovations Services we respect and value our LGBTQ+ employees. We are proud to have participated in the Human Rights Campaign’s Corporate Equality Index to show our allyship to our LGBTQ+ workforce. The Corporate Equality Index is the nation’s foremost benchmarking survey and report measuring corporate policies and practices related to LGBTQ+ workplace equality.",
  },
  {
    title: "Shay Bahramirad Named President-Elect of IEEE Power and Energy Society",
    content: "Shay Bahramirad of LUMA Energy has been elected to serve on the Governing Board of the Institute of Electrical and Electronics Engineers (IEEE) Power and Energy Society as the President-Elect in 2022 and 2023."
  }
]

export default function Newsreport() {

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
    <section className="diversity-newsreport bg-zinc-100">
      <div className='container text-left p-10 w-10/12 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='col-span-1 description'>
            <div className="title text-4xl md:text-5xl font-bold mb-10">
              NEWS &<br/>REPORT
            </div>
            <div className='text-sm text-black'>
              Metstar Premier Era Innovations and its operating companies are actively engaged in diversity and inclusion work. Here are some highlights.
            </div>
          </div>
          <div className='col-span-1 md:col-span-2 imagecard'>
            <ImageCard imageSrc={imgNewsreport} title="2021 Year in Review" subTitle='' description="We engage with diversity and inclusion because it’s meaningful to our people, enhances our work, and helps us grow our business. These are our highlights from the year." className='text-white' offerings={[]} link={''} />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10 bg-zinc-100 news-container' ref={newsContainerRef}>
            {
              news.map((newsItem, idx) => (
                <section key={idx} className='tag'>
                  <div className='flex flex-col h-full px-10 py-2'>
                    <div className='text-2xl font-bold text-black mb-10'>
                      {newsItem.title}
                    </div>
                    <div className='mb-10'>{newsItem.content}</div>
                    <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-md md:text-lg my-12 mt-auto'>
                      READ MORE
                    </AnimatedButton>
                  </div>
                </section>
              ))
            }
        </div>
      </div>
    </section>
  )
} 