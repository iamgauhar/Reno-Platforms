import Link from 'next/link'
import React from 'react'

const CtaOption = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">

      <Link
        href="/addSchool"
        className="px-4 py-2 bg-black text-white rounded-lg text-[16px] flex items-center gap-2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3.33325V12.6666"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33398 8H12.6673"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add School
      </Link>

      <Link
        href="/showSchools"
        className="px-4 py-2 bg-black text-white rounded-lg text-[16px] flex items-center gap-2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Show Schools
      </Link>

    </div>
  )
}

export default CtaOption
