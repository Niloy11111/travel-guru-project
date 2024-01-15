import { useContext, useState } from "react";
import LoginNavBar from "../../NavBar/LoginNavBar";
import fbIcon from "../../assets/fb.png"
import GoogleIcon from "../../assets/google.png"

import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const [error, setError] = useState('') ;

    const [success , setSuccess] = useState('') ;
   
    const {createUser, signInUser, googleSignIn, facebookSignIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault() ;
        const form = new FormData(e.currentTarget)
        const firstName = form.get('firstName')
        const lastName = form.get('lastName')
        const email = form.get('email')
        const password = form.get('password')
        const confirmPassword = form.get('confirmPassword')

        setError('')
        setSuccess('')

        if(! /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) &&  !password === confirmPassword){
            setError('please password should be Minimum eight characters, at least one letter, one number and one special character')
        }
        else{
            setSuccess('Successfully Logged In')
            createUser(email, password)
            .then(res => {    
             console.log(res.user)
            })
            .catch(error => console.log(error))
             
        }

      
    }

    const handleSignIn = e => {
        e.preventDefault() ;
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        
       signInUser(email, password)
       .then(res => {
        console.log(res.user)

       })
       .catch(error => console.log(error))
    }

    const [toogle, setToogle] = useState(true)

    const handleGoogleRegister = () => {
         googleSignIn()
        .then( res => console.log(res.user) )
        .catch(error => console.log(error))
    }

    const handleFacebookRegister = () => {
        facebookSignIn()
        .then( res => console.log(res.user) )
        .catch(error => console.log(error))
    }


    if(toogle)
    {
        return (
            <div className="mx-32 pt-10">
                <LoginNavBar></LoginNavBar> 
                <div className="flex justify-center mt-16">
    
                   <div>
                   <form onSubmit={handleLogin} className="pl-14 pr-14 pb-6 border border-[#ABABAB] rounded w-[570px]">
                        <h2 className="mb-14 pt-9 font-montserrat text-2xl font-bold">Create an account</h2>
    
                        <div>
                        <input className="outline-none w-full block border-b pb-3 mb-10 border-[#C5C5C5]" type="text" placeholder="First Name" name="firstName" />
    
                            <input className="outline-none w-full block border-b pb-3 mb-10 border-[#C5C5C5]" type="text" placeholder="Last Name" name="lastName" />

                            <input className="outline-none w-full block border-b pb-3 mb-10 border-[#C5C5C5]" type="emial" placeholder="Username or Email" name="email" required/>
    
                            <input className="outline-none w-full block border-b pb-3 mb-10 border-[#C5C5C5]" type="password" placeholder="password" name="password" required/>
    
                            <input className="outline-none w-full block border-b pb-3 mb-7 border-[#C5C5C5]" type="password" placeholder="Confirm password" name="confirmPassword" required/>
                        </div>
    
                        <button className="py-4 mx-auto w-full bg-[#F9A51A]  mb-4 text-base font-montserrat font-medium">
                            Create an account
                        </button>
    
                        <p className="text-center">Already have an account? <a onClick={() => setToogle(! toogle)} className="text-blue-600 cursor-pointer"> Login </a> </p>
                        {
                            error && <p className="text-red-400">{error}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                    </form>
    
                    
                  <div className="flex items-center mt-6 justify-center">
                  <div className="bg-[#AAA] h-[1px] w-[200px]">
                        </div>
                        Or
                        <div className="bg-[#AAA] h-[1px] w-[200px]">
                        </div>
                  </div>
    
                  <div onClick={handleFacebookRegister} className="cursor-pointer flex items-center mt-6 py-2 w-full text-base border border-[#C7C7C7] rounded-full">
                    <img className="ml-3 w-[37px]" src={fbIcon}></img>
                    <h2 className="text-center mx-auto text-[#000] font-montserrat">Continue with Facebook</h2>
                  </div>
    
                  <div onClick={handleGoogleRegister} className="cursor-pointer mb-20 flex items-center mt-2 py-2 w-full text-base border border-[#C7C7C7] rounded-full">
                    <img className="ml-3 w-[37px]" src={GoogleIcon}></img>
                    <h2 className="text-center mx-auto text-[#000] font-montserrat">Continue with Google</h2> 
                  </div >
    
    
                  
                   </div>   
                </div>
    

            </div>
    
    
        );
    }


    else{
        return (
            <>

<div className="mx-32 pt-10">
                <LoginNavBar></LoginNavBar> 
                <div className="flex justify-center mt-16">
    
                   <div>

                   <form onSubmit={handleSignIn} className="pl-14 pr-14 pb-6 border border-[#ABABAB] rounded w-[570px]">
                        <h2 className="mb-14 pt-9 font-montserrat text-2xl font-bold">Create an account</h2>
    
                        <div>
                        
                            <input className="outline-none w-full block border-b pb-3 mb-10 border-[#C5C5C5]" type="text" placeholder="Username or Email" name="email" required/>
    
                            <input className="outline-none w-full block border-b pb-3 mb-7 border-[#C5C5C5]" type="password" placeholder="password" name="password" required/>
    
                        </div>
    
                        <button className="py-4 mx-auto w-full bg-[#F9A51A]  mb-4 text-base font-montserrat font-medium">
                            Login
                        </button>
    
                        <p className="text-center">Don't have an account? <a onClick={() => setToogle(! toogle)} className="text-blue-600 cursor-pointer"> Create an Account</a> </p>
                        {
                            error && <p className="text-red-400">{error}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                    </form>
    
                    
                  <div className="flex items-center mt-6 justify-center">
                  <div className="bg-[#AAA] h-[1px] w-[200px]">
                        </div>
                        Or
                        <div className="bg-[#AAA] h-[1px] w-[200px]">
                        </div>
                  </div>
    
                  <div className="flex items-center mt-6 py-2 w-full text-base border border-[#C7C7C7] rounded-full">
                    <img className="ml-3 w-[37px]" src={fbIcon}></img>
                    <h2 className="text-center mx-auto text-[#000] font-montserrat">Continue with Facebook</h2>
                  </div>
    
                  <div onClick={handleGoogleRegister} className="mb-20 flex items-center mt-2 py-2 w-full text-base border border-[#C7C7C7] rounded-full">
                    <img className="ml-3 w-[37px]" src={GoogleIcon}></img>
                    <h2 className="text-center mx-auto text-[#000] font-montserrat">Continue with Google</h2>
                  </div>
    
    
                  
                   </div>   
                </div>
    

            </div>
          
        </>
        )
    }
};

export default Login;