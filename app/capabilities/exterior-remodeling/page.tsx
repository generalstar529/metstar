import Hero from "@/components/ui/capabilities-service/hero";
import Introduction from "@/components/ui/capabilities-service/introduction";
import Project from "@/components/ui/capabilities-service/project";
import ContactUs from "@/components/ui/capabilities-service/contactus";

import imgSpeciality from "@/assets/images/speciality.webp";

export default function SpecialityLayout() {
  return (
    <>
      <main className="grow">
        <Hero image={imgSpeciality} title="EXTERIOR REMODELING" />
        <Introduction currentIndex={4} />
        <Project currentIndex={4} />
        <ContactUs topic="EXTERIOR REMODELING" />
      </main>
    </>
  );
}
