import React from "react";

function callo(){
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="pb-10 text-4xl font-bold">Allocated Courses</h1>
        <table className="shadow-lg bg-white border-collapse">
                <thead>
                <tr>
                  <th className="bg-white-100 border text-left px-8 py-4">Course No.</th>
                  <th className="bg-white-100 border text-left px-8 py-4">Course Name</th>                
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="border px-8 py-4">1</td>
                  <td className="border px-8 py-4">Intro to CSE</td>    
                </tr>
                <tr>
                  <td className="border px-8 py-4">2</td>
                  <td className="border px-8 py-4">Internet and Web Programming</td>                  
                </tr>
                <tr>
                  <td className="border px-8 py-4">3</td>
                  <td className="border px-8 py-4">Parallel and Distributed Computing</td>
                </tr>
                </tbody>
              </table>
      </div>
    </div>
  )
}

export default callo;