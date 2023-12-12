import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import swal from 'sweetalert';

const Add_Job = () => {

    let navigate =useNavigate();

    let { user } = useContext(AuthContext);

    // current date finding

    let currentDate = new Date();

    // Extract year, month, and day
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are zero-indexed (0-11).
    let day = currentDate.getDate();

    // Format the date as a string (e.g., "2023/11/08")
    let formattedDate = `${year}-${month}-${day}`;

    



    let handleAddJobs = (e) => {

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


        fetch('https://server-site-kohl-ten.vercel.app/jobs', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(job)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.insertedId) {

                swal("Good job!", "New Job Added Successfully!", "success");
                navigate('/')
                e.target.reset();
            }
        })




    }

    return (
        <div>
            <div className="text-center mx-2 md:mx-14 lg:mx-24 xl:mx-60   rounded-2xl shadow-2xl my-12">

                <h1 className="py-14 text-3xl md:text-4xl font-extrabold text-[#8C53FA]">Add Jobs  </h1>


                <Form onSubmit={handleAddJobs} className="py-8 px-12">

                    {/* row 1 */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Post Person Name</span>
                            </label>

                            <input type="text" name='name' defaultValue={user.displayName} className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Post Person Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user.email} className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>




                    {/* {row 2} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category :</span>
                            </label>



                            <select className="p-3 rounded-md input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" name="category" id="">

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
                            <input type="text" name='JobTitle' placeholder="Job Title" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>

                    {/* row 3 */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range </span>
                            </label>

                            <input type="text" name='SalaryRange' placeholder="Give Salary Range" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Vacancy </span>
                            </label>
                            <input type="number" name='ApplicantsNumber' placeholder="Applicants Amount" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>


                    {/* {row 4} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Posting Date</span>
                            </label>

                            <input defaultValue={formattedDate}  name='PostingDate'  className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline End</span>
                            </label>
                            <input type="date" name='ApplicationDeadline' placeholder="Apply Last Date" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>
                    </div>


                    {/* {row 4} */}

                    <div className="grid grid-cols-1 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Banner</span>
                            </label>

                            <input type="text" name='ImageURL' placeholder="Job Banner URL" className="input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white" required />
                        </div>




                    </div>


                    <div>




                        <button className='btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-7'>

                            <input type="submit" name="" value='Add New Job' id="" />

                        </button>





                    </div>



                </Form>


            </div>
        </div>
    );
};

export default Add_Job;