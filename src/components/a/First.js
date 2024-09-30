import React from 'react'
import "../a/First.css"
import { useState } from 'react'
import { useEffect } from 'react';

const First = ({onNext}) => {

  const [formData,setFormData] = useState({
        name:"",
        client:"",
        sdate:"",
        edate:"",
        notes:""
  });

  const [storage,setStorage] = useState()

        const handleChange = (e)=>{
          const {name,value} = e.target 
          setFormData({
            ...formData,
            [name]:value
          });
          console.log(formData);
        }

        const handleSubmit = (e)=>{
          e.preventDefault();

          localStorage.setItem("Project",JSON.stringify(formData));

          // console.log(formData);

        }

        useEffect(() => {
          const storedData = localStorage.getItem('Project');
          if (storedData) {
            setStorage(JSON.parse(storedData));  // this is for stoare data in other use state
            setFormData(JSON.parse(storedData));// this for  prefill 
          }
          
        }, []);

        // console.log(storage); // u can check the data is store in localstorage
        

      

  return (
    <div>
      <form className="project-form" onSubmit={handleSubmit}>
      <i className="fa-solid fa-xmark"></i>
      <h2 className='kaar'>Create a project</h2>

      <div className="form-group">
        <label htmlFor="projectName">Project name</label>
        <input
          type="text"
          id="projectName"
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter project name here"
        />
      </div>

      <div className="form-group">
        <label htmlFor="client">Client</label>
        <select id="client" name='client' value={formData.client} onChange={handleChange}>
          <option value="">Select a client</option>
          <option value="client1">client1</option>
          <option value="client2">client2</option>
          <option value="new">new Client</option>
        </select>
        or
        
        <button className='add-btn'> + New Client</button>

      </div>

      <div className="form-group dates">
        <label>Dates</label>
        <div className="date-range">
          <input type="date"  name='sdate' value={formData.sdate} onChange={handleChange} />
          <span>-</span>
          <input type="date"  name='edate' value={formData.edate} onChange={handleChange}/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" placeholder="Optional" name='notes' value={formData.notes} onChange={handleChange} />
      </div>

      <button type="button" className="back-btn"> <i class="fa-solid fa-chevron-left"></i>   Back</button>
      <button type="submit" className="next-btn" onClick={onNext}>Next</button>
    </form>
    </div>
  )
}

export default First
