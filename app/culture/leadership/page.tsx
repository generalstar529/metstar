import Hero from '@/components/ui/leadership/hero'
import History from '@/components/ui/leadership/history'
import Leadership from '@/components/ui/leadership/leadership'
import President from '@/components/ui/leadership/president'
import Director from '@/components/ui/leadership/director'
import FindCareer from '@/components/ui/global/find-career';

export default function LeadershipLayout() {  

  return (
    <>
      <main className="grow">
        <Hero />
        <History />
        <Leadership />
        {/* <President /> */}
        {/* <Director /> */}
        {/* <FindCareer /> */}
      </main>
    </>
  )
}