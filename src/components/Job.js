import React, { useContext } from "react"
import { JobThemeContext } from "../JobThemeContext"

const Job = ({ company, contract, featured, languages, level, location, logo, isNew, position, postedAt, role, tools }) => {
  const [state, setState] = useContext(JobThemeContext)


  function addTag(e) {
    if (e.target.classList.contains("job__tags-label") && !state.filters.includes(e.target.textContent)) {
      setState(prevState => {
        return { filters: [...prevState.filters, e.target.textContent], tags: [...prevState.tags]}
      })
    }
  }

  return (
    <div className={`job ${featured && "line"}`}>
      <div className="job__post">
        <img className="job__post-logo" src={`${logo}`}  alt="Company Logo" />
        <div className="job__post-group">
          <div className="job__post-type">
          <p className="job__post-company">{company}</p>
            { isNew && <p className="job__post-new">NEW!</p>}
            { featured && <p className="job__post-featured">FEATURED</p>}
          </div>
          <h1 className="job__post-headline">{position}</h1>
          <div className="job__post-info">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div onClick={addTag} className="job__tags">
        <span className="job__tags-label label">{role}</span>
        <span className="job__tags-label label">{level}</span>
        { languages.map(language => <span className="job__tags-label label">{language}</span>) }
        { tools.map(tool => <span className="job__tags-label label">{tool}</span>) }
      </div>
    </div>
  )
}

export default Job