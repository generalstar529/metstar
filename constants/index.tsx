import { IPerson, IProcess, ICapability, IProject, IImageCardProp } from "@/types";

import imgAnthony from '@/assets/images/people/Anthony.webp'
import imgFrederick from '@/assets/images/people/Frederick.webp'
import imgJustin from '@/assets/images/people/Justin.webp'
import imgBj from '@/assets/images/people/Bj.webp'
import imgScot from '@/assets/images/people/Scot.webp'
import imgKarl from '@/assets/images/people/Karl.webp'
import imgDerrick from '@/assets/images/people/Derrick.webp'
import imgDonald from '@/assets/images/people/Donald.webp'
import imgMoanica from '@/assets/images/people/Moanica.webp'
import imgMatthew from '@/assets/images/people/Matthew.webp'
import imgKim from '@/assets/images/people/Kim.webp'

import imgRick from '@/assets/images/people/Rick.webp'
import imgZane from '@/assets/images/people/Zane.webp'
import imgRandolph from '@/assets/images/people/Randolph.webp'
import imgLoren from '@/assets/images/people/Loren.webp'
import imgLee from '@/assets/images/people/Lee.webp'
import imgRobert from '@/assets/images/people/Robert.webp'
import imgDaniel from '@/assets/images/people/Daniel.webp'

import imgDoyle from '@/assets/images/people/Doyle.webp'
import imgVincent from '@/assets/images/people/Vincent.webp'
import imgBernard from '@/assets/images/people/Bernard.webp'
import imgWorthing from '@/assets/images/people/Worthing.webp'
import imgHolli from '@/assets/images/people/Holli.webp'
import imgDavid from '@/assets/images/people/David.webp'
import imgScott from '@/assets/images/people/Scott.webp'
import imgMargaret from '@/assets/images/people/Margaret.webp'
import imgRaul from '@/assets/images/people/Raul.webp'
import imgMartha from '@/assets/images/people/Martha.webp'

import imgFleet from '@/assets/images/sustainability-fleet.webp'
import imgFacilities from '@/assets/images/sustainability-facilities.webp'
import imgProjects from '@/assets/images/sustainability-projects.webp'

import imgConnectingPeople from '@/assets/images/sustainability-connectingpeople.webp'
import imgCommunites from '@/assets/images/sustainability-communities.webp'
import imgEmployees from '@/assets/images/sustainability-employees.webp'

import imgDirectors from '@/assets/images/sustainability-directors.webp'
import imgConduct from '@/assets/images/sustainability-conduct.webp'
import imgHumanright from '@/assets/images/sustainability-humanright.webp'

import imgProjectElectric1 from '@/assets/images/electric1.webp'
import imgProjectElectric2 from '@/assets/images/electric2.webp'
import imgProjectElectric3 from '@/assets/images/electric3.webp'
import imgProjectElectric4 from '@/assets/images/electric4.webp'
import imgProjectEnergyEfficiency1 from '@/assets/images/energy-efficiency1.webp'
import imgProjectSafety1 from '@/assets/images/safety1.webp'
import imgProjectInterior1 from '@/assets/images/interior1.webp'
import imgProjectInterior2 from '@/assets/images/interior2.webp'
import imgProjectInterior3 from '@/assets/images/interior3.webp'
import imgProjectExterior1 from '@/assets/images/exterior1.webp'
import imgProjectExterior2 from '@/assets/images/exterior2.webp'
import imgProjectExterior3 from '@/assets/images/exterior3.webp'
import imgProjectGenerators1 from '@/assets/images/generators1.webp'
import imgProjectGenerators2 from '@/assets/images/generators2.webp'
import imgProjectGenerators3 from '@/assets/images/generators3.webp'
import imgProjectGenerators4 from '@/assets/images/generators4.webp'
import imgProjectGenerators5 from '@/assets/images/generators5.webp'

import imgElectricPower from '@/assets/images/electric-power.webp';
import imgUndergroundUtility from '@/assets/images/underground-utility.webp';
import imgRenewables from '@/assets/images/renewables.webp';
import imgBroadBand from '@/assets/images/broadband.webp';
import imgSpecialty from '@/assets/images/speciality.webp';
import imgUtilityPerformance from '@/assets/images/utility-performance.webp';
import imgEngineering from '@/assets/images/engineering.webp';
import imgConcreteSolution from '@/assets/images/concrete-solution.webp';

