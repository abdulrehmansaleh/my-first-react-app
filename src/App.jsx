
import { useState } from 'react'
import Header from './components/Header.jsx'
import JobList from './components/JobList.jsx'
import JobForm from './components/JobForm.jsx'
import jobsData from './data/jobs.json'
import Body from './components/Body.jsx'




function App() {
  const [jobs] = useState(jobsData)
  const [filter, setFilter] = useState("all jobs")

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <Body jobs={jobs} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default App
