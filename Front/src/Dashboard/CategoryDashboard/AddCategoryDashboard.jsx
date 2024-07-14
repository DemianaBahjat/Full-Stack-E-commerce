import React, { useState } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";
import uploadImage from "../../helpers/uploadImage";

export default function AddCategoryDashboard() {
  const [uplaodImageLocal, setUploadImageLocal] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [imgCloudniry, setImgCloudniry] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  ////////////start upload image///////////
  async function handleChangeImage(e) {
    setLoadingImage(true);
    const file = e.target.files[0];
    setUploadImageLocal(e.target.files[0]);
    const upload = await uploadImage(file);
    setLoadingImage(false);
    setImgCloudniry(upload.url);
  }
  /////////////end upload image///////

  async function onSubmit(data) {
    await request
      .post("/api/categories", {
        name: data.name,
        icon: imgCloudniry,
        description: data.description,
      })
      .then((result) => {
        console.log(result);
        if (result?.data?._id) {
          toast.success("Category created successfully");
        }
      })
      .catch((error) => toast.error(error?.response?.data?.error));
  }

  return (
    <div className="w-[95%] lg:max-w-lg mx-auto mt-4 bg-[#FFF3DD] min-h-72 p-5 rounded-lg shadow-lg">
      <div>
        <HeaderTable navigateTo={"-1"} name={"back"} title={"Add Category"} />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-2 px-3 placeholder:text-[14px]"
            
            {...register("name", { required: "name is required" })}
          />
          {errors.name && (
            <small className="text-red-400">{errors.name.message}</small>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="countInStock" className="font-medium text-gray-700">Amount</label>
          <input
            type="text"
            id="countInStock"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-2 px-3 placeholder:text-[14px]"
            
            {...register("countInStock", { required: "countInStock is required" })}
          />
          {errors.countInStock && (
            <small className="text-red-400">{errors.name.message}</small>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="imagecategory" className="font-medium text-gray-700 cursor-pointer">
            Image
            <div className="border border-primaryDashboard p-2 rounded-lg mt-2 bg-white flex justify-center items-center h-[100px]">
              {uplaodImageLocal && !loadingImage ? (
                <img src={URL.createObjectURL(uplaodImageLocal)} alt="Uploaded" className="h-full" />
              ) : loadingImage ? (
                "Loading..."
              ) : (
                <span className="text-gray-500">Upload Image</span>
              )}
            </div>
          </label>
          <input
            id="imagecategory"
            type="file"
            className="hidden"
            {...register("icon", {
              required: "image is required",
            })}
            onChange={handleChangeImage}
          />
          {errors.icon && (
            <small className="text-red-400">{errors.icon.message}</small>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-medium text-gray-700">Description <span className="text-gray-400">(optional)</span></label>
          <textarea
            id="description"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-2 px-3 placeholder:text-[14px]"
            
            {...register("description")}
          />
        </div>

        <div>
          <button
            className="bg-[#FF5722] w-full mt-3 rounded-md p-2 duration-150 transition-all text-white font-semibold hover:bg-[#E64A19]"
            onClick={handleSubmit(onSubmit)}
            disabled={loadingImage}
          >
            {isSubmitting ? "Loading..." : "Add This Category"}
          </button>
        </div>
      </div>
    </div>
  );
}
