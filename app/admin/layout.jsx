// import { assets } from "@/Assets/assets"
// import Sidebar from "@/Components/AdminComponents/Sidebar"
// import Image from "next/image"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// export default function Layout({children}){
// return (
// <>
// <div className="flex">  
//   <ToastContainer theme="dark"/>
//       <Sidebar/>
//     <div className=" flex flex-col w-full">
//          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-black ">
//             <h3 className="font-medium">Admin Panel</h3>
//             <Image src={assets.profile_icon} alt="" width={40}/>
//          </div>
//        {children} 
//         </div>
   

// </div>

// </>
// )
// }



// import { assets } from "@/Assets/assets"
// import Sidebar from "@/Components/AdminComponents/Sidebar"
// import Image from "next/image"
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// export default function Layout({ children }) {
//   return (
//     <>
//       <div className="flex min-h-screen">
//         {/* Toast Notifications */}
//         <ToastContainer theme="dark" />

//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <div className="flex flex-col w-full">
//           {/* Header */}
//           <div className="flex items-center justify-between w-full py-3 px-12 border-b border-black max-h-[60px]">
//             <h3 className="font-medium text-lg">Admin Panel</h3>
//             <Image src={assets.profile_icon} alt="Profile Icon" width={40} height={40} />
//           </div>

//           {/* Page Content */}
//           <div className="flex-1">
//             {children}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


'use client'

import { assets } from "@/Assets/assets"
import Sidebar from "@/Components/AdminComponents/Sidebar"
import Image from "next/image"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Toast Notifications */}
        <ToastContainer 
          theme="dark" 
          position="top-right"
          autoClose={3000}
        />

        {/* Sidebar */}
        <Sidebar activePath={pathname} />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          {/* Header */}
          <header className="sticky top-0 z-10 flex items-center justify-between w-full py-3 px-8 bg-white border-b border-gray-200 shadow-sm">
            <div>
              <h3 className="font-bold text-xl text-gray-800">Admin Dashboard</h3>
              <p className="text-sm text-gray-500">Manage your blog content</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">Admin User</p>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
              <Image 
                src={assets.profile_icon} 
                alt="Profile Icon" 
                width={45} 
                height={45}
                className="rounded-full border-2 border-indigo-300"
              />
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}