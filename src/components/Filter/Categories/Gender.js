import React, { useContext } from 'react'
import filterContext from '../../../store/filter-context';

const Gender = () => {
    
    const filterCtx = useContext(filterContext);

    const genderHandler = (item) => {
      filterCtx.genderFilter(item);
    }

    return ( <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Gender
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
    <div className="accordion-body justify-content-evenly">
      <button onClick={() => genderHandler("MALE")} className="btn btn-outline-primary mx-5">male</button>
      <button onClick={() => genderHandler('FEMALE')} className="btn btn-outline-primary">female</button>
      <button onClick={() => genderHandler('GENDERLESS')} className="btn btn-outline-primary">genderless</button>
      <button onClick={() => genderHandler('UNKNOWN')} className="btn btn-outline-primary">unknown</button>
    </div>
    </div>
  </div>
); 

}

export default Gender;
