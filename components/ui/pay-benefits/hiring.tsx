'use client'

interface IHiring {
  topic: string;
  description: string;
}

const hirings : IHiring[] = [
  {
    topic: "Equal Opportunity Employer",
    description: "At Metstar Premier Era Innovations we don’t just accept differences, we embrace them. Metstar Premier Era Innovations is proud to be an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, disability, sex, sexual orientations, gender identity or expression, age, national origin, veteran status, genetic information, union status, and/or any other characteristic protected by federal, state or local law.",
  },
  {
    topic: "Reasonable Accommodations",
    description: "Metstar Premier Era Innovations prohibits all types of discrimination against a qualified applicant or employee on the basis of a current disability, record of a prior disability, being perceived as disabled or an association with someone with a disability. A qualified applicant or employee is an individual who can perform the essential functions of the job in question, either with or without a reasonable accommodation. If Metstar Premier Era Innovations is notified that a qualified individual with a disability requires a reasonable accommodation in order to participate in the application process or perform the essential functions of the job, Metstar Premier Era Innovations will work with that person to find a reasonable accommodation, unless to do so would impose an undue hardship on the operation of Metstar Premier Era Innovations’s business. For additional information, please contact Metstar Premier Era Innovations’s HR Department.",
  },
  {
    topic: "Recruitment Scam/Fraud Statement",
    description: "Metstar Premier Era Innovations has been notified of fraudulent employment offers being made or promised to candidates on our behalf. These offers require individuals to provide personal information, to pay an application fee, and/or to purchase equipment for employment. Metstar Premier Era Innovations does not require payment/fees of any kind nor require the purchasing of equipment from prospective candidates. If you receive such a request, please report the issue to Metstar Premier Era Innovations’s HR Department.",
  },
  {
    topic: "Staffing Agency Statement",
    description: "Metstar Premier Era Innovations does not accept unsolicited resumes from staffing agencies or recruiters. To conduct business with Metstar Premier Era Innovations, a Master Services Agreement (MSA) must be implemented and confirmed by the HR Department, prior to any submissions. In the event that a resume/candidate is submitted by a staffing agency or recruiter without a current MSA in place, Metstar Premier Era Innovations has the right to hire that individual without any legal or financial obligation to the referring staffing agency and/or recruiter.",
  },
]

export default function Hiring () {
  return (
    <section className="pay-benefits-hiring">
      <div className="container mx-auto">
        <div className="flex mt-5 mx-11 items-end	">
          <div className='flex pay-benefits-hiring-bargroup me-0 lg:me-10'>
            <span className='pay-benefits-hiring-bargroup-first hidden lg:block'></span>
            <span className='pay-benefits-hiring-bargroup-second hidden lg:block'></span>
            <span className='pay-benefits-hiring-bargroup-third hidden lg:block'></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-9 pay-benefits-hiring-title">
            HIRING
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pay-benefits-content p-24">
          {
            hirings.map((item, idx) => (
              <div className='card px-8 py-1 text-black'>
                <div className='text-md my-2 font-bold'>{item.topic}</div>
                <div className='text-sm my-3'>{item.description}</div>
              </div>   
            ))
          }
        </div>
      </div>
    </section>
  );
}