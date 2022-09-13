import { Button, Dropzone } from '../../Components/Button'
import { H1 } from '../../Components/Text'
import React, { useState, useRef } from "react";
import Papa from "papaparse";

const uploadcourses = () => {
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
  
        fetch("http://192.168.190.208:8000/uploadcourses", {
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

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <H1>Upload Courses</H1>
      <div className="mb-4">
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

uploadcourses.propTypes = {};

export default uploadcourses;