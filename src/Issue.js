import React from 'react'
import "./Issue.css"
import { GrInProgress } from "react-icons/gr";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Issue() {

  const [done,setDone] = useState(false)
  const navigate = useNavigate()

  return (
    <div >

<div className="container" style={{backgroundColor:"white"}}>
  <p className="container-title" id="container" style={{backgroundColor:"white"}}>All Project Assigned<br/>Till Today</p>

  <div className="gradient-cards" style={{backgroundColor:"white"}}>
    <div className="card">
      <div className="container-card bg-green-box">
 
        <p className="card-title">Student Managment Syatem</p>
        <p className="card-description">Have to design responsive Header and Footer with design provide by UI Team</p>
        {done ? (<button >InProgress</button> ) :(<button>Complete</button>)}
        <button onClick={()=>navigate("/detail")}>Detail</button>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-white-box">
        
        <p className="card-title">Student Managment System</p>
        <p className="card-description">Have to design multiple card for the home page and have to add Onclick so that user can move to that page</p>
        <p className="card-description">Last Date : 5th feb 2022</p>
        {done ? (<button onClick={setDone(false)}style={{backgroundColor:"green"}}>InProgress</button> ) :(<button>Complete</button>)}
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-yellow-box">
        
        <p className="card-title">Get Yield on Deposits</p>
        <p className="card-description">While your collateral is deposited, delegate it to earn the highest yield available in the Solana ecosystem.</p>
        {done ? (<button onClick={setDone(false)}style={{backgroundColor:"green"}}>InProgress</button> ) :(<button>Complete</button>)}
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-blue-box">
        
        <p className="card-title">Get up to 11x Leverage</p>
        <p className="card-description">Hubble’s capital-efficient 110% collateral ratio lets users leverage up to 11x on their deposits.</p>
        {done ? (<button onClick={setDone(false)}style={{backgroundColor:"green"}}>InProgress</button> ) :(<button>Complete</button>)}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Issue