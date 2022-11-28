import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "../css/pages/PagingBoard.css";

const Paging = ({ page, offset, rows, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={offset}
      totalItemsCount={rows}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}
    />
  );
};

export default Paging;
