// racfe
import React, {useContext} from "react";
import Gender from "./Categories/Gender";
import Species from "./Categories/Species";
import Status from "./Categories/Status";
import filterContext from "../../store/filter-context";


const Filter = () => {

  const filterCtx = useContext(filterContext);

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="mb-4 text-center text-primary text-decoration-underline link-primary"
        onClick={filterCtx.clearFilter}
      >
        Clear Filter
      </div>
      <div className="accordion " id="accordionExample">
        <Gender /> 
        <Status/>
        <Species/> 
      </div>
    </div>
  );
};

export default Filter;
