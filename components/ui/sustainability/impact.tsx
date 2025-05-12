'use client'

interface Impactcard {
  title: string;
  content: string; 
}

const impactCards: Impactcard[] = [
  {
    title: ">50,000MW", content: "of renewable energy in the United States and Canada",
  },
  {
    title: "440MW", content: "installed storage capacity",
  },
  {
    title: ">21.6M", content: "solar panels installed",
  },
  {
    title: "11.9MT", content: "CO2 avoided in 2021",
  },
  {
    title: "22,997", content: "wind turbines installed. Approximately 35% of wind energy in the US Market",
  },
]

export default function Impact () {
  return (
    <section className="sustainability-impact">
      <div className="container mx-auto p-28">        
        <div className="text-4xl md:text-5xl font-bold sustainability-impact-title">
          IMPACT
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 sustainability-impact-content mt-10">
          <div className="text-sm col-span-1">
            <div className="font-bold">
              As the transition to a reduced-carbon and digital future gathers pace, we recognize our unique and essential position as North America’s largest employer of craft labor. Metstar Premier Era Innovations operating companies have the expertise and capabilities to support and accelerate the Energy Transition.
            </div>
            <div className="mt-10">
              In 2021, Metstar Premier Era Innovations Services acquired Blattner Company, one of the largest and leading utility-scale renewable energy infrastructure solutions providers in the United States to enhance our role in connecting people to renewable energy sources. Blattner spans the United States and operates in the main sectors of wind, solar, and energy storage, bringing renewable energy expertise to the Metstar Premier Era Innovations family of companies.
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-8">
            {
              impactCards.map((cardItem, idx) => (
                <div key={idx} className="impact-card bg-zinc-100 font-bold p-5">
                  <div className="text-4xl md:text-5xl title mb-5">{cardItem.title}</div>
                  <div className="text-lg md:text-xl">{cardItem.content}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}