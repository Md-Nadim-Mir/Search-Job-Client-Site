import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
// import axios from 'axios';



const Categories_Tab = ({ jobs }) => {
    // console.log(jobs)

    const TabItem = styled(Tab)`
  padding: 10px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: #80107B; // Default text color
  &.react-tabs__tab--selected {
    border-bottom: 2px solid blue; // Change the color of the active tab's bottom border
    color:#ffffff; // Change the text color for the active tab
    background-color: #8C53FA;
  }
`;

    //    tab functionality
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTabIndex(index);
    }

    // tab functionality


    // data fetch start 

    // on site category 


    let [siteJob, setOnSiteJob] = useState([]);


    useEffect(() => {

        fetch(`https://server-site-kohl-ten.vercel.app/jobs/on_site_job`)
            .then(res => res.json())
            .then(data => setOnSiteJob(data))

    }, [])


    // remote-job

    let [remoteJob, setRemoteJob] = useState([]);


    useEffect(() => {

        fetch(`https://server-site-kohl-ten.vercel.app/jobs/Remote_Job`)
            .then(res => res.json())
            .then(data => setRemoteJob(data))

    }, [])



    // hybrid job

    let [hybridJob, setHybridJob] = useState([]);


    useEffect(() => {

        fetch(`https://server-site-kohl-ten.vercel.app/jobs/Hybrid_Job`)
            .then(res => res.json())
            .then(data => setHybridJob(data))

    }, [])

    // part time job

    let [partTimeJob, setPartTimeJob] = useState([]);


    useEffect(() => {

        fetch(`https://server-site-kohl-ten.vercel.app/jobs/Part_Time_Job`)
            .then(res => res.json())
            .then(data => setPartTimeJob(data))

    }, [])


    // data fetch  end

    return (
        <div className='md:mx-10  text-[#f4b9a4] my-2'>
            <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect} className=''>
                <TabList className='text-center py-5 font-extrabold md:font-bold text-base md:text-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center xl:px-40 lg:px-20 mx-5'>
                    <TabItem>All Jobs</TabItem>
                    <TabItem>On Site Job</TabItem>
                    <TabItem>Remote Job</TabItem>
                    <TabItem>Hybrid</TabItem>
                    <TabItem>Part Time</TabItem>
                </TabList>

                {/* all jobs */}

                <TabPanel className='text-black'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-10 px-2 py-2'>
                        {
                            jobs.map(single => <Link to={`/jobs-details/${single.category}/${single._id}`} key={single._id}><div className="card w-full  shadow-2xl flex flex-col rounded-2xl">

                                <figure ><img className="w-full h-[180px]" src={single.ImageURL} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#80107B] text-[19px]">{single.JobTitle}</h2>

                                    <p className='text-[14px] font-semibold'>Vacancy: {single.ApplicantsNumber}</p>

                                    <p className='text-[14px] font-semibold'>Salary: {single.SalaryRange}</p>


                                    <p className='text-[14px] font-semibold'>Posting Date : {single.PostingDate}</p>

                                    <p className='text-[14px] font-semibold'>Deadline end : {single.ApplicationDeadline}</p>


                                    <p className='text-[15px] font-bold'>Category : {single.category}</p>



                                    <p className='text-[17px] font-bold'>Post : {single.PostedBy}</p>

                                    <div className="card-actions pt-8 pb-2">
                                        <button className="btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">View Details</button>
                                    </div>


                                </div>
                            </div>
                            </Link>)
                        }
                    </div>
                </TabPanel>

                {/* on site job */}

                <TabPanel className='text-black'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-10 px-2 py-2'>
                        {
                            siteJob.map(single => <Link to={`/jobs-details/${single.category}/${single._id}`} key={single._id}><div className="card w-full  shadow-2xl flex flex-col rounded-2xl">

                                <figure ><img className="w-full h-[180px]" src={single.ImageURL} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#80107B] text-[19px]">{single.JobTitle}</h2>

                                    <p className='text-[14px] font-semibold'>Vacancy: {single.ApplicantsNumber}</p>

                                    <p className='text-[14px] font-semibold'>Salary: {single.SalaryRange}</p>


                                    <p className='text-[14px] font-semibold'>Posting Date : {single.PostingDate}</p>

                                    <p className='text-[14px] font-semibold'>Deadline end : {single.ApplicationDeadline}</p>


                                    <p className='text-[15px] font-bold'>Category : {single.category}</p>



                                    <p className='text-[17px] font-bold'>Post : {single.PostedBy}</p>

                                    <div className="card-actions pt-8 pb-2">
                                        <button className="btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">View Details</button>
                                    </div>


                                </div>
                            </div>
                            </Link>)
                        }
                    </div>
                </TabPanel>

                {/* remonte job */}

                <TabPanel className='text-black'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-10 px-2 py-2'>
                        {
                            remoteJob.map(single => <Link to={`/jobs-details/${single.category}/${single._id}`} key={single._id}><div className="card w-full  shadow-2xl flex flex-col rounded-2xl">

                                <figure ><img className="w-full h-[180px]" src={single.ImageURL} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#80107B] text-[19px]">{single.JobTitle}</h2>

                                    <p className='text-[14px] font-semibold'>Vacancy: {single.ApplicantsNumber}</p>

                                    <p className='text-[14px] font-semibold'>Salary: {single.SalaryRange}</p>


                                    <p className='text-[14px] font-semibold'>Posting Date : {single.PostingDate}</p>

                                    <p className='text-[14px] font-semibold'>Deadline end : {single.ApplicationDeadline}</p>


                                    <p className='text-[15px] font-bold'>Category : {single.category}</p>



                                    <p className='text-[17px] font-bold'>Post : {single.PostedBy}</p>

                                    <div className="card-actions pt-8 pb-2">
                                        <button className="btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">View Details</button>
                                    </div>


                                </div>
                            </div>
                            </Link>)
                        }
                    </div>
                </TabPanel>


                {/* hybrid */}

                <TabPanel className='text-black'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-10 px-2 py-2'>
                        {
                            hybridJob.map(single => <Link to={`/jobs-details/${single.category}/${single._id}`} key={single._id}><div className="card w-full  shadow-2xl flex flex-col rounded-2xl">

                                <figure ><img className="w-full h-[180px]" src={single.ImageURL} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#80107B] text-[19px]">{single.JobTitle}</h2>

                                    <p className='text-[14px] font-semibold'>Vacancy: {single.ApplicantsNumber}</p>

                                    <p className='text-[14px] font-semibold'>Salary: {single.SalaryRange}</p>


                                    <p className='text-[14px] font-semibold'>Posting Date : {single.PostingDate}</p>

                                    <p className='text-[14px] font-semibold'>Deadline end : {single.ApplicationDeadline}</p>


                                    <p className='text-[15px] font-bold'>Category : {single.category}</p>



                                    <p className='text-[17px] font-bold'>Post : {single.PostedBy}</p>

                                    <div className="card-actions pt-8 pb-2">
                                        <button className="btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">View Details</button>
                                    </div>


                                </div>
                            </div>
                            </Link>)
                        }
                    </div>

                </TabPanel>

                {/* part time */}
                <TabPanel className='text-black'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-10 px-2 py-2'>
                        {
                            partTimeJob.map(single => <Link to={`/jobs-details/${single.category}/${single._id}`} key={single._id}><div className="card w-full  shadow-2xl flex flex-col rounded-2xl">

                                <figure ><img className="w-full h-[180px]" src={single.ImageURL} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title font-bold text-[#80107B] text-[19px]">{single.JobTitle}</h2>

                                    <p className='text-[14px] font-semibold'>Vacancy: {single.ApplicantsNumber}</p>

                                    <p className='text-[14px] font-semibold'>Salary: {single.SalaryRange}</p>


                                    <p className='text-[14px] font-semibold'>Posting Date : {single.PostingDate}</p>

                                    <p className='text-[14px] font-semibold'>Deadline end : {single.ApplicationDeadline}</p>


                                    <p className='text-[15px] font-bold'>Category : {single.category}</p>



                                    <p className='text-[17px] font-bold'>Post : {single.PostedBy}</p>

                                    <div className="card-actions pt-8 pb-2">
                                        <button className="btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">View Details</button>
                                    </div>


                                </div>
                            </div>
                            </Link>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};
export default Categories_Tab;
