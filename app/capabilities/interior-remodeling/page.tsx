import Hero from "@/components/ui/capabilities-service/hero";
import Introduction from "@/components/ui/capabilities-service/introduction";
import Project from "@/components/ui/capabilities-service/project";
import ContactUs from "@/components/ui/capabilities-service/contactus";

import imgBroadband from "@/assets/images/broadband.webp";
import imgBroadbandDesktop from "@/assets/images/broadband-desktop.webp";

export default function BroadbandLayout() {
  return (
    <>
      <main className="grow">
        <div className="hidden md:block">
          <Hero image={imgBroadbandDesktop} title="INTERIOR REMODELING" />
        </div>
        <div className="md:hidden">
          <Hero image={imgBroadband} title="INTERIOR REMODELING" />
        </div>
        <Introduction currentIndex={3} />
        <Project currentIndex={3} />
        <ContactUs topic="INTERIOR REMODELING" />
      </main>
    </>
  );
}
