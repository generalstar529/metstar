import Hero from "@/components/ui/capabilities-service/hero";
import Introduction from "@/components/ui/capabilities-service/introduction";
import ContactUs from "@/components/ui/capabilities-service/contactus";
import Project from "@/components/ui/capabilities-service/project";

import imgUtilityPerformance from "@/assets/images/utility-performance.webp";

export default function UtilityPerformanceLayout() {
  return (
    <>
      <main className="grow">
        <Hero image={imgUtilityPerformance} title="RESTORATION" />
        <Introduction currentIndex={5} />
        <Project currentIndex={5} />
        <ContactUs topic="RESTORATION" />
      </main>
    </>
  );
}
