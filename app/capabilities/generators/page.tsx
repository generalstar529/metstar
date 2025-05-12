import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgEngineering from '@/assets/images/engineering.webp';

export default function EngineeringLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgEngineering} title='GENERATORS' />
        <Introduction currentIndex={6} />
        <Project currentIndex={6} />
        <ContactUs topic='GENERATORS' />
      </main>
    </>
  )
}