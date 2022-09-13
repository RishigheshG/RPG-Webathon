import React from 'react'

function Navbar() {
  return (
    <div className='flex absolute p-4 items-end'>
      <button className='text-xl pr-2'>EduPortal</button>
      <div className='gap-2'>
        <a href='./uploadcourses' className='px-2 text-sm'>Upload Courses</a>
        <a href='./viewaddcourses' className='px-2 text-sm'>Course Info</a>
        <a href='./wishlistdata' className='px-2 text-sm'>Wishlist Info</a>
        <a href='./facultyinfo' className='px-2 text-sm'>Faculty Info</a>
        <a href='./viewfacultypreferences' className='px-2 text-sm'>Faculty Preferences</a>
        <a href='./allocation' className='px-2 text-sm'>Allocation</a>
      </div>
    </div>
  )
}

export default Navbar