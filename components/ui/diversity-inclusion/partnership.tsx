"use client";

import Image from "next/image";
// import Carousel from 'react-grid-carousel'

import imgAABE from "@/assets/images/diversity-aabe.webp";
import imgWomen from "@/assets/images/diversity-women.webp";
import imgAWE from "@/assets/images/diversity-awe.webp";
import imgTexas from "@/assets/images/diversity-texas.webp";
import imgNHCC from "@/assets/images/diversity-nhcc.webp";

interface IPartner {
  src: any;
  alt: string;
}

const partnerships: IPartner[] = [
  { src: imgAABE, alt: "AABE" },
  { src: imgWomen, alt: "Women" },
  { src: imgAWE, alt: "AWE" },
  { src: imgTexas, alt: "TEXAS" },
  { src: imgNHCC, alt: "NHCC" },
];

export default function Partnership() {
  return (
    <section className="diversity-partnership">
      <div className="container text-left mx-auto">
        <div className="bg-zinc-100 p-20 w-10/12 mx-auto">
          <div className="title text-4xl md:text-5xl mb-16 text-black font-bold">
            DIVERSITY & INCLUSION
            <br />
            PARTNERSHIPS
          </div>
          <div className="text-sm text-black mb-16">
            We are proud to partner with organizations that value diversity and
            are committed to full inclusion in their sectors.
          </div>
          {/* <Carousel cols={3} rows={1} gap={10} showDots={true} loop>
            {partnerships.map((partnerItem, idx) => (
              <Carousel.Item key={idx}>
                <Image
                  src={partnerItem.src}
                  alt={partnerItem.alt}
                  className="partner-image"
                ></Image>
              </Carousel.Item>
            ))}
          </Carousel> */}
        </div>
      </div>
    </section>
  );
}
