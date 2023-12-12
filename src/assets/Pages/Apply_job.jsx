import { useContext, useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import swal from 'sweetalert';


const Apply_job = () => {

    let navigate = useNavigate();

    let info = useLoaderData();

    let { user } = useContext(AuthContext);

    let [name, setName] = useState(user.displayName);

    // console.log(user.displayName)

    let { email, PostedBy, JobTitle, PostingDate, ApplicationDeadline, SalaryRange, ApplicantsNumber, ImageURL, category } = info;


    // current date finding

    let currentDate = new Date();

    // Extract year, month, and day
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are zero-indexed (0-11).
    let day = currentDate.getDate();

    // Format the date as a string (e.g., "2023-11-08")
    let formattedDate = `${year}-${month}-${day}`;



    let handleJob = (e) => {

        e.preventDefault();

        //   let name= e.target.Name.vlaue;
        let gmail = e.target.email.value;
        let resume = e.target.resume.value;

        let applicantInfo = { gmail, resume, name, PostedBy, JobTitle, PostingDate, ApplicationDeadline, SalaryRange, ApplicantsNumber, ImageURL, category };

        // console.log(applicantInfo);


        console.log('now date and deadline', formattedDate, ApplicationDeadline);

        let today = new Date(formattedDate);
        let deadline = new Date(ApplicationDeadline);

        if (email === gmail) {

            swal("Alert!", "You Can't apply your posted job!", "warning");
            navigate('/')

        }
        else if (today>deadline) {

            swal("Alert!", "Job Deadline is Over!", "warning");
            navigate('/')


        }

        else {
            fetch('https://server-site-kohl-ten.vercel.app/appliedJob', {

                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(applicantInfo)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.insertedId) {

                        swal("Good job!", "Apply complete Successfully!", "success");
                        navigate('/')
                        e.target.reset();
                    }
                })
        }

    }




    return (

        <div className="md:mx-10 mx-2">
            <div className="text-center mx-2 md:mx-14 lg:mx-24 xl:mx-60   rounded-2xl">

                <h1 className="py-14 text-2xl md:text-4xl font-extrabold text-[#8C53FA]">Job name : {info.JobTitle}</h1>


                {/* */}

                <Form onSubmit={handleJob} className="py-8 md:px-12">

                    {/* row 1 */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" defaultValue={user.displayName} name='displayName' className="input input-bordered text-black font-bold  " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user.email} name='email' placeholder="Enter Food Price" className="input input-bordered text-black font-bold  " required />
                        </div>
                    </div>




                    {/* {row 2} */}



                    {/* {row 4} */}

                    <div className="grid grid-cols-1 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume Link</span>
                            </label>

                            <input type="text" name='resume' placeholder="Enter Resume Link" className="input input-bordered text-black font-bold " required />
                        </div>




                    </div>


                    <div>




                        <button className='btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-5'>

                            <input type="submit" name="" value='Sumbit' id="" />

                        </button>





                    </div>



                </Form>


            </div>
        </div>
    );
};

export default Apply_job;