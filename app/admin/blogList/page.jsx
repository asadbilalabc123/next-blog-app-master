// 'use client'
// import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
// import axios from 'axios'

// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'

// const page = () => {
//   const [blogs,setBlogs] = useState([]);
//   const fetchBlogs = async () => {
//     const response = await axios.get('/api/blog');
//     setBlogs(response.data.blogs);

//   }

// const deleteBlog=async(mongoId)=>{
// const response = await axios.delete('/api/blog' , {
//   params:{
//     id:mongoId
//   }
// })
// toast.success(response.data.msg);
// fetchBlogs();
// }


//   useEffect(() => {
//    fetchBlogs();
//   }, [])
  
//   return (
//     <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 '>
//       <h1>All Blogs</h1>
//       <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
//         <table className="w-full text-sm text-gray-500">
//           <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
// <tr>
 
//    <th scope='col' className='px-6 py-3 '>
//     Author Name
//   </th>
//  <th scope='col' className='px-6 py-3 '>
//   Blog Title   
//   </th>
//    <th scope='col' className=' px-6 py-3 '>
//     Blog Date
//   </th>
//    <th scope='col' className=' px-6 py-3 '>
//     Action
//   </th>

// </tr>
//           </thead>
//           <tbody>
//             {blogs.map((item,index)=>{
// return <BlogTableItem key={index} deleteBlog={deleteBlog} mongoId={item._id} title={item.title} author={item.author} authImg={item.authImg} date={item.date}/>
//             })}
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default page



'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'

const page = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog')
      setBlogs(response.data.blogs || [])
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
      toast.error('Failed to load blogs')
    }
  }

  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete('/api/blog', {
        params: { id: mongoId },
      })
      toast.success(response.data.msg || 'Blog deleted successfully')
      fetchBlogs()
    } catch (error) {
      console.error('Failed to delete blog:', error)
      toast.error('Failed to delete blog')
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-semibold mb-4">All Blogs</h1>

      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide rounded-lg">
        <table className="w-full text-sm text-gray-500">
          <thead className="bg-gray-50 text-gray-700 uppercase text-left">
            <tr>
              <th scope="col" className="px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              // NO WRAPPING <tr> HERE! BlogTableItem returns its own <tr>
              <BlogTableItem
                key={item._id || index}  // Use item._id if available, otherwise index
                deleteBlog={deleteBlog}
                mongoId={item._id}
                title={item.title}
                author={item.author}
                authImg={item.authImg}
                date={item.date}
                index={index}  // Pass index for alternating colors
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page