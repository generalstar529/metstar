"use client";

import { Tag, AnimatedButton } from "@/components/utils";

export default function Supplier() {
  return (
    <section className="diversity-supplier flex justify-center">
      <div className="container mx-auto px-5 py-20 lg:w-6/12">
        <Tag variant="warning" className="p-3 text-sm tracking-wider">
          ECONOMIC INCLUSION
        </Tag>
        <div className="title text-4xl md:text-5xl mt-5 mb-16 text-white font-bold">
          SUPPLIER DIVERSITY
          <br />
          AND DEVELOPMENT
        </div>
        <div className="text-md text-black font-bold mb-8">
          Our goal is excellence in supplier diversity throughout our
          businesses.
        </div>
        <div className="text-sm text-black">
          We proactively identify new, diverse suppliers through research and
          participation in trade fairs, workshops, conferences, and other
          opportunities. <br />
          <br />
          We seek to create economic opportunities for women-owned,
          minority-owned, veteran-owned, and other categories of
          underrepresented businesses.
        </div>
        {/* <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-lg md:text-xl my-12'>
          LERN MORE
        </AnimatedButton> */}
      </div>
    </section>
  );
}
