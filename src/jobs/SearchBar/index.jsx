import React, { useState } from 'react'

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        type:"",
        location: "",
        experience: "",
    })

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
    }
    

return (
    <div className='flex gap-4 my10 justify-center px-10'>
        <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Pekerjaan</option>
            <option value="Fullstack Developer" >Fullstack Developer</option>
            <option value="Frontend Developer" >Frontend Developer</option>
            <option value="Backend Developer" >Backend Developer</option>
            <option value="Data Analyst" >Data Analyst</option>
            <option value="Data Scientist" >Data Scientist</option>
            <option value="Data Engineer" >Data Engineer</option>
        </select>

        <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Jenis Pekerjaan</option>
            <option value="Kontrak" >Kontrak</option>
            <option value="Full-Time" >Full-Time</option>
            <option value="Part-Time" >Part-Time</option>
        </select>

        <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Lokasi</option>
            <option value="WFO" >WFO</option>
            <option value="Remote" >Remote</option>
            <option value="Hybrid" >Hybrid</option>
        </select>

        <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Pengalaman</option>
            <option value="Senior" >Senior</option>
            <option value="Fresh Graduate" >Fresh Graduate</option>
        </select>
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
)
}

export default SearchBar
