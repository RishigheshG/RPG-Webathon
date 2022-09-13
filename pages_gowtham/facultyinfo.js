import { Button, Dropzone } from '../../Components/Button'
import { H1 } from '../../Components/Text'
import React, { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import axios from 'axios';

const facultyinfo = () => {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef();

  const handleUploadCSV = () => {
    setUploading(true);

    const input = inputRef?.current;
    const reader = new FileReader();
    const [file] = input.files;

    reader.onloadend = ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        console.log(csv);
  
        fetch("http://192.168.190.208:8000/uploadfaculty", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            csv: csv?.data,
          }),
        })
          .then(() => {
            setUploading(false);
            pong.success("CSV uploaded!");
          })
          .catch((error) => {
            setUploading(false);
            console.warn(error);
          });
      };

    reader.readAsText(file);
  };

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
    <div className='flex flex-col h-screen items-center justify-center'>
      <H1>Faculty Info</H1>
      {faculty && (
        <table className='table-auto shadow-lg bg-white border-collapse'>
          <thead>
            <tr>
              <td className='p-4 font-semibold text-lg border px-8'>Emp Id</td>
              <td className='p-4 font-semibold text-lg border px-8'>Name</td>
              <td className='p-4 font-semibold text-lg border px-8'>Designation</td>
              <td className='p-4 font-semibold text-lg border px-8'>Ph. No.</td>
              <td className='p-4 font-semibold text-lg border px-8'>School</td>
              <td className='p-4 font-semibold text-lg border px-8'>Email</td>
            </tr>
          </thead>
          <tbody>
            {faculty.map(item => (
              <tr>
                <td className='p-4 text-sm border px-8'>{item.emp_id}</td>
                <td className='p-4 text-sm border px-8'>{item.name}</td>
                <td className='p-4 text-sm border px-8'>{item.desig}</td>
                <td className='p-4 text-sm border px-8'>{item.phno}</td>
                <td className='p-4 text-sm border px-8'>{item.school}</td>
                <td className='p-4 text-sm border px-8'>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mb-4 mt-4">
        <input ref={inputRef} disabled={uploading} type="file" className="form-control border-2 border-black rounded-sm p-2" />
      </div>
      <button
        onClick={handleUploadCSV}
        disabled={uploading}
        className="btn btn-primary"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

facultyinfo.propTypes = {};

export default facultyinfo;