import React, { useEffect, useState, useContext } from "react"
import { JobThemeContext } from "../JobThemeContext"
import Job from "./Job"

const JobList = () => {

  const [state, setState] = useContext(JobThemeContext)
  const [jobState, setJobs] = useState([])
  const [tagState, setTags] = useState({ tags: [] })


  useEffect(() => {
    async function getJobs() {
      const res = await fetch("./data.json")
      const data = await res.json()
      await setJobs(data)
  
      await setTags(() => {
        return {
          tags: [...jobState.map(item => {
            
            return `${item.role}, ${item.level}, ${item.languages.join(",")}, ${item.tools.join(",")}`
          })]
        }
      })
    }

    getJobs()
    }, [jobState])

  function filterJobs(item, i) {

    if (state.filters.length !== 0) {

      if (state.filters.includes(item.level)) {
        return item
      }
  
      if (state.filters.includes(item.role)) {
        return item
      }
      
    } else {
      return item
    }


  }

  return (
    <div className="jobs">
      {
        jobState.filter(filterJobs).map((item, i) => <Job key={i} company={item.company} contract={item.contract} featured={item.featured} languages={item.languages} level={item.level} location={item.location} logo={item.logo} isNew={item.new} position={item.position} postedAt={item.postedAt} role={item.role} tools={item.tools} />)
      }
    </div>
  )
}

export default JobList