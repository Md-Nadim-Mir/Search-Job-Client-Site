import  { useContext } from 'react';



import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import swal from 'sweetalert';
import { Form, Link, useLocation, useNavigate } from "react-router-dom";


import './Register_Login.css'
import  { AuthContext } from '../Components/AuthProvider';

// import axios from 'axios';

const Login = () => {


    // location identify
    let location = useLocation();
    // console.log('login page ', location)

    //  // navigate other page
    let navigate = useNavigate();

    let { loginWithEmailandPassword, googleLoginPopUP, githubLoginPopUP } = useContext(AuthContext)


    // // when successfull login complete go to home page




    let handleLogin = (e) => {

        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        // console.log(email, password);

        loginWithEmailandPassword(email, password)
            .then(result => {

                let handleuser = result.user;
                console.log(handleuser);


                swal("Good job!", "User login successfully!", "success");

            

              

                 navigate(location?.state ? location.state : '/');

              
              
            // let user={email};

           
               
            // // //  generate token 
            // axios.post('http://localhost:3000/jwt',user,{withCredentials:true})
            // .then(res=>{


            //     if(res.data.success){
            //          navigate(location?.state ? location.state : '/');
            //     }


            // })
  



            })

            .catch(error => {

                console.log(error);

                swal("Try Again!", "Provide valid Email or Password!", "error");

            })

    }


    // handle Google with popup

    let handleGoogle = () => {

        googleLoginPopUP()
            .then(result => {
                console.log(result.user)

                swal("Good Job!", "User login successfuly!", "success");

                // go to home page
                // navigate
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {

                console.log(error)

            })

    }


    // handle github with popup

    let handleGithub = () => {

        githubLoginPopUP()
            .then(result => {
                console.log(result.user)
                swal("Good Job!", "User login successfuly!", "success");

                // go to home page
                // navigate

                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {

                console.log(error)

            })

    }


    return (
        <div className=' pt-20 pb-14'>



            <div className='text-white   xl:mx-[380px] lg:mx-60 md:mx-28 mx-5 border-2 pt-5 pb-5 px-5 card card-compact shadow-inner shadow-blue-500'>

                <h1 className='text-3xl font-bold text-center pt-10 text-black'>Login an account </h1>

                <Form onSubmit={handleLogin} className='py-10'>



                    {/* row 2 */}

                    <div className='flex flex-col  items-center'>


                        {/* email */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-5 text-black'>Email </label>

                            <input type="email" name="email" placeholder='Enter your email' id="" required className='text-base  p-2 rounded-lg input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white' />

                        </div>


                        {/* password*/}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-5 text-black'>Password </label>

                            <input type="password" name="password" placeholder='Enter your password' id="" required className='text-base  p-2 rounded-lg input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white' />

                        </div>

                    </div>



                    {/* row-4 */}
                    <div className='flex justify-center mt-12 mb-10'>

                        <button className='btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] text-[18px]'>
                            <input type="submit" value='Login' className='p-2 font-bold' name="" id="" />
                        </button>

                    </div>

                    {/* border */}

                    <div className='border-t-2 border-orange-400 md:mx-24 mx-5'>

                    </div>


                    {/* row-5   */}

                    <div className="mt-5 flex flex-col md:flex-row text-center gap-2  justify-center  pt-10">



                        <p><button onClick={handleGoogle} className="btn bg-[#6E325C] font-bold text-white hover:bg-[#6E325C] p-2"><FcGoogle className='text-3xl font-bold'></FcGoogle> Login With Google</button></p>




                        <p><button onClick={handleGithub} className="btn bg-[#6E325C] font-bold text-white hover:bg-[#6E325C] p2-2  "><FaGithub className='text-3xl text-black font-bold'></FaGithub> Login With Github</button></p>


                    </div>



                    {/* row-6 */}

                    <p className="font-bold text-center  pt-4 text-[14px] md:text-[20px] text-black">New to website ? Please <Link className="text-[#8C53FA] font-extrabold" to='/register'> Register</Link> </p>

                </Form>

            </div>




        </div>
    );
};

export default Login;