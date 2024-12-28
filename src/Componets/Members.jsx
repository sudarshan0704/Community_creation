import React, { useState,useEffect } from 'react'
import './Style.css'
import profile from './download.jpg'
import female from './female.png'
import Button from '@mui/material/Button';
export default function Members() {
   
    const [name,setname]=useState('suda')
    
    const [gender,setgender]=useState('male')
    const[email,setemail]=useState('kmragusudarshan@gmail')
    const[designation,setdesignation]=useState('student')
    const[Specialization,setsepcialization]=useState('Design')
    const[contactdetails,setuserdetails]=useState(JSON.parse(localStorage.getItem("userdata")))
    function updatename()
    {
        setname(name)
       
    }
    function updatemail(email)
    {
        setemail(email)
    }
    function updatspec()
    {
        setsepcialization(designation)
    }
    function updatedes()
    {
        setdesignation(Specialization)
    }
    function updategend()
    {
        setgender(gender)
    }
    function updatedetails()
    {
        
        setuserdetails([...contactdetails,{Name:name,Email:email,Designation:designation,Specialization:Specialization,Gender:gender}])
        setname(''); 
        setemail('') 
        setsepcialization('')
        setdesignation('')
        setgender('')
       
    }
    useEffect(() => { 
        localStorage.setItem("userdata", JSON.stringify(contactdetails)); 
        console.log("Stored to localStorage:", JSON.stringify(contactdetails)); }, 
        [contactdetails]);
   
  return (
    <div>
        <h1 style={{marginTop:'50px',color:"#007bff"}}>Join Our Community Now</h1>
        <h3>Let share Some Details</h3>
        <div className='Information'>
      
<form className="form">
   
    <p className="message">Rigister now and get full Support From Our Community. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input" value={name} onChange={(e)=>setname(e.target.value)}/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input" id='lastname' value={gender} onChange={(e)=>setgender(e.target.value)}/>
            <span id='lastnamelable'>Gender</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input" value={email}onChange={(e)=>updatemail(e.target.value)}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="text" className="input" value={designation}onChange={(e)=>setdesignation(e.target.value)}/>
        <span>Designation</span>
    </label>
    <label>
        <input required="" placeholder="" type="text" className="input" value={Specialization}onChange={(e)=>setsepcialization(e.target.value)}/>
        <span>Specalisation</span>
    </label>
   
    
</form>
<button className="submit" onClick={updatedetails}>Register</button>
        </div>
        <h1 id='community'>our community </h1>
<div className='Userlist'>
      {contactdetails ? contactdetails.map((i)=>
        {
           const final= i.Gender=='male'?profile:female
            return(
            <div className='user'>
                <h1 id='welcome' style={{color:'black'}}>Hii community...!</h1>
                <img src={final}></img>
                <h2 id='name'>{i.Name}</h2>
                <h2 id='other'><span id='span'>Email:</span>   {i.Email}</h2>
                <h2 id='other' ><span id='span'>Designation:</span>    {i.Designation}</h2>
                <h2 id='other'><span id='span'>Specilization:</span>    {i.Specialization}</h2>
                <Button variant="contained">contact</Button>
            </div>
        )
        }):<h1>no data</h1>}
        </div>
    </div>
  )
}
