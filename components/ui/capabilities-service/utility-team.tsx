'use client'

const professionals = [
  "CIVIL ENGINEERS",
  "ELECTRICAL ENGINEERS",
  "MECHANICAL ENGINEERS",
  "STRUCTURAL ENGINEERS",
  "GEOTECHNICAL ENGINEERS",
  "AERIAL MAPPERS",
  "ENVIRONMENTAL COMPLIANCE OFFICERS",
  "GIS ANALYSTS",
  "PERMIT CONSULTANTS",
  "STAKEHOLDER AFFAIRS MANAGERS",
  "RIGHT OF WAY DESIGNERS",
  "COMMISIONING CONSULTANTS",
  "SUBSTATION DESIGNERS",
  "BATTERY ENERGY STORAGE SYSTEMS (BESS) DESIGNERS",
  "OVERHEAD TRANSMISSION DESIGNERS",
  "OVERHEAD DISTRIBUTION DESIGNERS",
  "UNDERGROUND TRANSMISSION DESIGNERS",
  "UNDERGROUND DISTRIBUTION DESIGNERS",
  "MICROGRID DESIGNERS",
  "REMOTE GRID DESIGNERS",
  "PIPELINE DESIGNERS",
  "ELECTRIC VEHICLE CHARGER DESIGNERS",
  "PROJECT MANAGERS",
  "PROGRAM MANAGERS",
  "CONSTRUCTION MANAGERS",
  "CONSTRUCTION LOGISTICIANS",
  "SUPPLY CHAIN ANALYSTS",
  "COST BENEFIT ANALYSTS",
  "CRITICAL PATH ANALYSTS",
  "COMMUNITY OUTREACH CONSULTANTS",
  "SURVEYORS",
  "FIELD DATA COLLECTION TECHNICIANS",
  "PERMITING CONSULTANTS",
  "ENVIRONMENTAL COMPLIANCE CONSULTANTS",
]

export default function Team() {

  return (
    <section className="capabilities-item-utility-team">
      <div className='container mx-auto px-32 pt-10 pb-20'>
        <div className="text-2xl md:text-3xl my-10">
          A TEAM OF OVER 3,000 PROFESSIONALS
        </div>
        {
          professionals.map((item, idx) => (
            <span className="text-xl text-white mx-4 my-8 role">
              {item}&nbsp;&nbsp;
              {
                idx === professionals.length - 1 ? <></> : "|"
              }
            </span>   
          ))
        }
      </div>
    </section>
  )
} 