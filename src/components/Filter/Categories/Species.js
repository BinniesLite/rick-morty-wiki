import React, {useContext} from 'react'
import filterContext from '../../../store/filter-context'

const Species = () => {

    const filterCtx = useContext(filterContext);

    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Species
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body  justify-content-evenly">
            
      <button onClick={() => filterCtx.speciesFilter("Human")} className="btn btn-outline-primary">Human</button>
      <button onClick={() => filterCtx.speciesFilter('Alien')} className="btn btn-outline-primary">Alien</button>
      
      <button onClick={() => filterCtx.speciesFilter('Humanoid')} className="btn btn-outline-primary">Humanoid</button>
      
      <button onClick={() => filterCtx.speciesFilter('Poopybutthole')} className="btn btn-outline-primary">Poopybutthole</button>
      
      <button onClick={() => filterCtx.speciesFilter('Mythological')} className="btn btn-outline-primary">Mythological</button>
      
      <button onClick={() => filterCtx.speciesFilter('Unknown')} className="btn btn-outline-primary">Unknown</button>  
      
      <button onClick={() => filterCtx.speciesFilter('Animal')} className="btn btn-outline-primary">Animal</button>
      <button onClick={() => filterCtx.speciesFilter('Disease')} className="btn btn-outline-primary">Disease</button>
      
      <button onClick={() => filterCtx.speciesFilter('Robot')} className="btn btn-outline-primary">Robot</button>
      <button onClick={() => filterCtx.speciesFilter('Cronenburg')} className="btn btn-outline-primary">Cronenberg</button>
      <button onClick={() => filterCtx.speciesFilter('planet')} className="btn btn-outline-primary">Planet</button>

      {/* 
      
       */}

          </div>
        </div>
      </div>
    )
}

export default Species
