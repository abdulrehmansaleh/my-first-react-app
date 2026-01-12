import { useState } from 'react'

function JobList({ jobs }) {
    const [selectedJob, setSelectedJob] = useState(null)

    if (jobs.length === 0) {
        return <p>No jobs added yet.</p>
    }

    const handleApply = (job) => {
        setSelectedJob(job)
    }

    const closeModal = () => {
        setSelectedJob(null)
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">ID</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Company</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Role</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Location</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Date Applied</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Deadline</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job.id} className="border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer">
                                <td className="px-3 py-2 text-sm text-slate-700">{job.id}</td>
                                <td className="px-3 py-2 text-sm text-slate-700">{job.company}</td>
                                <td className="px-3 py-2 text-sm text-slate-700">{job.role}</td>
                                <td className="px-3 py-2 text-sm text-slate-700">{job.location}</td>
                                <td className="px-3 py-2 text-sm">
                                    <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs font-medium">{job.status}</span></td>
                                <td className="px-3 py-2 text-sm text-slate-700">{job.dateApplied}</td>
                                <td className="px-3 py-2 text-sm text-slate-700">{job.deadline}</td>
                                <td onClick={() => handleApply(job)} className="px-3 py-2 text-sm text-slate-700 bg-blue-300 hover:bg-blue-400 text-center cursor-pointer">Apply</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedJob && (
                <div className="rounded fixed bg-white max-w-max mr-5 p-6 border-gray-500 shadow-lg space-y-2 space-x-2">

                    <h1 className='text-xl font-bold text-blue-300'>{selectedJob.role}</h1>
                    <h2>{selectedJob.company}</h2>
                    <p>Description: <br></br>{selectedJob.description}</p>
                    <p>Requirements: <br></br>{selectedJob.requirements}</p>
                    <button className='bg-blue-200 hover:bg-blue-300 p-3 rounded' onClick={closeModal}>Close</button>
                    <button className='bg-blue-200 hover:bg-blue-300 p-3 rounded' onClick={() => alert("Application Submitted")}>Submit Application</button>
                </div>
            )}


        </>
    )
}

export default JobList

