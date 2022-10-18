import React from 'react'
import { MdOutlineSkateboarding} from "react-icons/md";
//import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Search from './Search';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div className='w-full h-[90px] bg-[#1B272C]'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
          <div className='logo text-white flex justify-between items-center'>
            <MdOutlineSkateboarding className='text-[#dd052b] h-[90px] w-[45px] mx-[5px]'/>
            <h1 className='font-["Bebas Neue"] uppercase tracking-wide'>
              <Link to='/'>Skateboards</Link>
            </h1>
          </div>
            <nav className='nav flex justify-between items-center h-full'>
              <ul className='flex text-white font-["Bebas Neue"] uppercase items-center'>
                <CustomLink to="/decks" className='hover:text-[#dd052b]'>Decks</CustomLink>
                <CustomLink to="/trucks"className='hover:text-[#dd052b]'>Trucks</CustomLink>
                <CustomLink to="/wheels"className='hover:text-[#dd052b]'>Wheels</CustomLink>
                <CustomLink to="/bearings"className='hover:text-[#dd052b]'>Bearings</CustomLink>
                <CustomLink to="/hardware"className='hover:text-[#dd052b]'>Hardware</CustomLink>
                <CustomLink to="/griptape"className='hover:text-[#dd052b]'>Griptape</CustomLink>
              </ul>
                <Search />
            </nav>
            {/* <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
            </div>
            <div>
            <ul className={nav ? 'w-full bg-[#1B272C] text-white absolute top-[90px] left-0 text-center' : 'absolute left-[-100%]'}>
                    <Search />
                    <li className='hover:text-[#dd052b]'>Decks</li>
                    <li className='hover:text-[#dd052b]'>Trucks</li>
                    <li className='hover:text-[#dd052b]'>Wheels</li>
                    <li className='hover:text-[#dd052b]'>Bearings</li>
                    <li className='hover:text-[#dd052b]'>Hardware</li>
                    <li className='hover:text-[#dd052b]'>Griptape</li>
                </ul>
            </div> */}
        </div>

    </div>
  )
}
function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar
