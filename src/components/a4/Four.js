import React, { useEffect, useState } from 'react'
import "../a4/Four.css"

const Four = ({onNext,onBack}) => {
  const [limit,setLimit] = useState("");
  const [storage,setStoarge] = useState();

  const handleChange = (e)=>{
    setLimit(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(limit){
       localStorage.setItem("user",limit);
      console.log(limit);
    }else{
      alert("please choose one of them");
    }
  }

  useEffect(()=>{
    const storageData = localStorage.getItem("limit");
    setStoarge(storageData);
  })

  console.log(storage);// now u can check in console which one is chosen

  return (
    <>
      <form className="manage-projects-form" onSubmit={handleSubmit}>
      <i className="fa-solid fa-xmark"></i>
      <h2>Who can manage projects</h2>
      <p className="form-subtext">
        Don't panic — You can also customize these permissions in settings
      </p>

      <div className="permission-options">
        <div className="permission-option">
          <input type="radio" id="everyone" name="who" value={"Everyone"} onChange={handleChange} 
          checked = {limit === "Everyone"} />
          <label htmlFor="everyone" className="permission-label">
            <div className="permission-box">
            <i className="fa-solid fa-people-group"></i>
            </div>
            <div className="permission-info">
              <strong>Everyone</strong>
              <p>All users can now see it, but guests cannot access the projects.</p>
            </div>
          </label>
        </div>

        <div className="permission-option">
          <input type="radio" id="admins" name="who" value={"only Admin"} onChange={handleChange}
          checked = {limit === "only Admin"} />
          <label htmlFor="admins" className="permission-label">
            <div className="permission-box">
            <i className="fa-solid fa-user-tie"></i>
            </div>
            <div className="permission-info">
              <strong>Only Admins</strong>
              <p>Only admins can manage everything.</p>
            </div>
          </label>
        </div>

        <div className="permission-option">
          <input type="radio" id="specificPeople" name="who" value={"Specific People"} onChange={handleChange} 
            checked = {limit === "Specific People"}/>
          <label htmlFor="specificPeople" className="permission-label">
            <div className="permission-box">
            <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="permission-info">
              <strong>Only to Specific people</strong>
              <p>Only some specific people are able to see it.</p>
            </div>
          </label>
        </div>
      </div>

      <div className='boom'>
      <button onClick={onBack} type="button" className="back-btn"> <i class="fa-solid fa-chevron-left"></i>   Back</button>
      <button onClick={onNext} type="submit" className="next-btn">Next</button>
      </div>
    </form>
    </>
  )
}

export default Four
