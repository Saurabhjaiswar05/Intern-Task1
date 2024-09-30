import React, { useState, useEffect } from 'react';
import "../a2/Second.css";

const Second = ({ onNext, onBack }) => {

  const [formData, setFormData] = useState({
    hourlyRateType: 'rate1',
    hourlyRateValue: '',
    budget: '',
    resetBudget: false,
    emailAlertPercentage: 80,
    emailAlerts: false,
  });

  const [localStorageData, setLocalStorageData] = useState();

  useEffect(() => {
    const savedData = localStorage.getItem('data2');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      setLocalStorageData(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data2', JSON.stringify(formData));
    setLocalStorageData(formData); 
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onNext();
  };

  //console.log(localStorageData); // now u can check whhich values u have enter

  return (
    <div>
      <form className="project-type-form" onSubmit={handleSubmit}>
        <i className="fa-solid fa-xmark"></i>
        <h2>Project type</h2>
        <p className="form-subtext text">
          Don't panic — You can also customize this type in settings
        </p>

        <div className="form-group space">
          <div className="button-group">
            <button type="button" className="btn active btn1">Time & Materials</button>
            <button type="button" className="btn">Fixed Fee</button>
            <button type="button" className="btn btn3">Non-Billable</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="hourly-rate-type">Hourly</label>
          <p className="form-subtext">We need hourly rates to track your project’s billable amount.</p>

          <select
            id="hourly-rates"
            name="hourlyRateType"
            value={formData.hourlyRateType}
            onChange={handleChange}
          >
            <option value="rate1">Project Hourly Rate 1</option>
            <option value="rate2">Project Hourly Rate 2</option>
            <option value="rate3">Project Hourly Rate 3</option>
          </select>

          
          
          
          <input
            type="number"
            className="less"
            placeholder="₹ 0.00"
            name="hourlyRateValue"
            value={formData.hourlyRateValue}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <p className="form-subtext">We need hourly rates to track your project’s billable amount.</p>
          <div className="input-group">
            <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
              <option value="hours1">Hours per Person 1</option>
              <option value="hours2">Hours per Person 2</option>
              <option value="hours3">Hours per Person 3</option>
            </select>
          </div>
        </div>

        <div className="form-group one">
          <input
            className="check top"
            type="checkbox"
            id="reset-budget"
            name="resetBudget"
            checked={formData.resetBudget}
            onChange={handleChange}
          />
          <label className="know" htmlFor="reset-budget">Budget resets every month</label>
        </div>

        <div className="form-group">
          <input
            className="check"
            type="checkbox"
            id="email-alerts"
            name="emailAlerts"
            checked={formData.emailAlerts}
            onChange={handleChange}
          />
          <label className="know2" htmlFor="email-alerts">
            Send email alerts if project exceeds
            <input
              type="number"
              placeholder="80"
              className="percentage-input"
              name="emailAlertPercentage"
              value={formData.emailAlertPercentage}
              onChange={handleChange}
            />
            % of budget
          </label>
        </div>

        <button onClick={onBack} type="button" className="back-btn">
          <i className="fa-solid fa-chevron-left"></i> Back
        </button>
        <button type="submit" className="next-btn">Next</button>
      </form>

      
    </div>
  );
};

export default Second;
