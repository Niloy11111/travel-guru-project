import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'


import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {

    const {user } = useContext(AuthContext) ;

    console.log(user)
    return (
        <div className='flex  items-center justify-between'>
            
            <div className='flex gap-20'>
            <div className=''>
                <img className='w-[120px] bg-[#FFFFFF]' src={logo}></img>
            </div>

            <div className='search flex text-[#FFF] '>
                <AiOutlineSearch className='text-2xl mt-4 -mr-8'></AiOutlineSearch>
                <input className='border rounded-lg border-[#FFF] py-3 pl-10 pr-28 outline-none bg-[#FFFFFF33]' type="text" placeholder='Search your Destination...' />
            </div>

            </div>


            <div className='text-[#FFF] '>
                <ul className='flex gap-12 items-center'>
                <NavLink><li>News</li></NavLink>
                <NavLink to="/destination"   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#F9A51A] py-3 px-7 rounded-lg" : ""
  }><li>Destination</li></NavLink>
                <NavLink><li>Blog</li></NavLink>
                <NavLink><li>Contact</li></NavLink>
               {
                user ?  <NavLink to="/login"   className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] py-3 px-7 rounded-lg" : ""
              }><li>Sign Out</li></NavLink> : 
              
                       
              <NavLink to="/login" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#F9A51A] py-3 px-7 rounded-lg" : ""
            }><li>Login</li></NavLink>
               }
                </ul>
            </div>

        </div>
    );
};

export default NavBar;