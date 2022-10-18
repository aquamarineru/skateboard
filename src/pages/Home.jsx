import React from 'react'
import {data} from '../components/mockData'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Home = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className="w-full h-[650px] bg-no-repeat bg-fixed bg-center bg-[url('https://images.unsplash.com/photo-1602248034387-a8c244b224b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80')]">
        <h2 className='text-9xl left-[25%] absolute text-[#dd052b] top-1/2 -translate-x-1/2 -translate-y-1/2 '>Just</h2>
        <h2 className='text-9xl left-[75%] absolute text-[#dd052b] top-1/2 -translate-x-1/2 -translate-y-1/2 '>do it</h2>
      </div>
      <div className='relative flex items-center'>
        <MdNavigateBefore className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdNavigateNext className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
      <div className='flex justify-between items-center px-40 py-14'>
        <p className='w-[500px] font-light text-3xl leading-relaxed'>There are different types of skateboards, depending on which parts are used to make them. Besides the visible differences, skateboards can also be distinguished by how they are used. In other words: depending on how and where you want to skate, there's the right skateboard for you.</p>
        <img className='w-[500px]' src="https://images.unsplash.com/photo-1550519191-d0ef9a14b00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80" alt="skate" />
      </div>
    </div>
  )
}

export default Home

