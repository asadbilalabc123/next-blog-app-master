// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='flex flex-col bg-slate-100'>
// <div className='px-2 sm:pl-14 py-3 border border-black'>
//     <Image src={assets.logo} width={120 } alt="" />
// </div>
// <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
//    <div className=" w-[50%] sm:w-[80%] right-0 absolute">
//      <Link href='/admin/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
//         <Image src={assets.add_icon} width={28} alt=''/>
// <p>Add blogs</p>
// </Link>
// <Link href='/admin/blogList' className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
//         <Image src={assets.blog_icon} width={28} alt=''/>
// <p>Blog Lists</p>
// </Link>
// <Link href='/admin/subscription' className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
//         <Image src={assets.email_icon} width={28} alt=''/>
// <p>Subscriptions</p>
// </Link>
// </div>
   

// </div>
//     </div>
//   )
// }

// export default Sidebar



// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      
//       {/* Logo */}
//       <div className="px-4 sm:pl-14 py-4 border-b border-indigo-200">
//         <Image src={assets.logo} width={120} alt="" />
//       </div>

//       {/* Menu */}
//       <div className="w-28 sm:w-80 h-screen relative py-12">
//         <div className="w-[55%] sm:w-[80%] right-0 absolute flex flex-col gap-5">

//           {/* Add Blogs */}
//           <Link
//             href="/admin/addProduct"
//             className="
//               flex items-center gap-3
//               font-semibold
//               px-4 py-3
//               rounded-lg
//               bg-gradient-to-r from-indigo-500 to-purple-500
//               text-white
//               shadow-lg
//               hover:scale-105
//               transition
//             "
//           >
//             <Image src={assets.add_icon} width={26} alt="" />
//             <p>Add Blogs</p>
//           </Link>

//           {/* Blog List */}
//           <Link
//             href="/admin/blogList"
//             className="
//               flex items-center gap-3
//               font-semibold
//               px-4 py-3
//               rounded-lg
//               bg-white
//               text-indigo-700
//               border border-indigo-200
//               hover:bg-indigo-100
//               transition
//             "
//           >
//             <Image src={assets.blog_icon} width={26} alt="" />
//             <p>Blog Lists</p>
//           </Link>

//           {/* Subscriptions */}
//           <Link
//             href="/admin/subscription"
//             className="
//               flex items-center gap-3
//               font-semibold
//               px-4 py-3
//               rounded-lg
//               bg-white
//               text-purple-700
//               border border-purple-200
//               hover:bg-purple-100
//               transition
//             "
//           >
//             <Image src={assets.email_icon} width={26} alt="" />
//             <p>Subscriptions</p>
//           </Link>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar




'use client'

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  
  // Define navigation items
  const navItems = [
    {
      name: 'Add Blogs',
      path: '/admin/addProduct',
      icon: assets.add_icon,
      activeColor: 'from-indigo-500 to-purple-500',
      inactiveColor: 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-100'
    },
    {
      name: 'Blog Lists',
      path: '/admin/blogList',
      icon: assets.blog_icon,
      activeColor: 'from-green-500 to-emerald-500',
      inactiveColor: 'bg-white text-green-700 border-green-200 hover:bg-green-100'
    },
    {
      name: 'Subscriptions',
      path: '/admin/subscription',
      icon: assets.email_icon,
      activeColor: 'from-purple-500 to-pink-500',
      inactiveColor: 'bg-white text-purple-700 border-purple-200 hover:bg-purple-100'
    }
  ]

  // Check if a link is active
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      
      {/* Logo */}
      <div className="px-4 sm:pl-14 py-4 border-b border-indigo-200">
        <Image src={assets.logo} width={120} alt="Logo" />
      </div>

      {/* Menu */}
      <div className="w-28 sm:w-80 h-screen relative py-12">
        <div className="w-[55%] sm:w-[80%] right-0 absolute flex flex-col gap-5">
          
          {navItems.map((item) => {
            const active = isActive(item.path)
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  flex items-center gap-3
                  font-semibold
                  px-4 py-3
                  rounded-lg
                  border
                  transition-all
                  duration-300
                  transform
                  hover:scale-[1.02]
                  ${active 
                    ? `bg-gradient-to-r ${item.activeColor} text-white border-transparent shadow-lg` 
                    : `${item.inactiveColor} shadow-sm hover:shadow-md`
                  }
                  ${active ? 'ring-2 ring-white ring-opacity-50' : ''}
                `}
              >
                <Image 
                  src={item.icon} 
                  width={26} 
                  alt="" 
                  className={`${active ? 'brightness-0 invert' : ''}`}
                />
                <p>{item.name}</p>
                {active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            )
          })}

          {/* Dashboard Link (Optional) */}
          <Link
            href="/admin"
            className={`
              flex items-center gap-3
              font-semibold
              px-4 py-3
              rounded-lg
              border
              transition-all
              duration-300
              transform
              hover:scale-[1.02]
              ${pathname === '/admin' 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent shadow-lg' 
                : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100 shadow-sm hover:shadow-md'
              }
              ${pathname === '/admin' ? 'ring-2 ring-white ring-opacity-50' : ''}
            `}
          >
            <Image 
              src={assets.dashboard_icon || assets.add_icon} 
              width={26} 
              alt="Dashboard" 
              className={`${pathname === '/admin' ? 'brightness-0 invert' : ''}`}
            />
            <p>Dashboard</p>
            {pathname === '/admin' && (
              <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </Link>

        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-auto p-4 border-t border-indigo-200">
        <div className="text-center text-sm text-gray-600">
          <p>Blog Admin v1.0</p>
          <p className="text-xs text-gray-500 mt-1">Manage your content efficiently</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar