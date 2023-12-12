import { useContext } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import swal from 'sweetalert';

const Update = () => {

    let singleData=useLoaderData();

    let navigate=useNavigate();

    let {_id,PostedBy, email, JobTitle, PostingDate, ApplicationDeadline, SalaryRange, ApplicantsNumber, ImageURL}=singleData;

    let {user}=useContext(AuthContext);


    let handleUpdateJobs = (e) => {

        e.preventDefault();

        e.preventDefault();

        let PostedBy=user.displayName;
        let email=user.email;
        let category= e.target.category.value;
        let JobTitle = e.target.JobTitle.value;
        let SalaryRange = e.target.SalaryRange.value;
        let ApplicantsNumber = e.target.ApplicantsNumber.value;
        let PostingDate = e.target.PostingDate.value;
        let ApplicationDeadline = e.target.ApplicationDeadline.value;
        let ImageURL = e.target.ImageURL.value;


        let job={email,PostedBy,category,JobTitle,SalaryRange,ApplicantsNumber,PostingDate,ApplicationDeadline,ImageURL};


        console.log(job);

        


        // post method work 

        fetch(`https://server-site-kohl-ten.vercel.app/jobs/${_id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
               

                if (data.modifiedCount) {

                    swal("Good job!", "Job update Successfully!", "success");
                     
                    navigate('/')
                   

                }
            })



    }

    return (
        <div>
            <div className="text-center mx-2 md:mx-14 lg:mx-24 xl:mx-60   rounded-2xl shadow-2xl my-12">

                <h1 className="py-14 text-3xl md:text-4xl font-extrabold text-[#8C53FA]">Update Jobs</h1>


                <Form onSubmit={handleUpdateJobs} className="py-8 px-12">

                    {/* row 1 */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Post Person Name</span>
                            </label>

                            <input type="text" name='name' defaultValue={PostedBy} className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Post Person Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={email}  className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>




                    {/* {row 2} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category </span>
                            </label>



                            <select defaultValue={singleData.category} className="p-3 rounded-md input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" name="category" id="">

                                <option className="font-bold"></option>
                                <option className="font-bold">on_site_job</option>
                                <option className="font-bold">Hybrid_Job</option>
                                <option className="font-bold">Remote_Job</option>
                                <option className="font-bold">Part_Time_Job</option>

                            </select>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title :</span>
                            </label>
                            <input type="text" name='JobTitle' defaultValue={JobTitle} placeholder="Job Title" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>

                    {/* row 3 */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range </span>
                            </label>

                            <input type="text" name='SalaryRange' defaultValue={SalaryRange} placeholder="Give Salary Range" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Vacancy </span>
                            </label>
                            <input type="number" name='ApplicantsNumber' defaultValue={ApplicantsNumber} placeholder="Applicants Amount" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>


                    {/* {row 4} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Posting Date</span>
                            </label>

                            <input type="date" defaultValue={PostingDate} name='PostingDate' placeholder="Posting Time" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline End</span>
                            </label>
                            <input type="date" defaultValue={ApplicationDeadline} name='ApplicationDeadline' placeholder="Apply Last Date" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>


                    {/* {row 4} */}

                    <div className="grid grid-cols-1 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Banner</span>
                            </label>

                            <input type="text" name='ImageURL' defaultValue={ImageURL} placeholder="Job Banner URL" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>




                    </div>


                    <div>




                        <button className='btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-7'>

                            <input type="submit" name="" value='Update Job' id="" />

                        </button>





                    </div>



                </Form>


            </div>
        </div>
    );
};

export default Update;