export const imageCardsData : IImageCardProp[] = [
  {
    imageSrc: imgElectricPower,
    title: 'ELECTRIC POWER',
    subTitle: '',
    description: 'Metstar Premier Era Innovations has the expertise and capabilities to design and implement end-to-end solutions for every aspect of the electric power sector.',
    offerings: [
      "Fixtures",
      "Plugs",
      "Breakers",
      "Wiring Pulls",
      "Heavy Ups",
      "Remodels Designs",
    ],
    link: 'capabilities/electric-power'
  },
  {
    imageSrc: imgUndergroundUtility,
    title: 'ENERGY EFFICIENCY',
    subTitle: '',
    description: 'Metstar Premier Era Innovations unites the most skilled tradespeople in the industry with cutting-edge tools to deliver underground infrastructure solutions better and safer than anyone.',
    offerings: [
      "Windows",
      "Attic Insulation",
      "Doors",
      "Lighting",
      "Smart Home Installation",
      "Energy Efficiency Audits",
    ],
    link: 'capabilities/energy-efficiency'
  },
  {
    imageSrc: imgRenewables,
    title: 'SAFETY',
    subTitle: '',
    description: "Metstar Premier Era Innovations is on the cutting-edge of the transition to a renewably powered, digital future. We're building new ways to capture and store energy, and connecting people to the power of modern life.",
    offerings: [
      "Hand Rail Installation",
      "Safety Audits for Structures and Electrical",
      "Security Systems",
      "Cameras",
      "Door Bells",
      "Mold Inspections and Remedies",
      "Smoke Detectors",
      "Exterior Remodeling",
      "Generators",
      "Maintenance"
    ],
    link: 'capabilities/safety'
  },
  {
    imageSrc: imgBroadBand,
    title: 'INTERIOR REMODELING',
    subTitle: '',
    description: "Metstar Premier Era Innovations brings people together with a full range of broadband communication capabilities",
    offerings: [
      "Kitchens",
      "Bathrooms",
      "Basement Finishing",
      "Flooring",
      "Tiling",
      "Carpeting",
      "Painting",
      "Drywall",
      "HVAC",
      "Age-in Place Modifications",
      "Smart Home Installations",
      "Customized Designs"
    ],
    link: 'capabilities/interior-remodeling'
  },
  {
    imageSrc: imgSpecialty,
    title: 'EXTERIOR REMODELING',
    subTitle: '',
    description: "Metstar Premier Era Innovations brings specialty capabilities to bear in solving complex infrastructure challenges better and safer than anyone in the industry.",
    offerings: [
      "Lighting Designs",
      "Security Upgrades",
      "Cameras and Doorbells",
      "Gutters and Trim",
      "Garage Door Motors",
      "Roofing",
    ],
    link: 'capabilities/exterior-remodeling'
  },
  {
    imageSrc: imgUtilityPerformance,
    title: 'RESTORATION',
    subTitle: '',
    description: "Our team of over 3000 engineers, licenced professionals, and subject matter experts, backed by the expertise and capabilities of over 200 operating companies, make Metstar Premier Era Innovations Services North America's premiere provider of end-to-end energy infrastructure solutions.",
    offerings: [
      "Fire and Water Damaged Repairs",
      "Remediation Services",
    ],
    link: 'capabilities/restoration'
  },
  {
    imageSrc: imgEngineering,
    title: 'GENERATORS',
    subTitle: '',
    description: "Thousands of Metstar Premier Era Innovations engineers and subject-matter experts work closely with out craft laborers to design innovative solutions for the most complex energy infrastructure challenges.",
    offerings: [
      "Generator Installs",
      "Service",
      "Estimates",
      "Stand By",
      "Portables"
    ],
    link: 'capabilities/generators'
  },
  {
    imageSrc: imgConcreteSolution,
    title: 'MAINTENANCE SUBSCRIPTIONS',
    subTitle: '',
    description: "We produce, source, and transport high-quality concrete to jobsites of all types and levels of access. Managing our own concrete supply ensures the quality of every project from top to bottom.",
    offerings: [
      "Energy Audits",
      "Recaulking Bathrooms and Window",
      "Select Furniture Assembly",
      "Drywall Patches",
      "Faucets",
      "Weather Stripping",
      "Smart Home Set up",
      "Fan Installation",
      "Many More Preventative Maintenance Services"
    ],
    link: 'capabilities/maintenance-subscriptions'
  },
];

export const peopleLeadership : IPerson[] = [
  {
    photo: imgAnthony,
    fullname: "Anthony Marks",
    role: "Co-Chief Executive Officer",
    introduction: "Anthony Marks serves as Co-Chief Executive Officer of Metstar Premier Era Innovations. He has been instrumental in growing Metstar Services into a full service company. Marks has led significant growth in Metstars key markets, including the strategic development of the company’s capabilities for all phases of infrastructure solutions. As a member of the Metstar Premier Era Innovations the knowledge and insight Marks has gained from his experience as a entrepreneur and executive have proven invaluable. Before joining Metstar Premier Era Innovations, Marks served as a financial and operational consultant for several start ups throughout the country. His vision and understanding of industries manifested in the exceptional strategic growth of the company. Marks holds over 10 years of experience with strategic planning and operations. Marks resides in Gaithersburg, MD with his wife and 2 cats."
  },
  // {
  //   photo: imgFrederick,
  //   fullname: "Frederick Torrence",
  //   role: "Co-Chief Executive Officer",
  //   introduction: "Frederick Torrence serves as Co-Chief Executive Officer of Metstar Premier Era Innovations. From assessment and planning to engineering and construction, Torrence has transformed Metstar Premier Era Innovations from a construction company to a partner of choice for clients. Torrence has a business management background in IT and network design and over 5 years of experience as an electrician. Torrence resides in West Virginia with his wife 2 children and dog."
  // },
  {
    photo: imgJustin,
    fullname: "Justin Sullivan",
    role: "Chief Operations Officer",
    introduction: "Justin Sullivan serves as Chief Operations Officer. Sullivan directly oversees all of Metstar Premier Era Innovations operations. His leadership and experience has directly and positively impacted the strategic growth of Metstar Premier Era Innovations in all areas of electrical engineering and construction. Developing his skills in the field with over 13 years of experience, he attained certifications as a Master Electrician. Through his experience in the trades, Sullivan recognized the opportunity posed by unmet needs in the industry. Sullivan is a graduate of Thomas Edison School of Technology in Silver Spring, MD , where his leadership qualities immediately afforded him responsibilities over crew safety, job efficiency, and client satisfaction. Sullivan resides in Frederick, MD with his 2 children. In his free time, he is a competitive motorcycle drag racer."
  },
]

