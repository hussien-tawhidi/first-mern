import { useState } from "react";
import Axios from "axios";

export default function Froms() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);

  const addFriens = () => {
    Axios
      .post("http://localhost:3001/addfriend", {
        name: name,
        lname: lname,
        age: age,
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='forms'>
      <h3 className="title">input data</h3>
      <form action='' onChange={(e) => e.preventDefault()}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name :
          </label>
          <input
            type='text'
            className='form-control custome-input'
            id='name'
            placeholder='name ...'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="lname" className='form-label'>
            Last name :
          </label>
          <input
            type='text'
            className='form-control custome-input'
            id='lname'
            placeholder='last name'
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="age" className='form-label'>
            Age :
          </label>
          <input
            type='number'
            className='form-control custome-input'
            id='age'
            placeholder='age'
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={addFriens}>
          Add Friend
        </button>
      </form>
    </div>
  );
}
