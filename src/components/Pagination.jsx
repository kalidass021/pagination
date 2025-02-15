const Pagination = ({currentPage, setCurrentPage, noOfPages}) => {
  return (
    <div className='pagination-container'>
    <button
      disabled={currentPage === 0}
      onClick={() => setCurrentPage((prev) => prev - 1)}
      className='page-number'
    >
      ◀️
    </button>
    {[...Array(noOfPages).keys()].map((n) => (
      <button
        key={n}
        className={'page-number ' + (currentPage === n && 'active')}
        onClick={() => setCurrentPage(n)}
      >
        {n}
      </button>
    ))}
    <button
      disabled={currentPage === noOfPages - 1}
      onClick={() => setCurrentPage((prev) => prev + 1)}
      className='page-number'
    >
      ▶️
    </button>
  </div>
  )
}

export default Pagination