// import { blog_data } from '@/Assets/assets'
// import React, { useEffect, useState } from 'react'
// import BlogItem from './BlogItem'
// import axios from 'axios';

// const BlogList = () => {
//     const [menu,setMenu] = useState("All");
//     const [blogs, setBlogs] = useState([]);

//     const fetchBlogs = async () => {
//         const response = await axios.get('/api/blog');
//         setBlogs(response.data.blogs);
// console.log(response.data.blogs);


//     }

//     useEffect(()=>{
//         fetchBlogs();

//     },[])
//   return (
    
//     <div>
//         <div className='flex justify-center gap-6 my-10'>
//             <button onClick={()=>setMenu('All')} className={menu=="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
//             <button onClick={()=>setMenu('Technology')} className={menu=="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
//             <button onClick={()=>setMenu('Startup')} className={menu=="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
//             <button onClick={()=>setMenu('Lifestyle')} className={menu=="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
//         </div>
//         <div className='flex flex-wrap justify-around gap-1.75 gap-y-10 mb-16 xl:mx-24 '>
//            {blogs
//   .filter(item => menu === "All" ? true : item.category.toLowerCase() === menu.toLowerCase())
//   .map(item => (
//     <BlogItem 
//       key={item._id} 
//       id={item._id} 
//       image={item.image} 
//       title={item.title} 
//       description={item.description} 
//       category={item.category} 
//     />
// ))}
//             {/* {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item , index)=>{
//                 return <BlogItem key={index} id={item._id} image={item.image} 
//                 title={item.title} description={item.description} category={item.category}/>
//             })} */}
//         </div>
//     </div>
//   )
// }

// export default BlogList


import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        {["All", "Technology", "Startup", "Lifestyle"].map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`
              px-5 py-2
              rounded-full
              font-semibold
              text-sm
              transition-all duration-300
              ${
                menu === item
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-6 gap-y-12 mb-16 xl:mx-24">
        {blogs
          .filter(item =>
            menu === "All"
              ? true
              : item.category.toLowerCase() === menu.toLowerCase()
          )
          .map(item => (
            <BlogItem
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  )
}

export default BlogList
