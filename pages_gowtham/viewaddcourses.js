import React, { useEffect, useState } from "react";
import { Button } from '../../Components/Button'
import { H1 } from '../../Components/Text'
import axios from 'axios';

function viewaddcourses() {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        async function getCourses() {
            await axios.get(`http://192.168.190.208:8000/courses`).then(response => {
                setCourses(response.data);
            });
        }
        getCourses();
    }, []);

  return (
    <div className='flex flex-col h-screen justify-center items-center text-center'>
        <H1>View All Courses</H1>
        <Button>Add Courses</Button>
        <div>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <td className='p-4 font-semibold text-lg'>Course Code</td>
                        <td className='p-4 font-semibold text-lg'>Course Name</td>
                        <td className='p-4 font-semibold text-lg'>LTPJ</td>
                        <td className='p-4 font-semibold text-lg'>Credits</td>
                    </tr>
                </thead>
                <tbody>
                    {courses && courses.map(course => {
                        let arr = Array(course.ltpj)
                        return (
                        <tr>
                            <td>{course.ccode}</td>
                            <td>{course.cname}</td>
                            <td>{arr[0]}</td>
                            <td>{course.credits}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default viewaddcourses

// View courses form database
// Add courses to database
