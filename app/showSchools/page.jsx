"use client"
import SchoolCard from '@/components/SchoolCard'
import SchoolCardSkeleton from '@/components/SchoolCardSkeleton';
import { fetchSchools } from '@/utils/fetchSchools';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {

    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSchools()
            .then((res) => {
                setSchools(res)
                console.log(res)
            })
            .catch(err => toast.error(err.message || "Failed"))
            .finally(() => setLoading(false));
    }, []);


    return (
        <div className='relative p-4 md:p-10 w-full'>
            <Link href={"/addSchool"} className='fixed top-8 w-fit h-fit right-10 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 px-2 py-1'>Add School</Link>
            <div className='grid grid-cols-1 md:grid-cols-[350px_350px_350px] gap-5 place-content-center'>
                {
                    loading ? Array.from({ length: 3 }).map((_, i) => (
                        <SchoolCardSkeleton key={i} />
                    ))
                        :
                        schools.length > 0 && schools.map((school, i) => {
                            return <SchoolCard imageUrl={school.image} name={school.name} address={school.address} city={school.city} key={school.id} />
                        })
                }
            </div>
        </div>
    )
}

export default page