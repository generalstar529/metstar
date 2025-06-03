"use client";

import Image from "next/image";
import { Tag } from "@/components/utils";
import imgDiversityTogether from "@/assets/images/diversity-together.webp";

export default function Together() {
  return (
    <section className="diversity-together">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="col-span-1 md:col-span-5 px-11 py-24">
          <Tag variant="danger" className="p-3 text-sm tracking-wider">
            EMPLOYEES
          </Tag>
          <div className="text-4xl md:text-5xl my-5 text-white font-bold">
            BETTER TOGETHER
          </div>
          <div className="text-sm text-white my-10">
            We want to be the Employer of Choice in our markets. We want our
            workforce to reflect and draw strength from the communities where we
            live and work.
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 flex my-auto justify-center image-together">
          <Image src={imgDiversityTogether} alt="diversity-together" />
        </div>
      </div>
    </section>
  );
}
