// 'use client'

// import { assets, blog_data } from '@/Assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// const BlogItem = ({title,description,category,image,id}) => {
//   return (
//     <div className='max-w-[330px] sm:max-w-[300px]
//      bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
//        <Link href={`/blogs/${id}`}>
//        <Image src={image} width={400} height={400} className='border-b border-black' alt='' />
//       </Link> 
//        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>
//           {category}</p>
//           <div className="p-5">
//             <h5 className='mb-2 text-lg font-medium text-gray-500 tracking-tight '>
//               {title}
//             </h5>
//            <p
//   className='mb-3 text-sm text-gray-700 tracking-tight line-clamp-6'
//   dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
// />
 
//             {/* <p className='mb-3 text-sm text-gray-700 tracking-tight '>
//               {description}</p> */}
//               <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
//                 Read More ... <Image width={12} className='ml-2' src={assets.arrow} alt=''/>
//               </Link>
//           </div>
//         </div>
//   )
// }

// export default BlogItem

'use client'

import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div
      className="
        max-w-[330px] sm:max-w-[300px]
        bg-gradient-to-br from-white via-blue-50 to-purple-50
        border border-blue-200
        rounded-xl
        overflow-hidden
        transition-all duration-300
        hover:shadow-[0_15px_30px_rgba(99,102,241,0.25)]
        hover:-translate-y-2
      "
    >
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          width={400}
          height={400}
          className="border-b border-blue-200 object-cover"
          alt=""
        />
      </Link>

      {/* Category */}
      <p
        className="
          ml-5 mt-5 px-3 py-1
          inline-block
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white
          text-xs font-bold
          tracking-wide
          rounded-full
        "
      >
        {category}
      </p>

      <div className="p-5">
        {/* Title */}
        <h5
          className="
            mb-2
            text-lg font-bold
            text-indigo-700
            leading-snug
          "
        >
          {title}
        </h5>

        {/* Description */}
        <p
          className="
            mb-4
            text-sm
            text-gray-700
            leading-relaxed
            line-clamp-6
          "
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        />

        {/* Read More */}
        <Link
          href={`/blogs/${id}`}
          className="
            inline-flex items-center gap-2
            font-semibold text-sm
            text-purple-600
            hover:text-indigo-700
            transition
          "
        >
          Read More
          <Image width={12} src={assets.arrow} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
