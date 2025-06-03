"use client";

import Image from "next/image";
import { Tag } from "@/components/utils";

import imgCommunity from "@/assets/images/diversity-community.webp";
import imgAchievement from "@/assets/images/diversity-achievement.webp";
import imgChildAdvocate from "@/assets/images/diversity-childadvocate.webp";
import imgAstros from "@/assets/images/diversity-astros.webp";

export default function Community() {
  return (
    <section className="diversity-community">
      <div className="container mx-auto px-11 pb-24 pt-96 text-center">
        <div className="title text-4xl md:text-5xl mb-16 text-white font-bold">
          SUPPORTING THE ADVANCEMENT OF THE
          <br />
          COMMUNITIES WHERE WE LIVE AND WORK.
        </div>
        <div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 mb-12 mx-auto">
          <div className="col-span-1 description px-8 py-10">
            <Tag variant="danger" className="p-3 text-sm tracking-wider">
              OUR COMMUNITES
            </Tag>
            <div className="text-xl text-black font-bold my-10">
              Community Engagement
            </div>
            <div className="text-sm text-black">
              A strong culture of volunteerism is a bedrock of Metstar Premier
              Era Innovations. We know that the strength of our communities is
              vital to innovation, job creation, and diversification within our
              industry. We form partnerships in our communities with many
              different goals to make sure we’re doing our part.
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src={imgCommunity}
              alt="diversity-community"
              className="logo"
            />
          </div>
        </div>
        <Tag variant="danger" className="p-3 text-sm tracking-wider">
          OUR COMMUNITES
        </Tag>
        <div className="text-xl text-white font-bold my-10">
          Community Partnerships
        </div>
        <div className="text-sm text-white mb-10">
          We are focused on partnering with customers, corporations, and others
          who share an interest in building and supporting inclusive
          communities.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex justify-center items-center mb-10 md:mb-0">
            <Image src={imgAchievement} alt="diversity-achievement" />
          </div>
          <div className="flex justify-center items-center mb-10 md:mb-0">
            <Image src={imgChildAdvocate} alt="diversity-childadvocate" />
          </div>
          <div className="flex justify-center items-center mb-10 md:mb-0">
            <Image src={imgAstros} alt="diversity-astros" />
          </div>
        </div>
      </div>
    </section>
  );
}
