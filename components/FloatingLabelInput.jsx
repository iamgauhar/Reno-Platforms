"use client"
import { useId, useState } from "react";

const FloatingLabelInput = ({ placeholder, value, setValue, customClasses, register, errors, name }) => {
    const inputId = useId();
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={`relative w-full ${customClasses}`}>
            <input
                type="text"
                name={name}
                id={inputId}
                value={value}
                // required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoComplete="off"
                className="peer w-full border-[1.2px] border-[#F2F2F2] rounded-lg h-[50px] md:h-[52px] px-4 font-gilroy-medium text-[16px] leading-[130%] text-[#25335A] placeholder-transparent focus:border-[#7C859C] focus:outline-none"
                onChange={(e) => setValue(e?.target?.value)}
                {...register(`${name}`, { required: true })}
            />
            {errors[name] && <p className="text-red-400 text-[12px] capitalize">{`${name} required`}</p>}
            <label
                htmlFor={inputId}
                className="cursor-text absolute bg-white left-2 top-1/2 -translate-y-1/2 px-1 font-gilroy-medium text-[14px] leading-[100%] text-[#7C859C] transition-all duration-200
  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#515C7B]
  peer-focus:-top-0 peer-focus:text-[12px] peer-focus:text-[#515C7B]
  peer-valid:-top-0 peer-valid:text-[12px] peer-valid:text-[#515C7B]"
            >
                {placeholder}
            </label>
        </div>
    )
}

export default FloatingLabelInput