export const peoplePresident : IPerson[] = [
  {
    photo: imgRick,
    fullname: "Justin Sullivan",
    role: "Chief Operations Officer",
    introduction: "Justin Sullivan serves as Chief Operations Officer. Sullivan directly oversees all of Metstar Premier Era Innovations operations. His leadership and experience has directly and positively impacted the strategic growth of Metstar Premier Era Innovations in all areas of electrical engineering and construction. Developing his skills in the field with over 13 years of experience, he attained certifications as a Master Electrician. Through his experience in the trades, Sullivan recognized the opportunity posed by unmet needs in the industry. Sullivan is a graduate of Thomas Edison School of Technology in Silver Spring, MD , where his leadership qualities immediately afforded him responsibilities over crew safety, job efficiency, and client satisfaction. Sullivan resides in Frederick, MD with his 2 children. In his free time, he is a competitive motorcycle drag racer."
  },
  {
    photo: imgZane,
    fullname: "Zane Brink",
    role: "Regional President, Central",
    introduction: "Zane Brink serves as Regional President of the Metstar Premier Era Innovations Central region. Brink is passionate about the utility industry, and his dedication runs as deep as his hard-earned expertise. His leadership, marked by sincere respect, appreciation, and fairness, continues to draw the best work from his teams. Brink has over 30 years of experience in the […]"
  },
  {
    photo: imgRandolph,
    fullname: "Randolph “Bo” Cassidy",
    role: "Regional President, South",
    introduction: "Bo Cassidy serves as Regional President of the Metstar Premier Era Innovations South region. Cassidy provides operational leadership for 12 operating companies, guiding and coordinating their service to the electric power, gas, telecom, and midstream energy industries. Cassidy began his career in 2002 with R. R. Cassidy, Inc., now a Metstar Premier Era Innovations operating company. Founded by his father, a […]"
  },
  {
    photo: imgLoren,
    fullname: "Loren Chandler",
    role: "Regional President, West",
    introduction: "Loren Chandler serves as Regional President of the Metstar Premier Era Innovations West region. He leads the strategic development and operational execution of Metstar Premier Era Innovations operating company capabilities and client services to advance energy transition solutions for the Western United States. Metstar Premier Era Innovations relies on Chandler’s hands-on leadership and deep understanding of the energy industries, and vision for the future […]"
  },
  {
    photo: imgLee,
    fullname: "Lee Jones",
    role: "President — Underground Utilities & Industrial",
    introduction: "Lee Jones serves as Regional President of the Metstar Premier Era Innovations Southeast region. He oversees the eight operating companies headquartered in the region, as well as many others that operate there. Jones works to ensure seamless coordination between the operating companies, enhance customer engagement, and continually improve the performance of major projects and programs. In his 20-year […]"
  },
  {
    photo: imgRobert,
    fullname: "Robert E. Jones",
    role: "Regional President, Canada",
    introduction: "Robert Jones serves as Regional President of the Metstar Premier Era Innovations Canada region. His four decades of energy services experience span executive leadership, strategy, business development, planning, engineering, construction, operations, and professional consulting. Jones’s vast industry knowledge and leadership qualities are indispensable as Metstar Premier Era Innovations positions itself to provide the expert capabilities needed to build Canada’s energy transition […]"
  },
  {
    photo: imgDaniel,
    fullname: "Daniel “Dan” Lazic",
    role: "Regional President, Northeast",
    introduction: "Dan Lazic serves as Regional President of the Metstar Premier Era Innovations Northeast region. Lazic leads Metstar Premier Era Innovations operating companies across 16 states in the midwestern and northeastern US. He continuously advances Metstar Premier Era Innovations’s Culture of Safety and guides operating companies in his region to better serve partners and clients in the electric transmission and distribution, pipeline, telecom, and renewable […]"
  },
]

export const peopleDirector : IPerson[] = [
  {
    photo: imgAnthony,
    fullname: "Earl C. “Duke” Austin, Jr."
  },
  {
    photo: imgDoyle,
    fullname: "Doyle N. Beneby"
  },
  {
    photo: imgVincent,
    fullname: "Vincent D. Foster"
  },
  {
    photo: imgBernard,
    fullname: "Bernard Fried"
  },
  {
    photo: imgWorthing,
    fullname: "Worthing F. Jackman"
  },
  {
    photo: imgHolli,
    fullname: "Holli C. Ladhani"
  },
  {
    photo: imgDavid,
    fullname: "David McClanahan"
  },
  {
    photo: imgScott,
    fullname: "Scott Rowe"
  },
  {
    photo: imgMargaret,
    fullname: "Margaret B. Shannon"
  },
  {
    photo: imgRaul,
    fullname: "Raúl J. Valentín"
  },
  {
    photo: imgMartha,
    fullname: "Martha B. Wyrsch"
  },
]

export const processes : IProcess[] = [
  {
    id: 1,
    process: "EXPAND OUR",
    title: "Operational Excellence",
    content: [
      "We align with our business partners’ priorities and work to create a diverse supply chain.",
      "We support our customers’ local efforts to expand diverse supplier partnerships.",
    ]
  },
  {
    id: 2,
    process: "BUILD A WORKFORCE OF",
    title: "Exceptional Employees",
    content: [
      "We build diversity in our workplace.",
      "We foster an inclusive work environment.",
    ]
  },
  {
    id: 3,
    process: "DELIVER",
    title: "Value",
    content: [
      "We continue to collaborate with customers on supporting strategic initiatives and non-profit efforts.",
      "We foster an inclusive environment where individuals feel heard, respected, and valued.",
      "We embrace and celebrate diversity as a cornerstone of our workplace.",
    ]
  }
]

export const environments : IPerson[] = [
  {
    photo: imgFleet,
    fullname: "Our Fleet",
    introduction: "Building the infrastructure that connects North America requires a lot of wheels."
  },
  {
    photo: imgFacilities,
    fullname: "Our Facilities",
    introduction: "Metstar Premier Era Innovations unites over 200 operating companies."
  },
  {
    photo: imgProjects,
    fullname: "Our Projects",
    introduction: "As we work to build the infrastructure for a reduced-carbon economy, we are constantly thinking about our impact on the environment."
  },
]

