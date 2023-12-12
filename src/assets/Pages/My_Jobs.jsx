import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FcInfo } from 'react-icons/fc';
import swal from 'sweetalert';

const My_Jobs = () => {

    let { user } = useContext(AuthContext);
    //   console.log(user.email);

    const url = `https://server-site-kohl-ten.vercel.app/jobs?email=${user.email}`
    // console.log(url)

    let [myJobs, setMyJobs] = useState([]);

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setMyJobs(data))

        //   axios.get(url,{withCredentials:true})
        //   .then(res=>{
        //       setCheckoutDetails(res.data)
        //   })
    }, [url])



    //   handle delete 

    let handleDelete = (_id) => {

        console.log(_id);


        swal({
            title: "Are you sure?",
            text: "You Want to Delete Posted Job!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {

            if (willDelete) {

                fetch(`https://server-site-kohl-ten.vercel.app/jobs/${_id}`, {

                method: 'DELETE'
    
    
            })
                .then(res => res.json())
                .then(data => {
    
                    console.log(data);
    
                    if (data.deletedCount > 0) {
                        swal("Good job!", " Posted Job Deleted Successfully!", "success");
    
                        let remaining = myJobs.filter(single => single._id != _id);
                        setMyJobs(remaining)
    
    
                    }
                })  
            
            }
            
            
            else {
              swal("Your Posted Job is Safe !");
            }
          });

        

    }

    return (
        <div className="pt-5 pb-10 md:mx-10">





            {
                myJobs.length > 0 ? <div>


                    <h1 className="pt-10 pb-10 text-center text-3xl md:text-4xl font-extrabold text-[#8C53FA] "> My Posted Job: {myJobs.length}</h1>


                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>


                                    <th> <p className="font-extrabold text-[16px] ">Job Banner</p> </th>

                                    <th> <p className="font-extrabold text-[16px] ">Job Post By</p> </th>

                                    <th><p className="font-extrabold text-[16px]">Job Title</p></th>

                                    <th><p className="font-extrabold text-[16px] lg:ml-14 md:ml-8 ml-5">Details</p></th>

                                    <th><p className="font-extrabold text-[16px] lg:ml-14 md:ml-8 ml-5">Delete </p></th>
                                </tr>
                            </thead>

                            <tbody className="py-2">
                                {/* row 1 */}

                                {
                                    myJobs.map(table => <tr key={table._id}> <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-24">
                                                    <img src={table.ImageURL} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                        <td>
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



                                            <Link to={`/update/${table.category}/${table._id}`}>
                                                <button className="py-2 h-[60px] btn w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]"><FcInfo className="text-xl font-bold text-[#FD4D7A]"></FcInfo>  update</button>
                                            </Link>

                                        </td>

                                        <td>




                                            <button onClick={() => handleDelete(table._id)} className="btn py-2 h-[60px] w-full text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]"><RiDeleteBin6Fill className="text-xl font-bold text-[#FD4D7A]"></RiDeleteBin6Fill> Delete </button>


                                        </td>

                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>




                </div>

                    :

                    <div className="card shadow-xl mx-2 md:mx-12 my-10 pt-12">

                        <h1 className="text-center font-extrabold text-3xl  text-[#8C53FA] ">No job can be Posted !</h1>

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

export default My_Jobs;