"use client"
import FileSelector from '@/components/FileSelector'
import FloatingLabelInput from '@/components/FloatingLabelInput'
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Loader = () => {
    return (
        <div
            class="w-7 h-7 border-4 border-t-blue-500 border-white rounded-full animate-spin"
        ></div>
    )
}

const page = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            if (!data.image || data.image.length === 0) {
                alert("Please select an image");
                return;
            }

            // Upload image file
            const fd = new FormData();
            fd.append("file", data.image[0]);

            const uploadRes = await fetch("/api/upload", {
                method: "POST",
                body: fd,
            });

            if (!uploadRes.ok) {
                const txt = await uploadRes.text();
                throw new Error("Image upload failed: " + txt);
            }

            const uploadJson = await uploadRes.json();
            const filename = uploadJson.filename;
            if (!filename) throw new Error("Upload did not return filename");

            const payload = {
                name: data.name || "",
                address: data.address || "",
                city: data.city || "",
                state: data.state || "",
                contact: data.phone || "",
                image: filename,
                email_id: data.email || "",
            };

            const addRes = await fetch("/api/schools", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!addRes.ok) {
                const txt = await addRes.text();
                throw new Error("Saving school failed: " + txt);
            }

            toast.success("School added successfully!");
            setLoading(false)
            reset();
        } catch (err) {
            setLoading(false)
            toast.error(err.message || "Something went wrong");
        }
    };


    return (
        <div className='flex items-center justify-center min-h-screen p-4 relative'>
            <div className='w-[500px] rounded-[40px] border border-[#EBECF0] shadow-[0px_4px_35px_0px_#0000000F] p-5 md:p-10'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-4'>
                        <div className='font-normal text-[36px] text-[#25335A] leading-[130%] text-center'>Add School Details</div>
                        <FloatingLabelInput placeholder={"Name*"} name={"name"} register={register} errors={errors} />
                        <FloatingLabelInput placeholder={"Email*"} name={"email"} register={register} errors={errors} />
                        <FloatingLabelInput placeholder={"Phone*"} name={"phone"} register={register} errors={errors} />
                        <FloatingLabelInput placeholder={"Address*"} name={"address"} register={register} errors={errors} />
                        <div className='grid grid-cols-2 gap-4'>
                            <FloatingLabelInput placeholder={"City*"} name={"city"} register={register} errors={errors} />
                            <FloatingLabelInput placeholder={"State*"} name={"state"} register={register} errors={errors} />
                        </div>
                        <FileSelector register={register} errors={errors} />
                        <button type='submit' disabled={loading} className='bg-blue-500 rounded-xl hover:bg-blue-600 text-white h-12 text-center text-[16px] font-medium flex justify-center items-center'>
                           {loading ? <Loader/> : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            <Link href={"/showSchools"} className='absolute top-10 right-10 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 px-2 py-1'>View Schools</Link>
        </div>
    )
}

export default page