import { useLoaderData } from "react-router-dom";

import ReactToPdf from 'react-to-print'
import { FaDownload } from 'react-icons/fa';
import { useRef } from "react";


const Applied_Jobs_details = () => {

    let ref = useRef();

    let singleJobInfo = useLoaderData();

    let { PostedBy, JobTitle, PostingDate, ApplicationDeadline, SalaryRange, ApplicantsNumber, ImageURL, category } = singleJobInfo;



    return (
        <div className="md:mx-10">

            <ReactToPdf trigger={() => <div className="text-right mt-10">
                <button className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-4 text-center mx-2"><FaDownload></FaDownload>download job circular</button>
            </div>} content={() => ref.current} />

            <div ref={ref}>

                <img className="w-full h-[70vh] " src={ImageURL} alt="" />

                <div className="py-5">

                    <h1 className="font-extrabold md:text-3xl text-[#8C53FA] text-center pb-10 pt-10">Job title : {JobTitle}</h1>

                    <div className="px-5 py-10 font-bold">

                        <p>Vacancy : {ApplicantsNumber}</p>
                        <p>Salary range : {SalaryRange}</p>
                        <p>Job category : {category}</p>
                        <p>Posting date : {PostingDate}</p>
                        <p>Deadline end : {ApplicationDeadline}</p>
                        <p className="font-extrabold text-xl">Company name : {PostedBy}</p>

                    </div>

                    <div className="px-5 py-5">

                        <h1 className="font-bold text-xl">Job Description : </h1>

                        <p className="font-semibold py-4">Are you a passionate <span className="font-extrabold">{JobTitle}</span> looking to join a dynamic and innovative team? <span className="font-extrabold">{PostedBy}</span> is seeking experienced <span className="font-extrabold">{JobTitle}</span> to help us create cutting-edge solutions for our clients. As a <span className="font-extrabold">{JobTitle}</span>, you will be responsible for designing, coding, testing, and deploying software applications. You will work on various projects, collaborate with cross-functional teams, and be involved in all aspects of the software development lifecycle.</p>
                    </div>

                    <div className="px-5 py-5">

                        <h1 className="font-bold text-xl">Key Responsibilities : </h1>

                        <p className="font-semibold py-4">1. Troubleshoot and debug software defects.<br />2. Develop software solutions that meet client needs.<br />3. Write clean, maintainable code and perform code reviews.<br />4. Stay up to date with industry best practices and emerging technologies.<br />5. Collaborate with product managers and designers to understand project requirements.<br /></p>

                    </div>

                    <div className="px-5 py-5">

                        <h1 className="font-bold text-xl">Qualifications : </h1>

                        <p className="font-semibold py-4">1. Bachelor's degree in Computer Science or related field.<br />2. Proven experience in software development using languages like Java, C++, or Python.<br />3. Strong problem-solving skills.<br />4. Excellent communication and teamwork abilities.<br />5. Experience with agile development methodologies is a plus.</p>

                    </div>

                    <div className="px-5 py-5">

                        <h1 className="font-bold text-xl">Company Information : </h1>

                        <p className="font-semibold py-4"><span className="font-extrabold">{PostedBy}</span> is a leading IT solutions provider dedicated to delivering innovative technology services and solutions to clients worldwide. We are known for our commitment to excellence, a diverse and inclusive work culture, and a track record of delivering high-impact projects. Our team comprises some of the brightest minds in the industry, and we take pride in fostering an environment that encourages continuous learning and growth.</p>

                    </div>

                    <div className="px-5 py-5">

                        <h1 className="font-bold text-xl">How to Apply : </h1>

                        <p className="font-semibold py-4">To apply for this position, please email your resume and a cover letter outlining your relevant experience and skills to hr@abctech.com. Please include Software Developer Application - [Your Name] in the email subject line.</p>

                    </div>

                    <div className="px-5 py-5">

                        <h1 className="font-bold text-xl">Contact Information : </h1>

                        <p className="font-semibold py-4">For any inquiries related to this job posting or the application process, please contact our HR department at:<br />

                            Email: hr@abctech.com<br />
                            Phone: (555) 555-5555<br />

                            We look forward to receiving your applications and exploring the possibility of you joining our team at <span className="font-extrabold">{PostedBy}</span>.</p>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default Applied_Jobs_details;