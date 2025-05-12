export const metadata = {
  title: 'Home - Metstar Premier Era Innovations',
  description: 'Page description',
}

import Hero from '@/components/ui/home/hero'
import BetterFeature from '@/components/ui/home/better-feature'
import Career from '@/components/ui/home/career'
import News from '@/components/ui/home/news'

export default function Home() {
  return (
    <>
      <Hero />
      <BetterFeature />
      {/* <Career /> */}
      <News />
    </>
  )
}
