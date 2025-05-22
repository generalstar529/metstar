import Hero from "@/components/ui/contact/hero";
import Submit from "@/components/ui/contact/submit";
import FindCareer from "@/components/ui/global/find-career";

export default function ContactLayout() {
  return (
    <>
      <main className="grow">
        <Hero />
        <Submit />
        <FindCareer />
      </main>
    </>
  );
}
