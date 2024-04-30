import React from 'react'

const Sidebar = ({children}) => {
  return (
    <div className='h-screen w-[8vw] fixed border'>
        <h1 className='text-[20px] font-[700] text-black m-[28px]'>Docket</h1>
        {children}
    </div>
  )
}

export default Sidebar