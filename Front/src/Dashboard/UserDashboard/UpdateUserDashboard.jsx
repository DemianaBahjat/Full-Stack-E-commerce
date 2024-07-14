import React, { useEffect } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function UpdateUserDashboard() {
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
      setValue("email", state.data.email || "");
      setValue("phone", state.data.phone || "");
      setValue("postalCode", state.data.postalCode || "");
      setValue("street", state.data.street || "");
      setValue("city", state.data.city || "");
      setValue("country", state.data.country || "");
    }
  }, [state, setValue]);

  async function onSubmit(data) {
    await request
      .patch(`/api/users/${id}`, data)
      .then((result) => {
        if (result?.data?._id) {
          toast.success("User updated successfully");
          navigate("/dashboard/userdashboard");
        }
      })
      .catch((error) => toast.error(error?.response?.data?.error));
  }

  return (
    <div className="w-[95%] lg:max-w-4xl mx-auto mt-4 bg-[#FFF3DD] p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <HeaderTable navigateTo={"-1"} name={"back"} title={"User / Update User"} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name (First and Last name)</label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("phone", {
                required: "Phone is required",
                minLength: {
                  value: 10,
                  message: "Phone must be at least 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City / Area</label>
            <input
              id="city"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="mt-2 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Name</label>
            <input
              id="street"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("street", { required: "Street is required" })}
            />
            {errors.street && (
              <p className="mt-2 text-sm text-red-600">{errors.street.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input
              id="postalCode"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("postalCode", { required: "Postal Code is required" })}
            />
            {errors.postalCode && (
              <p className="mt-2 text-sm text-red-600">{errors.postalCode.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              id="country"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && (
              <p className="mt-2 text-sm text-red-600">{errors.country.message}</p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-6 w-full bg-[#F7A072] text-white font-bold py-3 rounded-md shadow-md hover:bg-[#f59354] transition duration-300"
          >
            {isSubmitting ? "Loading..." : "Update User"}
          </button>
        </div>
      </form>
    </div>
  );
}
