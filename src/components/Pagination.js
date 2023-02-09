import React from "react";
import "./pagination.css";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <div key={number}>
          <button onClick={() => paginate(number)} href="/#" className="btn">
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
