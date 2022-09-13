import React from "react";

export const Button = ({ children }) => {
  return (
    <button className='p-3 bg-white hover:bg-slate-600 hover:text-white border-2 border-black rounded-lg duration-300 m-4'>
        <span className="relative z-10 font-semibold">{children}</span>
    </button>
  );
};

export const Dropzone = () => {
  return (
    <form className="flex justify-center items-center w-full m-4">
        <label for="dropzone-file" className="flex flex-col justify-center items-center w-1/2 h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">CSV files. Max 20MB</p>
            </div>
            <input name="file-name" id="dropzone-file" type="file"/>
        </label>
    </form> 
  )
}