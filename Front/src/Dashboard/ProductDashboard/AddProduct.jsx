import React, { useState } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { useForm } from "react-hook-form";
import { request, urlLocal } from "../../axios/axios";
import { toast } from "react-toastify";
import { getAllCategory } from "../../api/api";
import { useQuery } from "react-query";
import axios from "axios";

export default function AddProduct() {
  const [image, setImage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  
  ////////////start upload image///////////
  function handleImg(e) {
    setImage(e.target.files[0]);
  }

  ////////////start get category/////////////
  let { data } = useQuery("allCategoryDashboard", getAllCategory);

  /////////////end upload image///////
  async function onSubmit( data ) {
    const formData = new FormData()
    formData.append( "name", data.name )
    formData.append("category", data.category);

    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("available", data.available);
    formData.append("brand", data.brand);
    formData.append("image", image);
   
    
    await axios
      .post(`${urlLocal}/api/products`,formData)
      .then((result) => {
        console.log(result);
        if (result?.data?._id) {
          toast.success("product create successfuly");
        }
      })
      .catch((error) => toast.error(error?.response?.data?.error));
  }


  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#FFF3DD] rounded-lg shadow-md">
      <HeaderTable navigateTo={"-1"} name={"back"} title={"Add product"} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium  text-gray-700">Name</label>
            <input
              type="text"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
             
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium  text-gray-700 ">Image</label>
            <input
              type="file"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
              {...register("image", { required: "Image is required" })}
              onChange={handleImg}
            />
            {errors.image && (
              <small className="text-red-500">{errors.image.message}</small>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium  text-gray-700">Description</label>
          <textarea
            className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
           
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && (
            <small className="text-red-500">{errors.description.message}</small>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium  text-gray-700" >Price (USD)</label>
            <input
              type="text"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
             
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <small className="text-red-500">{errors.price.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium  text-gray-700" >Available</label>
            <input
              type="text"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
             
              {...register("available", { required: "Availability is required" })}
            />
            {errors.available && (
              <small className="text-red-500">{errors.available.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium  text-gray-700" >Brand</label>
            <select
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
              {...register("brand", { required: "Brand is required" })}
            >
              <option value="">Choose the brand</option>
              <option value="Tornado">Tornado</option>
              <option value="Beko">Beko</option>
              <option value="Bosch">Bosch</option>
              <option value="Sonai">Sonai</option>
              <option value="Black & Decker">Black & Decker</option>
              <option value="Braun">Braun</option>
            </select>
            {errors.brand && (
              <small className="text-red-500">{errors.brand.message}</small>
            )}
          </div>
        </div>

       

     <div className="flex flex-col gap-2">
          <label htmlFor="" className="block text-sm font-medium  text-gray-700">category</label>
          <select
            name=""
            id=""
            {...register("category", {
              required: "category is required",
            })}
             className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
          >
            <option value="">choose the category</option>
            {data?.data?.map((category) => (
              <option value={category?._id}>{category?.name}</option>
            ))}
          </select>

          {errors.category && (
            <small className="text-red-400">{errors.category.message}</small>
          )}
        </div>


        <div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#FF702A] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#FF702A] hover:opacity-90"
          >
            {isSubmitting ? "Loading..." : "Add This Product"}
          </button>
        </div>
      </form>
    </div>
  );
}



