import React, { useState, useEffect } from 'react'
import { H1 } from '../../Components/Text'
import axios from 'axios'
import { Button } from '../../Components/Button';

function viewfacultypreferences() {
    
    const [faculty, setFaculty] = useState(null);

    useEffect(() => {
        async function getFaculty() {
            await axios.get(`http://192.168.190.208:8000/faculty`).then(response => {
                console.log(response);
                setFaculty(response.data);
            });
        }
        getFaculty();
    }, []);

  return (
    <div className='flex flex-col h-screen items-center justify-center text-center'>
        <H1>Faculty Preferences</H1>
        <table className='table-auto'>
                <thead>
                    <tr>
                        <td className='p-4 font-semibold text-lg border px-8'>Emp id</td>
                        <td className='p-4 font-semibold text-lg border px-8'>Name</td>
                        <td className='p-4 font-semibold text-lg border px-8'>Status</td>
                        <td className='p-4 font-semibold text-lg border px-8'>P1</td>
                        <td className='p-4 font-semibold text-lg border px-8'>P2</td>
                        <td className='p-4 font-semibold text-lg border px-8'>P3</td>
                        {/* <td className='p-4 font-semibold text-lg border px-8'>P4</td>
                        <td className='p-4 font-semibold text-lg border px-8'>P5</td> */}
                    </tr>
                </thead>
                <tbody>
                {faculty && faculty.map(item => (
                    <tr>
                        <td className='p-2 text-sm'>{item.emp_id}</td>
                        <td className='p-2 text-sm'>{item.name}</td>
                        <td className='p-2 text-sm'>{item.pref && item.pref.length !== 0 ? 'Confirmed' : (<Button>Send Email</Button>)}</td>
                        {/* <td className='p-2 text-sm'>{item.pref[0]["p1"] && item.pref[0]["p1"] !== null ? item.pref[0]["p1"] : 'None'}</td>
                        <td className='p-2 text-sm'>{item.pref[1]["p2"] && item.pref[1]["p2"] !== null ? item.pref[1]["p2"] : 'None'}</td>
                        <td className='p-2 text-sm'>{item.pref[2]["p3"] && item.pref[2]["p3"] !== null ? item.pref[2]["p3"] : 'None'}</td> */}
                        {/* {item.pref &&  (
                            <>
                            <td className='p-2 text-sm'>{item.pref[0]["p1"]}</td>
                            <td className='p-2 text-sm'>{item.pref[1]["p2"]}</td>
                            <td className='p-2 text-sm'>{item.pref[2]["p3"]}</td>
                            <td className='p-2 text-sm'>{item.pref[3].p4}</td>
                            <td className='p-2 text-sm'>{item.pref[4].p5}</td>
                            </>
                        )} */}
                        {console.log(item.pref[0])}
                    </tr>
                ))}
                </tbody>
            </table>
    </div>
  )
}

export default viewfacultypreferences

// Table with all the faculty preferences
// Option to dipslay pending faculty and 