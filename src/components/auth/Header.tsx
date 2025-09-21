"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { MdOutlineRefresh } from "react-icons/md";
import { LayoutGrid , LayoutPanelTop,Search  } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from "next/link";
function Header() {

    const [isGridView , setIsGridView] = useState(false)

  return (
    <div className='w-full h-[55px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        <div className='w-full lg:w-[90%] h-full mx-auto flex items-center justify-between px-3 md:px-3'>
            <div>
                <h1 className='text-lg font-bold text-neutral-600'>Auth JS</h1>
            </div>
            <div className='relative hidden md:flex items-center '>
                <Input 
                    placeholder='Search keep notes...'
                    className=' md:flex md:w-[300px] lg:w-[600px] rounded-md h-[42px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] outline-none'
                    
                />
                <div className="absolute right-6 text-neutral-600"><Search size={18}/></div>
            </div>
            
            <div className='flex items-center text-neutral-500 gap-2 md::gap-3'>
                <MdOutlineRefresh size={25}/>
                { isGridView  ? <LayoutGrid size={22} /> : <LayoutPanelTop size={22} /> }
                <Link href={"/register"} className="px-3 text-sm lg:px-4 py-[6px] rounded-md bg-neutral-950 text-white">Signup</Link>
                <Link href={"/login"} className="px-3 text-sm lg:px-4 py-[6px] rounded-md bg-neutral-950 text-white">Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header