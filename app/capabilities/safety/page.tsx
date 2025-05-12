import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgRenewables from '@/assets/images/renewables.webp';

export default function RenewablesLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgRenewables} title='SAFETY' />
        <Introduction currentIndex={2} />
        <Project currentIndex={2} />
        <ContactUs topic='SAFETY' />
      </main>
    </>
  )
}