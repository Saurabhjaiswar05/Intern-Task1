import React, { useEffect, useState } from 'react'
import "../a3/Third.css"

const Third = ({onNext,onBack}) => {

  const [selected,setSelected]= useState("");

  const [storage,setStorage] = useState();

      const handleChange = (e)=>{
        setSelected(e.target.value);
      }

      const handleSubmit = (e)=>{
        e.preventDefault();

        if(selected){
          
          console.log(selected);
          localStorage.setItem("chosen",selected);
          
          
          onNext();
        }else{
          alert("Please select any option first");
        }

      }
      useEffect(() => {
        const storedData = localStorage.getItem('chosen');
        if (storedData) {
          setStorage(storedData);  // this is for stoare data in other use state
        }
        
      }, []);

   //   console.log(storage);// check data selected in localstorage

  return (
    <div>
        <form className="select-view-form" onSubmit={handleSubmit}>
        <i className="fa-solid fa-xmark"></i>
      <h2>Select a view</h2>
      <p className="form-subtext">
        You can also customize this view in settings
      </p>

      <div className="view-options">
        <div className="view-option">
          <input type="radio" id="listView" name="list"  checked={ selected === "List" }
           value={"List"} onChange={handleChange} />
          <label htmlFor="listView" className="view-label">
            <div className="view-box">
            <i className="fa-solid fa-chart-bar"></i>
            </div>
            <span>List</span>
          </label>
        </div>

        <div className="view-option">
          <input type="radio" id="boardView" name="list" checked={selected ==="Board"} 
           value={"Board"} onChange={handleChange} />
          <label htmlFor="boardView" className="view-label">
            <div className="view-box">
            <i class="fa-solid fa-chart-simple"></i>
            </div>
            <span>Board</span>
          </label>
        </div>
      </div>

      <div className="form-navigation">
      <button onClick={onBack} type="button" className="back-btn"> <i class="fa-solid fa-chevron-left"></i>   Back</button>
      <button  type="submit" className="next-button">Next</button>
      </div>
    </form>

    </div>
  )
}

export default Third
