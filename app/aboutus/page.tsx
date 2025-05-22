import Hero from "@/components/ui/sustainability/hero";
import Mission from "@/components/ui/sustainability/misson";
import Report from "@/components/ui/sustainability/report";
import Summary from "@/components/ui/sustainability/summary";
import Environment from "@/components/ui/sustainability/environment";
import Social from "@/components/ui/sustainability/social";
import Governance from "@/components/ui/sustainability/governance";
import Impact from "@/components/ui/sustainability/impact";
import ConnectPeople from "@/components/ui/sustainability/connect-people";

export default function SustainabilityLayout() {
  return (
    <>
      <main className="grow">
        <Hero />
        <Mission />
        <Report />
        <Summary />
        <Environment />
        <Social />
        <Governance />
        <Impact />
        <ConnectPeople />
      </main>
    </>
  );
}
