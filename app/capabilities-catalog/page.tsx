import Search from '@/components/ui/capabilities-catalog/search';
import Offering from '@/components/ui/capabilities-catalog/offering';
import FindCareer from '@/components/ui/global/find-career';

export default function ContactLayout() {  

  return (
    <>
      <main className="grow">
        <Search />
        <Offering />
        {/* <FindCareer /> */}
      </main>
    </>
  )
}