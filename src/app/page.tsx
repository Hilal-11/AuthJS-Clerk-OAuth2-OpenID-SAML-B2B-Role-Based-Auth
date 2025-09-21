"use client"
import React from 'react'
import Header from '@/components/auth/Header'
import { Button } from '@/components/ui/button'
function page() {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center h-[90vh] flex-col gap-6'>
        <h1 className="text-4xl font-bold text-center">Full Stack Next js Keep Notes App</h1>
        <div className='flex gap-4'>
          <Button className='px-20 py-5'>Get Started</Button>
          <Button className='px-20 py-5'>Signup</Button>
        </div>
      </div>
    </div>
  )
}

export default page
