// "use client";


// import { assets, blog_data } from '@/Assets/assets';
// import React, { use,useEffect, useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import Footer from '@/Components/Footer';
// import axios from 'axios';
// const page = ({params}) => {
//    const { id } = use(params);
//     const [data , setData] = useState(null);
//     const fetchBlogData = async ()=>{
// const  response = await axios.get('/api/blog',{
//   params:{
//     id:params.id
//   }
 

// } 
// )
// setData(response.data);

// // for (let i = 0; i < blog_data.length; i++) {
 
// //   {
// //     if (Number(params.id)===blog_data[i].id) {
// //       setData(blog_data[i]);
// //       console.log(blog_data[i]);
// //       break;
      
// //     }
// //   }
  
// // }
//     }

// useEffect(()=>
//   {
// fetchBlogData();
// }
// ,[])

//   return (data ? <>
//     <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
//        <div className='flex justify-between items-center'>
//         <Link href="/" className="text-gray-600 hover:text-gray-900">
// <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto' alt='' />
//         </Link>
//         <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
//           Get Started <Image src={assets.arrow} alt=''/> </button>
//        </div>

// <div className='text-center my-24'>
//   <h1 className='text-2xl font-semibold sm:text-5xl max-w-[700px] mx-auto'>{data.title}</h1>
// <Image src={data.authImg} width={60} height={60} 
// className='rounded-full mx-auto mt-6 border border-white' alt='' />
// <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
// </div>
//         </div> 

//         <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
//           <Image className='border-4 border-white' width={1280} height={720} src={data.image} alt=''/>
          
//           {/* <p>{data.description}</p> */}
//    <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}></div>


// <div className='my-24'>
//   <p className='text-black font-semibold my-4'>Share this article on social media.</p>
// <div className='flex'>
//   <Image src={assets.facebook_icon} width={50} alt=''/>
//    <Image src={assets.twitter_icon} width={50} alt=''/>
//     <Image src={assets.googleplus_icon} alt='' width={50}/>
// </div>
// </div>


//           </div> 
//           <Footer/>
//         </> : <></>
//   )
// }

// export default page


"use client";

import { assets } from '@/Assets/assets';
import React, { use, useEffect, useState } from 'react'; // ✅ keep 'use' now (used correctly)
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/Components/Footer';
import axios from 'axios';

const Page = ({ params }) => {
  // ✅ unwrap params with React.use()
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: { id: id },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]); // ✅ fixed dependency to unwrapped id

  return (
    data ? (
      <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
          <div className='flex justify-between items-center'>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto' alt='' />
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
              Get Started <Image src={assets.arrow} alt='' />
            </button>
          </div>

          <div className='text-center my-24'>
            <h1 className='text-2xl font-semibold sm:text-5xl max-w-[700px] mx-auto'>{data.title}</h1>
            <Image
              src={data.authImg}
              width={60}
              height={60}
              className='rounded-full mx-auto mt-6 border border-white'
              alt=''
            />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
          </div>
        </div>

        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        {data.image && (
  <Image
    src={data.image}
    width={1280}
    height={720}
    alt=""
    className="border-4 border-white"
  />
)}

          {/* <Image className='border-4 border-white' width={1280} height={720} src={data.image} alt='' /> */}

          <div
            className='blog-content'
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>

          <div className='my-24'>
            <p className='text-black font-semibold my-4'>Share this article on social media.</p>
            <div className='flex'>
              <Image src={assets.facebook_icon} width={50} alt='' />
              <Image src={assets.twitter_icon} width={50} alt='' />
              <Image src={assets.googleplus_icon} width={50} alt='' />
            </div>
          </div>
        </div>

        <Footer />
      </>
    ) : (
      <></>
    )
  );
};

export default Page;
