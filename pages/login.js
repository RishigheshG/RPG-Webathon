import React, {useEffect,useState} from "react";
import axios from 'axios';

function login() {
  const intialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(intialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("first", name);

    setValues({
      ...values,
      [name]: value,
    });
  };

  function onsubmitHandler(email,pw){
      axios.post('http://192.168.190.208:8000/faclogin', {
      'email' : email,
      'password': pw
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="p-8 text-4xl">Login Page</h1>
      <form className="flex flex-col items-center justtify-center">
        <label className="p-1" for="email">Email</label>
        <input className="p-1 border-2 rounded-2xl"
          value={values.userName}
          onChange={handleInputChange}
          name="email"
          label="email"
        />
        <label className="p-1" for="pw">Password</label>
        <input className="p-1 border-2 rounded-2xl"
          value={values.dob}
          onChange={handleInputChange}
          name="pw"
          label="pw"
        />
        <div className="p-2"></div>
        <button className="border-2 h-10 px-6 text-white bg-black rounded-full hover:text-black hover:bg-white hover:border-black"
          type="button" 
          disabled={!values.email || !values.pw}
          onClick={() => onsubmitHandler(values.email, values.pw)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default login;