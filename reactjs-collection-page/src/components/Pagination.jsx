
function  Pagination({ totalItems , itemsPerPage , currentPage , onPageChange }) {

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages } , (_,i) => i + 1)


  return (

    <div className="flex justify-center items-center mt-13 my-8 gap-3">
      
      <button onClick={ () => onPageChange(Math.max(1, currentPage - 1)) }
        className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-100 hover:cursor-pointer transition shadow-md">
        Prev
      </button>

      {pages.map((p) => (
        <button key={p} onClick={ () => onPageChange(p) }
          className={`px-4 py-2 text-sm rounded-full border transition shadow-sm hover:cursor-pointer 
          ${p === currentPage ?
          "bg-black text-white border-black shadow-md scale-105" :
          "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"}`}>
          
          {p}
        </button>
      ))}

      <button onClick={ () => onPageChange(Math.min(totalPages, currentPage + 1)) }
        className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-100 hover:cursor-pointer transition shadow-md">
        Next
      </button>

    </div>

  )
}

export default Pagination;