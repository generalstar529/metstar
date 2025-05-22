import Hero from "@/components/ui/culture/hero";
import PeopleFirst from "@/components/ui/culture/people-first";
import QuantaCares from "@/components/ui/culture/quanta-cares";
import Saftey from "@/components/ui/culture/safety";
import Empowering from "@/components/ui/culture/empowering";
import BetterFeature from "@/components/ui/home/better-feature";
import History from "@/components/ui/culture/history";
import FindCareer from "@/components/ui/global/find-career";

export default function CultureLayout() {
  return (
    <>
      <main className="grow">
        <Hero />
        <PeopleFirst />
        <QuantaCares />
        <Saftey />
        <Empowering />
        <BetterFeature />
        <History />
        <FindCareer />
      </main>
    </>
  );
}
