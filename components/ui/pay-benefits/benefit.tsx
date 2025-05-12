'use client'

interface IBenefit {
  topic: string;
  description?: string;
  details?: string[];
}

const benefits : IBenefit[] = [
  {
    topic: "Medical",
    description: "Metstar Premier Era Innovations offers three medical plans with the same expansive provider network.",
    details: [
      "PPO Plan",
      "2 High Deductible Health Plans (100% Coinsurance after deductible is met)"
    ]
  },
  {
    topic: "Pre-Tax Savings Accounts",
    details: [
      "Flexible Spending Accounts (FSA)",
      "Health Savings Accounts (HSA) - Includes annual employer contributions"
    ]
  },
  {
    topic: "Dental",
    description: "Dental PPO plan with one of the largest provider networks.",
    details: [
      "Includes comprehensive restorative care",
      "Adult and Child Orthodontia benefits"
    ]
  },
  {
    topic: "Vision",
    description: "Annual benefits include comprehesive exams, eyeglasses or contact lenses and discounts on the following:",
    details: [
      "Laser eye surgery",
      "Purchasing contact lenses online",
      "Frames, lenses, etc.",
      "Safety glasses"
    ]
  },
  {
    topic: "Disability Benefits",
    description: "Providing income protection if you cannot work due to injury or illness.",
    details: [
      "Short-term Disability",
      "Long-term Disability"
    ]
  },
  {
    topic: "Life Insurance Benefits",
    details: [
      "Basic Life and Accidental Death and Dismemberment (AD&D) - Employer Paid",
      "Supplemental Life Insurance",
      "Spouse and Child Life insurance"
    ]
  },
  {
    topic: "Financial Benefit",
    details: [
      "401(k) Retirement Plan – Metstar Premier Era Innovations provides a competitive employer match with immediate vesting",
    ]
  },
  {
    topic: "Other Benefits",
    details: [
      "Employee Assistance Program (Employer Paid)",
      "Accident Insurance",
      "Hospital Indemnity Insurance",
      "Critical Illness Insurance",
      "Identity Theft Protection"
    ]
  },
  {
    topic: "Wellness Program",
    description: "The path to your good health lies within your reach, through our health and wellness benefits. Our programs motivate you and your family to make healthy lifestyle choices. Our wellness program services include “get moving” activities, weight loss competition, blood pressure wellness, free flu shots, tobacco cessation programs, and even a yearly onsite health screening that covers cholesterol, weight, and BMI – at no cost to employees. And for our employees interested in financial wellness-planning for retirement, we have a 401(k) program, along with financial education sessions.",
  },
]

export default function Benefit () {
  return (
    <section className="pay-benefits">
      <div className="container mx-auto">
        <div className="flex mt-5 mx-11 items-end	">
          <div className='flex pay-benefits-bargroup me-0 lg:me-10'>
            <span className='pay-benefits-bargroup-first hidden lg:block'></span>
            <span className='pay-benefits-bargroup-second hidden lg:block'></span>
            <span className='pay-benefits-bargroup-third hidden lg:block'></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-9 pay-benefits-title">
            OUR BENEFITS
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:grid-cols-3 pay-benefits-content p-24">
          {
            benefits.map((item, idx) => (
              <div className={`card px-8 py-4 text-white ${idx === benefits.length - 1 ? 'col-span-2' : 'col-span-1'}`}>
                <div className='text-md my-2 topic'>{item.topic}</div>
                {
                  item.description
                  ? <div className='text-sm my-3'>{item.description}</div>
                  : <></>
                }
                {
                  item.details?.length
                  ? <ul className='text-sm content my-5'>
                      {
                        item.details?.map((detailItem, idx) => (
                          <li key={idx}>{detailItem}</li>
                        ))
                      }
                    </ul>
                  : <></>
                }
              </div>   
            ))
          }
        </div>
      </div>
    </section>
  );
}