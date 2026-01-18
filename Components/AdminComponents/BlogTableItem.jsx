// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/Assets/assets'
// const BlogTableItem = ({authImg,title,author,date,deleteBlog , mongoId}) => {
//   const blogDate = new Date(date);

//   return (
//     <tr className='bg-white border-b'>
//         <th scope='row' className='items-center gap-3 sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
// <Image src={authImg?authImg:assets.profile_icon} 
// className=' ' alt='' width={40} height={40}

// />
// <p>{author?author:"no author"}</p>
//         </th>
//         <td className='px-6 py-4'>
//             {title?title:"no title"}
//         </td>
//          <td className='px-6 py-4'>
//             {blogDate.toDateString()}
//         </td>
//          <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
//             {"x"}
//         </td>
//     </tr>
//   )
// }

// export default BlogTableItem



// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/Assets/assets'

// const BlogTableItem = ({ authImg, title, author, date, deleteBlog, mongoId }) => {
//   const blogDate = new Date(date);

//   return (
//     <tr
//       className="
//         bg-white
//         border-b
//         hover:bg-indigo-50
//         transition
//       "
//     >
//       {/* Author */}
//       <th
//         scope="row"
//         className="
//           flex items-center gap-3
//           px-6 py-4
//           font-semibold
//           text-gray-800
//           whitespace-nowrap
//         "
//       >
//         <Image
//           src={authImg ? authImg : assets.profile_icon}
//           alt=""
//           width={40}
//           height={40}
//           className="rounded-full border border-indigo-200"
//         />
//         <p className="capitalize">
//           {author ? author : "No author"}
//         </p>
//       </th>

//       {/* Title */}
//       <td className="px-6 py-4 text-gray-700 font-medium">
//         {title ? title : "No title"}
//       </td>

//       {/* Date */}
//       <td className="px-6 py-4 text-sm text-gray-500">
//         {blogDate.toDateString()}
//       </td>

//       {/* Delete */}
//       <td
//         onClick={() => deleteBlog(mongoId)}
//         className="
//           px-6 py-4
//           text-center
//           font-bold
//           text-red-500
//           cursor-pointer
//           hover:text-red-700
//           transition
//         "
//       >
//         ✕
//       </td>
//     </tr>
//   )
// }

// export default BlogTableItem



import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const BlogTableItem = ({ authImg, title, author, date, deleteBlog, mongoId, index }) => {
  const blogDate = new Date(date);

  return (
    <tr
      className={`
        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        border-b
        hover:bg-indigo-50
        transition-colors
      `}
    >
      {/* Author */}
      <th
        scope="row"
        className="
          flex items-center gap-3
          px-6 py-4
          font-semibold
          text-gray-800
          whitespace-nowrap
        "
      >
        <Image
          src={authImg ? authImg : assets.profile_icon}
          alt={author || 'Author'}
          width={40}
          height={40}
          className="rounded-full border border-indigo-200"
        />
        <p className="capitalize">
          {author ? author : "No author"}
        </p>
      </th>

      {/* Title */}
      <td className="px-6 py-4 text-gray-700 font-medium">
        {title ? title : "No title"}
      </td>

      {/* Date */}
      <td className="px-6 py-4 text-sm text-gray-500">
        {blogDate.toDateString()}
      </td>

      {/* Delete */}
      <td
        onClick={() => deleteBlog(mongoId)}
        className="
          px-6 py-4
          text-center
          font-bold
          text-red-500
          cursor-pointer
          hover:text-red-700
          transition
        "
      >
        ✕
      </td>
    </tr>
  )
}

export default BlogTableItem