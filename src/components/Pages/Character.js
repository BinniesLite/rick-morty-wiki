import React from 'react'
import { Card } from "../Cards/Card";
import Filter from "../Filter/Filter";
import { useState, useEffect, useContext } from "react";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import filterContext from "../../store/filter-context";
const Character = () => {
    
  // CONTEXT FOR FILTER
  const filterCtx = useContext(filterContext)

  // SEARCH STATE BY NAME
  const [enteredSearch, setEnteredSearch] = useState("");

  // PAGINATION
  const [pageNumber, setPageNumber] = useState(1);
  
  // FETCH DATA
  const [fetchData, setFetchData] = useState([]); 

  console.log(filterCtx.species);  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${enteredSearch}&gender=${filterCtx.gender}&status=${filterCtx.status}&species=${filterCtx.species}`;
  let { info, results } = fetchData;

  useEffect(() => {
    // Need to learn about this
    (async function () {
      // fetch the data from the api
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);

  // END PAGINATION
  return (
    <div className="App">
    <h1 className="text-center mb-4 text-primary">Character</h1>
      <Search setPageNumber={setPageNumber} setEnteredSearch={setEnteredSearch}/> 
      <div className="container">
        <div className="row">
       
            <Filter></Filter>
     
          <div className="col-lg-8 col-12">
              <Card page="/" results={results} />
          </div>
        </div>
      </div> 
      <Pagination  info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
    </div>
  );
}

export default Character
