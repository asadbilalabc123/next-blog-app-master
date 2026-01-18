// 'use client'
// import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

// const page = () => {

// const [emails,setEmails] = useState([]);
// const fetchEmails = async () => {
//   const response= await axios.get('/api/email' );
//   setEmails(response.data.emails);

  
// }

// const deleteEmail= async (mongoId) => {
//   const response = await axios.delete('/api/email' , {
//     params:{
//       id:mongoId
//     }
//   })
//   if (response.data.success) {
//     toast.success(response.data.msg);
//     fetchEmails();
    
//   }
//   else{
//     toast.error("Error! Email can't be deleted")
//   }
// }


// useEffect(()=>{
//   fetchEmails();
// },[])

//   return (
//     <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-6  '>
//       <h1>ALL SUBSCRIPTIONS</h1>
//       <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
//         <table className='w-full text-sm text-gray-500 '>
//           <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50 '>
//             <tr>
//               <th scope='col' className='px-6 py-3 '>Email Subscription</th>
//              <th scope='col' className='px-6 py-3 hidden sm:block '>Date</th>
//              <th scope='col' className='px-6 py-3 '>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {emails.map((item , index)=>{
// return  <SubsTableItem deleteEmail={deleteEmail}  key={index} mongoId={item._id} email={item.email} date={item.date} />;  
//             })}
         
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default page



// 'use client'

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'

// const page = () => {
//   const [emails, setEmails] = useState([])

//   const fetchEmails = async () => {
//     const response = await axios.get('/api/email')
//     setEmails(response.data.emails)
//   }

//   const deleteEmail = async (mongoId) => {
//     const response = await axios.delete('/api/email', {
//       params: { id: mongoId },
//     })
//     if (response.data.success) {
//       toast.success(response.data.msg)
//       fetchEmails()
//     } else {
//       toast.error("Error! Email can't be deleted")
//     }
//   }

//   useEffect(() => {
//     fetchEmails()
//   }, [])

//   return (
//     <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-6">
//       <h1 className="text-2xl font-semibold mb-4">All Subscriptions</h1>

//       <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide rounded-lg">
//         <table className="w-full text-sm text-gray-500">
//           <thead className="bg-gray-50 text-gray-700 uppercase text-xs text-left">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Email Subscription
//               </th>
//               <th scope="col" className="px-6 py-3 hidden sm:block">
//                 Date
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {emails.map((item, index) => (
//               <tr
//                 key={index}
//                 className={`${
//                   index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
//                 } hover:bg-gray-100 transition-colors`}
//               >
//                 <SubsTableItem
//                   deleteEmail={deleteEmail}
//                   mongoId={item._id}
//                   email={item.email}
//                   date={item.date}
//                 />
//               </tr>
//             ))}
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

import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'

const page = () => {
  const [emails, setEmails] = useState([])

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/email')
      setEmails(response.data.emails || [])
    } catch (error) {
      console.error('Failed to fetch emails:', error)
      toast.error('Failed to load subscriptions')
    }
  }

  const deleteEmail = async (mongoId) => {
    try {
      const response = await axios.delete('/api/email', {
        params: { id: mongoId },
      })
      toast.success(response.data.msg || 'Email deleted successfully')
      fetchEmails()
    } catch (error) {
      console.error('Failed to delete email:', error)
      toast.error("Error! Email can't be deleted")
    }
  }

  useEffect(() => {
    fetchEmails()
  }, [])

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-6">
      <h1 className="text-2xl font-semibold mb-4">All Subscriptions</h1>

      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide rounded-lg">
        <table className="w-full text-sm text-gray-500">
          <thead className="bg-gray-50 text-gray-700 uppercase text-xs text-left">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="px-6 py-3 hidden sm:block">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              // NO WRAPPING <tr> HERE!
              <SubsTableItem
                key={item._id || index}
                deleteEmail={deleteEmail}
                mongoId={item._id}
                email={item.email}
                date={item.date}
                index={index} // Pass index for alternating colors
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page