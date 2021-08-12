import React, { useContext } from "react"
import "./styles.sass"
import Header from "./components/Header"
import JobList from "./components/JobList"
import { JobThemeContext } from "./JobThemeContext"
import FilterBar from "./components/FilterBar"

const App = () => {
  const [state, setState] = useContext(JobThemeContext)

  return (
    <div className="App">
      <Header /> 
      { state.filters.length !== 0 && <FilterBar/> }
      <JobList />
    </div>
  );
}

export default App;
