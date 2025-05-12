import Hero from '@/components/ui/diversity-inclusion/hero'
import Mission from '@/components/ui/diversity-inclusion/misson'
import Service from '@/components/ui/diversity-inclusion/service'
import Commitment from '@/components/ui/diversity-inclusion/commitment'
import Together from '@/components/ui/diversity-inclusion/better-together'
import Supplier from '@/components/ui/diversity-inclusion/supplier'
import Partnership from '@/components/ui/diversity-inclusion/partnership'
import Community from '@/components/ui/diversity-inclusion/community'
import Newsreport from '@/components/ui/diversity-inclusion/news-report'
import Metric from '@/components/ui/diversity-inclusion/metric'
import FindCareer from '@/components/ui/global/find-career'

export default function DiversityLayout() {  

  return (
    <>
      <main className="grow">
        <Hero />
        <Mission />
        <Service />
        <Commitment />
        <Together />
        <Supplier />
        {/* <Partnership /> */}
        {/* <Community /> */}
        {/* <Newsreport /> */}
        {/* <Metric /> */}
        {/* <FindCareer /> */}
      </main>
    </>
  )
}