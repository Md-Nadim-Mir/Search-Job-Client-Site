import {  useContext } from "react";
import { Form, Link, useNavigate } from 'react-router-dom';

import { FcGoogle} from 'react-icons/fc';
import { FaGithub} from 'react-icons/fa';

import swal from 'sweetalert';

// import axios from 'axios';



import './Register_Login.css'

import { AuthContext } from '../Components/AuthProvider';
// import { useContext } from 'react';

const Register = () => {

    

    let { createUser, googleLoginPopUP, githubLoginPopUP, name_image } = useContext(AuthContext);

    // navigate other page
    let navigate=useNavigate();


    //  handleRegister function
    let handleRegister = (e) => {

        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;
        let name = e.target.name.value;
        let photo = e.target.photo.value;
        let terms = e.target.terms.checked;

        // let fullName = name + name1;

        if (!terms) {

            swal("Try Again!", "Please follow our terms and condition!", "error");
            return;
        }

        if (password) {

            if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/).test(password)) {


                swal("Try Again!", "Password must be contain at least one capital letter ,one special character and 6 characters long!", "error");

                return;

            }


        }

        else {

            swal("Try Again!", "Password is not match!", "error");
            return;
        }

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {

                let user = result.user;
                console.log(user);

                swal("Good Job!", "User created succesccefully!", "success");

                // update profile and name

                name_image(name, photo)
                    .then((result) => {
                        // Profile updated!
                        let user = result.user;
                        console.log(user)

                        
                        
                    })

                    .catch((error) => {
                        // An error occurred
                        console.log(error);
                    });

                // //  form clear
                // e.target.reset();
                navigate('/');

                // // go to home page when registration is complete
               

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
                swal("Try Again!", "Already use this email for create an account!", "error");
            })





    }



    // handle Google with popup

    let handleGoogle = () => {

        googleLoginPopUP()
            .then(result => {
                console.log(result.user)

                swal("Good Job!", "User login successfuly!", "success");

                // go to home page
                navigate('/');
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
                navigate('/');
            })

            .catch(error => {

                console.log(error)

            })

    }

    return (

      

        <div className=' pt-20 pb-14'>



            <div className='text-white shadow-2xl card xl:mx-80 lg:mx-28 md:mx-10 mx-5 border-2 pt-5 pb-5 '>

                <h1 className='text-3xl font-bold text-center pt-10 text-black'>Create an account </h1>

                <Form onSubmit={handleRegister} className='py-10'>

                    {/* row 1 */}

                    <div className='flex flex-col md:flex-row justify-center gap-x-12'>


                        {/* name */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-5 text-black'>Name </label>

                            <input type="text" name="name" placeholder='Enter your full name' id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white' />

                        </div>


                        {/* photo */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-5 text-black'>Photo URL </label>

                            <input type="text" name="photo" placeholder='Enter your photo URL' id="" className='text-base  md:w-full p-2 rounded-lg dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white' />

                        </div>

                    </div>


                    {/* row 2 */}

                    <div className='flex flex-col md:flex-row justify-center gap-x-12'>


                        {/* email */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-5 text-black'>Email </label>

                            <input type="email" name="email" placeholder='Enter your email' id="" required className='text-base md:w-full   p-2 rounded-lg dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white' />

                        </div>


                        {/* password*/}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-5 text-black'>Password </label>

                            <input type="password" name="password" placeholder='Enter your password' id="" required className='text-base md:w-full p-2 rounded-lg dark:text-black text-white font-bold  bg-[#7b6969] dark:bg-white' />

                        </div>

                    </div>

                    {/* row-3 */}

                    <div className=' flex   gap-4 mb-2 px-4 md:px-20 lg:px-32 xl:px-28  pt-4 text-[14px] md:text-[20px]'>

                        <input type="checkbox" name="terms" id="term"  />
                        <label className='font-bold text-black' htmlFor="term">Accept our <a className='underline' href="">terms and condition.</a></label>

                    </div>

                    {/* row-4 */}
                    <div className='flex justify-center mt-12 mb-10'>

                        <button className='btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA] text-[18px]'>
                            <input type="submit" value='Register' className='p-2 font-bold' name="" id="" />
                        </button>

                    </div>

                    {/* border */}

                    <div className='border-t-2 border-orange-400 md:mx-24 mx-5'>

                    </div>


                    {/* row-5   */}

                    <div className="mt-5 flex flex-col md:flex-row text-center gap-2  justify-center  pt-10">

                       

                         <p><button onClick={handleGoogle} className="btn bg-[#6E325C] font-bold text-white hover:bg-[#6E325C] p-2"><FcGoogle className='text-3xl font-bold'></FcGoogle> Register With Google</button></p>

                       


                        <p><button onClick={handleGithub} className="btn bg-[#6E325C] font-bold text-white hover:bg-[#6E325C] p2-2  "><FaGithub className='text-3xl text-black font-bold'></FaGithub> Register With Github</button></p>


                    </div>



                    {/* row-6 */}

                    <p className="font-bold text-center  pt-4 text-[14px] md:text-[20px] text-black">Already Have an account ? Please <Link className="text-[#8C53FA] font-extrabold" to='/login'> Login</Link> </p>

                </Form>

            </div>




        </div>


    );
};

export default Register;