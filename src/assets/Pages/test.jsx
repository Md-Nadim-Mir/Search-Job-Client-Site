<div className="grid grid-cols-1 lg:grid-cols-2">




{
   myJobs.map(one => <div key={one._id} className="m-5 px-5 py-10 border-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-16 ">

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

               

                <Link to={`/update/${one.category}/${one._id}`}>

                    <button className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-4"><FcInfo className="text-xl font-bold text-[#FD4D7A]"></FcInfo>Update</button>
                </Link>

               

                <button  onClick={() => handleDelete(one._id)}   className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] my-4">Delete <RiDeleteBin6Fill className="text-xl font-bold text-[#FD4D7A]"></RiDeleteBin6Fill></button>



            </div>
        </div>

    </div>)
}



</div>
