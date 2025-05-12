import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgElectricPower from '@/assets/images/electric-power.webp';

export default function ElectricPowerLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgElectricPower} title='ELECTRIC POWER' />
        <Introduction currentIndex={0} />
        <Project currentIndex={0} />
        <ContactUs topic='ELECTRIC POWER' />
      </main>
    </>
  )
}