import { useEffect, useState } from "react";
import Axios from "axios";

export default function ReadData() {
  const [listOfFriends, setListOfFriend] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/read")
      .then((response) => {
        setListOfFriend(response.data);
      })
      .catch((err) => {
        "err";
      });
  }, []);

  const updateFreinds = (id) => {
    const newAge = prompt("enter new age");
    Axios.put("http://localhost:3001/update", { newAge: newAge, id: id }).then(
      () => {
        window.location.reload(true);
      }
    );
  };

  const deleteFreinds = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      window.location.reload(true);
    });
  };
  return (
    <div className='read-data'>
      <hr />
      <h3 className='title'>This data is from database "MONGODAB"</h3>
      <div className='container'>
        <div className='row'>
          {listOfFriends.map((value, index) => (
            <div key={index} className='col-md-4 col-sm-6 col-12'>
              <ul className='list-group cutoms-list'>
                <li className='list-group-item mb-2'>
                  <p className='name sub-title'>
                    Name : <span>{value.name}</span>
                  </p>
                  <p className='lname sub-title'>
                    Last Name : <span>{value.lname}</span>
                  </p>
                  <p className='age sub-title'>
                    Age : <span>{value.age}</span>
                  </p>
                  <button
                    type='button'
                    className='btn btn-outline-secondary edite'
                    onClick={() => updateFreinds(value._id)}>
                    <i className='fa-solid fa-pen-to-square'></i>
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-secondary'
                    onClick={() => deleteFreinds(value._id)}>
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
