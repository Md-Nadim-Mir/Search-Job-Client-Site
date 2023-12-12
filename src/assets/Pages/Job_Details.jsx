import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Job_Details = () => {

    let info = useLoaderData();
    let { _id, PostedBy, JobTitle, PostingDate, ApplicationDeadline, SalaryRange, ApplicantsNumber, ImageURL, category } = info;


    let handleApply = () => {
        Swal.fire("Please give your resume link!");
    }

    return (

        <div className="md:mx-7 mx-2">

            <h1 className="md:text-4xl lg:text-5xl text-2xl text-center font-extrabold  py-5 text-[#8C53FA]">{JobTitle}</h1>

            <div className="md:m-5 px-2 py-10 border-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-16">

                <div>
                    <img className="rounded-lg w-full h-[300px]" src={ImageURL} alt="" />
                </div>

                <div className="flex flex-col justify-center">

                    <div className="font-bold text-black  py-2">


                        <h1>Vacancy :  {ApplicantsNumber} </h1>
                        <h1>Salary Range : {SalaryRange}</h1>
                        <h1>Posting Date: {PostingDate} </h1>
                        <h1>Application Deadline: {ApplicationDeadline}</h1>


                    </div>


                    <h1 className="text-xl text-black font-bold">Post By :{PostedBy}</h1>




                    <div className="flex justify-center md:justify-start font-bold">



                        <Link onClick={handleApply} to={`/apply_job/${category}/${_id}`}>
                            <button  className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] mt-4">Apply Button</button>

                        </Link>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Job_Details;