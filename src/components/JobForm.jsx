
import { useState } from "react"
function JobForm({ onAddJob }) {
    const [company, setCompany] = useState("")
    const [role, setRole] = useState("")
    const [location, setLocation] = useState("")
    const [status, setStatus] = useState("Applied")
    const [dateApplied, setDateApplied] = useState("")
    const [deadline, setDeadline] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newJob = {
            id: Date.now(),
            company,
            role,
            location,
            status,
            dateApplied,
            deadline
        }

        onAddJob(newJob)

        setCompany("")
        setRole("")
        setLocation("")
        setStatus("Applied")
        setDateApplied("")
        setDeadline("")

    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="company name" />
            <input value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="job role" />
            <input value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="location" />
            <select value={status}
                onChange={(e) => setStatus(e.target.value)}>

                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>

            <input value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
                placeholder="date applied" />

            <input value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="deadline" />

            <button>Add Job</button>
        </form>
    )
}

export default JobForm