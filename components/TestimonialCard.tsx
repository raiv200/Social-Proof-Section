import Image from 'next/image'
import React from 'react'

interface TesimonialProps {
  customerName: string,
  testimonialText: string,
  imageURL: string,
}

export const TestimonialCard = ({ customerName, testimonialText, imageURL }: TesimonialProps) => {
  return (
    <div className={`w-3/4 md:w-[420px]  md:h-[240px] flex flex-col items-start md:space-x-4 bg-gradient-to-r from-[#975297] to-[#502050] mt-4 md:even:mt-16 md:last:mt-32 px-6 py-6 transition duartion-300 ease-in rounded-xl hover:shadow-md`}>
      <div className="flex space-x-5 pb-4  md:space-x-6 md:px-4 ">
        <div className="w-[50px] h-[50px] rounded-full ring-4 ring-fuchsia-400">

          <Image
            src={imageURL}
            objectFit="contain"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        <div className=" flex flex-col items-start justify-start">
          <h2 className="text-md md:text-2xl font-bold text-fuchsia-400 ">{customerName}</h2>
          <p className="text-xs md:text-md font-extralight text-gray-100 ml-1">Verified Buyer</p>
        </div>

      </div>

      <div className="text-md md:text-lg text-fuchsia-200 font-500 py-2">
        {testimonialText}
      </div>
    </div>
  )
}
