// export default function Pagination({ page, totalPages, onPrev, onNext }) {
//   return (
//     <div className="flex justify-between items-center mt-4">
//       <button disabled={page === 0} onClick={onPrev}>
//         Previous
//       </button>

//       <span>Page {page + 1} of {totalPages}</span>

//       <button disabled={page === totalPages - 1} onClick={onNext}>
//         Next
//       </button>
//     </div>
//   );
// }


import React from "react";

export default function Pagination({ page, totalPages, onPrev, onNext }) {
  return (
    <div className="w-full mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Previous Button */}
        <button
          disabled={page === 0}
          onClick={onPrev}
          className="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-200 text-sm font-medium 
                     hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {/* Page Info */}
        <span className="text-sm font-semibold text-gray-700">
          Page {page + 1} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          disabled={page === totalPages - 1}
          onClick={onNext}
          className="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-200 text-sm font-medium 
                     hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>

      </div>
    </div>
  );
}
