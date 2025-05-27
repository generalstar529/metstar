"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TabView, TabPanel } from "primereact/tabview";
import { CapabilityCard } from "@/components/utils";
import { capabilitycards } from "@/constants";

import Project from "@/components/ui/capabilities-service/project";
import Explore from "@/components/ui/capabilities-service/utility-explore";
import Team from "@/components/ui/capabilities-service/utility-team";

interface IntroductionProps {
  currentIndex: number;
}

const paths = [
  "/electric-power",
  "/energy-efficiency",
  "/safety",
  "/interior-remodeling",
  "/exterior-remodeling",
  "/restoration",
  "/generators",
  "/maintenance-subscriptions",
];

import imgLayoutElectricPower from "@/assets/images/layout-electricpower.webp";
import imgLayoutUndergroundutility from "@/assets/images/layout-undergroundutility.webp";
import imgRenewable from "@/assets/images/layout-renewable.webp";
import imgBroadband from "@/assets/images/layout-broadband.webp";
import imgSpecialty from "@/assets/images/layout-speciality.webp";
import imgUtilityPerformance from "@/assets/images/layout-utilityperformance.webp";
import imgEngineering from "@/assets/images/layout-engineering.webp";
import imgConcretesolution from "@/assets/images/layout-concretesolution.webp";

const images: any[] = [
  imgLayoutElectricPower,
  imgLayoutUndergroundutility,
  imgRenewable,
  imgBroadband,
  imgSpecialty,
  imgUtilityPerformance,
  imgEngineering,
  imgConcretesolution,
];

export default function Introduction({ currentIndex }: IntroductionProps) {
  const router = useRouter();

  const onChangeTab = (selectedIndex: number) => {
    router.push("/capabilities" + paths[selectedIndex]);
  };

  return (
    <section className="capabilities-item-introduction" style={{ zIndex: 1 }}>
      <div className="mx-auto">
        <TabView
          activeIndex={currentIndex}
          className="text-lg"
          onTabChange={(e) => onChangeTab(e.index)}
          scrollable
        >
          {capabilitycards.map((card, idx) => (
            <TabPanel key={idx} header={card.topic}>
              <div className="grid gric-cols-1 lg:grid-cols-2 p-5 bg-zinc-100">
                <CapabilityCard
                  topic={card.topic}
                  title={card.title}
                  description={card.description}
                  offerings={card.offerings}
                  className="w-full lg:w-8/12 mx-auto"
                />
                <Image
                  src={images[idx]}
                  alt={card.topic}
                  className="layout-image my-auto"
                />
              </div>
            </TabPanel>
          ))}
        </TabView>
      </div>
    </section>
  );
}
