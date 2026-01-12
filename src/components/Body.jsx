
import JobList from './JobList.jsx'


function Body({ jobs, filter, setFilter }) {

    const filterJobs = jobs.filter(job => {
        if (filter === "all jobs") return true
        return job.status === filter
    })
    return (
        <div className="flex flex-1 bg-yellow-100">
            <aside className="w-64 bg-blue-100 border-4 p-4 border-red-200">
                <nav className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase">
                        Navigation
                    </h3>
                    <ul className="space-y-2 ">
                        <li
                            onClick={() => setFilter("all jobs")}
                            className={`cursor-pointer text-sm font-medium bg-green-200  px-7 py-2 ${filter === 'all jobs'
                                ? 'font-semibold bg-green-300'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            All Jobs
                        </li>
                        <li
                            onClick={() => setFilter('Shortlisted')}
                            className={`cursor-pointer text-sm font-medium bg-green-200  px-7 py-2 ${filter === 'Shortlisted'
                                ? 'font-semibold bg-green-300'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Shortlisted
                        </li>

                        <li
                            onClick={() => setFilter('Applied')}
                            className={`cursor-pointer text-sm font-medium bg-green-200 px-7 py-2 ${filter === 'Applied'
                                ? 'font-semibold bg-green-300'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Applied
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-3 bg-green-200">
                <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                    <JobList jobs={filterJobs} />
                </div>
            </main>
        </div>


    )
}

export default Body