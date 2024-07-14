import React from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";

export default function AddUserDashboard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");
  
  async function onSubmit(data) {
    await request.post("/api/users/register", data)
      .then((result) => {
        if (result?.data?.data?.User?._id) {
          toast.success('User created successfully');
        }
      }).catch((error) => toast.error(error?.response?.data?.error));
  }

  return (
    <div className="w-[95%] lg:max-w-4xl mx-auto mt-4 bg-[#FFF3DD] p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <HeaderTable navigateTo={"-1"} name={"back"} title={"User / Add New User"} />
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
            <label htmlFor="building" className="block text-sm font-medium text-gray-700">Building Name / no.</label>
            <input
              id="building"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
             
              {...register("building", { required: "Building is required" })}
            />
            {errors.building && (
              <p className="mt-2 text-sm text-red-600">{errors.building.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Nearest landmark</label>
            <input
              id="landmark"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              
              {...register("landmark", { required: "Landmark is required" })}
            />
            {errors.landmark && (
              <p className="mt-2 text-sm text-red-600">{errors.landmark.message}</p>
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
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input
              id="postalCode"
              type="text"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              
              {...register("postalCode", {
                required: "Postal Code is required",
              })}
            />
            {errors.postalCode && (
              <p className="mt-2 text-sm text-red-600">{errors.postalCode.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Repeat Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
              
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
                {...register("role", {
                  required: "Role is required",
                })}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                id="country"
                type="text"
                className="mt-1 block w-full border border-[#F7A072] bg-[#FFFCFA] text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-[#F7A072] focus:border-[#F7A072]"
                
                {...register("country", {
                  required: "Country is required",
                })}
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
              {isSubmitting ? "Loading..." : "Add This User"}
            </button>
          </div>
        </form>
      </div>
    );
  }
  