export const socials : IPerson[] = [
  {
    photo: imgConnectingPeople,
    fullname: "Connecting People",
    introduction: "Access to the internet is no longer a luxury."
  },
  {
    photo: imgCommunites,
    fullname: "Strengthening Communities",
    introduction: "Giving back to our communities has been part of Metstar Premier Era Innovations operating companies’ culture for more than a century."
  },
  {
    photo: imgEmployees,
    fullname: "Empowering Employees",
    introduction: "Our people are our most valuable resource, and we invest in them."
  },
]

export const governances : IPerson[] = [
  {
    photo: imgDirectors,
    fullname: "Board of Directors",
    introduction: "We recognize that the success of Metstar Premier Era Innovations lies not only in creating long-term sustainable value for stockholders, but also in benefiting all stakeholders."
  },
  {
    photo: imgConduct,
    fullname: "Code of Conduct",
    introduction: "At Metstar Premier Era Innovations, we don’t want to meet the industry standard, we want to set the industry standard."
  },
  {
    photo: imgHumanright,
    fullname: "Human Rights",
    introduction: "We know our people are our most valuable resource."
  },
]

export const capabilitycards : ICapability[] = [
  {
    topic: "ELECTRIC POWER",
    title: "",
    description: "",
    offerings: [
      "Fixtures",
      "Plugs",
      "Breakers",
      "Wiring Pulls",
      "Heavy Ups",
      "Remodels Designs",
    ]
  },
  {
    topic: "ENERGY EFFICIENCY",
    title: "",
    description: "",
    offerings: [
      "Windows",
      "Attic Insulation",
      "Doors",
      "Lighting",
      "Smart Home Installation",
      "Energy Efficiency Audits",
    ]
  },
  {
    topic: "SAFETY",
    title: "",
    description: "",
    offerings: [
      "Hand Rail Installation",
      "Safety Audits for Structures and Electrical",
      "Security Systems",
      "Cameras",
      "Door Bells",
      "Mold Inspections and Remedies",
      "Smoke Detectors",
      "Exterior Remodeling",
      "Generators",
      "Maintenance"
    ]
  },
  {
    topic: "INTERIOR REMODELING",
    title: "",
    description: "",
    offerings: [
      "Kitchens",
      "Bathrooms",
      "Basement Finishing",
      "Flooring",
      "Tiling",
      "Carpeting",
      "Painting",
      "Drywall",
      "HVAC",
      "Age-in Place Modifications",
      "Smart Home Installations",
      "Customized Designs"
    ]
  },
  {
    topic: "EXTERIOR REMODELING",
    title: "",
    description: "",
    offerings: [
      "Lighting Designs",
      "Security Upgrades",
      "Cameras and Doorbells",
      "Gutters and Trim",
      "Garage Door Motors",
      "Roofing",
    ]
  },
  {
    topic: "RESTORATION",
    title: "",
    description: "",
    offerings: [
      "Fire and Water Damaged Repairs",
      "Remediation Services",
    ]
  },
  {
    topic: "GENERATORS",
    title: "",
    description: "",
    offerings: [
      "Generator Installs",
      "Service",
      "Estimates",
      "Stand By",
      "Portables"
    ]
  },
  {
    topic: "MAINTENANCE SUBSCRIPTIONS",
    title: "",
    description: "",
    offerings: [
      "Energy Audits",
      "Recaulking Bathrooms and Window",
      "Select Furniture Assembly",
      "Drywall Patches",
      "Faucets",
      "Weather Stripping",
      "Smart Home Set up",
      "Fan Installation",
      "Many More Preventative Maintenance Services"
    ]
  },
]

