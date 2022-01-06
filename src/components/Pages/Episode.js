import React, { useEffect, useState } from "react";
import { Card } from "../Cards/Card";
import InputGroup from "../Filter/Categories/InputGroup";

const Episode = () => {
  // FETCH DATA
  const [fetchData, setFetchData] = useState([]);
  const [results, setResults] = useState([]); 
  // ID
  const [id, setId] = useState(1);

  // API LINK
  const api = `https://rickandmortyapi.com/api/episode/${id}`;
  // Decomposition
  console.log(fetchData);

  useEffect(() => {
    // Need to learn about this
    (async function () {
      // fetch the data from the api
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);

      const fetchCharacters = Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      fetchCharacters.then(function (value) {
        setResults(value);
      });
    })();
  }, [api]);

  const { air_date, name } = fetchData;
  

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <h1 className="text-center mb-4">
            Episode: <span className="text-primary">{name}</span>{" "}
          </h1>
          <h5 className="text-center">
            Air Date: <span className="text-primary">{air_date}</span>{" "}
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center">Pick Episodes</h4>
            <InputGroup setId={setId} total={51} ></InputGroup>
          </div>

          <div className="col-lg-8 col-12 ">
            <div className="row">
              <Card page="/episode/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episode;
