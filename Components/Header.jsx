// import { assets } from '@/Assets/assets'
// import axios from 'axios';
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { toast } from 'react-toastify';

// const Header = () => {
// const [email,setEmail] = useState("");
// const onSubmitHandler = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("email",email);
//   const response = await axios.post('/api/email',formData);
//   if (response.data.success) {
//     toast.success(response.data.msg);
//     setEmail("");

//   }
//   else{
//     toast.error("Error!")
//   }
// }

//   return (
//     <div className='py-5 px-5 md:px-12 lg:px-28'>
//         <div className='flex justify-between items-center'>
//             <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
//         <button className='flex items-center gap-2 font-medium 
//         py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] '>
//             Get Started <Image src={assets.arrow} alt='' className=''/>
//         </button>
//         </div>
//         <div className='my-8 text-center'>
//             <h1 className='text-3xl sm:text-5xl font-medium'>
// Latest Blogs
//             </h1>
//             <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci eveniet tenetur animi accusamus rem atque 
//                 laudantium fugiat cupiditate voluptate, 
//                 sequi nostrum. Suscipit, quod?</p>
//                 <form onSubmit={onSubmitHandler} action="" 
//                 className='flex justify-between max-w-[500px scale-75] 
//                 sm:scale-100 mx-auto shadow-[-7px_7px_0px_#000000] mt-10 border border-black'>
// <input   onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='enter your email ' className='pl-4 outline-none'/>
// <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white '>Subscribe</button>
//                 </form>
//         </div>
//     </div>
//   )
// }

// export default Header



import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error!")
    }
  }

  return (
    <div className="py-6 px-5 md:px-12 lg:px-28 bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />

        <button
          className="
            flex items-center gap-2
            font-semibold
            py-2 px-4 sm:py-3 sm:px-6
            rounded-lg
            bg-gradient-to-r from-indigo-500 to-purple-500
            text-white
            shadow-lg
            hover:scale-105
            transition
          "
        >
          Get Started
          <Image src={assets.arrow} alt="" />
        </button>
      </div>

      {/* Center Content */}
      <div className="my-12 text-center">
        <h1
          className="
            text-3xl sm:text-5xl
            font-extrabold
            bg-gradient-to-r from-indigo-600 to-purple-600
            text-transparent bg-clip-text
          "
        >
          Latest Blogs
        </h1>

        <p className="mt-6 max-w-[740px] mx-auto text-sm sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          eveniet tenetur animi accusamus rem atque laudantium fugiat cupiditate
          voluptate, sequi nostrum. Suscipit, quod?
        </p>

        {/* Subscribe Form */}
        <form
          onSubmit={onSubmitHandler}
          className="
            flex justify-between
            max-w-[500px]
            scale-90 sm:scale-100
            mx-auto
            mt-10
            rounded-lg
            overflow-hidden
            border
            shadow-lg
            bg-white
          "
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="
              flex-1
              px-4
              outline-none
              text-sm
            "
          />

          <button
            type="submit"
            className="
              px-5 sm:px-8
              font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-500
              text-white
              hover:opacity-90
              transition
              active:scale-95
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header
