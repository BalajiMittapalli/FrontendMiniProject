import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Adduser() {
  let { register, handleSubmit } = useForm();
  let [users, setUsers] = useState([]);

  function handleFormSubmit(userObj) {
    setUsers([...users, userObj]);
  }

  return (
    <div>
      <h1 className="display-1 text-center text-info">User Registration</h1>
      <div className="row">
        <div className="col-sm-4 mx-auto">
          <form
            className="w-75 bg-light p-4 mt-5"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div>
              <h3>Username</h3>
              <input
                type="text"
                className="form-control mb-3"
                {...register('Username', {
                  required: true,
                  minLength: 4,
                  maxLength: 8,
                })}
              />
            </div>
            <div>
              <h3>Date of Birth</h3>
              <input
                type="date"
                className="form-control mb-3"
                {...register('DateOfBirth', { required: true })}
              />
            </div>
            <div>
              <h3>City</h3>
              <input
                type="text"
                className="form-control mb-3"
                {...register('City', { required: true })}
              />
            </div>
            <button className="btn btn-success">Add User</button>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-8 mx-auto">
          {users.length !== 0 ? (
            <table className="table text-center table-bordered info">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Date of Birth</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {users.map((userObj, index) => (
                  <tr key={index}>
                    <td>{userObj.Username}</td>
                    <td>{userObj.DateOfBirth}</td>
                    <td>{userObj.City}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="display-3 text-center text-warning">No Users</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Adduser;
