import React, { createContext, useState } from "react"

const initialState = {
  filters: [],
  tags: []
}
export const JobThemeContext = createContext(initialState)

export const JobContext = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <JobThemeContext.Provider value={[state, setState]}>
      { children }
    </JobThemeContext.Provider>
  )
}