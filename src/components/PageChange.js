import React, {useState} from 'react';
import Pagination from 'react-paginating';
import {Link} from 'react-router-dom';

export default function Page() {
  const limit = 1;
  const pageCount = 5;
  const total = 20;
  var id = window.location.pathname;
  var number = Number(id.substr(1))
  const [page, setPage] = useState(number);
  const next = page + 1;
  const nextLink = `/${next}`;
  const prev = page - 1;
  const prevLink = `/${prev}`
  
  let handlePageChange = (pg) => {
    setPage(pg)
  };
    
  return (
    <div className='paging'>        
      <Pagination total={total} limit={limit} pageCount={pageCount} currentPage={page}>
        {({pages, currentPage, hasNextPage, hasPreviousPage, previousPage, nextPage, totalPages, getPageItemProps}) => (
          <div>
            <Link to='/1'>
            <button
              {...getPageItemProps({pageValue: 1, onPageChange: handlePageChange})}>
              first
            </button>
            </Link>

            <Link to={prevLink}>
            {hasPreviousPage && (
              <button {...getPageItemProps({pageValue: previousPage, onPageChange: handlePageChange})}>
                {'<'}
              </button>
            )}
            </Link>

            {pages.map(page => {
              let activePage = null;
              var link = `/${page}`
              if (currentPage === page) {
                activePage = { backgroundColor: '#fdce09' };
              }
              return (
                <Link to={link} >
                  <button key={page} style={activePage} className=".link"
                    {...getPageItemProps({pageValue: page, onPageChange: handlePageChange})}
                  >
                    {page}
                  </button>
                </Link>
              );
            })}
            
            <Link to={nextLink}>
            {hasNextPage && (
              <button {...getPageItemProps({pageValue: nextPage, onPageChange: handlePageChange})}>
                {'>'}
              </button>
            )}
            </Link>

            <Link to='/20'>
              <button
                {...getPageItemProps({pageValue: totalPages, onPageChange: handlePageChange})}>
                last
              </button>
            </Link>
          </div>
        )}
      </Pagination>
    </div>
  );
}


