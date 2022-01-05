import React, {useState, useEffect} from "react";
import { FcNext, FcPrev } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  
  const [width, setWidth] = useState(window.innerWidth)

  const updateDimension = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    return  () => window.removeEventListener("resize", updateDimension)
  },[]);

  return (
    <>
    <style 
    jsx>
      {
        `
        @media (max-width: 768px) {
          .next, .prev {
            display: none
          }
        }
        .pagination {
          font-size: 14px;

        }
        `
      }
      </style>  
    <ReactPaginate 
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info?.pages} 
      nextLabel="Next"
      previousLabel="Prev" 
      previousClassName="btn btn-outline-primary text-decoration-none prev"
      nextClassName="btn btn-primary next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data)=> {
        setPageNumber(data.selected + 1);
      }}
      activeClassName="active"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={6}
      className="pagination justify-content-center gap-4 my-4">

      
    </ReactPaginate>
  
    </>
   );
};

export default Pagination;
