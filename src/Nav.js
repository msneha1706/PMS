import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const {pathname} = useLocation()
    console.log(pathname)
  return (
    <div>

<div class="wrapper">
        
        <div class="sidebar">

        <div class="profile">
                <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
                <h3>Sneha</h3>
                <p>Intern</p>
            </div>

        <ul>
                <li>
                    <NavLink to="/home/issue" className={pathname === '/home/issue'?"active":""} >
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">Home</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to="/home/detail"  className={pathname === '/home/detail'?"active":""}>
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">My Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                        <span class="item">view</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-database"></i></span>
                        <span class="item">Development</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-chart-line"></i></span>
                        <span class="item">Project</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">People</span>
                    </a>
                </li>
                
            </ul>
           
        </div>

    </div>



    </div>
  )
}

export default Nav