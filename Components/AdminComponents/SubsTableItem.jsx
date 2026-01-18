// import React from 'react'

// const SubsTableItem = ({email , deleteEmail ,  mongoId , date }) => {
//   const emailDate = new Date(date);

//   return (
//     <tr className='bg-white border-b text-left '>
//         <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
//             {email?email:"No Email Available."}
//         </th>
//         <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
//         <td className="px-6 py-4 cursor-pointer"  onClick={()=>deleteEmail(mongoId)} >x</td>
//     </tr>
//   )
// }

// export default SubsTableItem


// import React from 'react'

// const SubsTableItem = ({ email, deleteEmail, mongoId, date }) => {
//   const emailDate = new Date(date);

//   return (
//     <tr
//       className="
//         bg-white
//         border-b
//         hover:bg-purple-50
//         transition
//         text-left
//       "
//     >
//       {/* Email */}
//       <th
//         scope="row"
//         className="
//           px-6 py-4
//           font-semibold
//           text-gray-800
//           whitespace-nowrap
//         "
//       >
//         {email ? email : "No Email Available."}
//       </th>

//       {/* Date */}
//       <td className="px-6 py-4 hidden sm:block text-sm text-gray-500">
//         {emailDate.toDateString()}
//       </td>

//       {/* Delete */}
//       <td
//         className="
//           px-6 py-4
//           cursor-pointer
//           font-bold
//           text-red-500
//           hover:text-red-700
//           transition
//         "
//         onClick={() => deleteEmail(mongoId)}
//       >
//         ✕
//       </td>
//     </tr>
//   )
// }

// export default SubsTableItem



import React from 'react'

const SubsTableItem = ({ email, deleteEmail, mongoId, date, index }) => {
  const emailDate = new Date(date);

  return (
    <tr
      className={`
        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        border-b
        hover:bg-purple-50
        transition-colors
        text-left
      `}
    >
      {/* Email */}
      <th
        scope="row"
        className="
          px-6 py-4
          font-semibold
          text-gray-800
          whitespace-nowrap
        "
      >
        {email ? email : "No Email Available."}
      </th>

      {/* Date */}
      <td className="px-6 py-4 hidden sm:block text-sm text-gray-500">
        {emailDate.toDateString()}
      </td>

      {/* Delete */}
      <td
        className="
          px-6 py-4
          cursor-pointer
          font-bold
          text-red-500
          hover:text-red-700
          transition
          text-center
        "
        onClick={() => deleteEmail(mongoId)}
      >
        ✕
      </td>
    </tr>
  )
}

export default SubsTableItem