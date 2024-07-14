import React, { useEffect, useState } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {
  const { id } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  

  useEffect(() => {
    if (state?.data) {
      setValue("name", state.data.name || "");
      setValue("price", state.data.price || "");
      setValue("description", state.data.description || "");
      setValue("available", state.data.available || "");
      setValue("brand", state.data.brand || "");
    }
  }, [state, setValue]);

  async function onSubmit(data) {
   
    await request
      .patch(`/api/products/${id}`,data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        if (result?.data?._id) {
          toast.success("Product updated successfully");
          navigate("/dashboard/productdashboard");
        }
      })
      .catch((error) => toast.error(error?.response?.data?.error));
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#FFF3DD] rounded-lg shadow-md">
      <HeaderTable navigateTo={"-1"} name={"back"} title={"Update product"} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <small className="text-red-500">{errors.name.message}</small>}
          </div>


          <div className="flex flex-col gap-2">
            <input
              value={state.data.category._id}
              type="hidden"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
              placeholder="Name"
              {...register("category")}
            />
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
            placeholder="Description"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <small className="text-red-500">{errors.description.message}</small>}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
            <input
              type="text"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
              placeholder="Price"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && <small className="text-red-500">{errors.price.message}</small>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">Available</label>
            <input
              type="text"
              className="border border-[#EFCBA9] rounded-md py-2 px-3 placeholder-[#EFCBA9] bg-[#FFF6E5]"
              placeholder="Available"
              {...register("available", { required: "Availability is required" })}
            />
            {errors.available && <small className="text-red-500">{errors.available.message}</small>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
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
            {errors.brand && <small className="text-red-500">{errors.brand.message}</small>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#FF702A] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#FF702A] hover:opacity-90"
          >
            {isSubmitting ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
