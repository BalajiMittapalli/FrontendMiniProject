import React from 'react'
import { useEffect,useState} from "react";
function Assign4() {
  let [employee,setEmployee] = useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(employeeList=>setEmployee(employeeList))
    })

    let[counter,setcounter]=useState(0);
    function changecounter(){
      setcounter(counter+1)
    }
    
  return (
    <div>
            <h4 className='text-center m-4 fs-3'>Users</h4>
            <h4 className='text-center bg-info text-white rounded-3 w-25 mx-auto '>UserCount : {counter}</h4>
            <div className='container mb-4'>
            <div className='row row-col-2 row-col-sm-3 row-col-md-4 row-col-lg-5'>
                {
                employee.map(empObj=><div className='card m-4 text-center bg-primary text-white p-2' style={{width:"280px"}}>
                    <p className='m-0'>Id : {empObj.id}</p>
                    <p className='m-0'>Name : {empObj.name}</p>
                    <p className='m-0'>Username : {empObj.username}</p>
                    <p className='m-0'>email : {empObj.email}</p>
                    <button className='btn btn-warning mx-auto mt-2' style={{width:"120px"}} onClick={changecounter}>Add User</button>
                </div>)
                }
            </div>
            </div>
        </div>
    )
}


export default Assign4