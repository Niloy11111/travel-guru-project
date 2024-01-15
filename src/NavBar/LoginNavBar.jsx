import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const LoginNavBar = () => {

    const {user, logOut } = useContext(AuthContext) ;

    console.log('user from nav', user)
    
    const handleLogOut = () => {
      logOut ()
      .then()
      .catch()
    }

    return (
        <div className='flex items-center justify-between'>
            
           
            <div className=''>
                <img className='w-[120px] bg-[#FFFFFF]' src={logo}></img>
            </div>


            <div className=''>
                <ul className='flex gap-12 items-center'>
                <NavLink><li>News</li></NavLink>
                <NavLink to="/destination"   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#F9A51A] py-3 px-7 rounded-lg" : ""
  }><li>Destination</li></NavLink>
                <NavLink><li>Blog</li></NavLink>
                <NavLink><li>Contact</li></NavLink>

                {
                user ?  <NavLink onClick={handleLogOut} to="/login"   className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] py-3 px-7 rounded-lg" : ""
              }><li>Sign Out</li></NavLink> 

              : 

            <NavLink to="/login" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#F9A51A] py-3 px-7 rounded-lg" : ""
            }><li>Login</li></NavLink>
            
               }

                </ul>
            </div>

        </div>
    );
};

export default LoginNavBar;