export const projectcards : IProject[][] = [
  [
    {
      photo: imgProjectElectric1,
      title: "Fort McMurray West 500-kV AC Transmission Project",
      content: "The West Fort McMurray (WFMAC) 500 kV Transmission Line Project includes over 310 miles of high voltage transmission line, expansion of the existing Livock substation, and construction of the new Thickwood Hills substation, all located in Northcentral Alberta."
    },
    {
      photo: imgProjectElectric2,
      title: "Gateway West Transmission Line Project",
      content: "Construct 150 miles of 500kV transmission line, lattice towers, and pier foundations."
    },
    {
      photo: imgProjectElectric3,
      title: "Fisk 345 kV Transmission Lines",
      content: "Drilled Shaft Optimization for ComEd. The project involved new 345 kV transmission lines just outside downtown Chicago. Drilled shaft foundations would support ten tubular steel pole structures, many of which were subject to substantial loads. Original foundation designs included significant embedment into rock, which had substantial construction implications and led to alternative options being explored. […]"
    },
    {
      photo: imgProjectElectric4,
      title: "Fisk 345 kV Transmission Lines",
      content: "Drilled Shaft Optimization for ComEd. The project involved new 345 kV transmission lines just outside downtown Chicago. Drilled shaft foundations would support ten tubular steel pole structures, many of which were subject to substantial loads. Original foundation designs included significant embedment into rock, which had substantial construction implications and led to alternative options being explored. […]"
    }
  ],
  [
    {
      photo: imgProjectEnergyEfficiency1,
      title: "Mountain Valley Pipeline – Spread E",
      content: "The project is a total of 27 miles of 42 inch diameter pipe. The project begins near the community of Leivasy, WV and ends near the community of Dawson, WV."
    }
  ],
  [
    {
      photo: imgProjectSafety1,
      title: "Manatee Battery Energy Storage Center",
      content: "Irby Construction is currently at work on site at Manatee Battery Energy Storage Center (BESS) and substation, which upon completion will consist of 132 new battery line-ups connected to a new 230/34.5 kV substation. The Florida Power and Light project includes placement of 53,144 individual battery modules on a site that is the size of 3 football fields."
    }
  ],
  [
    {
      photo: imgProjectInterior1,
      title: "Bruce Power B18 LAN Upgrades at Tiverton, Ontario Plant",
      content: "Valard, in conjunction with subcontractors, completed trenching, placing, and splicing and testing of fibre for LAN upgrades on site at the Bruce Power Nuclear plant in Tiverton, ON. This was the first time that the Ontario team of the Valard Telecom Division had the opportunity to work for Bruce Power. The team was able to […]"
    },
    {
      photo: imgProjectInterior2,
      title: "Bruce Power B18 LAN Upgrades at Tiverton, Ontario Plant",
      content: "Valard, in conjunction with subcontractors, completed trenching, placing, and splicing and testing of fibre for LAN upgrades on site at the Bruce Power Nuclear plant in Tiverton, ON. This was the first time that the Ontario team of the Valard Telecom Division had the opportunity to work for Bruce Power. The team was able to […]"
    },
    {
      photo: imgProjectInterior3,
      title: "Bruce Power B18 LAN Upgrades at Tiverton, Ontario Plant",
      content: "Valard, in conjunction with subcontractors, completed trenching, placing, and splicing and testing of fibre for LAN upgrades on site at the Bruce Power Nuclear plant in Tiverton, ON. This was the first time that the Ontario team of the Valard Telecom Division had the opportunity to work for Bruce Power. The team was able to […]"
    }
  ],
  [
    {
      photo: imgProjectExterior1,
      title: "Hurricane Laura Storm Response",
      content: "Hurricane Laura decimated Entergy’s transmission system on the gulf coast of Louisiana.  Entergy awarded 10 transmission lines of varying voltages (69kV-500kV) to Metstar Premier Era Innovations for an emergency rebuild. Highlighted below are two of the more critical projects"
    },
    {
      photo: imgProjectExterior2,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    },
    {
      photo: imgProjectExterior3,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    }
  ],
  [],
  [
    {
      photo: imgProjectGenerators1,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    },
    {
      photo: imgProjectGenerators2,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    },
    {
      photo: imgProjectGenerators3,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    },
    {
      photo: imgProjectGenerators4,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    },
    {
      photo: imgProjectGenerators5,
      title: "Maurepas Pipeline, LLC, Subsidiary of Semgroup",
      content: "QPSE provided engineering, procurement, environmental permitting and construction services for three pipelines: a 34-mile, 6-inch olefins pipeline; a 36-mile, 12-inch vacuum gas oil (VGO) pipeline; and a 34-mile, 24-inch crude oil pipeline. The pipelines traverse parts of St. Charles, St. James, St. John the Baptist and Ascension parishes in Louisiana and will serve to connect […]"
    }
  ],
  [],
]