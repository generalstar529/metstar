import Hero from "@/components/ui/capabilities/hero";
import List from "@/components/ui/capabilities/list";
import Service from "@/components/ui/capabilities/service";
import ExploreCompany from "@/components/ui/capabilities/explore-company";
import PowerFuture from "@/components/ui/capabilities/power-future";

export default function CapabilitiesLayout() {
  return (
    <>
      <main className="grow">
        <Hero />
        <List />
        <Service />
        <ExploreCompany />
        <PowerFuture />
      </main>
    </>
  );
}
