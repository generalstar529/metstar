import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgUndergroundUtility from '@/assets/images/underground-utility.webp';

export default function UndergroundUtilityLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgUndergroundUtility} title='ENERGY EFFICIENCY' />
        <Introduction currentIndex={1} />
        <Project currentIndex={1} />
        <ContactUs topic='ENERGY EFFICIENCY' />
      </main>
    </>
  )
}