import React from "react";

export default function FileSelector({ register, errors, name = "image" }) {
  return (
    <div className="grid w-full items-center gap-1">
      <label className="text-sm text-[#7C859C] font-medium leading-none text-[12px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Upload School Picture
      </label>

      <input
        id="picture"
        type="file"
        accept="image/*"
        className="flex h-10 w-full rounded-lg border border-[#F2F2F2] border-input bg-white px-3 py-2 text-sm text-[#7C859C] file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
        {...(register
          ? register(name, {
              required: "Image is required",
              validate: {
                oneFile: (files) => files?.length === 1 || "Please upload only one image",
              },
              onChange: (e) => {
                const files = e.target.files;
                if (!files) {
                  console.log("No files selected");
                  return;
                }
                },
            })
          : {})}
      />

      {errors && errors[name] && (
        <p className="text-red-400 text-[12px] capitalize">{errors[name].message}</p>
      )}
    </div>
  );
}
