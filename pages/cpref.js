import React, {useEffect,useState} from "react";
import axios from 'axios';

function cpref() {

  const [notCourses, setnotCourses] = useState(null);
  
  useEffect(() => {
    async function getCourses() {
        await axios.get(`http://192.168.190.208:8000/courses`).then(response => {
            console.log(response);
            setnotCourses(response.data);
        });
    }
    getCourses();
  }, []);

  // const res = axios.get().then((res) => console.log(res))

  var alloc = [];
  var count = 1;
  function allocadd(event, val){
    if(count<6){
      var x = "p"+count, dc = {};
      dc[x] = val;
      alloc.push(dc);
      count++;
      console.log(alloc);
    }else{
      alert("Max preferences chosen.");
    }
  }
  function postpref(){
    axios.post('http://192.168.190.208:8000/preferences', {
      'empid' : 10001,
      preferences: alloc
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='py-4 text-4xl font-bold'>Course Preferences</h1>
      <h3 className='pb-10 text-xl'>Your Course List</h3>
      <table className="shadow-lg bg-white border-collapse">
        <thead>
          <tr key={"header"}>
            <th className="bg-white-100 border text-left px-8 py-4">Course Code</th>
            <th className="bg-white-100 border text-left px-8 py-4">Course Name</th>
            <th className="bg-white-100 border text-left px-8 py-4">LTPJ</th>
            <th className="bg-white-100 border text-left px-8 py-4">C</th>
            <th className="bg-white-100 border text-left px-2 py-4">Click here to add</th>        
          </tr>
        </thead>
        <tbody>
          {notCourses && notCourses.map(course => {
            let arr = Array(course.ltpj)
            return(
              <tr>
                <td className="border px-8 py-4">{course.ccode}</td>
                <td className="border px-8 py-4">{course.cname}</td>
                <td className="border px-8 py-4">{arr[0]}</td>
                <td className="border px-8 py-4">{course.credits}</td>
                <td className="border px-8 py-4" ><button onClick={event => allocadd(event, course.ccode)} className='h-10 px-6 text-white bg-black rounded-full'>Add</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="py-4"></div>
      <a href="./callo"><button onClick = {postpref} className='h-10 px-6 text-white bg-black rounded-full'>Submit</button></a>
      <div className="py-4"></div>
    </div>
  );
}

export default cpref