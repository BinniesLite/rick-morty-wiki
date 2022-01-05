import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CardDetail = () => {
        
  const {id} = useParams();
  // FETCH DATA
  const [fetchData, setFetchData] = useState([]); 

  // This is to fetch api
  let api = `https://rickandmortyapi.com/api/character/${id}`;
    
  console.log(fetchData);

  useEffect(() => {
    // Need to learn about this
    (async function () {
      // fetch the data from the api
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);
  console.log()


    return (
        <div className='d-block text-center gap-4'>
            <h1 className="text-center mb-4">{fetchData.name}</h1>
            <img className='rounded mx-auto d-block'  src={fetchData.image} alt="" />
            <button type="button" className="btn btn-primary btn-lg btn-block px-10 mt-2">{fetchData.status}</button>
            <p className='fw-bold'>Gender <span className=''>{fetchData.gender}</span></p>

        <p>Origin: {fetchData.origin.name}</p>
        <p>Species:  <span>{fetchData.species }</span></p>
        
        </div>
    )
}

export default CardDetail
