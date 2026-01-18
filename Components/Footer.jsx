// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='flex flex-col justify-around items-center 
//     gap-2 sm:gap-0 sm:flex-row bg-black py-5'>
// <Image src={assets.logo_light} alt='' width={120}/>
// <p className='text-sm text-white'>All Rights Reserved. Copywrite @blogger</p>
//     <div className="flex">
//         <Image src={assets.facebook_icon} width={40} alt=''/>
//         <Image src={assets.twitter_icon} width={40} alt=''/>
//         <Image src={assets.googleplus_icon} width={40} alt=''/>
//     </div>
//     </div>
//   )
// }

// export default Footer



import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div
      className="
        flex flex-col sm:flex-row
        justify-between items-center
        gap-4
        px-6
        py-6
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
      "
    >
      {/* Logo */}
      <Image src={assets.logo_light} alt="" width={120} />

      {/* Text */}
      <p className="text-sm text-white/90 font-medium tracking-wide text-center">
        © All Rights Reserved. Copyright @blogger
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        <div className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer">
          <Image src={assets.facebook_icon} width={20} alt="" />
        </div>
        <div className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer">
          <Image src={assets.twitter_icon} width={20} alt="" />
        </div>
        <div className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer">
          <Image src={assets.googleplus_icon} width={20} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
