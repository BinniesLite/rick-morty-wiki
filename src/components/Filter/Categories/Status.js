import React, {useContext} from 'react';
import filterContext from '../../../store/filter-context';


const Status = () => {
  const filterCtx = useContext(filterContext);

  // What do you want to pass down
  const statusHandler = (item) => {
    filterCtx.statusFilter(item);
  }

  return (
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Status
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"> 
              <button onClick={() => statusHandler('ALIVE')} className="btn btn-primary mx-5">alive</button>
              <button onClick={() => statusHandler('DEAD')} className="btn btn-primary mx-5">dead</button>
              <button onClick={() => statusHandler('UNKNOWN')}  className="btn btn-primary mx-5">unknown</button>
            </div>
          </div>
        </div>
    )
}

export default Status
