import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  const[data,changeData]=useState(
    [
      {"dname":"Dr.Sreya","phone":8976543210,"email":"sreya@gmail.com"},
      {"dname":"Dr.Deepa","phone":7876543210,"email":"deepa@gmail.com"},
      {"dname":"Dr.Vipin","phone":6776543210,"email":"vipin@gmail.com"},
      {"dname":"Dr.Manu","phone":9976543210,"email":"manu@gmail.com"},
      {"dname":"Dr.Sheela","phone":9076543210,"email":"sheela@gmail.com"},
      {"dname":"Dr.Sanjay","phone":7976543210,"email":"sanjay@gmail.com"},
      {"dname":"Dr.Joyal","phone":8976543210,"email":"joyal@gmail.com"}

    ]

  )
  return (

    <div>
     <Navbar/>

        <div className="conatiner">
          <h1 align="center"><u>View Doctors</u></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table table-striped">
                    
                        <thead>
                          <tr>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">email-id</th>
                        
                          </tr>
                        </thead>
                        <tbody>
                       {data.map(
                        (value,index)=>{
                          return  <tr>
                          <td>{value.dname}</td>
                          <td>{value.phone}</td>
                          <td>{value.email}</td>
                        </tr>
                        }
                       )}
                          
                          
                          
                          
                       
                         
                        </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll