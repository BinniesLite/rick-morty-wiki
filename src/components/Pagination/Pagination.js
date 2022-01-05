import React from "react";
import { FcNext, FcPrev } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  
  
  return (
    <ReactPaginate 
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info?.pages} 
      nextLabel="Next"
      previousLabel="Prev" 
      previousClassName="btn btn-primary"
      nextClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data)=> {
        setPageNumber(data.selected + 1);
      }}
      activeClassName="active"

      className="pagination justify-content-center gap-4 my-4">

      
    </ReactPaginate>
  );
};

export default Pagination;
