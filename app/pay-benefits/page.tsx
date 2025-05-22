import Hero from "@/components/ui/pay-benefits/hero";
import Benefit from "@/components/ui/pay-benefits/benefit";
import Future from "@/components/ui/pay-benefits/future";
import Hiring from "@/components/ui/pay-benefits/hiring";
import FindCareer from "@/components/ui/global/find-career";

export default function PayBenefitLayout() {
  return (
    <>
      <main className="grow">
        <Hero />
        <Benefit />
        <Future />
        <Hiring />
        <FindCareer />
      </main>
    </>
  );
}
