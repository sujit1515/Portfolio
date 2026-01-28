import About from '@/components/About/About' 
import HomePage from '@/components/Home/Home'
import Contact  from '@/components/Contact/Contact'
import React from 'react'

const page = () => {
  return (
    <div>
      <HomePage/>
      <About/>
     <Contact/>
    </div>
  )
}

export default page
