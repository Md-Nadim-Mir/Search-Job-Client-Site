import { Link, useLoaderData } from "react-router-dom";


const All_Jobs = () => {

    let jobs = useLoaderData();



    return (
        <div className="md:mx-10 my-10">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>


                            <th> <p className="font-extrabold text-[16px] ">Job Post</p> </th>
                            <th><p className="font-extrabold text-[16px]">Job Title</p></th>
                            <th><p className="font-extrabold text-[16px]">Posting Date</p></th>
                            <th><p className="font-extrabold text-[16px]">Deadline</p></th>
                            <th><p className="font-extrabold text-[16px] lg:ml-14 md:ml-8 ml-5"> Details</p></th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}

                        {
                            jobs.map(table => <tr key={table._id}> <td>
                                <div className="flex items-center space-x-3">

                                    <div>
                                        <p className='text-[17px] font-bold'>{table.PostedBy}</p>

                                    </div>
                                </div>
                            </td>
                                <td>
                                    <h2 className="card-title font-bold text-[#80107B] text-[19px]">{table.JobTitle}</h2>

                                </td>

                                <td>
                                    <p className='text-[14px] font-semibold'>{table.PostingDate}</p>

                                </td>

                                <td>
                                    <p className='text-[14px] font-semibold'>{table.ApplicationDeadline}</p>
                                </td>

                                <th>

                              

                                    <Link to={`/jobs-details/${table.category}/${table._id}`}>
                                        <button className="btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">View Details</button>
                                    </Link>

                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default All_Jobs;

