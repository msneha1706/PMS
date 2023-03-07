import React from 'react'
import "./Detail.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Detail() {

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const navigate = useNavigate()
    const handleChange = (event) => {
        setMessage(event.target.value);
      };

    return (
        <div className='main'>
            <div style={{display:"flex",flexDirection:"row",backgroundColor: "white"}}>
            <div className='back' style={{ backgroundColor: "white"}}><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" style={{width:"40px",height:"40px",backgroundColor: "white"}} onClick={()=>navigate("/home")}/></div>
            <div className='title' style={{ backgroundColor: "white"}}><h1 style={{ backgroundColor: "white",marginLeft:"300px"}}>Student Managment System</h1></div>
            </div>
            <h3 style={{ backgroundColor: "white"}}>Bugs Description : Have to design responsive Header and Footer with design provide by UI Team</h3>
            <div className='main-container' >
                <div className='detail' style={{ backgroundColor: "white"}}>
                    <div className='sender' style={{ backgroundColor: "white"}}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="..."
                            style={{ width: "50px", height: "50px" }} />
                        <p style={{ backgroundColor: "white"}}>Muskan</p>
                    </div>
                    <div className='container1'>

                        <h2>Task Description</h2>
                        <p>
                            Header:<br />
                            [Company Logo]<br />
                            [Company Name]<br />
                            [Task Name]<br />
                            [Task ID]<br /><br />

                            Footer:<br />
                            [Date]<br />
                            [Employee Name]<br />
                            [Department]<br />
                            [Contact Information]<br /><br />

                            You can customize the header and footer with your company's logo, name, and any relevant task information such as the task name and ID.
                            In the footer, include the date, employee name, department, and contact information to ensure that the task description is complete
                            and informative. This will help the employee to identify the task and understand its importance, while also providing them with the
                            necessary information to contact the relevant stakeholders if they have any questions or concerns.
                        </p>

                    </div>
                </div>

                <div className='detail' style={{ backgroundColor: "white"}}>

                    <div className='sender' style={{ backgroundColor: "white"}}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="..."
                            style={{ width: "50px", height: "50px" }} />
                        <p style={{ backgroundColor: "white"}}>Muskan</p>
                    </div>
                    <div className='container1'>




                        <h2>Task Requirements and Expectations:</h2>

                        <p>

                            Header:<br />
                            [Company Logo]<br />
                            [Company Name]<br />
                            [Task Name]<br />
                            [Task ID]<br />

                            Requirements and Expectations:<br />
                            [Include a clear and detailed description of the requirements and expectations for the task, such as the scope of work, timeline,
                            deliverables, quality standards, and any specific guidelines or constraints that need to be followed]<br /><br />

                            Footer:<br />
                            [Date]<br />
                            [Employee Name]<br />
                            [Department]<br />
                            [Contact Information]<br />

                        </p>
                        <p style={{ paddingBottom: "20px" }}>
                            You can customize the header and footer with your company's logo, name, and any relevant task information such as the task name and ID.
                            In the requirements and expectations section, provide a clear and detailed description of what is expected from the employee and what
                            they need to deliver. Be specific and include any important details or requirements to ensure that the employee has a clear
                            understanding of what they need to do. In the footer, include the date, employee name, department, and contact information to ensure
                            that the employee knows who to contact if they have any questions or concerns about the task.

                        </p>
                    </div>
                </div>

                <div className='detail' style={{ backgroundColor: "white"}}>

                    <div className='sender' style={{ backgroundColor: "white"}}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="..."
                            style={{ width: "50px", height: "50px" }} />
                        <p style={{ backgroundColor: "white"}}>Muskan</p>
                    </div>

                    <div className='container1'>


                        <h2>Task Resources and Support</h2>


                        <p>

                            Header:<br />
                            [Company Logo]<br />
                            [Company Name]<br />
                            [Task Name]<br />
                            [Task ID]<br />

                            Task Resources and Support:
                            [Provide a list of any necessary resources or support to help the employee complete the task, such as access to relevant
                            tools, software, or data, or support from other team members]

                            Footer:<br />
                            [Date]<br />
                            [Employee Name]<br />
                            [Department]<br />
                            [Contact Information]<br />


                            You can customize the header and footer with your company's logo, name, and any relevant task information such as the
                            task name and ID. In the task resources and support section, provide a list of any necessary resources or support that
                            the employee may need to complete the task successfully. This may include access to software, tools, or data, or
                            support from other team members. Be specific about what resources are available and how the employee can access them.
                            In the footer, include the date, employee name, department, and contact information to ensure that the employee knows
                            who to contact if they have any questions or concerns about the task resources and support.
                        </p>

                    </div>

                    {visible ? <div>{<div className='sender' style={{ backgroundColor: "white"}}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="..."
                            style={{ width: "50px", height: "50px" }} />
                        <p style={{ backgroundColor: "white"}}>Muskan</p>
                    </div>}</div> : ""}
                </div>
            </div>

            <div className='msg' style={{ backgroundColor: "white"}}>
                <div style={{backgroundColor:"white",display:"flex",flexDirection:"row",border:"2px solid black"}} className="msg-icon">
                    <img src="https://icon-library.com/images/bold-icon/bold-icon-17.jpg" alt="" style={{width:"20px",height:"20px",margin:"10px",backgroundColor: "white"}} />
                    <img src="https://cdn-icons-png.flaticon.com/512/2087/2087824.png" alt="" style={{width:"15px",height:"15px",margin:"10px",backgroundColor: "white"}}/>
                    <img src="https://www.shutterstock.com/image-vector/format-align-left-icon-flat-260nw-2070143423.jpg" alt="" style={{width:"25px",height:"25px",margin:"10px"}}/>
                    <img src="https://www.shutterstock.com/image-vector/text-formatting-right-icon-vector-260nw-2224903681.jpg" alt="" style={{width:"20px",height:"20px",margin:"10px"}}/>
                    <img src="https://cdn-icons-png.flaticon.com/128/9755/9755546.png" alt="" style={{width:"20px",height:"20px",margin:"10px",backgroundColor: "white"}}/>
                    <img src="https://www.shutterstock.com/image-vector/link-icon-vector-260nw-1298912032.jpg" alt="" style={{width:"20px",height:"20px",margin:"10px"}}/>
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" alt="" style={{width:"20px",height:"20px",margin:"10px",backgroundColor: "white"}}/>

                </div>
                <div style={{margintop:"-100px"}}>
                <input type="text" />
                </div>
                <div className='msg-btn'>
                    <button onClick={()=>setVisible(true)}  value={message}>Send</button>

                </div>

            </div>


        </div>
    )
}

export default Detail