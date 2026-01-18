// 'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { assets } from '@/Assets/assets'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const page = () => {
//     const [image,setImage] =useState(false)
//     const [data , setData]= useState({
//       title:"",
//       description:"",
//       category:"startup",
//       author:"ALex Bennett",
//       authImg:"/author_img.png",
//     })
//     const onChangeHandler = (event)=>{
//       const name = event.target.name;
//     const value = event.target.value;
//   setData(data=>({...data,[name]:value}))
//   console.log(data);

  
//   }

//   const onSubmitHandler= async(e)=>{
// e.preventDefault();
// const formData=new FormData();
// formData.append('title',data.title);
// formData.append('description',data.description);
// formData.append('category',data.category);
// formData.append('author',data.author);
// formData.append('authImg',data.authImg);
// formData.append('image',image);
//  const response = await axios.post('/api/blog' , formData);
// //  if (response.data.success) {
// //   toast.success(response.data.msg)
// //  } 
// //  else{
// //  toast.error("Error");
// //  console.log(error.response.data);

// //  }
// try {
//   const response = await axios.post("/api/blog", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//   if (response.data.success) {
//     toast.success(response.data.msg);
//     setImage(false)
//     setData({ title:"",
//       description:"",
//       category:"startup",
//       author:"ALex Bennett",
//       authImg:"/author_img.png",})
//   } else {
//     toast.error("Error");
//   }
// } catch (error) {
//   console.error(error.response?.data || error.message);
//   toast.error("Request failed!");
// }

//   }
 
//   return (
//     <>
//     <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16  '>
//         <p className='text-xl '>Upload Thumbnail</p>
//         <label htmlFor="image">
//             <Image className='mt-4' alt='' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70}/>
//          </label>  
//            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
//         <p className="text-xl mt-4 ">Blog Title</p>
//         <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' required placeholder='Type here' type="text" />
//         <p className="text-xl mt-4 ">Blog Description</p>
//         <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' required placeholder='Write content here' rows={6} type="text" />
// <p className='text-xl mt-4'>Blog Category</p>       
// <select className=' w-40 py-3 border text-gray-500 m-4 px-4 ' value={data.category} onChange={onChangeHandler} name="category" >
//   <option value="startup">
// StartUp
//   </option>
//    <option value="technology">
// Technology
//   </option>
//    <option value="lifestyle">
// Lifestyle
//   </option>
// </select>
// <br />
// <button className='mt-8 py-3 m-4 px-4 w-40 h-12 bg-black text-white' type="submit">ADD BLOG</button>
       
//     </form> 
//     <div className=''>

//         </div>
//     </>
//   )
// }

// export default page



'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "startup",
    author: "ALex Bennett",
    authImg: "/author_img.png",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authImg', data.authImg);
    formData.append('image', image);

    try {
      const response = await axios.post("/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false)
        setData({
          title: "",
          description: "",
          category: "startup",
          author: "ALex Bennett",
          authImg: "/author_img.png",
        })
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Request failed!");
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-6 px-5 sm:pt-12 sm:pl-16 flex flex-col gap-6'>

        {/* Upload Thumbnail */}
        <p className='text-xl font-semibold text-gray-700'>Upload Thumbnail</p>
        <label htmlFor="image" className='cursor-pointer'>
          <div className='w-[140px] h-[80px] border-2 border-dashed border-indigo-400 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition'>
            <Image
              className='object-cover rounded-lg'
              alt=''
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              width={140}
              height={70}
            />
          </div>
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id='image'
          hidden
          required
        />

        {/* Blog Title */}
        <p className="text-xl font-semibold text-gray-700">Blog Title</p>
        <input
          name='title'
          onChange={onChangeHandler}
          value={data.title}
          className='w-full sm:w-[500px] mt-2 px-4 py-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm'
          required
          placeholder='Type here'
          type="text"
        />

        {/* Blog Description */}
        <p className="text-xl font-semibold text-gray-700">Blog Description</p>
        <textarea
          name='description'
          onChange={onChangeHandler}
          value={data.description}
          className='w-full sm:w-[500px] mt-2 px-4 py-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm'
          required
          placeholder='Write content here'
          rows={6}
        />

        {/* Blog Category */}
        <p className='text-xl font-semibold text-gray-700'>Blog Category</p>
        <select
          className='w-40 py-3 border border-indigo-300 rounded-lg text-gray-700 px-4 focus:ring-2 focus:ring-indigo-400 outline-none'
          value={data.category}
          onChange={onChangeHandler}
          name="category"
        >
          <option value="startup">StartUp</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
        </select>

        {/* Submit Button */}
        <button
          className='mt-6 py-3 w-40 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all'
          type="submit"
        >
          ADD BLOG
        </button>

      </form>
    </>
  )
}

export default page
