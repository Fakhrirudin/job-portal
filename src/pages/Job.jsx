import React from 'react';
import Header from "../jobs/Header"
import SearchBar from "../jobs/SearchBar"
import JobCard from "../jobs/JobCard"
import { useEffect, useState } from "react"
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {db} from "../firebase.config"

const Job = () => {
    const [jobs, setJobs] = useState([]);
    const [customSearch, setCustomSearch] = useState(false);
    const fetchJobs = async() => {
        setCustomSearch(false);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
        // console.log(doc.id, " => ", doc.data());
        tempJobs.push({
            ...job.data(),
            id: job.id,
            postedOn: job.data().postedOn.toDate()
        })
        });
        setJobs(tempJobs);
    }

    const fetchJobsCustom = async (jobCriteria) => {
        console.log("Fetching jobs with criteria:", jobCriteria);
        setCustomSearch(true);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef,
        where("title", "==", jobCriteria.title), 
        where("type", "==", jobCriteria.type),
        where("location", "==", jobCriteria.location),
        where("experience", "==", jobCriteria.experience),
        orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
        // console.log(doc.id, " => ", doc.data());
        tempJobs.push({
            ...job.data(),
            id: job.id,
            postedOn: job.data().postedOn.toDate()
        })
        });
        setJobs(tempJobs);
        console.log("Fetched jobs:", tempJobs);
    }


    useEffect(() => {
        fetchJobs()
    },[])

        
    return (
        <div>
          <Header /> 
          <br />
          <SearchBar fetchJobsCustom={fetchJobsCustom}/>
          {customSearch && 
            <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
              <p className="bg-blue-700 px-10 py-2 rounded-md text-white">Clear Filters</p>
            </button>
          }
          <br />
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      )
};

export default Job;
