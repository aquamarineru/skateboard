import React, {useState} from 'react'
import { MdOutlineSkateboarding} from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Search from './Search';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-[90px] bg-[#1B272C]'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
          <div className='logo text-white flex justify-between items-center'>
            <MdOutlineSkateboarding className='text-[#dd052b] h-[90px] w-[45px] mx-[5px]'/>
            <h1 className='font-["Bebas Neue"] uppercase tracking-wide'>Skateboards</h1>
          </div>
            <div className='hidden md:flex items-center'>
                <ul className='flex text-white font-["Bebas Neue"] uppercase items-center'>
                    <li>Decks</li>
                    <li>Trucks</li>
                    <li>Wheels</li>
                    <li>Bearings</li>
                    <li>Hardware</li>
                    <li>Griptape</li>
                </ul>
                <Search />
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
            </div>
            <div>
            <ul className={nav ? 'w-full bg-[#1B272C] text-white absolute top-[90px] left-0 text-center' : 'absolute left-[-100%]'}>
                    <Search />
                    <li className='text-xl'>Decks</li>
                    <li className='text-xl'>Trucks</li>
                    <li className='text-xl'>Wheels</li>
                    <li className='text-xl'>Bearings</li>
                    <li className='text-xl'>Hardware</li>
                    <li className='text-xl'>Griptape</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar
