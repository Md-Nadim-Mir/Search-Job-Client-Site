import { Link, NavLink } from "react-router-dom";
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FcInfo } from 'react-icons/fc';
import swal from 'sweetalert';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";

import ReactToPdf from 'react-to-print'
import { FaDownload } from 'react-icons/fa';

// jheeheekek
const Aplied_Jobs = () => {

    let ref=useRef();

    let { user } = useContext(AuthContext)

    // let appliedJobCollection = useLoaderData();

    const url = `https://server-site-kohl-ten.vercel.app/appliedJob?gmail=${user.email}`;

    let [appliedJobCollection, setAppliedJobCollection] = useState([]);

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setAppliedJobCollection(data))

        //   axios.get(url,{withCredentials:true})
        //   .then(res=>{
        //       setCheckoutDetails(res.data)
        //   })
    }, [url])



    let handleDelete = (_id) => {

        console.log(_id);

        swal({
            title: "Are you sure?",
            text: "You Want to Delete Aplied Job!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    fetch(`https://server-site-kohl-ten.vercel.app/appliedJob/${_id}`, {

                        method: 'DELETE'


                    })
                        .then(res => res.json())
                        .then(data => {

                            console.log(data);

                            if (data.deletedCount > 0) {
                                swal("Good job!", " Applied Job Deleted Successfully!", "success");

                                let remaining = appliedJobCollection.filter(single => single._id != _id);
                                setAppliedJobCollection(remaining)


                            }
                        })

                }


                else {
                    swal("Your Applied Job is Safe !");
                }
            });



    }


    return (
        <div className="pt-5 pb-10 md:mx-10">





            {
                appliedJobCollection.length > 0 ? <div>


                    <h1 className="pt-10 pb-10 text-center text-3xl md:text-4xl font-extrabold text-[#8C53FA] "> Cart Add Item: {appliedJobCollection.length}</h1>


                    <div  ref={ref} className="grid grid-cols-1 lg:grid-cols-2">




                        {
                            appliedJobCollection.map(one => <div key={one._id} className="m-5 px-5 py-10 border-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-16 ">

                                <div>
                                    <img className="rounded-lg w-full h-[200px]" src={one.ImageURL} alt="" />
                                </div>

                                <div >

                                    <div className="text-black font-bold py-2">

                                        <h1>Vacancy: {one.ApplicantsNumber}</h1>
                                        <h1>Price: {one.SalaryRange}</h1>
                                        <h1>Post By: {one.PostedBy}</h1>


                                    </div>

                                    <div className="text-black font-bold py-2">


                                        <h1 className="font-extrabold">Price: {one.JobTitle}</h1>


                                    </div>


                                    <div className="flex justify-center md:justify-start gap-2 font-bold">



                                        <Link to={`/applied_jobs_details/${one._id}`}>

                                            <button className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-4"><FcInfo className="text-xl font-bold text-[#FD4D7A]"></FcInfo>Details</button>
                                        </Link>

                                        <button onClick={() => handleDelete(one._id)} className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-4">Delete <RiDeleteBin6Fill className="text-xl font-bold text-[#FD4D7A]"></RiDeleteBin6Fill></button>



                                    </div>
                                </div>

                            </div>)
                        }



                    </div>


                   

                    <ReactToPdf trigger={()=> <div className="text-center mt-10">
                            <button className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-4 text-center"><FaDownload></FaDownload>download</button>
                     </div>} content={()=>ref.current}/>








                </div>

                    :

                    <div className="card shadow-xl mx-2 md:mx-12 my-10 pt-12">

                        <h1 className="text-center font-extrabold text-3xl  text-[#8C53FA] ">No job can be applied !</h1>

                        <NavLink className='flex justify-center py-10' to='/'>

                            <button className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">

                                go to home

                            </button>

                        </NavLink>

                    </div>

            }






        </div>
    );
};

export default Aplied_Jobs;