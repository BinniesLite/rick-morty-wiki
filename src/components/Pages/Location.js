import React, { useState, useEffect } from "react";
import { Card } from "../Cards/Card";
import InputGroup from "../Filter/Categories/InputGroup";

const Location = () => {
  // Data fetch from api has the infomation needed
  const [fetchData, setFetchData] = useState();

  // RESULTS OF THE FETCH
  const [results, setResults] = useState();

  // ID FROM THE FETCH
  const [id, setId] = useState(1)
  console.log(results);

  // API LINK
  const api = `https://rickandmortyapi.com/api/location/${id}`;
  // Decomposition

  useEffect(() => {
    // Need to learn about this
    (async function () {
      // fetch the data from the api
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);

      const fetchCharacters = Promise.all(
        data.residents.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      fetchCharacters.then(function (value) {
        setResults(value);
      });
    })();
  }, [api]);

  const {name,type} = fetchData;

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <h1 className="text-center mb-4">
            Location Name: <span className="text-primary">{name}</span>{" "}
          </h1>
          <h5 className="text-center">
            Type: <span className="text-primary">{type}</span>{" "}
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center">Pick Location</h4>
            <InputGroup setId={setId} total={126} ></InputGroup>
          </div>

          <div className="col-lg-8 col-12 ">
            <div className="row">
              <Card page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
