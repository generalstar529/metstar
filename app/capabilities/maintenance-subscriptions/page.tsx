import Hero from "@/components/ui/capabilities-service/hero";
import Introduction from "@/components/ui/capabilities-service/introduction";
import Project from "@/components/ui/capabilities-service/project";
import ContactUs from "@/components/ui/capabilities-service/contactus";

import imgConcreteSolution from "@/assets/images/concrete-solution.webp";

export default function ConcreteSolutionLayout() {
  return (
    <>
      <main className="grow">
        <Hero image={imgConcreteSolution} title="MAINTENANCE SUBSCRIPTIONS" />
        <Introduction currentIndex={7} />
        <ContactUs topic="MAINTENANCE SUBSCRIPTIONS" />
      </main>
    </>
  );
}
