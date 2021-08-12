import React, { useContext } from "react"
import { JobThemeContext } from "../JobThemeContext"

const FilterBar = () => {
  const [ state, setState ] = useContext(JobThemeContext)

  function clearTags() {
    setState(prevState => ({ filters: [], tags: [...prevState.tags] }) )
  }

  function removeFilter(e) {
    setState(prevState => ({ ...prevState, filters: [...prevState.filters.filter(item => item !== e.target.previousElementSibling.textContent)] }))
  }

  return (
    <div className="filter-bar">
      <div className="filter-bar-items">
        { 
          state.filters.map(item => 
            <div className="filter-bar-group">
              <span className="label">{item}</span>
              <button onClick={removeFilter} className="label-del">X</button>
            </div>
            )
        }
      </div>
      <a href="#" onClick={clearTags} className="filter-bar-btn">Clear</a>
    </div>
  )
}

export default FilterBar