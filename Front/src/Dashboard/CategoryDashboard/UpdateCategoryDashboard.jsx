import React, { useEffect, useState } from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import uploadImage from "../../helpers/uploadImage";

export default function UpdateCategoryDashboard() {
  const { id } = useParams();
  const { state } = useLocation();
  const [imgCloudniry, setImgCloudniry] = useState(state?.data?.icon);
  const [loadingImage, setLoadingImage] = useState(false);
  const [uplaodImageLocal, setUploadImageLocal] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
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

  useEffect(() => {
    if (state?.data) {
      setValue("name", state.data.name || "");
    }
  }, [state, setValue]);

  async function onSubmit(data) {
    await request
      .patch(`/api/categories/${id}`, {
        name: data?.name,
        icon: imgCloudniry,
      })
      .then((result) => {
        if (result?.data?._id) {
          toast.success("Category updated successfully");
          navigate("/dashboard/categorydashboard");
        }
      })
      .catch((error) => toast.error(error?.response?.data?.error));
  }

  return (
    <div className="w-[95%] lg:max-w-lg mx-auto mt-4 bg-[#FFF3DD] min-h-72 p-5 rounded-lg shadow-lg">
      <div>
        <HeaderTable navigateTo={"-1"} name={"back"} title={"Update Category"} />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-2 px-3 placeholder:text-[14px]"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="text-red-400">{errors.name.message}</small>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="updateCategory" className="font-medium text-gray-700 cursor-pointer">
            Image
            <div className="border border-primaryDashboard p-2 rounded-lg mt-2 bg-white flex justify-center items-center h-[100px]">
              {uplaodImageLocal && !loadingImage ? (
                <img src={URL.createObjectURL(uplaodImageLocal)} alt="Uploaded" className="h-full" />
              ) : loadingImage ? (
                "Loading..."
              ) : (
                <span className="text-gray-500">Update Image</span>
              )}
            </div>
          </label>
          <input
            id="updateCategory"
            type="file"
            className="hidden"
            onChange={handleChangeImage}
          />
        </div>

        <div>
          <button
            className="bg-[#FF5722] w-full mt-3 rounded-md p-2 duration-150 transition-all text-white font-semibold hover:bg-[#E64A19]"
            onClick={handleSubmit(onSubmit)}
            disabled={loadingImage}
          >
            {isSubmitting ? "Loading..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
