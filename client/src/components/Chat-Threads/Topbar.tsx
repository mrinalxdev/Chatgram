"use client"
import { userProps } from '@/types'
import { FlashIcon } from '@/utils/icons'
import Image from 'next/image'
import React from 'react'

const Topbar = ({seletedUser} : {seletedUser : userProps}) => {
    function handleClick () {
        document.querySelector(".messages")?.classList.add("hidden")
        document.querySelector(".sidebar")?.classList.remove("hidden")
    }

  return (
    <div className={`bg-white ${seletedUser ? "" : "md:hidden"}`}>
        <div className='w-full px-10 py-3 flex justify-between items-center'>
            <div className='flex gap-3'>
                <button onClick={handleClick} className="md:hidden">
                    <FlashIcon />
                </button>
                <div className='avatar ml-3 cursor-auto'>
                    <div className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <Image src={seletedUser?.imageId || ""} width={240} height={240} alt="Avatar" />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <h3 className='font-semibold text-black text-md'>{seletedUser?.name}</h3>
                    <p className='text-[#707991]'>Online</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Topbar