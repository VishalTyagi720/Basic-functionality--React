import React, { useEffect, useState } from "react";

const PAGE_SIZE = 6

function JobPosting ({by, time, title, url}) {
    return (
        <div>
            <h2>
                {url ? <a href={url} target="_blank" rel="noreferrer">{title}</a> : title }
            </h2>
            <p> By {by} &middot; {new Date(time * 1000).toLocaleString()}</p>
        </div>
    )
}


function JobBoard() {

    const [data, setdata] = useState([]);
    const[jobs, setjobs] = useState([])
    const [page, setpage] = useState(0)
    const [fetchingJobDetails, setfetchingJobDetails] = useState(false)

    const fetchJobsId = async (currpage) => {
        const response =  await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
        let jobs = await response.json()
        setdata(jobs);

        const start = currpage * PAGE_SIZE;
        const end = start + PAGE_SIZE;

        return jobs.slice(start, end)
    }

    const fetchJobs = async (currpage) => {
        const jobIdsForSinglePage = await fetchJobsId(currpage);

        setfetchingJobDetails(true);
        const jobsForSinglePage = await Promise.all(
            jobIdsForSinglePage.map((jobId) =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
              .then((res) => res.json())
            )
        )
        setjobs(...jobs, jobsForSinglePage)
        console.log(jobs)


        setfetchingJobDetails(false);
    }

    const changePage = () => {
        setpage(page + 1);
    }

    useEffect(() => { 
        fetchJobs(page);
    },[page])


    return (
        <div>
            <h1>Hacker News Job Board</h1>
            {data === null ? (
                <p>Loading...</p>) : (
                    <div>
                        <div>
                            {jobs.map((job) => {
                                return (<JobPosting key={job.id} {...job}/>)
                            })}
                        </div>
                        {/* {jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < data.length && (
                            <button onClick={changePage} disabled={fetchingJobDetails}>{fetchingJobDetails ? 'Loading...' : 'Load More Jobs'}</button>
                        )} */}
                        <button onClick={changePage} disabled={fetchingJobDetails}>Load More Jobs</button>

                    </div>
            )}
        </div>
    )
}



export default JobBoard;